<template lang="">
    <header>
        <div class="container">
            <div class="header-contents"><h1>{{title}}</h1>
            <button class="btn btn-primary" @click="handleAddTask()">Add Task</button></div>
        </div>
      
    </header> 
</template>
<script>
export default {
  //props in vue component
  //1st method
  // props:['title','version']
  //2nd method
  props: {
    title: { type: String, default: "this is a default value for the props" },
  },
  methods: {
    //here we define methods that can be accessed inside our template
    handleAddTask() {
      this.$emit("toggle-modal");
    },
  },
};
</script>
<style lang="css" >
.header-contents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.header-contents h1 {
  text-transform: capitalize;
}
</style>