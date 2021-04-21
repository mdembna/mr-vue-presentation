<template>
  <div>
    <watcher :count="count" />
    <button @click="count ++">Increase</button>
    <button @click="count --">Decrease</button>
  </div>
</template>
<script>
  import Watcher from "@/components/Watcher/watcher";
  export default {
    components: {Watcher},
    data() {
      return {
        count: 0
      }
    }
  }
</script>