import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const toscana = require('@/assets/static/images/toscana.jpg');
const iceland = require('@/assets/static/images/iceland.jpg');
const turkey = require('@/assets/static/images/turkey.jpg');
const norway = require('@/assets/static/images/norway.jpg');

export default new Vuex.Store({
  state: {
    tours: [
      {
        price: 'от 118 122',
        country: 'италия',
        title: 'Под небом Тосканы',
        route: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        dates: '8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19 и еще 15 дат',
        image: toscana,
        params: 'Авиаперелет включен!',
      },
      {
        price: '140 715',
        country: 'исландия',
        title: 'Майские каникулы в Исландии',
        route: 'Рейкьявик — Тингвеллир — Гюдльфосс — Скафтафедль — Сельяландсфосс — Скоугафосс — Йёкюльсаурлоун — Голубая Лагуна — Снайфельсйёкутль — Arnarstapi — Рейкьявик',
        dates: '8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19',
        image: iceland,
      },
      {
        price: '37 302',
        country: 'турция',
        title: 'Открытие Турции',
        route: 'Стамбул — Анкара — Каппадокия — Конья — Памуккале — Эфес — Кушадасы — Пергам — Ассос — Троя — Стамбул',
        dates: '8 дней / 7 ночей Русский язык 28.04.19 - 05.05.19 и еще 3 даты',
        image: turkey,
      },
      {
        price: '145 000',
        country: 'норвегияб шпицберген',
        title: 'От Свальбарда до Груманта',
        dates: '8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19 и еще 15 дат',
        image: norway,
        params: 'Гарантированный тур!',
      },
    ],
    countries: [
      {
        name: 'Южная Америка',
        destination: [
          'Аргентина',
          'Бразилия',
          'Перу',
          'Уругвай',
          'Чили',
          'Эквадор',
          'все туры на континенте',
        ],
      },
      {
        name: 'Северная Америка',
      },
      {
        name: 'Арктика и Антарктика',
      },
      {
        name: 'Африка',
      },
      {
        name: 'Австралия и Океания',
      },
      {
        name: 'Европа',
      },
      {
        name: 'Россия',
      },
      {
        name: 'Азия',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getTours(state) {
      return state.tours;
    },
    getCountries(state) {
      return state.countries;
    },
  },
});
