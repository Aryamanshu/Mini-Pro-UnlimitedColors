// generate a random color first // very useful 

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16 + 1)];
    }
    return color;
  };
  
  // console.log(randomColor());
  // working fine
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {  // good check
      intervalId = setInterval(changbgColor, 1000);
    }
  
    function changbgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;  // saves memory
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  