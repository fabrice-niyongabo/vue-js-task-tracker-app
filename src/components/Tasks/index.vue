<template lang="html">
    <div class="container">
        <div class="task-container border" v-for="task in tasks">
            <h3>{{ task.title }}</h3>
        </div>
    </div>
    
</template>
<script>
export default {
  props: {
    tasks: {
      type: Array,
    },
  },
};
</script>
<style lang="css">
.task-container {
  margin: 1rem 0px;
  text-align: left;
  padding: 1rem;
  border-radius: 10px;
}
</style>