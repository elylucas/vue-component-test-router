<template>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>
<style></style>

<script>
import Navigation from './components/Navigation.vue';
export default {
  components: {
    Navigation,
  },
  setup() {
    return {};
  },
};
</script>
