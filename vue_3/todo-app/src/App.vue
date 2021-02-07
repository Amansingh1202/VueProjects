<template>
  <div id="app">
    <Header />
    <div id="list">
      <div v-for="task in getTask" :key="task.id">
        <Todo @del-todo="delTodo" :todoname="task.title" :id1='task.id'/>
      </div>
      <Forms @add-data="addTodos" />
    </div>
  </div>
</template>

<script>
  import Todo from '@/components/Todo.vue'
  import Header from '@/components/Header.vue'
  import Forms from '@/components/Forms.vue'
  import { reactive,computed } from 'vue'
  export default{
    name:"App",
    components:{
      Todo,
      Header,
      Forms,
    },
    setup(){
      const tasks = reactive([])
      const delTodo = (id1) => {
        for(let i=0;i<tasks.length;i++){
          if (tasks[i].id == id1){
            tasks.splice(i,1);
          }
        }
      }
      const addTodos = (newTodo) => {
        tasks.push(newTodo)
      }
      const getTask = computed(() => tasks)
      return{
        delTodo,
        addTodos,
        getTask
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #list{
    border: 5px whitesmoke double;
    width: 40%;
    margin-left: 30%;
    padding: 2em;
    background-color: slategrey;
  }
</style>
