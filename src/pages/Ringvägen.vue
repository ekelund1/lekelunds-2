<template>
  <v-container class="align-center"
    ><v-row class="text-center">
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
          ><v-alert type="success"> Korrekt lösenord! </v-alert>

          <v-card elevation="4">
            <v-card-title class="text-center">Vart ska vi?</v-card-title>

            <v-card-text>
              <v-row class="align-center justify-center" style="height: 150px">
                <h2 class="pa-3" v-for="(letter, i) in shuffledArray" :key="i">
                  {{ letter }}
                </h2>
              </v-row></v-card-text
            ><v-text-field
              class="ma-8 pb-2"
              :disabled="correctPlace"
              success-message="Du klarade det"
              @change="handlePlaceText"
              clearable
              label="Plats?"
              v-model="placeText"
              :error="invalidText"
              :error-messages="errorText"
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>
    </transition>

    <transition name="fade">
      <v-row v-if="correctPlace">
        <v-col
          ><v-alert type="success"> Korrekt plats! </v-alert>

          <v-btn
            style="margin-top: 50px"
            x-large
            color="primary"
            rounded
            block
            class="text-center"
            elevation="5"
            to="/AsarumsIP"
            >Nästa</v-btn
          ></v-col
        >
      </v-row>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "Ringvägen",

  components: {},
  methods: {
    handleChange(text) {
      if (text.toLowerCase() === "cykel") {
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
    handlePlaceText(text) {
      if (text.toLowerCase() === "asarumsip") {
        this.correctPlace = true;
        this.invalidText = false;
        this.errorText = "";
      } else {
        this.invalidText = true;
        this.errorText = "Fel plats";
        setTimeout(() => {
          this.invalidText = false;
          this.errorText = "";
        }, 2000);
      }
    },
  },
  data: () => ({
    placeText: "",
    inputText: "",
    success: false,
    invalidText: false,
    correctPlace: false,
    errorText: "",
    navigate() {
      this.$router.push({ name: this.data.nextScreen });
    },
    nextScreen: "AsarumsIP",
    //
  }),
  computed: {
    shuffledArray: () => {
      const array = "ASARUMSIP".split("");

      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
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
