<script>
import useAutoCount from "./components/useAutoCount";

export default {
  name: "App",
  setup() {
    const { count } = useAutoCount(0);
    return { count };
  },
  methods: {
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <div>
    <p>{{ count }}</p>
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
