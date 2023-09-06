<template>
  <Header title="Task tracker app" />
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    // register components here so that it can be used by our app
    Header,
  },
};
</script>

<!-- scoped make all the styles only apply to this component -->
<!-- <style scoped > -->
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
