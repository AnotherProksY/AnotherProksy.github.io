let tg = window.Telegram.WebApp;

const { first_name, last_name, username } = tg.initDataUnsafe.user;
const userPlatform = tg.platform;

let usernameSpan = document.getElementById("telegram-name");
if (usernameSpan) usernameSpan.innerText = `@${username}`;

var appleLink = "";
if (userPlatform == "macos") {
    appleLink = "https://apps.apple.com/ru/app/outline-secure-internet-access/id1356178125"
} else {
    appleLink = "https://apps.apple.com/ru/app/outline-app/id1356177741"
}

// Set Apple download link
let appleLinkButton = document.getElementById("apple-link");
if (appleLinkButton) appleLinkButton.href = appleLink;
