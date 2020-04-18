<template lang="pug">
  div.card
    img.card__img(:src='country.image' alt='img')
    div.card__price-background
      div.card__price
        |{{ country.price }} &#8381;
    div.card__country
      |{{ country.country }}
    div.card__title
      |{{ country.title }}
    div.card__route(v-if='country.route')
      |{{ country.route }}
    div.card__dates
      |{{ country.dates }}
    div.card__params-position(v-if='country.params')
      div.card__params
        div.card__params-text
          |{{ country.params }}
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CardCountry',
  props: {
    country: Object,
  },
};
</script>
<style scoped lang="scss">
.card {
  padding-top: 2.875em;

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__price-background {
    position: relative;
    width: 160px;
    height: 50px;
    bottom: 54px;
    background: $yellow;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    margin-bottom: -58px;
  }

  &__price {
    font-weight: 900;
    font-size: 1.12rem;
    line-height: 1.22em;
    color: $black;
  }

  &__country {
    padding-top: 1.11em;
    font-weight: 700;
    font-size: 0.56rem;
    line-height: 1.22em;
    color: $lightOlive;
    text-transform: uppercase;
  }

  &__title {
    padding-top: 0.38em;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.22em;
    color: $black;
  }

  &__route {
    padding-top: 2.22em;
    font-weight: 700;
    font-size: 0.56rem;
    line-height: 1.44em;
    color: $gray55;
  }

  &__dates {
    padding-top: 1.66em;
    font-size: 0.56rem;
    line-height: 1.22em;
    color: $black;
  }

  &__params-position {
    padding: 1.66em 0 1.11em 0;
    font-weight: 700;
    font-size: 0.56rem;
    line-height: 1.22em;
  }

  &__params {
    width: 130px;
    height: 17px;
    background: $red;
    border-radius: 3px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
  }

  &__params-text {
    color: $white;
  }
}

@media only screen and (max-width: 500px) {

}
</style>
