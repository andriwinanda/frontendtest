<template>
  <button href="#"
    :class="[
      `inline-block text-sm px-4 py-2 border bg-${color}-${light? '200':'500'} text-${color}-${light? '500':'200'} hover:border-transparent focus:outline-none`,
      { 'rounded-full': rounded },
    ]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
    },
    light: Boolean,
    rounded: Boolean,
    
  },
};
</script>
