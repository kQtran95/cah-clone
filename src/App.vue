<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    axios
      .get("http://localhost:8000/listBlackCards")
      .then(response => {
        this.$store.commit("setBlackCards", response.data.cards[0]);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/listWhiteCards")
      .then(response => {
        this.$store.commit("setWhiteCards", response.data.cards[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
