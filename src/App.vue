<template lang="pug">
  div.container(id='app')
    NavigationBar.sidenav(@open-menu='offCanvasMenu'
      :class="{ 'sidenav_open': isSelect }")
    router-view.view
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
    offCanvasMenu(value) {
      this.isSelect = value;
    },
  },
};
</script>
<style lang="scss">
@import './assets/styles/main.scss';

.view {
}
</style>
