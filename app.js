let tg = window.Telegram.WebApp;
tg.expand();

const { first_name, last_name, username } = tg.initDataUnsafe.user;

let usernameSpan = document.getElementById("telegram-name");
usernameSpan.innerText = `@${username}`;
