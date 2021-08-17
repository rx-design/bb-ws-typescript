import * as Hapi from '@hapi/hapi';

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: true,
  },
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => ('Hello, Bigbank!'),
});

server.start().then(() => {
  console.log(`Server running on ${server.info.uri}`);
});
