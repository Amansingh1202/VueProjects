<template>
    <div class="section">
        <svg height="160" width="2000">
            <circle cx="1200" cy="110" r="50"
                    stroke-width="3"
                    fill="magenta"
            />
            <text x="1200" y="115"
                  text-anchor="middle"
                  fill="white"
                  font-size="20px"
                  font-family="sans-serif"
                  stroke-width="1px"
            > Live
            </text>
        </svg>
        <div id="body-text">
        <h1>YOUR <span id="music">MUSIC.</span></h1>
        <form id="song">
            <input v-model="songName" type="text" id="song-name" name="song-name" placeholder="Enter artist name..." required />
            <button type="submit" id="btn" v-on:click="findSong">Search Song</button>
        </form>
        </div>
        <div id="social-media">
            <h2>FOLLOW ............................</h2>
            <div id="social-links">
            <a href="#"><img src="../assets/facebook.png" /></a>
            <a href="#"><img src="../assets/insta.png" /></a>
            <a href="#"><img src="../assets/twitter.png" /></a>
            <a href="#"><img src="../assets/youtube.png" /></a>
            </div>
        </div>
        <hr id="horiz"/>
        <div>
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" width="0" height="0" alt="" id="image1"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Body",
        data(){
            return {
                songName: '',
                songKey:'YjQ3ZTMwMjAtNzdmYi00MzhiLWJkMDgtZDZmMTQ1ZjgwODdl',
        }
        },
        methods:{
            findSong(e){
                e.preventDefault();
                const d = this.songName.split();
                let se = d.join('+');
                fetch('https://itunes.apple.com/search?term='+se+'&limit=1')
                .then(
                    function (res) {
                            return res.json();
                    }
                ).then(
                  function (res) {
                        document.getElementById('image1').src = res.results[0].artworkUrl100;
                  }
                );
                this.songName ='';
            },
        }
    }
</script>

<style scoped>

    h1[data-v-3b9344d2][data-v-3b9344d2][data-v-3b9344d2][data-v-3b9344d2]{
        color:white;
        font-family: sans-serif;
        font-size: 5em;
        font-weight: 500;
        margin-left: 35%;
        margin-top: 9%;
    }
    #music[data-v-3b9344d2][data-v-3b9344d2][data-v-3b9344d2][data-v-3b9344d2]{
        color: yellow;
    }
    input[data-v-3b9344d2][data-v-3b9344d2]{
        background-color: transparent;
        border: white 2px solid;
        border-radius: 15px;
        color: white;
        padding: 5px;
        font-size: 1.4em;
        text-align:center;
        margin-left: 35%;
    }
    input[data-v-3b9344d2]:focus{
        color: lightblue;
    }
    #btn[data-v-3b9344d2]{
        background-image: linear-gradient(to right,rgba(255, 255, 0, 1),rgba(0,255,0,1));
        color: white;
        padding: 10px 25px 10px 25px;
        border-radius: 15px;
        border: none;
        font-family: sans-serif;
        font-weight: 700;
        margin-left: 10px;
    }
    #btn[data-v-3b9344d2]:hover{
        color: green;
    }
    #body-text[data-v-3b9344d2]{
        margin-top: -180px;
    }
    #social-media img[data-v-3b9344d2]{
        width: 40px;
        height: 40px;
        margin-left: 20px;
    }
    #social-media[data-v-3b9344d2]{
        margin-top: 150px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }
    #social-links[data-v-3b9344d2]{
        display: inline-block;
        margin-left: 70px;
    }
    #social-media h2{
        display: inline-block;
        color: white;
        font-family: sans-serif;
        font-size:1.1em;
    }
    #horiz{
        color: white;
        margin-top: 20px;
    }
    #image1{
        width: 150px;
        height:150px;
        margin-left: 500px;
        background: transparent;
    }
</style>
