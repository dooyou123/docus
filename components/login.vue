<template>
  <div>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    const loginWithGoogle = () => {
      root.$auth.loginWith('google')
    }

    return { loginWithGoogle }
  },
})
</script>
