let tg = window.Telegram.WebApp;

const { first_name, last_name, username } = tg.initDataUnsafe.user;
const userPlatform = tg.platform;

let usernameSpan = document.getElementById("telegram-name");
if (usernameSpan) usernameSpan.innerText = `@${username}`;


var appleLink = "";
if (userPlatform == "macos") {
    appleLink = "https://apps.apple.com/ru/app/outline-secure-internet-access/id1356178125";
} else {
    appleLink = "https://apps.apple.com/ru/app/outline-app/id1356177741";
}

// Set Apple download link
let appleLinkButton = document.getElementById("apple-link");
if (appleLinkButton) appleLinkButton.href = appleLink;


// Set default colorTheme values on initial page load
function loadColorThemeValues() {
    var buttonLoadColor = "";
    if (tg.colorScheme == "light") {
        buttonLoadColor = "#E7F1FE";
    } else {
        buttonLoadColor = "#19191A";
    }

    let buttonLoad = document.getElementsByClassName("button-load");
    if (buttonLoad) {
        for (i in buttonLoad.length) {
            buttonLoad[i].style.backgroundColor = buttonLoadColor;
        }
    }
}
loadColorThemeValues();

// Set color for app load button
tg.onEvent('themeChanged', loadColorThemeValues());