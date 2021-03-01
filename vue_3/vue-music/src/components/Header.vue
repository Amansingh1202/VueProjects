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

a {
  color: whitesmoke;
  margin-left: 80%;
  text-decoration: none;
  font-weight: 800;
}
a:hover {
  color: cornflowerblue;
}
#nav {
  display: flex;
}
#logo {
  margin-top: -25px;
  height: 150px;
}
#links {
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
