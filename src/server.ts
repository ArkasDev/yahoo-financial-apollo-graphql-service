import {ApolloServer} from 'apollo-server';
import {schema} from './data/schema';

const server = new ApolloServer({
    schema,
    introspection: true,
});

server.listen({port: process.env.PORT}).then(({url}) => {
    console.info(`Server is running: ${url}`);
    console.debug(`Port: ${process.env.PORT}`);
    console.debug(`Env: ${process.env.ENV}`);
});
