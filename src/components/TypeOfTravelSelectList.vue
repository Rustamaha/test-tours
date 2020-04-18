<template lang="pug">
  div.select(:class="{ 'select_open': isSelect }")
    button.select__button(@click='click')
      | Тип путешествия
      span.select__arrow
    div.select__list(v-if='isSelect')
      ul.select__ul(v-for='(type, ind) in types' :key='ind')
        li.select__li
          |{{ type }}
</template>

<script>
// @ is an alias to /src
const typesOfTravel = ['Активный', 'Майские', 'На авто', 'На корабле', 'Новый год', 'Поход', 'Серфинг', 'Эксклюзив', 'Экскурсионный', 'Экспедиция'];

export default {
  name: 'TypeOfTravelSelectList',
  data() {
    return {
      isSelect: false,
    };
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
  computed: {
    types() {
      return typesOfTravel;
    },
  },
};
</script>
<style scoped lang="scss">
.select {
  width: 280px;
  height: 49px;
  background: $white;
  border-radius: 29.5px;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.16em;
  color: $black;

  &_open {
    width: 283px;
    height: 381px;
    position: responsive;
    margin-bottom: -332px;
    z-index: 1;
  }

  &__button {
    width: 100%;
    background: $white;
    padding: 0 29px 0 30px;
    border-radius: 29.5px;
    height: 49px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    border-style: none;
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

  &__list {
    //width: 220px;
    height: 330px;
    color: $black;
    font-size: 0.875rem;
    line-height: 2.14em;
    padding: 0 40px 0 37px;
    font-weight: 500;
  }

  &__ul {
    width: 206px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__li {
    padding-left: 0.64em;

    &:hover,
    &:focus {
      width: 206px;
      height: 28px;
      background: $lightGray;
      border-radius: 15px;
    }
  }
}
</style>
