class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
    }

  
  start(printTimeCallback) {
    // ... your code goes here
  
    this.intervalId = setInterval(() => {
     
      if (typeof printTimeCallback === 'function') {
        printTimeCallback()
      }
        this.currentTime++;
        console.log(this.intervalId);
      },1000);

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60) 
  }

  getSeconds() {
      // ... your code goes here
      if (!this.currentTime) {
        return 0;
      } else {
      return this.currentTime % 60;
      }
      
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitValue = value.toString();
    if (twoDigitValue.length < 2) {
    return '0' + twoDigitValue;
  } 
  return twoDigitValue;
}
  

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId) 
     
    }
  

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
  
    const computeMinutes = this.computeTwoDigitNumber(minutes);
    const computeSeconds = this.computeTwoDigitNumber(seconds);
   
    const splitMinSec = `${computeMinutes}:${computeSeconds}`;

    return splitMinSec;

  }
  
}
