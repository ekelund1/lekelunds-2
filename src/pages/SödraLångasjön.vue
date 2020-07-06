<template>
  <v-container class="align-center"
    ><v-row class="text-center">
      <v-col>
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
          <v-card v-if="success">
            <v-card-title class="text-center">Vart ska vi?</v-card-title>
            <v-card-text
              ><v-row class="align-center justify-center">
                <v-img
                  class="pa-6"
                  height="200px"
                  src="https://image.flaticon.com/icons/svg/25/25694.svg"
                  contain/></v-row
            ></v-card-text>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SödraLångasjön",
  methods: {
    handleChange(text) {
      if (text.toLowerCase() === "a") {
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
    navigate() {
      this.$router.push({ name: this.data.nextScreen });
    },
    nextScreen: "Tostarp",
    //
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
