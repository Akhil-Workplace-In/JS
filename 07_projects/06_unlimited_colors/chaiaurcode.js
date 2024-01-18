// generate a random colors

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    // const randomNum = Math.floor(Math.random() * 16);
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // console.log(randomColor());
  let intervalId;
  const startChangingColor = function () {
    const changeBackgroundColor = function () {
      document.body.style.backgroundColor = randomColor();
    };
    if (!intervalId) {
      intervalId = setInterval(changeBackgroundColor, 1000);
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  console.log(intervalId);
  