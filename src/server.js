import Hapi from 'hapi';
import { ApolloServer } from 'apollo-server-hapi';
import { schema } from './schema'
const HOST = 'localhost';
const PORT = 3000;

const apolloServer = new ApolloServer({
    schema
  });

async function init() {
  const server = new Hapi.server({
    host: HOST,
    port: PORT,
  });

  await apolloServer.applyMiddleware({ app: server });

  try {    
      await server.start();
      console.log(`Server is running at: ${server.info.url}`);
  } catch (err) {
      console.log(`Error while starting server: ${err.message}`)
  }

  console.log(`Server running at: ${server.info.uri}`);
}

init();