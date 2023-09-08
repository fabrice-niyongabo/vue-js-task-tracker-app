<template>
  <Header title="Task tracker app" @toggle-modal="toggleShowModal" />
  <!-- inorder to make our component's attributes dynamic -->
  <!-- we have to bind it first  -->
  <!-- we use v-bind -->
  <!-- or simply add a :before it -->
  <Tasks
    :tasks="tasks"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
  />
  <Modal :showModal="showModal" @toggle-modal="toggleShowModal" />
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    // register components here so that it can be used by our app
    Header,
    Tasks,
    Modal,
  },
  data() {
    //here is where we put the data of our component
    //its an like a area where we define our state variables
    return {
      tasks: [],
      showModal: false,
    };
  },
  methods: {
    //Reminder
    //this keyword only works for a regular js fx not an arrow function
    deleteTask(taskId) {
      if (confirm("Do you want to delete this task?"))
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    toggleReminder(taskId) {
      this.tasks = this.tasks.map((task) =>
        task.id === taskId ? { ...task, reminder: !task.reminder } : task
      );
    },
    toggleShowModal() {
      this.showModal = !this.showModal;
    },
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
        reminder: true,
      },
      {
        id: 2,
        title: "Finishing Amani steel MIS tasks",
        date: "07/09/2023",
        time: "08:17",
        reminder: false,
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
