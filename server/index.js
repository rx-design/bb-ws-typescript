import * as Hapi from '@hapi/hapi';
import axios from 'axios';

async function getUsers() {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data);
}

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
  handler: getUsers,
});

server.start().then(() => {
  console.log(`Server running on ${server.info.uri}`);
});
