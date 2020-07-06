<template>
  <div id="testInputField">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  el: "testInputField",
  props: {
    message: String
  }
});
</script>
