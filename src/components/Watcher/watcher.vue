<template>
  <div>
    <p>Current count: {{ count }}</p>
    <p> {{ message }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        message: "No changes to value"
      }
    },
    watch: {
      count(value, oldValue) {
        this.message = value > oldValue ? 'Value has increased!' : 'Value has decreased';
      }
    }
  }
</script>