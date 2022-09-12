<script setup>
import DropCapP from "../components/DropCapP.vue";
const props = defineProps(["id", "title", "backgroundImage", "article"]);
</script>

<template>
  <section :id="id" :style="{ 'background-image': backgroundImage }">
    <div id="container">
      <h1>{{ title }}</h1>
      <div v-for="(a, i) in article" :key="i">
        <h2>{{ a.heading }}</h2>
        <hr />
        <div id="text-box">
          <DropCapP :text="a.text[0]" />
          <p v-for="(p, i) in a.text.slice(1)" :key="i">{{ p }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "../styles/article.css";
</style>
