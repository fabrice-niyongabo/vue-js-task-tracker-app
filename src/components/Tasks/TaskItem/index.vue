<template>
  <div class="task-container border">
    <h3>{{ task.title }}</h3>
  </div>
</template>
<script>
export default {
  props: { task: Object },
};
</script>
<style lang="css" scoped>
.task-container {
  margin: 1rem 0px;
  text-align: left;
  padding: 1rem;
  border-radius: 10px;
}
</style>