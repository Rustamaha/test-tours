<template lang="pug">
  div.nav-bar(:class="{ 'nav-bar_open': isSelect }")
    div.nav-bar__burger-position
      MenuBurger.nav-bar__burger(@click='offCanvasMenu(isSelect)'
        v-model='isSelect' :checked='isSelect')
    div.nav-bar__menu-position(v-if='isSelect')
      MenuList
</template>

<script>
import MenuList from '@/components/MenuList.vue';
import MenuBurger from '@/components/MenuBurger.vue';
// @ is an alias to /src

export default {
  name: 'NavigationBar',
  components: {
    MenuBurger,
    MenuList,
  },
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
    offCanvasMenu(value) {
      this.$emit('open-menu', value);
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
.nav-bar {
  background: $yellow;
  height: 4.375em;

  &_open {
    height: auto;
    height: 1366px; /* 100% Full-height */
    position: absolute; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 48.2%;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    width: 51.75%;
    margin-bottom: -1262px;
  }

  &__burger-position {
    //padding: 1.43em 11.91% 1.56em 88.09%;
    float: right;
    padding: 1.43em 1.43em 1.56em 0;
  }

  &__menu-position {
    padding: 6.31em 24.52% 0 22.64%;
    width: 52.84%;
    /*display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;*/
  }
}
</style>
