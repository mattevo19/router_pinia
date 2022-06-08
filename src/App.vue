<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router"
const route = useRoute()
</script>

<template>
  <nav>
    <router-link v-if="!(route.path == '/')" to="/">Back Home |</router-link>
    <router-link v-if="!(route.path == '/about')" to="/about"> About |</router-link>
    <router-link v-if="!(route.path == '/chelsea')" to="/chelsea"> Chelsea |</router-link>
  </nav>
  <RouterView />
</template>

<style>
@import "@/styles/index.css";
</style>
