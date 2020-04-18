<template lang="pug">
  div.select(:class="{ 'select_open': isSelect }")
    button.select__button(@click='click')
      | Страны
      span.select__arrow
    div.select__scrollbar(v-if='isSelect')
      div(v-for='(country, ind) in countries' :key='ind')
        div.select__scrollbar-name {{ country.name }}
          ul.select__ul
            li.select__li(v-for='destination in country.destination')
              |{{ destination }}
</template>

<script>
// @ is an alias to /src
export default {
  name: 'CountriesSelectList',
  data() {
    return {
      isSelect: false,
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
      this.isSelect = !this.isSelect;
    },
    close(e) {
      console.log(this.$el, this.$el.contains(e.target));
      if (!this.$el.contains(e.target)) {
        this.isSelect = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.select {
  width: 280px;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.16em;
  color: $black;
  height: 49px;
  background: $white;
  border-radius: 29.5px;

  &_open {
    width: 283px;
    height: 400px;
    position: responsive;
    margin-bottom: -351px;
    z-index: 1;
  }

  &__button {
    border-style: none;
    width: 100%;
    height: 49px;
    background: $white;
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
      border: solid $black;
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      position: absolute;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  &__scrollbar {
    width: 221px;
    height: 330px;
    overflow-y: scroll;
    color: $black;
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
      color: $yellow;
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
  }

  &__scrollbar::-webkit-scrollbar-track {
    background-color: $white;
  }

  &__scrollbar::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: $lightGray;
  }
}
</style>
