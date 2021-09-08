import * as Hapi from '@hapi/hapi';
import axios from 'axios';
import User from '../types/user';

async function getUsers() {
  return axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data);
}

async function getFilteredUsers(name?: string) {
  const users = await getUsers();

  if (!name) {
    return users;
  }

  return users.filter(u => u.name.startsWith(name));
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
  path: '/{name?}',
  handler: (request) => getFilteredUsers(request.params.name),
});

server.start().then(() => {
  console.log(`Server running on ${server.info.uri}`);
});
