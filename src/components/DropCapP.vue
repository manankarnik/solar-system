<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <p>
    {{ text }}
  </p>
</template>

<style scoped>
@import "../assets/styles/dropcap.css";
</style>
