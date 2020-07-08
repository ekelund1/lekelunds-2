<template>
  <v-container class="align-center">
    <v-row class="text-center">
      <v-col>
        <h2>Ange kod</h2>

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
      <v-row v-if="success" class="text-center">
        <v-col>
          <h2>Kluring 2</h2>
          <v-card>
            <v-card-title class="text-center">Vart ska vi?</v-card-title>
            <v-card-text
              ><h2 class="pb-5">Odalvägen 12, 374 52 Asarum</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-btn
          style="margin-top: 50px"
          x-large
          color="primary"
          rounded
          block
          class="text-center"
          elevation="5"
          to="/plats3"
          >Nästa</v-btn
        >
      </v-row>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "Notavalla",
  components: {},
  data: () => ({
    inputText: "",
    success: false,
    invalidText: false,
  }),
  methods: {
    handleChange(text) {
      if (text.toLowerCase() === "lösenord") {
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

L Ö S E N O R D
