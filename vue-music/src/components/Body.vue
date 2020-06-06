<template>
    <div class="section">
        <h1>YOUR MUSIC</h1>
        <form id="song">
            <input v-model="songName" type="text" id="song-name" name="song-name" required />
            <button type="submit" id="btn">Search Song</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Body",
        data(){
            return {
                songName: ''
            }
        }
    }
</script>

<style scoped>

</style>
