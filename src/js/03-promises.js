const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  const amount = +event.target.elements.amount.value;

  createPromises(amount, delay, step);
});

function createPromise(position, delay, shouldResolve = Math.random() > 0.3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(amount, delay, step) {
  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;
    const promise = createPromise(position, currentDelay);
    promises.push(promise);
  }

  Promise.allSettled(promises)
    .then(results => {
      results.forEach(({ status, value, reason }) => {
        if (status === 'fulfilled') {
          console.log(`✅ Fulfilled promise ${value.position} in ${value.delay}ms`);
        } else {
          console.log(`❌ Rejected promise ${reason.position} in ${reason.delay}ms`);
        }
      });
    });
}
