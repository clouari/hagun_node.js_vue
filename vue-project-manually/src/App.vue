<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding </router-link> |
    <router-link to="/databindinginputtext"> DataBindingInputText </router-link> |
    <router-link to="/databindingbutton"> DataBindingButton</router-link> |
    <router-link to="/databindinglist"> DataBindingList</router-link> |
    <router-link to="/renderingif"> RenderingIf</router-link> |
    <router-link to="/eventclick"> eventclick</router-link>
    <router-view/>
  </nav>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
