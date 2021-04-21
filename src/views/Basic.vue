<template>
  <div>
  <basic-component company-name="Mobile Reality"/>
  </div>
</template>
<script>
import BasicComponent from "@/components/Basic/BasicComponent";
export default {
  components: {BasicComponent},
  beforeCreate() {
    console.log("Parent - beforeCreated hook")
  },
  created() {
    console.log("Parent - created hook")
  },
  beforeMount() {
    console.log("Parent - beforeMount hook")
  },
  mounted() {
    console.log("Parent - mounted hook")
  },
  beforeUpdate() {
    console.log("Parent - beforeUpdate hook")
  },
  updated() {
    console.log("Parent - updated hook")
  },
  beforeUnmount() {
    console.log("Parent - beforeUnmount hook")
  },
  unmounted() {
    console.log("Parent - unmounted hook")
  },
}
</script>
<style scoped>

</style>