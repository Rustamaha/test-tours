<template lang="pug">
  div.form-group
    div.form-group__title
      |Заявка на подбор путешествия
    form(@submit.prevent='submit')
      div.form-group__group
        div.form-group__flex
          div.form-group__group-name
            |немного о вас
        div.form-group__inputs-position
          div.form-group__form
            label.form-group__label
              |имя
              span.form-group__asterisk *
            input.form-group__input(v-model.trim='$v.name.$model'
              :class="{ 'form-group__input_error': $v.name.$error }")
            div.form-group__error-message(v-if='$v.name.$error')
              |Имя требуется

          div.form-group__form
            label.form-group__label.form-group__label_padding-small-width
              |телефон
            input.form-group__input(placeholder='+7___ ___ ____'
              v-model.trim='$v.phone.$model'
              :class="{ 'form-group__input_error': $v.phone.$error }")
            div.form-group__error-message(v-if='$v.phone.$error')
              |Телефон требуется в таком формате +7-XXX-XXX-XXXX

      div.form-group__group
        div.form-group__flex.form-group__flex_padding-0
          div.form-group__group-name
            |о путешествии
        div.form-group__inputs-position
          div.form-group__form
            label.form-group__label
              |куда и когда хотите поехать?
              span.form-group__asterisk  *
            input.form-group__input(placeholder='Континент, страна или город'
              v-model.trim='$v.place.$model'
              :class="{ 'form-group__input_error': $v.place.$error }")
            div.form-group__error-message(v-if='$v.place.$error')
              |Укажите континет, страну или город

          div.form-group__form
            label.form-group__label.form-group__label_padding-small-width
              |когда?
            input.form-group__input(placeholder='Даты или временной интервал'
              v-model.trim='$v.date.$model'
              :class="{ 'form-group__input_error': $v.date.$error }")
            div.form-group__error-message(v-if='$v.date.$error')
              |Укажите дату

      div.form-group__group.form-group__group_checkbox
        div.form-group__checkboxes
          div.form-group__flex
            div.form-group__group-name
              |удобный способ связи
          div.form-group__flex
            CustomCheckbox.form-group__inline-block(:label="'viber'" v-model='isViber')
            CustomCheckbox.form-group__inline-block(:label="'whatsapp'" v-model='isWhatsapp')
            CustomCheckbox.form-group__inline-block(:label="'почта'" v-model='isPost')
            CustomCheckbox.form-group__inline-block(:label="'телефон'" v-model='isPhone')

        div.form-group__checkboxes
          div.form-group__flex
            div.form-group__group-name
              |откуда узнали о нас
          div.form-group__flex.form-group__flex_small-padding
            CustomCheckbox.form-group__inline-block(:label="'интернет'" v-model='fromInternet')
            CustomCheckbox.form-group__inline-block(:label="'рекомендовали друзья'"
              v-model='fromFriends')
            CustomCheckbox.form-group__inline-block(:label="'соц. сети'" v-model='fromSocialNet')
            CustomCheckbox.form-group__inline-block(:label="'уже ездил'" v-model='fromMe')

      div.form-group
        CustomCheckbox.form-group__group.form-group__group_small-checkbox(
          :label="'Получать свежие предложения по электронной почте'"
          :smallCheckbox='true' v-model='getNews')
        div.form-group__text
          |Каждую неделю мы делаем для вас обзор лучших экспедиций,
          |статей и лайфхаков для путешественников. Если вдруг вам не
          | понравится, вы сможете отписаться в любой момент.
        CustomCheckbox.form-group__group.form-group__group_small-checkbox(
          :label="'С обработкой своих персональных данных согласен.'"
          :smallCheckbox='true' v-model='personalInfo'
          :error='errorClass')
        div.form-group__text
          |Отправляя заявку я подтверждаю согласие с условиями Пользовательского соглашения
        div.form-group__text
          span.form-group__asterisk *
          |  Поля, которые надо обязательно заполнить
      button.form-group__button(type='submit' :disabled="submitStatus === 'PENDING'")
        span.form-group__button-text Отправить
        div.form-group__arrow
      p.form-group(v-if="submitStatus === 'OK'") Спасибо за ваше обращение
      p.form-group__error-message(v-if="submitStatus === 'ERROR'") Пожалуйста заполните форму
      p.form-group(v-if="submitStatus === 'PENDING'") Отправка...
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

