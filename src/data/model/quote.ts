import { gql } from "apollo-server"

export const quoteType = gql`
  type Quote {
    language: String
    region: String
    currency: String
    shortName: String
    longName: String
    market: String
    marketCap: Float
    regularMarketPrice: Float
    regularMarketDayHigh: Float
    regularMarketDayLow: Float
    regularMarketVolume: Float
  }
`;
