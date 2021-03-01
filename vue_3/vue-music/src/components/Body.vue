<template>
  <div class="section">
    <svg height="160" width="2000">
      <circle cx="1200" cy="110" r="50" stroke-width="3" fill="magenta" />
      <text
        x="1200"
        y="115"
        text-anchor="middle"
        fill="white"
        font-size="20px"
        font-family="sans-serif"
        stroke-width="1px"
      >
        Live
      </text>
    </svg>
    <div id="body-text">
      <h1>YOUR <span id="music">MUSIC.</span></h1>
      <form id="song">
        <input
          v-model="songName"
          type="text"
          id="song-name"
          name="song-name"
          placeholder="Enter artist name..."
          required
        />
        <button type="submit" id="btn" v-on:click="findSong">
          Search Song
        </button>
      </form>
    </div>
    <div id="social-media">
      <h2>FOLLOW ............................</h2>
      <div id="social-links">
        <a href="#"><img src="../assets/facebook.png"/></a>
        <a href="#"><img src="../assets/insta.png"/></a>
        <a href="#"><img src="../assets/twitter.png"/></a>
        <a href="#"><img src="../assets/youtube.png"/></a>
      </div>
    </div>
    <hr id="horiz" />
    <div class="footer">
      <img id="pause" src="../assets/pause.png" />
      <img id="play" src="../assets/play.png" />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        width="0"
        height="0"
        alt=""
        id="image1"
      />
      <div id="footer-section">
        <div id="singer"></div>
        <div id="song1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Body",
  setup() {
    const songName = ref("");
    const findSong = e => {
      e.preventDefault();
      const d = songName.value.split();
      let se = d.join("+");
      fetch("https://itunes.apple.com/search?term=" + se + "&limit=1", {
        mode: "no-cors"
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(res) {
          document.getElementById("image1").src = res.results[0].artworkUrl100;
          document.getElementById("singer").innerHTML =
            res.results[0].artistName;
          document.getElementById("song1").innerHTML =
            res.results[0].collectionName;
        });
      songName.value = "";
    };
    return {
      findSong
    };
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-family: sans-serif;
  font-size: 5em;
  font-weight: 500;
  margin-left: 35%;
  margin-top: 9%;
}
#music {
  color: yellow;
}
input {
  background-color: transparent;
  border: white 2px solid;
  border-radius: 15px;
  color: lightblue;
  padding: 7px;
  font-size: 1.2em;
  text-align: center;
  margin-left: 35%;
}
input:focus {
  color: black;
  background-color: aliceblue;
  border: none;
  outline: none;
}
#btn {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 0, 1),
    rgba(0, 255, 0, 1)
  );
  color: white;
  padding: 10px 25px 10px 25px;
  border-radius: 15px;
  border: none;
  font-family: sans-serif;
  font-weight: 700;
  margin-left: 10px;
}
#btn:hover {
  color: green;
  border: none;
}
#body-text {
  margin-top: -180px;
}
#social-media img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
#social-media {
  margin-top: 150px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
#social-links {
  display: inline-block;
  margin-left: 70px;
}
#social-media h2 {
  display: inline-block;
  color: white;
  font-family: sans-serif;
  font-size: 1.1em;
}
#horiz {
  color: white;
  margin-top: 20px;
}
#footer-section {
  display: flex;
  flex-direction: column;
}
#image1 {
  width: 150px;
  height: 150px;
  margin-left: 300px;
  background: transparent;
}
.footer {
  background-image: linear-gradient(
    to right,
    rgba(138, 43, 226, 0.9),
    rgba(75, 119, 190, 0.9)
  );
  display: flex;
  margin-bottom: 40px;
}
#singer {
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2em;
  margin-left: 50px;
  font-family: sans-serif;
}
#song1 {
  color: #e0e0e0;
  font-size: 1em;
  font-weight: 500;
  margin-left: 50px;
  margin-top: 2px;
  font-family: sans-serif;
}
#pause {
  background-color: transparent;
  width: 70px;
  height: 70px;
  margin-top: 50px;
  margin-left: 200px;
}
#play {
  background-color: transparent;
  width: 100px;
  height: 100px;
  margin-top: 35px;
}
</style>
