// global function to Genrate random number
const getRandomNumber = (min, max) => {
  let number = Math.random() * (max - min + 1) + min;
  if (String(number).substr(0, 1) === "0") {
    return min;
  }
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }

  return number;
};

// global function to set the message color
const setMessageTextColor = (element, flag) => {
  if (flag) {
    element.style.color = "#40c057";
  } else {
    element.style.color = "#e03131";
  }
};

// #1.1: 7 Boom with Primse then and catch

const maxNumberInput = document.querySelector("#sevenBoom__maxNumber");
const minNumberInput = document.querySelector("#sevenBoom__minNumber");
const firstSevenBoomButton = document.querySelector(
  ".sevenBoom__getRandomNumber"
);
const firstSevenBoomResultText = document.querySelector(
  ".sevenBoom__timeoutResult"
);

firstSevenBoomButton.addEventListener("click", () => {
  let max = Number(maxNumberInput.value),
    min = Number(minNumberInput.value);
  firstSevenBoomResultText.innerHTML = "";

  generate7BoomAfterDelayAsync(min, max)
    .then((num) => {
      firstSevenBoomResultText.innerHTML = `Greate ${num} is 7 Boom! 🍾 `;
      setMessageTextColor(firstSevenBoomResultText, 1);
    })
    .catch(() => {
      firstSevenBoomResultText.innerHTML =
        "May be next time you will get Boom 😟";
      setMessageTextColor(firstSevenBoomResultText, 0);
    });
});

const generate7BoomAfterDelayAsync = (minimum, maximum) => {
  const sevenBoomPromise = new Promise((resolve, reject) => {
    let randomNumberForSevenBoom;

    setTimeout(() => {
      randomNumberForSevenBoom = getRandomNumber(minimum, maximum);

      if (
        randomNumberForSevenBoom % 7 === 0 ||
        randomNumberForSevenBoom / 10 === 7
      ) {
        resolve(randomNumberForSevenBoom);
      } else {
        reject();
      }
    }, 1000);
  });
  return sevenBoomPromise;
};

// #1.2: 7 Boom with Primse await

const awaitMaxNumberInput = document.querySelector(
  "#sevenBoom__maxNumberAwait"
);
const awaitMinNumberInput = document.querySelector(
  "#sevenBoom__minNumberAwait"
);
const awaitSevenBoomButton = document.querySelector(
  ".sevenBoom__getRandomNumberAwait"
);
const awaitSevenBoomResultText = document.querySelector(
  ".sevenBoom__awaitResult"
);

awaitSevenBoomButton.addEventListener("click", () => {
  let max = Number(awaitMaxNumberInput.value),
    min = Number(awaitMinNumberInput.value);
  awaitSevenBoomResultText.innerHTML = "";

  generate7BoomAfterDelayAsyncAwait(min, max)
    .then((num) => {
      awaitSevenBoomResultText.innerHTML = `Greate ${num} is 7 Boom! 🍾 `;
      setMessageTextColor(awaitSevenBoomResultText, 1);
    })
    .catch(() => {
      awaitSevenBoomResultText.innerHTML =
        "May be next time you will get Boom 😟";
      setMessageTextColor(awaitSevenBoomResultText, 0);
    });
});

async function generate7BoomAfterDelayAsyncAwait(minimum, maximum) {
  const sevenBoomPromise = await generate7BoomAfterDelayAsync(minimum, maximum);
  return sevenBoomPromise;
}

// 2.1: get random number and check if it's prime or not

const primeInputs = document.querySelectorAll(".prime__timeoutInput");
const primeTimeoutButton = document.querySelector(".prime__getRandomNumber");
const primetimeoutResult = document.querySelector(".prime__timeoutResult");

primeTimeoutButton.addEventListener("click", () => {
  let primeMax, primeMin;
  for (element of primeInputs) {
    if (String(element.id).includes("max")) {
      primeMax = Number(element.value);
    } else if (String(element.id).includes("min")) {
      primeMin = Number(element.value);
    }
  }
  primetimeoutResult.innerHTML = "";
  generatePrimeNumberAfterDelayAsync(primeMin, primeMax)
    .then((number) => {
      primetimeoutResult.innerHTML = `This number ${number} is a prime number`;
      setMessageTextColor(primetimeoutResult, 1);
    })
    .catch((number) => {
      primetimeoutResult.innerHTML = `This number ${number} is not a prime number`;
      setMessageTextColor(primetimeoutResult, 0);
    });
});

