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
          <form>
            <div class="form-group mb-3">
              <label for="">Task Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter task title"
              />
            </div>
            <div class="form-group mb-3">
              <label for="">Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter task date"
              />
            </div>
            <div class="form-group mb-3">
              <label for="">Time</label>
              <input
                type="time"
                class="form-control"
                placeholder="Enter task time"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { showModal: { type: Boolean } },

  created() {
    console.log("here");
    // this.$bvModal.show("bv-modal-example");
  },
};
</script>
<style >
</style>