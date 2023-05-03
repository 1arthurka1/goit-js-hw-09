const formRef = document.querySelector('.form');

const refs = {
   delay: formRef.elements.delay,
   step: formRef.elements.step,
   amount: formRef.elements.amount,    
}

formRef.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
  event.preventDefault();
  const delay = Number(refs.delay.value);
  let totalDelay = delay;

    for (let i = 1; i <= Number(refs.amount.value); i += 1) {
      if (i > 1) ( totalDelay += Number(refs.step.value))
  createPromise(i, totalDelay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};
}


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random();

    setTimeout (() => {
    if (shouldResolve  >  0.5) {
    resolve({position, delay});
    }
    else {
    reject({position, delay});
    }
    }, delay)
  });
  return promise;
}