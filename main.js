const sequence = [];
const userSequence = [];
const buttons = Array.from(document.getElementsByTagName("button"));

const getRandomArbitraty = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const reproduceSequence = () => {
  buttons.forEach((button) => {
    const randomNum = getRandomArbitraty(25, 1);
    console.log(buttons.getElementById(button));

    console.log(randomNum);
  });
};

reproduceSequence();
