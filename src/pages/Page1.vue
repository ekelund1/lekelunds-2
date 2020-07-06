<template>
  <v-container class="align-center">
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
      <v-row v-if="success">
        <v-col
          ><v-alert type="success"> Du klarade det! </v-alert>
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
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
// import Header from "../components/Header";

export default {
  name: "Page1",

  methods: {
    handleChange(text) {
      if (text === "Hejsan") {
        this.success = true;
      } else {
        this.invalidText = true;
        this.errorText = "Fel kod";
        setTimeout(() => {
          this.invalidText = false;
          this.errorText = "";
        }, 2000);
      }
    },
    navigate() {
      this.$router.push({ name: "Page2" });
    },
  },
  data: () => ({
    inputText: "",
    errorText: "",
    invalidText: false,
    success: false,
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
