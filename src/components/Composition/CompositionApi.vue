<template>
  <div>
<!--    First functionality-->
   <h2>Items:</h2>
    <ul v-if="items.length">
      <li v-for="(item) in items" :key="item.index">{{ item.name }} ({{ item.type }})</li>
    </ul>
    <p v-else> No items yet </p>
    <input v-model="newItem"/><button @click="addItem">Add</button>

    <hr />

<!--    Second functionality-->
    <p>Current time: {{ currentTime }}</p>
  </div>
</template>
<script>
import { firstFunctionality, secondFunctionality } from "@/components/Composition/functionality";

export default {
  props: {
    itemType: {
      type: String,
      default: "default type"
    }
  },
  setup(props) {
    const { newItem, items, addItem } = firstFunctionality(props);
    const { currentTime } = secondFunctionality();

    return {
      newItem,
      items,
      addItem,
      currentTime
    }
  }
}
</script>