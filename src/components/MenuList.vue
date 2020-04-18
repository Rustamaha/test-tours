<template lang="pug">
  div.menu
    div.menu__selects-position
      CountriesSelectList
      DatePicker.menu__datepicker-position
    TypeOfTravelSelectList.menu__types-position
    button.menu__button.menu__button_search НАЙТИ
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
import DatePicker from '@/components/DatePicker.vue';
import TypeOfTravelSelectList from '@/components/TypeOfTravelSelectList.vue';
import CountriesSelectList from '@/components/CountriesSelectList.vue';
// @ is an alias to /src

export default {
  name: 'MenuList',
  components: {
    CountriesSelectList,
    TypeOfTravelSelectList,
    DatePicker,
  },
  data() {
    return {
      isSelect: false,
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

  &__selects-position {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }

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
    color: $black-color;
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
    color: $black-color;
    padding-bottom: 1em;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
  }

  &__button {
    width: 100%;
    max-width: 280px;
    height: 49px;
    padding: 0;
    background: $yellow-color;
    border-style: none;
    border-radius: 29.5px;
    font-size: 0.75rem;
    line-height: 1.16em;
    text-align: center;
    color: $black-color;
    position: relative;
    border: 1px solid transparent;
    background-clip: padding-box;
    opacity: 1;

    &:before {
      content: '';
      position: absolute;
      width: 101%;
      max-width: 280px;
      height: 49px;
      border-radius: 29.5px;
      margin: -1px;
      background: $black-color;
      z-index: -1;
      top: 0;
      left: 0;
    }

    &_search {
      margin-top: 1.125em;
      display: none;
    }
  }
}

@media only screen and (max-width: 768px) {
  .menu {

    &__selects-position {
      display: block;
    }

    &__datepicker-position {
      margin-top: 1.125em;
    }

    &__links {
      padding-bottom: 40em;
    }

    &__phone {
      font-size: 1.2rem;
    }

    &__button {

      &_search {
        display: block;
      }
    }
  }
}

@media only screen and (max-width: 562px) {
  .menu {

    &__links {
      padding-bottom: 30em;
    }
  }
}

@media only screen and (max-width: 500px) {
  .menu {

    &__datepicker-position,
    &__types-position {
      //margin-top: 0.875em;
    }

    &__links {

      padding: 1.66em 0 5.77em 0;
    }

    &__button {

      &:before {
        width: 100.8%;
      }
    }

    &__contact {
      padding-bottom: 2.75em;
    }
  }
}
</style>
