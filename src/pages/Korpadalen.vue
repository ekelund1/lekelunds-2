<template>
  <v-container class="align-center"
    ><v-row class="text-center">
      <v-col>
        <h2>Kluring 1</h2>
        <v-card elevation="4">
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
          <v-row class="ma-6">
            <v-text-field
              outlined
              label="X"
              v-model="posX"
              type="number"
              @change="numbersChanged"
            ></v-text-field>
            <v-text-field
              outlined
              label="Y"
              v-model="posY"
              type="number"
              @change="numbersChanged"
            ></v-text-field
          ></v-row>
          <v-btn
            style="margin-top: 50px "
            x-large
            color="accent"
            rounded
            class="text-center ma-5 d-flex"
            elevation="5"
            @click="reset"
            >Återställ</v-btn
          >
          <iframe
            width="100%"
            height="450"
            frameborder="0"
            style="border:0"
            :src="
              `https://www.google.com/maps/embed/v1/view?key=AIzaSyC6Pc2048HP7n4I_4jzGEdd5xKcUFgp_-M&center=${
                useDefault ? `${defaultX},${defaultY}` : `${posX},${posY}`
              }&zoom=18&maptype=satellite`
            "
            allowfullscreen
          >
          </iframe>
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
      to="/plats2"
      >Nästa</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Korpadalen",
  methods: {
    numbersChanged() {
      if (this.posX !== 0 && this.posY !== 0) this.useDefault = false;
    },
    reset() {
      this.useDefault = true;
      this.posX = 0;
      this.posY = 0;
    },
  },
  data: () => ({
    useDefault: true,
    posX: 0,
    posY: 0,
    defaultX: 56.2058,
    defaultY: 14.852,
  }),
};
</script>
