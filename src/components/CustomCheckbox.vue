<template lang="pug">
  label.checkbox(:class="{ 'checkbox__flex': smallCheckbox }")
    span.checkbox__description(:class="{ 'checkbox__description_small': smallCheckbox }")
      |{{ label }}
    input.checkbox__input(type='checkbox'
      :checked='checked'
      @change="$emit('input', $event.target.checked)")
    div.checkbox__checkmark(
      :class="{ 'checkbox__checkmark_small': smallCheckbox, 'checkbox__checkmark_error': error }")
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CustomCheckbox',
  props: {
    label: String,
    smallCheckbox: Boolean,
    checked: Boolean,
    error: Boolean,
  },
  data() {
    return {
      errorClass: this.error,
    };
  },
  watch: {
    errorClass() {
      this.errorClass = !this.error;
    },
  },
};
</script>
<style scoped lang="scss">
.checkbox {
  font-size: 0.625rem;
  line-height: 1.2em;
  color: $black;
  text-transform: uppercase;
  font-weight: 700;

  &__flex {
    display: flex;
    display: -webkit-flex;
    font-style: normal;
    font-weight: 500;
    text-transform: none;
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    //margin: 10px 0 0 20px;

    &:checked + .checkbox__checkmark:before {

    }

    &:checked + .checkbox__checkmark:before {
      display: inline-block;
    }
  }

  &__checkmark {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: $white;
    border: 1px solid $lightGray;
    box-sizing: border-box;
    border-radius: 3px;
    left: 0;

    &_error {
      border: 1px solid $red;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7px 8.5px 0 8.5px;
      border-color: $white transparent transparent transparent;
      left: 10px;
      top: 13px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7px 8.5px 0 8.5px;
      border-color: $yellow transparent transparent transparent;
      left: 10px;
      top: 15px;
      display: none;
    }

    &_small {
      width: 15px;
      height: 15px;

      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px 4.5px 0 4.5px;
        border-color: $white transparent transparent transparent;
        left: 2px;
        top: 3.5px;
      }

      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px 4.5px 0 4.5px;
        border-color: $yellow transparent transparent transparent;
        left: 2px;
        top: 4.5px;
        display: none;
      }
    }
  }

  &__description {
    width: 60px;
    position: relative;
    top: -9px;
    left: -10px;
    display: flex;
    text-align: center;
    justify-content: center;

    &_small {
      width: auto;
      padding-left: 1.5em;
      position: static;
      order: 2;
    }
  }
}
</style>
