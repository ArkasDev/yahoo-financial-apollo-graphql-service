import {historyType} from "./model/history";
import {quoteType} from './model/quote';
import {queryType, resolvers as queryResolvers} from './query';
import {makeExecutableSchema} from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
    typeDefs: [queryType, quoteType, historyType],
    resolvers: {
        ...queryResolvers,
    }
});
