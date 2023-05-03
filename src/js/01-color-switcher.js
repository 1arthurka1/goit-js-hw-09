let intervalId = null;

const refs = {
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.btnStopEl.setAttribute('disabled', true);
refs.btnStartEl.addEventListener('click', onBtnStartChangeColor);
refs.btnStopEl.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
    refs.btnStartEl.setAttribute('disabled', true);
    refs.btnStopEl.removeAttribute('disabled');
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function onBtnStopChangeColor() {
    refs.btnStartEl.removeAttribute('disabled');
    refs.btnStopEl.setAttribute('disabled', true);
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}