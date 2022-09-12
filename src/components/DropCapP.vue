<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <p>
    {{ text }}
  </p>
</template>

<style scoped>
@import "../styles/dropcap.css";
</style>
