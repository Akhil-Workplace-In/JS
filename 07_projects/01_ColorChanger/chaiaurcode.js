const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    console.log(color);
    body.style.backgroundColor = `${color}`;
    //if, else can also be used and switch()    
  });
});
