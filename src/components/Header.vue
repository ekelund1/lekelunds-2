<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/lekelunds.png"
        transition="scale-transition"
        width="50%"
      />
      <v-card-title style="d-flex align-center">{{
        $route.meta.title
      }}</v-card-title>
    </div>
  </v-app-bar>
</template>

<script>
import Vue from "vue";
var header = new Vue({
  name: "Header",
});
export default header;
</script>
