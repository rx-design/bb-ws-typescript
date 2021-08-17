<template>
  <div>{{ users }}</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000')
      .then(response => (this.users = response.data));
  },
};
</script>
