<template>
  <v-container class="align-center"
    ><v-row>
      <v-col class="text-center">
        <v-row class="text-center">
          <v-col>
            <h2>Ange lösenord</h2>

            <v-text-field
              :disabled="success"
              success-message="Du klarade det"
              @change="handleChange"
              clearable
              label="Kod"
              v-model="inputText"
              :error="invalidText"
              :error-messages="errorText"
            ></v-text-field>
          </v-col>
        </v-row>
        <transition name="fade">
          <v-card v-if="success" class="align-center">
            <v-card-title class="align-center">Vart ska vi?</v-card-title>
            <v-card-text class="align-center">
              <v-col class="pa-5  align-center text-center">
                <v-row class="pa-5">
                  <v-img src="../assets/sodra.png" contain height="300px"
                /></v-row>
                <v-row class="pa-5">
                  <v-img height="300px" cover src="../assets/lango.png" />
                </v-row>
                <v-row class="pa-5">
                  <h2 class="text-center flex">- Ö + A</h2></v-row
                >
                <v-row class="pa-5"
                  ><v-img
                    height="300px"
                    cover
                    src="https://www.google.com/maps/vt/data=HZGkY1E4SGawmHXQk9Znnwp2VZM4gbHbpS7wMFEnW76gfb6Kd8zg6QyhyIhxi6Yk8Tc-zRIxFu1KBHquv_jYnBW_LWtUWQSuwHT2DsX_7yOzylNmXtRWW-4EZ46E0G964RZlhUJmXhOcs3L0l3RJKahzrHiiO71Ixc2P5Yuz9SJXlNM8qJJbTJYLG6vN9TLEG_H_Epxzh4fEYKkF4tsD1jav7Kqt7UqiDaxcnuXdbBLYZ6A"
                    stlye="transform"
                  /> </v-row></v-col
            ></v-card-text>
            <v-btn
              style="margin-top: 50px"
              x-large
              color="primary"
              rounded
              block
              class="text-center"
              elevation="5"
              to="/plats5"
              >Nästa</v-btn
            >
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AsarumsIP",
  methods: {
    handleChange(text) {
      if (text.toLowerCase() === "vattenflaska") {
        this.success = true;
        this.invalidText = false;
        this.errorText = "";
      } else {
        this.invalidText = true;
        this.errorText = "Fel kod";
        setTimeout(() => {
          this.invalidText = false;
          this.errorText = "";
        }, 2000);
      }
    },
  },
  components: {},

  data: () => ({
    inputText: "",
    success: false,
    invalidText: false,
    errorText: "",
  }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
