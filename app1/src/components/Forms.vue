<template>
    <form @submit="addTodo" >
    <input v-model="title" type="text" id="task" placeholder="Enter the task....." required/>
    </form>
    
</template>

<script>
    import { v4 as uuidv4 } from 'uuid';
    export default {
        name: "Forms",
        data(){
            return{
                title:''
            }
        },
        methods:{
            addTodo:function (e){
                e.preventDefault();
                const newTodo = {
                    id:uuidv4(),
                    title:this.title,
                    completed:false
                };
                this.$emit('add-data',newTodo);
                this.title = ''
            }
        }
    }
</script>

<style scoped>
    #task[data-v-5bafc8af]{
        color: black;
        font-size: 1.4em;
        background-color: rgba(255,255,255,0.5);
        border: none;
        border-radius: 0px 13px 0px 13px;
        transition: 1s;
        padding: 10px;
        box-shadow:6px 10px rgba(255,255,255,0.1)
    }
    #task[data-v-5bafc8af]:focus{
        color: black;
        font-size: 1.4em;
        background-color: rgba(255,255,255,0.5);
        border: none;
        border-radius: 13px 0px 13px 0px;
        transition: 1s;
        padding: 10px;
        box-shadow:6px 10px rgba(255,255,255,0.2)
    }

</style>