import CustomCheckbox from '@/components/CustomCheckbox.vue';
// @ is an alias to /src

export default {
  name: 'FormGroup',
  components: {
    CustomCheckbox,
  },
  data() {
    return {
      name: '',
      phone: null,
      place: '',
      date: '',
      isViber: false,
      isWhatsapp: false,
      isPost: false,
      isPhone: false,
      fromInternet: false,
      fromFriends: false,
      fromSocialNet: false,
      fromMe: false,
      getNews: false,
      personalInfo: false,
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    phone: {
      required,
      minLength: minLength(11),
      validator(phone) {
        const re = /79[0-9]{9}|\+7-9[0-9]{2}-[0-9]{3}-[0-9]{4}/;
        return re.test(phone);
      },
    },
    place: {
      required,
    },
    date: {
      required,
    },
    personalInfo: {
      sameAs: sameAs(() => true),
    },
  },
  computed: {
    errorClass() {
      return this.$v.$dirty && this.$v.$error;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-group {
  font-size: 0.625rem;
  line-height: 1.2em;
  color: $black;
  padding-bottom: 7em;

  &__title {
    text-align: center;
    font-size: 2.25rem;
    line-height: 1.19em;
    font-weight: 900;
  }

  &__asterisk {
    color: $red;
  }

  &__text {
    color: $lightGray;
    padding: 1.1em 0 0 3em;
  }

  &__checkboxes {
    padding: 0;
    width: 48.71%;
  }

  &__group {
    padding-top: 3.5em;

    &_checkbox {
      display: flex;
      display: -webkit-flex;
      padding-top: 0;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
    }

    &_small-checkbox {
      padding: 3.9em 0 0.9em 0;
    }
  }

  &__inputs-position,
  &__flex {
    display: flex;
    display: -webkit-flex;
    padding-top: 3.1em;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;

    &_small-padding {
      padding-top: 2.1em;
    }

    &_padding-0 {
      padding: 0;
    }
  }

  &__inline-block {
    display: inline-block;
    padding: 0 20px 0 0;

    &:first-child {
      padding-left: 30px;
    }
  }

  &__group-name {
    text-transform: uppercase;
    font-weight: 500;
    padding-bottom: 0.5em;
    border-bottom: 2px solid $black;
  }

  &__label {
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 0.8em;
  }

  &__input {
    padding-left: 3em;
    width: 100%;
    height: 50px;
    background: $white;
    border: 1px solid $veryLightGray;
    box-sizing: border-box;
    border-radius: 3px;
    color: $black;

    &_error {
      border: 1px solid $red;
      color: $red;
    }
  }

  &__form {
    width: 48.71%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  &__button {
    width: 280px;
    height: 49px;
    background: $yellow;
    border-radius: 29.5px;
    font-size: 0.75rem;
    line-height: 1.16em;
    color: $black;
    border-style: none;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
  }

  &__button-text {
    padding-left: 2.5em;
  }

  &__arrow {
    height: 10px;
    //width: 10px;
    position: relative;
    padding-right: 2.5em;
    top: 2px;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      -webkit-transform: rotate(360deg);
      border-width: 3.5px 0 3.5px 3px;
      border-color: transparent transparent transparent $yellow;
    }

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      -webkit-transform: rotate(360deg);
      border-width: 3.5px 0 3.5px 3px;
      border-color: transparent transparent transparent $black;
      left: 1px;
    }
  }

  &__error {
    border: 1px solid $red;
  }

  &__error-message {
    padding-top: 9px;
    color: $red;
    position: relative;
    margin-bottom: -28px;
  }
}

@media only screen and (max-width: 800px) {
  .form-group {

    &__group {

      &_checkbox {
        display: block;
      }
    }

    &__checkboxes {
      width: 70%;
  }
  }
}


@media only screen and (max-width: 636px) {
  .form-group {

    &__input {
      padding-left: 1em;
    }
  }
}

@media only screen and (max-width: 550px) {
  .form-group {

    &__input {
      padding-left: 0.3em;
    }
  }
}

@media only screen and (max-width: 500px) {
  .form-group {

    &__label {

      &_padding-small-width {
        padding-top: 2em;
      }
    }

    &__input {
      padding-left: 3em;
    }

    &__inputs-position {
      display: block;
    }

    &__form {
      width: 100%;
    }

    &__error-message {
      margin: 0;
    }
  }
}
</style>
