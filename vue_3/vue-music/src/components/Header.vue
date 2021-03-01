<template>
  <div class="header">
    <div id="nav">
      <img id="logo" src="../assets/logo.png" />
      <div id="links">
        <a href="#">Home</a>
        <a href="#">About.Us</a>
        <a href="#">Contact</a>
        <a href="#">Login|SignUp</a>
      </div>
    </div>
    <hr id="horiz" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped>
.header {
  font-family: sans-serif;
  background-image: linear-gradient(
    to right,
    rgba(75, 119, 190, 1),
    rgba(154, 18, 179, 1)
  );
}

a[data-v-61dd7a3d] {
  color: whitesmoke;
  margin-left: 80%;
  text-decoration: none;
  font-weight: 800;
}
a:hover {
  color: cornflowerblue;
}
#nav[data-v-61dd7a3d] {
  display: flex;
}
#logo[data-v-61dd7a3d] {
  margin-top: -25px;
  height: 150px;
}
#links[data-v-61dd7a3d] {
  display: flex;
  justify-content: space-around;
  margin-left: 40%;
  margin-top: 20px;
  font-size: 1.1em;
}
#horiz {
  color: white;
}
</style>
