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
import { defineComponent } from 'vue';
import User from '../types/user';

export default defineComponent({
  data() {
    return {
      name: '',
      users: [] as User[],
    };
  },
  watch: {
    name() {
      this.getUsers();
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get<User[]>('http://localhost:3000/' + this.name)
        .then(response => (this.users = response.data));
    },
  },
});
</script>
