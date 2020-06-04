<template>
  <div class="todosList">
    <div v-for="task in tasks" :key="task.id">
        <Todo @del-todo="delTodo" v-bind:todoname="task.title" v-bind:isCompleted="task.completed" v-bind:id1='task.id'/>
      </div>
      </div>
</template>

<!--    </div>-->
<!--      {{ta}}-->
<!--    </div>-->
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
  methods:{
    delTodo:function (id1) {
      this.$emit('del-todo',id1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
