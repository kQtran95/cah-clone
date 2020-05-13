<template>
	<div>
		<div>
			<v-row>
				<v-card
					width="210"
					height="284"
					outlined
					dark
					elevation="12"
					style="top: 20px; margin-left: 40px; border-radius: 20px"
				>
					<v-card-title style="justify-content: center; margin-top: 20px">Draw Prompt Card</v-card-title>
					<v-card-actions style="justify-content: center; margin-top: 120px">
						<v-btn outlined text @click="drawCard">Draw</v-btn>
					</v-card-actions>
				</v-card>
				<v-card
					width="222"
					height="300"
					dark
					outlined
					elevation="24"
					style="top: 20px; margin-left: 80px; border-radius: 20px"
				>
					<v-card-text
						v-text="drawnCard.prompt"
						:style="'line-height: normal; font-size:'+fontSize(drawnCard.prompt)+'px'"
					/>
					<v-card-subtitle
						v-text="drawnCard.special"
						:style="'position: absolute; bottom: 0; right: 0; font-size:'+fontSize(drawnCard.prompt)+'px'"
					/>
				</v-card>
			</v-row>
		</div>
		<!-- <div>
			<v-row>
				<v-col cols="1" v-for="(card, i) in cards" :key="i">
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
		</div> -->
	</div>
</template>

<script>
export default {
	name: "GameTable",
	data: () => ({
		deck: [],
		drawnCard: {},
		
	}),
	computed: {
		getAllBlackCards() {
			return this.$store.state.blackCards;
		}
	},
	mounted() {
		this.deck = this.getAllBlackCards;
	},
	methods: {
		drawCard() {
			this.drawnCard = this.$store.getters.drawBlackDeck()
		},
		fontSize(text) {
			if (text) return 20 - 90 / (920 - text.length);
		}
	}
};
</script>