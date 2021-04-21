<template>
  <div>
    <p v-show="show">Pojawiam się i znikam</p>
    <button @click="show = !show">{{ show ? 'Hide' : 'Show'}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>