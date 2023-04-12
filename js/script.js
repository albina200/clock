let time = new Date();
let H = time.getHours().toString();
let M = time.getMinutes().toString();
let S = time.getSeconds().toString();
let reminderPointer = document.querySelector('.box__reminder-pointer');
let alaramArrow = document.querySelector('.box__alarm-arrow');
let body = document.querySelector('body');
let tablo = document.querySelector('.box__electron-tablo');
let buttonMenu = document.querySelector('.menu__open-clous');
let menu = document.querySelector('.menu');

let alarm = document.querySelector('.alarm');
let inputAlarm = document.querySelector('.alarm__input');
let iconReminder = document.querySelector('.icon_reminder');
let inputReminder = document.querySelector('.reminder__input');

let audioAlarm = document.querySelector('#audioAlarm');
let audioReminder = document.querySelector('#audioReminder');

let startSecDeg = S * 6;
let endSecDeg = startSecDeg + 360;
body.style.setProperty('--startSecDeg', startSecDeg + 'deg');
body.style.setProperty('--endSecDeg', endSecDeg + 'deg');

let startMinDeg = M * 6 + S * 0.1;
let endMinDeg = startMinDeg + 360;
body.style.setProperty('--startMinDeg', startMinDeg + 'deg');
body.style.setProperty('--endMinDeg', endMinDeg + 'deg');

let startHourDeg = H * 30 + M * 0.5 + S * 0.00833333333;
let endHourDeg = startHourDeg + 360;
body.style.setProperty('--startHourDeg', startHourDeg + 'deg');
body.style.setProperty('--endHourDeg', endHourDeg + 'deg');

setInterval(() => {
    let time = new Date();
    let H = time.getHours().toString();
    let M = time.getMinutes().toString();
    let S = time.getSeconds().toString();

    if (iconReminder.classList.contains('open_icon_reminder')) {
        let timeReminder = parseInt(inputReminder.value);
        if (M == timeReminder && S == 0) {
            audioReminder.play();
            console.log('ok');
        }
    }

    if (alarm.classList.contains('open_alarm')) {
        let alarmHour = parseInt(inputAlarm.value[0] + inputAlarm.value[1]);
        let alarmMin = parseInt(inputAlarm.value[3] + inputAlarm.value[4]);
        if (H == alarmHour && M == alarmMin && S == 0){
            audioAlarm.play();
            console.log('okkk')
        }
    }
    if (H.length < 2) {
        H = '0' + H;
    }
    if (M.length < 2) {
        M = '0' + M;
    }
    if (S.length < 2) {
        S = '0' + S;
    }
    if (S % 2 == 0) {
        tablo.innerHTML = H + ':' + M + ':' + S;
    } else {
        tablo.innerHTML = H + ' ' + M + ' ' + S;
    }
}, 1000);

buttonMenu.onclick = function () {
    menu.classList.toggle('menu_open');
}

alarm.onclick = function () {
    alarm.classList.toggle('open_alarm');
    if (alarm.classList.contains('open_alarm')) {
        inputAlarm.disabled = false;
        alaramArrow.classList.add('alarm-arrow_active');
    } else {
        inputAlarm.disabled = true;
        alaramArrow.classList.remove('alarm-arrow_active');
    }
}

inputAlarm.onchange = function () {
    let alarmHour = parseInt(inputAlarm.value[0] + inputAlarm.value[1]);
    let alarmMin = parseInt(inputAlarm.value[3] + inputAlarm.value[4]);
    let alarmDeg = (alarmHour * 30) + (alarmMin * 0.5);
    body.style.setProperty('--alarmDeg', alarmDeg + 'deg');

    console.log(alarmDeg);
}

iconReminder.onclick = function () {
    iconReminder.classList.toggle('open_icon_reminder');
    if (iconReminder.classList.contains('open_icon_reminder')) {
        inputReminder.disabled = false;
        reminderPointer.classList.add('reminder-pointer_active');
    } else {
        inputReminder.disabled = true;
        reminderPointer.classList.remove('reminder-pointer_active');
    }
}

inputReminder.oninput = function () {
    let reminderDeg = parseInt(inputReminder.value) * 6;
    body.style.setProperty('--ReminderDeg', reminderDeg + 'deg');

    console.log(reminderDeg);
}