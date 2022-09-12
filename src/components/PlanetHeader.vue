<script setup>
import ScrollDownButton from "./ScrollDownButton.vue";
const props = defineProps(["model", "modelAlt", "info"]);
</script>

<script>
import("@google/model-viewer");
</script>

<template>
  <section id="top">
    <div id="container">
      <div class="box-container">
        <div class="box" v-for:="(d, i) in info.left" :key="i">
          <h3><span v-html="d.heading"></span></h3>
          <p><span v-html="d.text"></span></p>
        </div>
      </div>
      <model-viewer
        :src="model"
        :alt="modelAlt"
        bounds="tight"
        auto-rotate
        camera-controls
      ></model-viewer>
      <div class="box-container">
        <div class="box" v-for:="(d, i) in info.right" :key="i">
          <h3><span v-html="d.heading"></span></h3>
          <p><span v-html="d.text"></span></p>
        </div>
      </div>
    </div>
    <ScrollDownButton to="#mid" width="61.8%" />
  </section>
</template>

<style scoped>
@import "../assets/styles/planetheader.css";
</style>
