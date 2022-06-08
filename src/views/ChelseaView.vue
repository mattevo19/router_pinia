<script setup lang="ts">
import { watchEffect } from "vue"
import { RouterLink } from "vue-router"
import { useChelseaStore } from "@/stores/chelsea"

const chelseaStore = useChelseaStore()

watchEffect(() => {
  try {
    chelseaStore.getData()
  } catch (error) {
    console.error
  }
})
</script>

<template>
  <h1>Chelsea Page</h1>

  <router-link
    v-for="player in chelseaStore.playerList"
    :key="player.id"
    :to="{ name: 'player.show', params: { id: player.id } }"
  >
    <p>{{ player.first_name + " " + player.last_name }}</p>
  </router-link>

  <img :src="chelseaStore.badgeURL" alt="" style="height: 100px" />
</template>
