<template>
    <div>
      <h1>Login</h1>
      <LoginForm @submit="handleLogin" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';
  import LoginForm from '~/components/LoginForm.vue';
  
  export default defineComponent({
    components: {
      LoginForm,
    },
    methods: {
      handleLogin(credentials) {
        // 로그인 요청을 전송하고 결과를 처리하세요.
        console.log('Login information:', credentials);
      },
    },
  });
  </script>
  