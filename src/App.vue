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
    <div
      class="
        p-6
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        flex
        items-center
        space-x-4
      "
    >
      <div class="flex-shrink-0">
        <img
          class="h-12 w-12"
          @dblclick="reset"
          src="https://vitejs.dev/logo.svg"
        />
      </div>
      <div>
        <div class="text-xl font-medium text-black">Vite & Tailwind</div>
        <p class="text-gray-500">You have a {{ count }} message!</p>
      </div>
    </div>

    <button
      @click="reset"
      class="
        mt-5
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
    >
      Reset
    </button>
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
