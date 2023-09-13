import { gql } from "apollo-server"

export const historyType = gql`
  type History {
    date: String
    open: Float
    high: Float
    low: Float
    close: Float
    adjClose: Float
    volume: Float
  }
`;
