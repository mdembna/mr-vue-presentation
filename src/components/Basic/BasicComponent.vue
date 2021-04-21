<template>
  <div>
    {{ greeting }}, {{ companyName }}!
  </div>
</template>
<script>
export default {
  props: {
    companyName: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {
      greeting: "Hello"
    }
  },
  beforeCreate() {
    console.log("Child - beforeCreated hook")
  },
  created() {
    console.log("Child - created hook")
  },
  beforeMount() {
    console.log("Child - beforeMount hook")
  },
  mounted() {
    console.log("Child - mounted hook")
  },
  beforeUpdate() {
    console.log("Child - beforeUpdate hook")
  },
  updated() {
    console.log("Child - updated hook")
  },
  beforeUnmount() {
    console.log("Child - beforeUnmount hook")
  },
  unmounted() {
    console.log("Child - unmounted hook")
  },
}

</script>
<styel scoped>

</styel>