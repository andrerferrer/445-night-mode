// 1. Select the button
const btn = document.querySelector('.btn');
// 2. Add event listener

// btn.addEventListener('EVENT ITSELF', BEHAVIOR / WHAT TO DO);
// BEHAVIOR is AKA.: callback function
btn.addEventListener('click', (event) => {
  // console.log(event)
  // event is the click itself

  // console.log(event.currentTarget)
  // event.currentTarget is the element in which the event is happening
  
  // 3. when the event happens:
  // 3.1 change the inner text of the button
  // btn OR event.currentTarget
  if (btn.innerText === 'dark mode') {
    event.currentTarget.innerText = "bright mode";
  } else {
    event.currentTarget.innerText = "dark mode";
  }

  // 3.2 change the background color of the body (maybe use a class?)
  const body = document.querySelector('body');
  body.classList.toggle('bg-dark');
});
