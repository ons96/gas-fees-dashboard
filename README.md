# GasFees Sorted

A single-file HTML dashboard showing real-time transaction fees for major blockchains, sorted from cheapest to most expensive.

![Screenshot](https://via.placeholder.com/800x400?text=GasFees+Dashboard)

## Features

- **Real-time fees** from multiple data sources (Blockchair, Etherscan, Polygon, Snowtrace, SolanaCompass)
- **Sorted by cost** - cheapest chains at the top
- **Color-coded fees**: Green (<$0.01), Yellow ($0.01-$0.10), Red (>$0.10)
- **Block time column** - shows typical confirmation wait
- **Offline cache** - preserves last known values if APIs fail
- **Auto-refresh** - optional 60-second auto-update
- **Search** - filter by chain name or symbol
- **No backend required** - pure client-side, works as a static file

## Supported Chains

| Chain | Source |
|-------|--------|
| Bitcoin | Blockchair |
| Litecoin | Blockchair |
| Dogecoin | Blockchair |
| Bitcoin Cash | Blockchair |
| Dash | Blockchair |
| XRP | Blockchair |
| Stellar | Blockchair |
| Monero | Blockchair |
| Cardano | Blockchair |
| Zcash | Blockchair |
| eCash | Blockchair |
| Groestlcoin | Blockchair |
| Ethereum | Etherscan |
| Polygon | Polygon Gas Station |
| Avalanche | Snowtrace |
| Solana | SolanaCompass |

## Usage

1. Download `index.html`
2. Open in any modern browser
3. That's it!

Or host it anywhere that serves static files (GitHub Pages, Netlify, Vercel, etc.)

## Data Sources

- **Blockchair** - UTXO chains and others
- **Etherscan** - Ethereum gas prices
- **Polygon Gas Station** - Polygon fees
- **Snowtrace** - Avalanche fees
- **SolanaCompass** - Solana priority fees
- **CoinGecko** - Token prices for USD conversion

## Notes

- Fees are for typical transfer transactions (21000 gas for EVM chains)
- Cache persists for 5 minutes in localStorage
- Manual refresh has a 30-second cooldown to prevent API abuse
- Some APIs have rate limits; cached values are shown when fresh data unavailable

## License

MIT