const generatePrimeNumberAfterDelayAsync = (minValue, maxValue) => {
  const primeTimeoutPromise = new Promise((resolve, reject) => {
    let primeRandomNumber, isPrime;
    setTimeout(() => {
      primeRandomNumber = getRandomNumber(minValue, maxValue);
      isPrime = checkPrimeNumber(primeRandomNumber);
      if (isPrime) {
        resolve(primeRandomNumber);
      } else {
        reject(primeRandomNumber);
      }
    }, 1000);
  });
  return primeTimeoutPromise;
};

// #2.2: get random number and check if it's prime or not with async await function

const primeInputsAwait = document.querySelectorAll(".prime__awaitInput");
const primeAwaitButton = document.querySelector(".prime__getRandomNumberAwait");
const primeAwaitResult = document.querySelector(".prime__awaitResult");

primeAwaitButton.addEventListener("click", () => {
  let primeMaxAwait, primeMinAwait;
  primeAwaitResult.innerHTML = "";
  for (element of primeInputsAwait) {
    if (String(element.id).includes("max")) {
      primeMaxAwait = Number(element.value);
    } else if (String(element.id).includes("min")) {
      primeMinAwait = Number(element.value);
    }
  }
  generatePrimeNumberAfterDelayAsyncAwait(primeMinAwait, primeMaxAwait)
    .then((number) => {
      primeAwaitResult.innerHTML = `This number ${number} is a prime number`;
      setMessageTextColor(primeAwaitResult, 1);
    })
    .catch((number) => {
      primeAwaitResult.innerHTML = `This number ${number} is not a prime number`;
      setMessageTextColor(primeAwaitResult, 0);
    });
});

const checkPrimeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};

async function generatePrimeNumberAfterDelayAsyncAwait(minValue, maxValue) {
  const primeAwaitPromise = await generatePrimeNumberAfterDelayAsync(
    minValue,
    maxValue
  );
  return primeAwaitPromise;
}

// #3.1: get cute random animal with timeout

const animalTimeoutButton = document.querySelector(".animal__getAnimalTimeout");
const animaltimeoutResult = document.querySelector(".animal__timeoutResult");
let animalArray = [
  "חתלתול",
  "כלבלב",
  "ארנבון",
  "תוכון",
  "עקרב",
  "עכביש",
  "ג'וק",
];

animalTimeoutButton.addEventListener("click", () => {
  animaltimeoutResult.innerHTML = "";
  generateCuteAnimalAfterDelayAsync()
    .then((animal) => {
      animaltimeoutResult.innerHTML = `Yay ${animal} is your new cute animal! 🎊😸`;
      setMessageTextColor(animaltimeoutResult, 1);
    })
    .catch((animal) => {
      animaltimeoutResult.innerHTML = `Oh no! ${animal} is not cute animal at all! 💔😞`;
      setMessageTextColor(animaltimeoutResult, 0);
    });
});

const generateCuteAnimalAfterDelayAsync = () => {
  let index = getRandomNumber(0, animalArray.length - 1);
  const animalPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (animalArray[index]) {
        case "חתלתול":
          resolve(animalArray[index]);
          break;
        case "כלבלב":
          resolve(animalArray[index]);
          break;
        case "ארנבון":
          resolve(animalArray[index]);
          break;
        case "תוכון":
          resolve(animalArray[index]);
          break;
        case "עקרב":
          reject(animalArray[index]);
          break;
        case "עכביש":
          reject(animalArray[index]);
          break;
        case "ג'וק":
          reject(animalArray[index]);
          break;
      }
    }, 1000);
  });
  return animalPromise;
};

// #3.2: get cute random animal with await

const animalAwaitButton = document.querySelector(".animal__getAnimalAwait");
const animalAwaitResult = document.querySelector(".animal__awaitResult");

animalAwaitButton.addEventListener("click", () => {
  animalAwaitResult.innerHTML = "";
  generateCuteAnimalAfterDelayAsyncAwait()
    .then((animal) => {
      animalAwaitResult.innerHTML = `Yay ${animal} is your new cute animal! 🎊😸`;
      setMessageTextColor(animalAwaitResult, 1);
    })
    .catch((animal) => {
      animalAwaitResult.innerHTML = `Oh no! ${animal} is not cute animal at all! 💔😞`;
      setMessageTextColor(animalAwaitResult, 0);
    });
});

async function generateCuteAnimalAfterDelayAsyncAwait() {
  let result = await generateCuteAnimalAfterDelayAsync();
  return result;
}
