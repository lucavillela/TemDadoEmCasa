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

const multiDiceArea = document.getElementById("multiDiceArea");
const rollAllBtn = document.getElementById("rollAllBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const selectorButtons = document.querySelectorAll(".selector-btn");
const sumValue = document.getElementById("sumValue");

let diceCounter = 0;
const MAX_DICE = 10;

selectorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sides = parseInt(btn.dataset.sides);
    addDice(sides);
  });
});

function addDice(sides) {
  const currentDice = multiDiceArea.querySelectorAll(".multi-die").length;

  if (currentDice >= MAX_DICE) {
    alert(`Máximo de ${MAX_DICE} dados atingido!`);
    return;
  }

  const emptyMsg = multiDiceArea.querySelector(".empty-message");
  if (emptyMsg) {
    emptyMsg.remove();
  }

  const diceId = `multi-dice-${diceCounter++}`;
  const diceElement = document.createElement("div");
  diceElement.className = "multi-die";
  diceElement.id = diceId;
  diceElement.dataset.sides = sides;
  diceElement.dataset.value = "0";

  diceElement.innerHTML = `
    <button class="remove-btn" onclick="removeDice('${diceId}')"> x </button>
    <img src="imagens/d${sides}.png" alt="d${sides}" />
    <div class="die-number">?</div>
    <div class="die-label">d${sides}</div>
  `;

  multiDiceArea.appendChild(diceElement);
  updateSum();
}

function removeDice(diceId) {
  const dice = document.getElementById(diceId);
  dice.style.animation = "diceAppear 0.3s ease-in-out reverse";

  setTimeout(() => {
    dice.remove();

    const remainingDice = multiDiceArea.querySelectorAll(".multi-die").length;
    if (remainingDice === 0) {
      multiDiceArea.innerHTML =
        '<p class="empty-message">Clique nos botões acima para adicionar dados (máximo 10)</p>';
    }
    updateSum();
  }, 300);
}

rollAllBtn.addEventListener("click", async () => {
  const allDice = multiDiceArea.querySelectorAll(".multi-die");

  if (allDice.length === 0) {
    return;
  }

  allDice.forEach((dice) => {
    const numberEl = dice.querySelector(".die-number");
    numberEl.textContent = "?";
    dice.classList.add("rolling");
    dice.dataset.value = "0";
  });

  updateSum();
  await sleep(0.6);

  allDice.forEach((dice) => {
    const sides = parseInt(dice.dataset.sides);
    const numberEl = dice.querySelector(".die-number");
    const result = Math.floor(Math.random() * sides + 1);
    numberEl.textContent = result;
    dice.dataset.value = result;

    setTimeout(() => {
      dice.classList.remove("rolling");
    }, 2000);
  });

  updateSum();
});

clearAllBtn.addEventListener("click", () => {
  const allDice = multiDiceArea.querySelectorAll(".multi-die");

  if (allDice.length === 0) {
    return;
  }

  allDice.forEach((dice) => {
    dice.style.animation = "diceAppear 0.3s ease-in-out reverse";
  });

  setTimeout(() => {
    multiDiceArea.innerHTML =
      '<p class="empty-message">Clique nos botões acima para adicionar dados (máximo 10)</p>';
    updateSum();
  }, 300);
});

function updateSum() {
  const allDice = multiDiceArea.querySelectorAll(".multi-die");
  let total = 0;

  allDice.forEach((dice) => {
    const value = parseInt(dice.dataset.value) || 0;
    total += value;
  });

  sumValue.textContent = total;
}
