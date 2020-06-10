<template>
  <div id="app">
    <Header/>
    <About />
    <Home />
    <Contact />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Contact,
    Home
  }
}
</script>

<style>
#app {
  margin: 6px;
  border: black solid 2px;
  border-radius: 5px;
}
</style>
