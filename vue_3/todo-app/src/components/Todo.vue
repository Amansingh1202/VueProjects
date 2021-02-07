<template>
    <div class="todo">
        {{todoname}}<button id="delete" @click="$emit('del-todo',id1)">X</button>
    </div>
    
</template>

<script>
    export default {
        name: "Todo",
        props:{
            todoname:String,
            isCompleted:Boolean,
            id1:String,
        }
    }
</script>

<style scoped>
.todo{
    background-color: blanchedalmond;
    color: darkslategray;
    font-size: 1.3em;
    padding: 0.3em;
    width: 40%;
    margin-left: 25%;
    margin-bottom: 0.5em;
    border:2px black dashed;
}
    #delete{
        color: red;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>
