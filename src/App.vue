<template>
  <v-app>
    <Header />
    <div style="margin-top: 75px"></div>
    <router-view />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Navigator from "./components/Navigator";
export default {
  name: "App",

  components: {
    Header,
    Navigator,
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

  data: () => ({
    //
  }),
};
</script>
