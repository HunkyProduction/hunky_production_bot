// const TelegramBot = require('node-telegram-bot-api');
//
// const token = '877743093:AAH7gtqRSjOgaQBU8SYXBCZAMOnY1BShlLw';
// const options = {
//   webHook: {
//     port: process.env.PORT
//   }
// };
// const bot = new TelegramBot(token, options);
//
// bot.setWebHook(`https://hunkyproductionbot.herokuapp.com/bot${token}`);
//
// bot.onText(/\/start/, (msg, match) => {
//
//   const chatId = msg.chat.id;
//   const photo1 = 'http://pr.hunkyproduction.com/imagesForBot/image1.png';
//   const photo2 = 'http://pr.hunkyproduction.com/imagesForBot/image2.png';
//   const photo3 = 'http://pr.hunkyproduction.com/imagesForBot/image3.png';
//   const textStart = 'Как и обещали, отправляем вам примеры 3 самых свежих рекламных кампаний от агентства Hunky Ads.';
//   const text1 = '1. Продвижение в сфере строительства и дизайна:\n' +
//     'Получено 79 обращений из них: \n' +
//     '9 -  заказов звонка\n' +
//     '22 - отправленные заявки\n' +
//     '48 - звонков\n';
//   const text2 = '2. Продвижение и ведение YouTube-канала:\n' +
//     'Получено 4493 подписки, 2614 добавлений в плейлисты, 5763 дополнительных просмотра,\n 4342 отметки “Мне нравится”.\n' +
//     'Цена подписки - 18.28 грн\n\nhttp://youtube.com/c/changebykravets';
//   const text3 = '3. Продвижение в сфере профессионального видеопродакшена:\n' +
//     'Получено 1341 посещение сайта и 32 конверсии. \n' +
//     'Средняя цена конверсии - 425,18 грн\n\nhttps://hunkyproduction.com/';
//
//
//   const finishText = 'Уже сегодня наш менеджер свяжется с вами, чтобы подобрать на основе нашего опыта самую прибыльную стратегию для вашего бизнеса!';
//
//   bot.sendMessage(chatId, textStart).then(function () {
//     bot.sendMessage(chatId, text1, {parse_mode: 'HTML'}).then(function() {
//       bot.sendPhoto(chatId, photo1).then(function () {
//         bot.sendMessage(chatId, text2, {parse_mode: 'HTML'}).then(function() {
//           bot.sendPhoto(chatId, photo2).then(function () {
//             bot.sendMessage(chatId, text3, {parse_mode: 'HTML'}).then(function() {
//               bot.sendPhoto(chatId, photo3).then(function () {
//                 bot.sendMessage(chatId, finishText);
//               })
//             });
//           })
//         });
//       });
//     });
//   });
// });
