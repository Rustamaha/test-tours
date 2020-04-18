<template lang="pug">
  div.nav-bar(:class="{ 'nav-bar_open': isOpened }")
    div.nav-bar__burger-position(@click='offView')
      MenuBurger.nav-bar__burger(v-model='isOpened'
        :checked='isOpened')
    div.nav-bar__menu-position(v-if='isOpened')
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
      isOpened: false,
    };
  },
  created() {
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  methods: {
    offView() {
      this.$emit('open-menu', this.isOpened);
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpened = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.nav-bar {
  background: $yellow-color;
  height: 4.375em;

  &_open {
    height: 1366px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 48.2%;
    transition: 0.5s;
    width: 51.75%;
    margin-bottom: -1262px;
  }

  &__burger-position {
    float: right;
    padding: 1.43em 1.43em 1.56em 0;
  }

  &__menu-position {
    padding: 6.31em 24.52% 0 22.64%;
    width: 52.84%;
    max-width: 280px;
  }
}

@media only screen and (max-width: 768px) {
  .nav-bar {

    &_open {
      left: 30%;
      width: 70%;
    }
  }
}

@media only screen and (max-width: 562px) {
  .nav-bar {

    &_open {
      height: auto;
      left: 20%;
      width: 80%;
    }
  }
}

@media only screen and (max-width: 500px) {
  .nav-bar {

    &_open {
      height: auto;
      left: 0;
      width: 100%;
    }

    &__menu-position {
      padding: 6.31em 9.4% 0 9.6%;
      width: 81%;
    }
  }
}
</style>
