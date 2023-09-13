import YahooFinance from 'yahoo-finance2';

export const YahooFinancialAdapter = {
    readQuote: async (symbol: string) => {
        return await YahooFinance.quote(symbol);
    },
    readHistory: async (args: {
        symbol: string,
        from: string,
        to: string,
        interval: "1d" | "1wk" | "1mo"
    }) => {
        return await YahooFinance.historical(args.symbol, {
            period1: args.from,
            period2: args.to,
            interval: args.interval
        });
    },
};
