<template>
  <div>
    <input v-model="value"/>
    <button @click="value = 'Dogecoin to the moon!'">Change value!</button>
    <p> Current value: {{ value }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
</script>