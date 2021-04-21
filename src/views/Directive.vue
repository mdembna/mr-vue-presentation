<template>
  <div>
    <h2>Build-in:</h2>
    <ul>
      <li>
        <h3>v-model</h3>
        <v-model />
        <hr />
      </li>
      <li>
        <h3>v-if</h3>
        <v-if />
        <hr />
      </li>
      <li>
        <h3>v-for</h3>
        <v-for />
        <hr />
      </li>
      <li>
        <h3>v-show</h3>
        <v-show />
        <hr />
      </li>
      <li>
        <h3>v-html</h3>
        <v-html />
        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
import VModel from "@/components/Directive/v-model";
import VIf from "@/components/Directive/v-if";
import VFor from "@/components/Directive/v-for";
import VShow from "@/components/Directive/v-show";
import VHtml from "@/components/Directive/v-html";
export default {
  components: {VHtml, VShow, VFor, VIf, VModel}
}

</script>
