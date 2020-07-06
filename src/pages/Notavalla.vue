<template>
  <v-container class="align-center"
    ><v-row class="text-center">
      <v-col>
        <h2>Kluring 2</h2>
        <v-card>
          <v-card-title class="text-center">Vart ska vi?</v-card-title>
          <v-card-text
            ><v-row class="align-center justify-center" style="height: 150px">
              <div style="width: 60px;">
                <div style="font-size: 70px;">{</div>
              </div>
              <v-col>
                <v-row class="mb-6"
                  ><h3>
                    <strong style="color: red">X</strong> * 5.33846 +
                    <strong style="color: blue">Y</strong> * 11.1201 = 465
                  </h3></v-row
                >
                <v-row
                  ><h3>
                    <strong style="color: red">X</strong> +
                    <strong style="color: blue">Y</strong> * 2.95215 = 100
                  </h3></v-row
                >
              </v-col>
            </v-row></v-card-text
          >
          <v-card-subtitle
            >Hint: <v-icon>place</v-icon><v-icon>map</v-icon>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-btn
      style="margin-top: 50px"
      x-large
      color="primary"
      rounded
      block
      class="text-center"
      elevation="5"
      @click="navigate"
      >Nästa</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Notavalla",

  components: {},

  data: () => ({
    navigate() {
      this.$router.push({ name: this.data.nextScreen });
    },
    nextScreen: "Ringvägen",
    //
  }),
};
</script>
