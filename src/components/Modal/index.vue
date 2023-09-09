<template>
  <div
    :class="[showModal ? 'd-block' : 'd-none', 'modal fade show']"
    @click.self="$emit('toggle-modal')"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add new task</h5>
          <button
            type="button"
            class="close btn"
            @click="$emit('toggle-modal')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit="handleSubmit">
            <div class="form-group mb-3">
              <label for="">Task Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter task title"
                v-model="title"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="">Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter task date"
                v-model="date"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="">Time</label>
              <input
                type="time"
                class="form-control"
                placeholder="Enter task time"
                v-model="time"
                required
              />
            </div>
            <div class="form-group mb-3">
              <input type="checkbox" value="true" v-model="reminder" /> &nbsp;
              <span>Reminder</span>
            </div>
            <button type="submit" class="btn btn-primary w-100">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { showModal: { type: Boolean } },
  data() {
    return {
      title: "",
      date: "",
      time: "",
      reminder: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const task = {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        date: this.date,
        time: this.time,
        reminder: this.reminder,
      };
      this.$emit("add-task", task);
      this.$emit("toggle-modal");
    },
  },
  created() {
    //this will run only once
    // this.title = "";
    // this.date = "";
    // this.time = "";
    // this.reminder = false;
  },
  watch: {
    //this is like useeffect
    //we are going to watch the showModal attribute whenever it changes
    //this method comes with two optional parameters
    // showModal(newValue,oldValue) {
    showModal() {
      // this method must be the same as the attribute that we are watching
      if (this.showModal) {
        //reset our state
        this.title = "";
        this.date = "";
        this.time = "";
        this.reminder = false;
      }
    },
  },
};
</script>
<style >
</style>