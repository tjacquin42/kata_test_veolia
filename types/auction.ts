export type Bid = {
  name: string
  bid: number
}

export type Bidder = {
  name: string
  bids: number[]
}

export type AuctionResult = {
  winner: string
  winningPrice: number
}
