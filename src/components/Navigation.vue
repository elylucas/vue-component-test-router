<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Login' }">
            Login
          </router-link>
        </li>
        <li>
          <a @click.prevent="logout" href="#">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  display: flex;
}

li {
  list-style: none;
  margin-right: 10px;
}

a {
  color: blue;
}
</style>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    return {};
  },
};
</script>
