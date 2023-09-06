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
  data() {
    //here is where we put the data of our component
    //its an like a area where we define our state variables
    tasks: [];
  },
  created() {
    //this is what we call life cycle method
    //code below run after the component has been created
    //it is similar to useEffect in react
    this.tasks = [
      {
        id: 1,
        title: "Learning vue.JS",
        date: "07/09/2023",
        time: "08:17",
        riminder: true,
      },
      {
        id: 2,
        title: "Finishing Amani steel MIS tasks",
        date: "07/09/2023",
        time: "08:17",
        riminder: false,
      },
    ];
    //############
    //to access our state data we use this keyword
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
