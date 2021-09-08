<template>
  <div>
    <input v-model="name">
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, onMounted, ref, watch } from 'vue';
import User from '../types/user';

export default defineComponent({
  setup() {
    const name = ref('');
    const users = ref<User[]>([]);

    const getUsers = () => {
      axios
        .get<User[]>('http://localhost:3000/' + name.value)
        .then(response => (users.value = response.data));
    };

    watch(name, getUsers);

    onMounted(getUsers);

    return {
      name,
      users,
    };
  },
});
</script>
