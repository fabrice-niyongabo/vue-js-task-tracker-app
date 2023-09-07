<template>
  <!-- vue click event modifiers -->
  <!-- we modify our click event by adding a dot after it and the choose whatever modifier that we wish -->
  <!-- the self modifier allow us to only emit toggle reminder event only when this specific div is clicked not when one of its children gets clicked -->
  <!-- if you try to click on one of its childs the click event wont get fired -->
  <div class="task-container border" @click.self="$emit('toggle-reminder')">
    <!-- <div :class="task.reminder ? 'reminder' : ''"> -->
    <div
      :class="[
        task.reminder ? 'reminder' : '',
        'default-class-to-be-applied-without-any-condition',
      ]"
    >
      <h3>{{ task.title }}</h3>
      <p class="m-0">{{ task.date }} | {{ task.time }}</p>
    </div>
    <i class="fas fa-times" @click="handleDeleteTask(task.id)"></i>
  </div>
</template>
<script>
export default {
  props: { task: Object },
  methods: {
    handleDeleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
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
  cursor: pointer;
}
.fa-times:hover {
  color: red;
  cursor: pointer;
}

.reminder {
  border-left: 5px solid blue;
  padding-left: 10px;
}
</style>