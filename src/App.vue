<script setup lang="ts">
import { RouterView } from 'vue-router'

document.body.classList.add('bg-white')
document.body.classList.add('dark:bg-zinc-950')

</script>

<template>
  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <RouterView />
</template>

<style scoped></style>
