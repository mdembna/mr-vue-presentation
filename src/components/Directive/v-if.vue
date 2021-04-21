<template>
  <div>
    <p v-if="firstCondition">First option visible</p>
    <p v-else-if="secondCondition">Second option visible </p>
    <p v-else>Default text </p>

    <input type="checkbox" v-model="firstCondition">
    <label>First condition</label>
    <input type="checkbox" v-model="secondCondition">
    <label>Second condition</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstCondition: true,
      secondCondition: false
    }
  },
}
</script>