import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  bodyEl: document.querySelector('body'),
  formEl: document.querySelector('form.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.bodyEl.style.backgroundColor = '#f7eff4';
refs.formEl.addEventListener('click', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();

  let valueDelay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);

  for (let i = 1; i <= amount; i++) {
    let promiseDelay = valueDelay + step * (i - 1);
    if (i === 1) {
      promiseDelay = valueDelay;
    }
    console.log(promiseDelay);
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}