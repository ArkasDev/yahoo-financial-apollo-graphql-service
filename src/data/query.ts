import { gql } from "apollo-server"
import { YahooFinancialAdapter } from "../adapter/yahoo-financial-adapter";

export const queryType = gql`
  type Query {
    quote(symbol: String): Quote
    history(symbol: String, from: String, to: String, interval: String): [History]
  }
`;

export const resolvers = {
  Query: {
    quote: async (_parent: any, args: {
      symbol: string
    }) => {
      return await YahooFinancialAdapter.readQuote(args.symbol);
    },
    history: async (_parent: any, args: any) => {
      return await YahooFinancialAdapter.readHistory(args) ?? [];
    },
  }
};
