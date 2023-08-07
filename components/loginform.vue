<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username:</label>
      <input id="username" name="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" name="password" type="password" v-model="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // 사용자의 입력 값을 포함한 로그인 요청을 전송하세요.
      this.$emit('submit', { username: this.username, password: this.password });
    },
  },
});
</script>
