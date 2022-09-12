<script setup>
const props = defineProps(["href", "src", "name", "desc"]);
</script>

<template>
  <div class="card">
    <router-link :to="href">
      <img :src="src" :alt="name" style="width: 50%" />
      <div class="text-box">
        <h4>
          <b>{{ name }}</b>
        </h4>
        <p>{{ desc }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
@import "../assets/styles/card.css";
</style>
