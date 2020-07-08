<template>
  <v-app>
    <Header />
    <div style="margin-top: 150px"></div>
    <div style="position: absolute; top: 60px; right: 0px">
      <SillyImage />
    </div>
    <router-view />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import SillyImage from "./components/SillyImage";
export default {
  name: "App",

  components: {
    Header,
    SillyImage,
  },

  watch: {
    $route: {
      handler: (to) => {
        document.title = `Lekelunds ${
          to.meta.title ? " - " + to.meta.title : ""
        }`;
      },
    },
  },
};
</script>
