<template>
  <div class="app">
    <ul>
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/todos">待办项</router-link></li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
* {
  font-family: 'Open Sans', sans-serif;
}

.app {
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 500px;
  height: 500px;
  margin: auto;
}

ul {
  list-style-type: none;
  margin: 0 20px 0 0;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

.router-link-exact-active {
  text-decoration: none;
  background-color: gainsboro;
  font-weight: bold;
}
</style>
