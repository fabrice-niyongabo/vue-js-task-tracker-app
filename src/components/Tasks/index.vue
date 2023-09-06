<template lang="html">
    <div class="container">
        <div  :key="task.id" v-for="task in tasks"> 
            <TaskItem :task="task" />
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
};
</script>
<style lang="css">
</style>