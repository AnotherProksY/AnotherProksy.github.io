from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
from dotenv import load_dotenv
from os import getenv

load_dotenv()
TOKEN = getenv('TELEGRAM_BOT_TOKEN')

bot = Bot(TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('Открыть веб страницу', web_app=WebAppInfo(url='https://anotherproksy.github.io')))
    await message.answer('Привет, мой друг!', reply_markup=markup)


executor.start_polling(dp)
