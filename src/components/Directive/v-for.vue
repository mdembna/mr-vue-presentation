<template>
  <div>
    <p>Array:</p>
    <ul>
      <li v-for="(item, i) in arr" :key="i">{{ item }}</li>
    </ul>
    <hr />
    <p>Object:</p>
    <ul>
      <li v-for="(item, i) of obj" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        "First array item",
        "Second array item"
      ],
      obj: {
        field_1: "First field",
        field_2: "Second field"
      }
    }
  },
}
</script>