<template lang="pug">
  div.container-custom(id='app')
    NavigationBar.nav-position(@open-menu='offView')
    router-view(:class="{ 'view': isSelect }")
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    offView(val) {
      this.isSelect = !val;
    },
  },
};
</script>
<style lang="scss">
@import './assets/styles/main.scss';

@media only screen and (max-width: 500px) {
  .view {
    display: none;
  }
}
</style>
