<script lang="ts" setup>
import { useChelseaStore } from "@/stores/chelsea"
import { computed } from "vue"
const chelseaStore = useChelseaStore()

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const player = computed(() => {
  return chelseaStore.playerList.find((player) => +player.id === +props.id)
})
</script>

<template>
  <div>
    <p>{{ player }}</p>
  </div>
</template>
