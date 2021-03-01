<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
export default {
  name: "App",
  components: {
    Header,
    Body
  }
};
</script>
<style>
body,
html {
  background-image: url("./assets/background.jpg");
  background-image: linear-gradient(
    to right,
    rgba(138, 43, 226, 0.7),
    rgba(75, 119, 190, 0.9)
  );
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
