<template>
  <div v-custom-directive>Custom directive (without modifier)</div>
  <div v-custom-directive.start>Custom directive (with modifier)</div>
  <div v-custom-directive="callback">Custom directive (with callback)</div>
</template>
<script>
export default {
  methods: {
    callback(el) {
      if (window.innerWidth > 1000) el.classList.add("big-screen")
      else el.classList.remove("big-screen")
    }
  }
}
</script>
<style>
  .big-screen {
    background-color: rgba(35, 45, 120, 0.4);
    color: rgb(35, 45, 120);
    font-size: large;
    font-weight: bold;
  }
</style>s