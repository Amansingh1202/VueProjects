<template>
  <div id="app">
    <div id="header">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" ></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/ice-cave.jpg" alt="ice cave" width="1100" height="1100"/>
            <div class="overlay"></div>
            <div class="nav1">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
              <router-link to="/Contact">Contact Us</router-link>
            </div>
            <h3 class="image-heading">Onde posso arranjar</h3>
            <div class="image-desc">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
          </div>
          <div class="carousel-item">
            <img src="./assets/northern-lights.jpg" alt="northern lights" width="1100" height="1100"/>
            <div class="overlay"></div>
            <div class="nav1">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
              <router-link to="/Contact">Contact Us</router-link>
            </div>
            <h3 class="image-heading">De onde é que</h3>
            <div class="image-desc">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</div>
          </div>
          <div class="carousel-item">
            <img src="./assets/seashore.jpg" alt="photo of seashore" width="1100" height="1100"/>
            <div class="overlay"></div>
            <div class="nav1">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
              <router-link to="/contact">Contact Us</router-link>
            </div>
            <h3 class="image-heading">Dari mana dapat</h3>
            <div class="image-desc">Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting</div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
  </script>

<style>
#app{
  margin: 6px;
  border: rgba(0,0,0,0.2) solid 2px;
  border-radius: 10px;
}
  .carousel-inner img{
    width: 100%;
    height:700px;
  }
  .carousel-inner{
    height: 700px;
  }
  .carousel-item{
    position: relative !important;
  }
  .overlay{
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
  }
  .nav1{
    display: flex;
    position: absolute;
    color: white;
    bottom: 90%;
    left: 65%;
    z-index: 20;
  }
  .nav1 a{
    margin-left: 100px;
    color: white;
    font-size: 1.3em;
    border-bottom: 3px solid transparent;
    outline: 0;
  }
  .nav1 a:hover{
    text-decoration: none;
    outline: 0;
    color: lightblue;
    border-bottom: 3px solid white;
    transition-timing-function: linear;
    transition: 2s;
  }
  .image-heading{
    position: absolute;
    color: white;
    z-index: 20;
    bottom: 20%;
    left: 44%;
    font-family: serif;
    color: white;
    font-size: 1.9em
  }
  .image-desc{
    position: absolute;
    color: gainsboro;
    z-index: 20;
    bottom: 15%;
    font-size:1.2em;
    left: 32%;
  }
 .carousel .carousel-indicators li{
    width: 10px;
    height: 10px;
    border-radius: 100%;
   margin-left: 10px;
  }
</style>
