<template>
  <div class="task-container border">
    <div>
      <h3>{{ task.title }}</h3>
      <p class="m-0">{{ task.date }} | {{ task.time }}</p>
    </div>
    <i class="fas fa-times"></i>
  </div>
</template>
<script>
export default {
  props: { task: Object },
};
</script>
<style lang="css" scoped>
.task-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0px;
  text-align: left;
  padding: 1rem;
  border-radius: 10px;
}
.fa-times:hover {
  color: red;
  cursor: pointer;
}
</style>