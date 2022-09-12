<script setup>
const props = defineProps(["to", "width"]);
</script>

<template>
  <div>
    <a :href="to" :style="{ width: width }"
      ><img src="images/down-arrow.png" alt="Down arrow"
    /></a>
  </div>
</template>

<style scoped>
a {
  box-sizing: border-box;
  margin: auto;
  font-weight: 900;
  text-align: center;
  padding: 20px;
  display: block;
  background-color: rgb(32, 32, 32);
}

a img {
  width: 20px;
}

a:hover {
  background-color: rgb(88, 88, 88);
}
</style>
