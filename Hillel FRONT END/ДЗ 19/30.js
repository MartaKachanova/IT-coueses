let userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};
const bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

function getMoney(userData, bankData) {
  return new Promise(function (resolve, reject) {
    const result = confirm("Посмотреть баланс на карте?")
      ? resolve(userData)
      : reject({ userData: userData, bankData: bankData });
  });
}

const promise = getMoney({ userData, bankData });
let currency;
const userMoney = Object.keys(userData);

promise.then(
  () => {
    do {
      currency = prompt(
        `Введите название валюты в формате: ${userMoney.join(", ")}`,
        userMoney[0]
      ).toUpperCase();
    } while (!userMoney.find((value) => value === currency));

    console.log(`Баланс составляет ${userData[currency]} ${currency}`);
  },

  promise.catch(() => {
    const userMoney = [
      ...Object.keys(userData)?.filter(
        (item) => bankData[item] && bankData[item.max > 0]
      ),
    ];
    do {
      const userMoney = Object.keys(userData);
      currency = prompt(
        `Введите название валюты в формате: ${userMoney.join(", ")}`,
        userMoney[0]
      ).toUpperCase();

      takeoutMoney(userData[currency], bankData[currency], currency);
      break;
    } while (!userMoney.find((value) => value === currency));
  })
);

promise.finally(() => {
  console.log("Спасибо, хорошего дня 😊");
});

function takeoutMoney(balance, info = {}, currency) {
  const sum = prompt("Введите суму");

  sum > balance || sum > info.max
    ? console.log(
        `Введенная сумма больше допустимой. Максимальная сумма снятия: ${balance} ${currency}`
      )
    : sum < info.min
    ? console.log(
        `Введенная сумма меньше допустимой. Минимальная сумма снятия: ${info.min} ${currency}`
      )
    : console.log(`Вот Ваши денежки ${sum} ${currency} ${info.img}`);
}
