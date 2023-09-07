<template lang="html">
    <div class="container">
        <div  :key="task.id" v-for="task in tasks"> 
          <!-- if we want to invoke one of the methods of this component -->
          <!-- we dont use blackets to envoke the function so that it will be able to catch whatever params that has been sent by the child component -->
            <!-- <TaskItem @delete-task="onDelete" :task="task" /> -->
            <!-- emmiting directly to the main parent component -->
            <TaskItem @delete-task="$emit('delete-task', task.id)" :task="task" />
        </div>
    </div>
    
</template>
<script>
import TaskItem from "./TaskItem";
export default {
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    onDelete(id) {
      //here we are gettin the data send by child component
      console.log({ id });
    },
  },
};
</script>
<style lang="css">
</style>