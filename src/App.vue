<template>
  <div>{{ users }}</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      users: [] as any[],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000')
      .then(response => (this.users = response.data));
  },
});
</script>
