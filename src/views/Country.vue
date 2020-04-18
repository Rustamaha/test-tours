<template lang="pug">
  div.country
    div.country__h1
      |зимбабве
    div.country__line
    div.country__tours
      template(v-for='(tour, ind) in tours')
        CardCountry.country__card-position(:country='tour' :key='ind')
    div.country__line
    FormGroup
</template>
<script>
import CardCountry from '@/components/CardCountry.vue';
import FormGroup from '@/components/FormGroup.vue';
// @ is an alias to /src

export default {
  name: 'country',
  components: {
    CardCountry,
    FormGroup,
  },
  computed: {
    tours() {
      return this.$store.getters.getTours;
    },
  },
};
</script>
<style scoped lang="scss">
.country {
  width: 76.18%;
  padding: 2.875em 11.91% 10.25em 11.91%;
  color: $black-color;
  background: $white-color;

  &__h1 {
    text-transform: uppercase;
  }

  &__h1 {
    text-align: center;
    font-size: 2.25rem;
    line-height: 1.19em;
    font-weight: 900;
  }

  &__line {
    width: 100%;
    height: 2px;
    background: $lightGray;
    display: none;
  }

  &__tours {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-wrap: -webkit-wrap;
    justify-content: space-between;
    padding: 0 0 3.875em 0;
  }

  &__card-position {
    width: 48.71%;
  }
}

@media only screen and (max-width: 500px) {
  .country {
    width: 90.6%;
    padding: 0.94em 4.6% 0 4.8%;

    &__card-position {
      width: 100%;
    }

    &__line {
      display: block;
    }
  }
}
</style>
