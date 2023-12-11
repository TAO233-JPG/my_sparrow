<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps, onMounted, inject } from "vue";

const props = defineProps(["source"]);
const sp = inject("sp");
const fn = Function(props.source);
onMounted(() => {
  fn();
});
</script>
