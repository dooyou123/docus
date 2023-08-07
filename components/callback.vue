<template>
  <div>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    onMounted(() => {
      root.$auth.loginWith('google')
    })
  },
})
</script>
