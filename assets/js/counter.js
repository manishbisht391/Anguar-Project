 // Function to increase the count from 1 to 100 every 1.4 seconds
 function increaseCount() {
    let count = 1;
    const counterElement = document.getElementById('count-1');

    const intervalId = setInterval(() => {
      counterElement.textContent = count;

      if (count === 45) {
        clearInterval(intervalId); // Stop the interval when count reaches 100
      } else {
        count++;
      }
    }, 50);
  }

   

  function increaseCount2() {
    let count = 1;
    const counterElement = document.getElementById('count-2');

    const intervalId2 = setInterval(() => {
      counterElement.textContent = count;

      if (count === 32) {
        clearInterval(intervalId2); // Stop the interval when count reaches 100
      } else {
        count++;
      }
    }, 50);
  }

  function increaseCount3() {
    let count = 1;
    const counterElement = document.getElementById('count-3');

    const intervalId = setInterval(() => {
      counterElement.textContent = count;

      if (count === 354) {
        clearInterval(intervalId); // Stop the interval when count reaches 100
      } else {
        count++;
      }
    }, 10);
  }


  function increaseCount4() {
    let count = 1;
    const counterElement = document.getElementById('count-4');

    const intervalId = setInterval(() => {
      counterElement.textContent = count;

      if (count === 99) {
        clearInterval(intervalId); // Stop the interval when count reaches 100
      } else {
        count++;
      }
    }, 50);
  }

  function runOnLoad() {
    increaseCount();
    increaseCount2();
    increaseCount3();
    increaseCount4()
  }

  // Call the new function when the page is loaded
  window.onload = runOnLoad;