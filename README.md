# Financial Service

Query financial data on Yahoo.

## Getting Started

1. Install dependencies `npm install`
2. Create your own environment file `.env` and fill the variables from `.env.tmp` e.g. `ENV=development PORT=3000`.
3. Run the service on your local machine via `npm run dev`. Hot reloading is available.
4. Open http://localhost:3000 and go to the ApolloGraphQL sandbox explorer
5. Use the following example and enter it into the ApolloGraphQL sandbox

**Example Operation**
```
query ($symbol: String, $from: String, $to: String, $interval: String) {
  quote(symbol: $symbol) {
    language
    region
    currency
    shortName
    longName
    market
    marketCap
    regularMarketPrice
    regularMarketDayHigh
    regularMarketDayLow
    regularMarketVolume
  },
  history(symbol: $symbol, from: $from, to: $to, interval: $interval) {
    date
    volume
    high
    low
  }
}
```

**Example Variables**
```
{
  "symbol": "AAPL",
  "from": "2023-09-01",
  "to": "2023-09-13",
  "interval": "1d",
}
```

## Decisions

**TypeScript**: With TypeScript, the advantage of type safety through GraphQL is also implemented in the further code.

**Apollo GraphQL**: To implement GraphQL [Apollo GraphQL](https://www.npmjs.com/package/@apollo/server) is used. Apollo GraphQL is one of the most popular tools to integrate a GraphQL server and has a large community and ecosystem. In addition, the sandbox provides a simple and powerful tool to write GraphQL queries out of the box. 

**yahoo-finance2**: To query financial data on Yahoo, [yahoo-finance2](https://www.npmjs.com/package/yahoo-finance2) is used. The package has a high download rate compared to others, which corresponds to a good quality. Moreover, the package is actively maintained and well documented. 
