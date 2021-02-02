<template>
  <div class="todosList">
    <div v-for="task in tasks" :key="task.id">
        <Todo @del-todo="delTodo" :todoname="task.title" :isCompleted="task.completed" :id1='task.id'/>
      </div>
      </div>
</template>

<script>
   import Todo from './Todo.vue'
export default {
  name: 'TodoList',
  components:{
    Todo
  },
  props: {
     tasks: Array
   },
  setup(props,{ emit }){
      const delTodo = (id1) =>{
        emit('del-todo',id1);
    }
    return delTodo
  }
  }
</script>
