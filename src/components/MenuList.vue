<template lang="pug">
  div.menu
    CountriesSelectList
    TypeOfTravelSelectList.menu__types-position
    button.menu__button_search НАЙТИ
    div.menu__links
      router-link.menu__link(to='/trips') ПУТЕШЕСТВИЯ
      router-link.menu__link(to='/about') О НАС
      router-link.menu__link(to='/reviews') ОТЗЫВЫ
      router-link.menu__link(to='/blog') БЛОГ
    div.menu__contact
      span.menu__phone +7 (495) 123-45-67
      button.menu__button
        |ПОДБЕРИТЕ МНЕ ТУР
</template>

<script>
import { ru } from 'vuejs-datepicker/dist/locale';
import Datepicker from 'vuejs-datepicker';

import TypeOfTravelSelectList from '@/components/TypeOfTravelSelectList.vue';
import CountriesSelectList from '@/components/CountriesSelectList.vue';
// @ is an alias to /src

export default {
  name: 'MenuList',
  components: {
    Datepicker,
    CountriesSelectList,
    TypeOfTravelSelectList,
  },
  data() {
    return {
      isSelect: false,
      ru,
      highlighted: {
        to: new Date(2020, 4, 5), // Highlight all dates up to specific date
        from: new Date(2020, 4, 26),
      },
    };
  },
};
</script>
<style scoped lang="scss">
.menu {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  //justify-content: center;

  &__types-position {
    margin-top: 1.125em;
  }

  &__links {
    height: 153px;
    padding-top: 4.25em;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding-bottom: 48.18em;
    justify-content: space-between;
  }

  &__link {
    font-size: 1.125rem;
    line-height: 1.22em;
    text-align: center;
    letter-spacing: 0.1em;
    color: $black;
    font-weight: 900;
    text-decoration: none;
  }

  &__contact {
    padding-bottom: 3.43em;
  }

  &__phone {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.2em;
    text-align: center;
    letter-spacing: 0.1em;
    color: $black;
    padding-bottom: 1em;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
  }

  &__button {
    width: 280px;
    height: 49px;
    border: 1px solid $black;
    box-sizing: border-box;
    border-style: none;
    border-radius: 29.5px;
    font-size: 0.75rem;
    line-height: 1.16em;
    text-align: center;
    color: $black;
    //padding-bottom: 3.43em;
    //display: flex;
    //display: -webkit-flex;
    //align-items: center;
    //-webkit-align-items: center;
    //justify-content: center;

    &_search {
      display: none;
    }
  }
}
</style>
