# GasFees Sorted

A single-file HTML dashboard showing real-time transaction fees for major blockchains, sorted from cheapest to most expensive.

## Features

- **Real-time fees** from multiple data sources
- **24 blockchains** supported
- **Sorted by cost** - cheapest chains at the top
- **Color-coded fees**: Green (<$0.01), Yellow ($0.01-$0.10), Red (>$0.10)
- **Block time column** - shows typical confirmation wait
- **Permanent offline cache** - preserves last known values forever if APIs fail
- **Auto-refresh** - optional 60-second auto-update
- **Search** - filter by chain name or symbol
- **No backend required** - pure client-side, works as a static file

## Supported Chains (24)

| Chain | Source | Type |
|-------|--------|------|
| Bitcoin | Blockchair | UTXO |
| Litecoin | Blockchair | UTXO |
| Dogecoin | Blockchair | UTXO |
| Bitcoin Cash | Blockchair | UTXO |
| Dash | Blockchair | UTXO |
| XRP | Blockchair | Account |
| Stellar | Blockchair | Account |
| Monero | Blockchair | UTXO |
| Cardano | Blockchair | EUTXO |
| Zcash | Blockchair | UTXO |
| eCash | Blockchair | UTXO |
| Groestlcoin | Blockchair | UTXO |
| Ethereum | PublicNode RPC | EVM |
| BNB Chain | PublicNode RPC | EVM |
| Polygon | PublicNode RPC | EVM |
| Arbitrum | PublicNode RPC | EVM L2 |
| Optimism | PublicNode RPC | EVM L2 |
| Base | PublicNode RPC | EVM L2 |
| Avalanche | PublicNode RPC | EVM |
| Celo | PublicNode RPC | EVM |
| Gnosis | PublicNode RPC | EVM |
| Solana | SolanaCompass | Non-EVM |
| Algorand | AlgoNode | Non-EVM |

## Usage

1. Download `index.html`
2. Open in any modern browser
3. That's it!

Or host it anywhere that serves static files (GitHub Pages, Netlify, Vercel, etc.)

**Live Demo**: https://ons96.github.io/gas-fees-dashboard/

## Data Sources

- **Blockchair** - UTXO chains (Bitcoin, Litecoin, Dogecoin, etc.)
- **PublicNode** - EVM chains via RPC (free, CORS-enabled, no API key)
- **SolanaCompass** - Solana priority fees
- **AlgoNode** - Algorand transaction params
- **CoinGecko** - Token prices for USD conversion

## Caching Strategy

- **Permanent cache**: Values are stored in localStorage with NO expiration
- **Fallback**: If an API fails, the cached value is shown marked as "(cached)"
- **Instant load**: Cached data displays immediately while fresh data is fetched
- **Cache age**: Shows how old the cached data is on load

## Notes

- Fees are for typical transfer transactions (21,000 gas for EVM chains)
- Manual refresh has a 30-second cooldown to prevent API abuse
- Some APIs have rate limits; cached values are preserved indefinitely
- Block times are approximate averages

## Why only 24 chains?

Many blockchain APIs either:
- Don't support CORS (can't be called from browser)
- Require API keys (not free)
- Have aggressive rate limiting

PublicNode RPC endpoints are free and CORS-enabled, which is why most EVM chains use them. Blockchair's free tier provides 12 chains. If you know of other free CORS-enabled APIs, please open an issue!

## License

MIT
