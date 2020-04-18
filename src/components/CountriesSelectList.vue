<template lang="pug">
  div.select(:class="{ 'select_open': isOpened }")
    button.select__button(@click='click')
      | Страны
      span.select__arrow
    div.select__scrollbar(v-if='isOpened')
      div(v-for='(country, ind) in countries' :key='ind')
        div.select__scrollbar-name {{ country.name }}
          ul.select__ul
            li.select__li(v-for='destination in country.destination')
              |{{ destination }}
</template>

<script>
export default {
  name: 'CountriesSelectList',
  data() {
    return {
      isOpened: false,
    };
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  created() {
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  methods: {
    click() {
      this.isOpened = !this.isOpened;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpened = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.select {
  width: 53.57%;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.16em;
  color: $black-color;
  height: 49px;
  background: $white-color;
  border-radius: 29.5px;

  &_open {
    width: 283px;
    height: 400px;
    position: absolute;
    margin-bottom: -351px;
    z-index: 1;
    transition: 0.5s;
  }

  &__button {
    border-style: none;
    width: 100%;
    height: 49px;
    background: $white-color;
    border-radius: 29.5px;
    padding: 0 29px 0 30px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
  }

  &__arrow {
    width: 0.31em;
    height: 0.31em;
    position: relative;

    &:before {
      border: solid $black-color;
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      position: absolute;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &_up {

      &:before {
        border: solid $black-color;
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        position: absolute;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    }
  }

  &__scrollbar {
    width: 221px;
    height: 330px;
    overflow-y: scroll;
    color: $black-color;
    padding-left: 30px;
  }

  &__scrollbar-name {
    font-size: 0.875rem;
    line-height: 2.14em;
    padding-right: 3px;
    font-weight: 700;
  }

  &__ul {
    width: 206px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__li {
    font-weight: 500;
    padding-left: 1em;

    &:last-child {
      font-size: 0.625rem;
      line-height: 3em;
      text-transform: uppercase;
      color: $yellow-color;
    }

    &:hover,
    &:focus {
      width: 192px;
      height: 28px;
      background: $lightGray;
      border-radius: 15px;
    }
  }

  &__scrollbar::-webkit-scrollbar {
    width: 2px;
    cursor: pointer;
  }

  &__scrollbar::-webkit-scrollbar-track {
    background-color: $white-color;
  }

  &__scrollbar::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: $lightGray;
  }
}

@media only screen and (max-width: 768px) {
  .select {
    width: 100%;
    max-width: 280px;
  }
}

@media only screen and (max-width: 500px) {
  .select {
    height: 40px;

    &_open {
      width: 283px;
      height: 400px;
      position: absolute;
      margin-bottom: -351px;
      z-index: 1;
      transition: 0.5s;
    }

    &__button {
      height: 40px;
    }
  }
}
</style>
