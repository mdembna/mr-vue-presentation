<template>
  <div>
    <div v-html="htmlStr"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlStr: "<p>Very cool image</p><img src='https://static.antyweb.pl/wp-content/uploads/2018/01/dogecoin.jpg'>"
    }
  }
}
</script>