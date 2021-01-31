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
    <div id="footer">
      <div class="social-tags">
        <div id="social-text">Get connected with us on social networks!</div>
        <div id="social-links">
          <a href="#"><img src="./assets/facebook.png" alt="facebook" width="25" height="25"/></a>
          <a href="#"><img src="./assets/twitter.png" alt="twitter" width="25" height="25"/></a>
          <a href="#"><img src="./assets/google-plus.png" alt="google-plus" width="25" height="25"/></a>
        </div>
      </div>
      <div id="footer-section">
        <div id="company">
          <h2>COMPANY NAME</h2>
            <hr align="left" />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
        <div id="products">
          <h2>PRODUCTS</h2>
            <hr align="left" />
            <div class="product-name">Product 1</div>
            <div class="product-name">Product 2</div>
            <div class="product-name">Product 3</div>
            <div class="product-name">Product 4</div>
        </div>
        <div id="contact">
          <h2>CONTACT</h2>
          <hr align="left" />
          <div class="contact-name">
            <img src="./assets/home.png" alt="home" width="25" height="25"/>
            <span>New York,NY 10012,US</span>
          </div>
          <div class="contact-name">
            <img src="./assets/email.png" alt="email" width="25" height="25"/>
            <span>info@example.com</span>
          </div>
          <div class="contact-name">
            <img src="./assets/phone.png" alt="phone" width="25" height="25"/>
            <span>+01 777 888 99</span>
          </div>
        </div>
      </div>
    </div>
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
  .social-tags{
    display: flex;
    background-color: blueviolet;
    padding:20px;
  }
  #social-text{
    color: white;
    font-size: 1.3em;
  }
  #social-links{
    margin-left: 60%
  }
  #social-links a{
    margin-left:75px;
  }
  #footer hr{
    background-color: blueviolet;
    border: none;
    height: 5px;
    width:120px;
    margin: 0px;
    margin-bottom: 17%;
  }
  #footer-section{
    background-color: #301934;
    color: white;
    display: flex;
    padding-top: 2%;
  }
  #footer-section > div{
    margin-left: 15%;
    width: 300px;
  }
  #footer h2{
    font-size: 1.3em;
  }
  #company p{
    font-size:1.1em;

  }
  .product-name{
    font-size: 1.1em;
    margin-bottom: 15px;
  }
  .contact-name{
    font-size:1.1em;
    margin-bottom: 30px;
  }
  .contact-name img{
    margin-right: 20px
  }
</style>
