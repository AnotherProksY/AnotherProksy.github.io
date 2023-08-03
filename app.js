let tg = window.Telegram.WebApp;

// tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn = document.getElementById("install");

btn.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар!");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});

const { first_name, last_name, username } =
    window.Telegram.WebApp.initDataUnsafe.user;

let username = document.getElementById("telegram-name");

username.innerText = `@${username}`;
