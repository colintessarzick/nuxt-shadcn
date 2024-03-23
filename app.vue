<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <Toaster />
  <main>
    <Navbar></Navbar>
    <NuxtPage></NuxtPage>
  </main>
</template>

<style>
:root {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

main {
  width: 100%;
  min-height: 100vh;
}
</style>