const diceConfig = {
  4: { sides: 4, button: "#botao4", image: "#dado4", number: "#numero4" },
  6: { sides: 6, button: "#botao6", image: "#dado6", number: "#numero6" },
  8: { sides: 8, button: "#botao8", image: "#dado8", number: "#numero8" },
  10: { sides: 10, button: "#botao10", image: "#dado10", number: "#numero10" },
  12: { sides: 12, button: "#botao12", image: "#dado12", number: "#numero12" },
  20: { sides: 20, button: "#botao20", image: "#dado20", number: "#numero20" },
};

Object.values(diceConfig).forEach((config) => {
  const button = document.querySelector(config.button);
  button.addEventListener("click", () => restartAnimation(config));
  button.addEventListener("click", () => rollDice(config));
});

async function rollDice(config) {
  const numberElement = document.querySelector(config.number);
  numberElement.textContent = "?";
  await sleep(0.6);
  numberElement.textContent = Math.floor(Math.random() * config.sides + 1);
}

function restartAnimation(config) {
  const image = document.querySelector(`${config.image} img`);
  const number = document.querySelector(config.number);

  image.style.animationName = "none";
  number.style.animationName = "none";

  requestAnimationFrame(() => {
    image.style.animationName = "";
    number.style.animationName = "";
  });
}

const percentButton = document.querySelector("#botaozao");
percentButton.addEventListener("click", restartAnimationPercent);
percentButton.addEventListener("click", rollPercent);

async function rollPercent() {
  document.querySelector("#numero10z").textContent = "?";
  document.querySelector("#numero100").textContent = "?";
  await sleep(0.6);
  document.querySelector("#numero10z").textContent = Math.floor(
    Math.random() * 10
  );
  const tens = ["00", "10", "20", "30", "40", "50", "60", "70", "80", "90"];
  document.querySelector("#numero100").textContent =
    tens[Math.floor(Math.random() * tens.length)];
}

function restartAnimationPercent() {
  const elements = [
    document.querySelector("#dado10z img"),
    document.querySelector("#numero10z"),
    document.querySelector("#dado100 img"),
    document.querySelector("#numero100"),
  ];

  elements.forEach((el) => (el.style.animationName = "none"));

  requestAnimationFrame(() => {
    elements.forEach((el) => (el.style.animationName = ""));
  });
}

async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
