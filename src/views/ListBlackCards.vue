<template>
  <v-row>
    <v-col cols="3" v-for="(card, i) in cards" :key="i">
      <v-card
        class="mx-auto"
        width="370"
        height="500"
        dark
        outlined
        elevation="24"
        style="top: 20px; border-radius: 20px"
      >
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Prompt</v-list-item-title>
              <v-list-item-subtitle
                class="text-wrap"
                v-text="card.prompt"
                :style="'font-size:'+fontSize(card.prompt)+'px'"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListBlackCards",
  data: () => ({
      cards: []
  }),
  computed: {
    getAllBlackCards() {
      return this.$store.state.blackCards;
    },
	},
	methods: {
		fontSize(text) {
      return 29 - 90 / (920 - text.length);
    }
	},
  mounted() {
    this.cards = this.getAllBlackCards;
  }
};
</script>
