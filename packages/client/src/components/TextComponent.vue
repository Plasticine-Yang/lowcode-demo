<script setup lang="ts">
interface Props {
  content: string;
}

defineProps<Props>();
</script>

<template>
  <span>{{ content }}</span>
</template>

<style scoped lang="scss">
</style>
