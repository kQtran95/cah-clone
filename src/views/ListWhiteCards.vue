<template>
	<v-row>
		<v-col cols="3" v-for="(card, i) in cards" :key="i">
			<v-card
				class="mx-auto"
				width="370"
				height="500"
				outlined
				elevation="12"
				style="top: 20px; border-radius: 20px"
			>
				<v-list>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="headline mb-1">Repsonse</v-list-item-title>
							<v-list-item-subtitle
								class="text-wrap"
								v-text="card.response"
								:style="'font-size:'+fontSize(card.response)+'em'"
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
	name: "ListWhiteCards",
	data: () => ({
		cards: []
	}),
	computed: {
		getAllWhiteCards() {
			return this.$store.state.whiteCards;
		}
	},
	methods: {
		fontSize(text) {
			return 2.5 - 50 / (300 - text.length);
		}
	},
	mounted() {
		this.cards = this.getAllWhiteCards;
	}
};
</script>
