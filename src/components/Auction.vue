<template>
  <div class="wrapper">
    <h2>{{ t('auction.subtitle') }}</h2>
    <div class="card">
      <p>{{ t('auction.reserve') }} : {{ reservePrice }} €</p>
      <p>{{ t('auction.winner') }} : {{ result.winner }}</p>
      <p>{{ t('auction.finalPrice') }} : {{ result.winningPrice }} €</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import type { Bid, Bidder, AuctionResult } from '@/types/auction'

const { t, locale } = useI18n()
const reservePrice = ref<number>(100)

const bidders = ref<Bidder[]>([
  { name: 'A', bids: [110, 130] },
  { name: 'B', bids: [] },
  { name: 'C', bids: [125] },
  { name: 'D', bids: [105, 115, 90] },
  { name: 'E', bids: [132, 135, 140] }
])

const result = computed<AuctionResult>(() => {
  const allBids: Bid[] = []

  bidders.value.forEach(bidder => {
    bidder.bids.forEach(bid => {
      allBids.push({ name: bidder.name, bid })
    })
  })

  const validBids = allBids.filter(({ bid }) => bid >= reservePrice.value)

  if (validBids.length === 0) {
    return { winner: 'Aucun', winningPrice: reservePrice.value }
  }

  validBids.sort((a, b) => b.bid - a.bid)

  const winningBid = validBids[0]
  const winner = winningBid.name

  const nextHighest = validBids.find(b => b.name !== winner)
  const winningPrice = nextHighest ? nextHighest.bid : reservePrice.value

  return { winner, winningPrice }
})
</script>

<style lang="css">
.wrapper {
  max-width: 90vw;
  margin: auto;
  padding: 2rem 1rem;
  font-family: system-ui, sans-serif;
}

h1 {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.2rem, 2vw, 2rem);
  text-align: center;
  margin-bottom: 2rem;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.6rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.card p {
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  margin-bottom: 0.75rem;
}

@media (min-width: 1024px) {
  .wrapper {
    max-width: 40vw;
  }
}

@media (max-width: 600px) {
  .card {
    padding: 1.2rem;
  }

  .wrapper {
    padding: 1rem;
  }

  .card p {
    font-size: 1rem;
  }
}
</style>
