<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="红白色单线写实手绘花朵插画现代美妆宣传英文logo"/> -->
    <Demo msg="红白色单线写实手绘花朵插画现代美妆宣传英文logo"></Demo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/demo'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Demo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
