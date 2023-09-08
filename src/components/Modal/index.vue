<template>
  <div :class="[showModal ? 'd-block' : 'd-none', 'modal fade show']">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close btn"
            @click="$emit('toggle-modal')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('toggle-modal')"
          >
            Close
          </button>
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