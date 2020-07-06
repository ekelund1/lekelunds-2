<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        Ange lösenord
        <v-text-field
          solo
          :disabled="success"
          success-message="Du klarade det"
          @change="handleChange"
          @blur="handleBlur"
        ></v-text-field>
      </v-col>
    </v-row>
    <div v-if="success">
      <v-alert type="success">
        Du klarade det!
      </v-alert>
      <v-btn @click="navigate">Nästa</v-btn>
      <router-link :to="{ name: 'Page2' }">Nästa2?</router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    handleBlur(e) {
      console.log("Blured text:", e);
    },
    handleChange(text) {
      if (text === "Hejsan") {
        this.success = true;
      } else this.invalidText = true;
      console.log(text === "Hejsan");
    },
    navigate() {
      this.$router.push({ name: "Page2" });
    }
  },
  data: () => ({
    inputText: "",
    invalidText: false,
    success: false
  })
};
</script>
