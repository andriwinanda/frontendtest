<template>
  <button
    :class="[
      `inline-block text-sm px-4 py-2 border ${
        color == 'primary' ? 'bg-primary-500 text-primary-200':'bg-gray-200 text-gray-500' 
      }  hover:border-transparent hover:shadow-lg focus:outline-none`,
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
  methods: {
    background(color) {
      return `bg-${color}-500 text-${color}-200`;
    },
    backgroundLight(color) {
      return `bg-${color}-200 text-${color}-500`;
    },
  },
};
</script>
