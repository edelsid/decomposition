// Это все сырые данные, используемые на страничке

import icon from '../img/icon.png'
import black from '../img/black.jpg'

export const news = [{
   id: 1,
   icon: icon,
   text: 'Текст первой новости',
   link: '#',
},
{
   id: 2,
   icon: icon,
   text: 'Текст второй новости',
   link: '#',
},
{
   id: 3,
   icon: icon,
   text: 'Текст третьей новости',
   link: '#',
},
{
   id: 4,
   icon: icon,
   text: 'Текст четвертой новости',
   link: '#',
},
{
   id: 5,
   icon: icon,
   text: 'Текст пятой новости',
   link: '#',
}];

export const money = [{
   id: 1,
   name: 'USD MOEX',
   value: 63.52,
   change: '+0,09',
},
{
   id: 2,
   name: 'EUR MOEX',
   value: 70.86,
   change: '+0,14',
},
{
   id: 3,
   name: 'НЕФТЬ',
   value: 64.90,
   change: '+1,63%',
}];

export const special = {
   img: black,
   title: 'Работа над ошибками',
   text: 'Смотрите на Яндексе и запоминайте',
   link: '#',
}

export const tabs = {
   names: [
      {
         id: 1,
         title: 'Сейчас в СМИ',
         link: '#',
      },
      {
         id: 2,
         title: 'Германия',
         link: '#',
      },
      {
         id: 3,
         title: 'Рекомендуем',
         link: '#',
      },
   ],
   date: '31 июля, среда 02:32'
};

export const nav = [{
   id: 1,
   title: 'Видео',
   link: '#'
}, 
{
   id: 2,
   title: 'Картинки',
   link: '#'
},
{
   id: 3,
   title: 'Новости',
   link: '#'
},
{
   id: 4,
   title: 'Карты',
   link: '#'
},
{
   id: 5,
   title: 'Маркет',
   link: '#'
},
{
   id: 6,
   title: 'Переводчик',
   link: '#'
},
{
   id: 7,
   title: 'Эфир',
   link: '#'
},
{
   id: 8,
   title: 'еще',
   link: '#'
}];

export const examples = [
   'фаза луны сегодня',
   'рецепты с курицей',
   'книги по физике',
   'время на поспать',
   'лишние деньги',
   'кино на французском',
   'смысл жизни',
];

export const weather = {
   title: 'Погода',
   info: {
      img: black,
      temp: '-17С',
      morning: '-20',
      day: '-16',
      evening: '-21',
      link: '#',
   },
};

export const categories = {
   title: 'Посещаемое',
   feed: [
      {
         id: 1,
         name: 'Недвижимость',
         theme: 'о сталинках',
         link: '#'
      },
      {
         id: 2,
         name: 'Маркет',
         theme: 'люстры и светильники',
         link: '#'
      },
      {
         id: 3,
         name: 'Авто.ру',
         theme: 'привод 4х4 до 500000',
         link: '#'
      },
   ],
};

export const map = {
   title: 'Карта Германии',
   desc: {
      link: '#',
      text: 'Расписания',
   }
};

export const tv = {
   title: 'Телепрограмма',
   movies: [
      {
         id: 1,
         time: '02:00',
         name: 'ТНТ. Best',
         channel: 'ТНТ International',
         link: '#',
      },
      {
         id: 2,
         time: '02:15',
         name: 'Джинглики',
         channel: 'Карусель INT',
         link: '#',
      },
      {
         id: 3,
         time: '02:25',
         name: 'Наедине со всеми',
         channel: 'Первый',
         link: '#',
      },
   ],
};

export const stream = {
   title: 'Эфир',
   streams: [
      {
         id: 1,
         icon: icon,
         text: 'Управление как искусство',
         channel: 'Успех',
         link: '#',
      },
      {
         id: 2,
         icon: icon,
         text: 'Ночь. Мир в это время',
         channel: 'earthTV',
         link: '#',
      },
      {
         id: 3,
         icon: icon,
         text: 'Андрей Возн...',
         channel: 'Совершенно секретно',
         link: '#',
      },
   ],
};