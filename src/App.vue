<script setup>
import useAutoCount from "./composables/useAutoCount";
import Count from "./components/Count";

const props = defineProps({
  initialCount: {
    type: Number,
    default: 0,
  },
});

const { count } = useAutoCount(props.initialCount);
function reset() {
  count.value = 0;
}
</script>

<template>
  <div>
    <Count :count="count" />
    <button @click="reset">Reset</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
