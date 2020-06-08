<template>
  <div id="app">
    <Header />
    <div id="list">
    <TodoList v-bind:tasks="tasks" @del-todo="delTodo"/>
    <Forms @add-data="addTodos" />
    </div>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import Header from './components/Header.vue'
  import Forms from './components/Forms.vue'

export default {
  name: 'App',
    components: {
      TodoList,
      Header,
      Forms,
    },
   data(){
    return{
      tasks:[
      ]
    }
   },
  methods:{
    delTodo(id1){
      this.tasks = this.tasks.filter(task => task.id !== id1);
    },
    addTodos(newTodo){
      this.tasks = [...this.tasks,newTodo];
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
