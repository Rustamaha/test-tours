<template lang="pug">
  div.menu
    input.menu__checkbox.menu__checkbox_hidden(type="checkbox"
      id="checkbox1"
      :checked='checked'
      @change="$emit('input', $event.target.checked)")
    label(for="checkbox1")
      div.menu__hamburger.menu__hamburger1
        span.menu__bar.menu__bar_bar1
        span.menu__bar.menu__bar_bar2
        span.menu__bar.menu__bar_bar3
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MenuBurger',
  props: {
    checked: Boolean,
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">
.menu {
  width: 30px;
  height: 22px;

  &__bar {
    padding: 0;
    width: 30px;
    height: 5px;
    background-color: $black-color;
    display: block;
    transition: all 0.5s ease-in-out;
    position: absolute;

    &_bar1 {
      top: 0;
    }

    &_bar2 {
      top: 9px;
    }

    &_bar3 {
      bottom: 0;
    }
  }

  &__checkbox {

    &_hidden {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px; width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
    }

    &:checked + label >.menu__hamburger1 > .menu__bar {
      background-color: $white-color;
      //right: 20px;
    }

    &:checked + label >.menu__hamburger1 > .menu__bar_bar1 {
      transform-origin: 13%;
      transform: rotate(45deg);
    }

    &:checked + label > .menu__hamburger1 > .menu__bar_bar2 {
      transform: translateX(-40px);
      background-color: transparent;
    }

    &:checked + label > .menu__hamburger1 > .menu__bar_bar3 {
      transform-origin: 3%;
      transform: rotate(-45deg);
    }
  }

  &__hamburger {
    width: 30px;
    height: 22px;
    position: relative;
  }
}
</style>
