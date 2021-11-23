<template>
  <a href="#"
    :class="[
      `inline-block text-sm px-4 py-2 border bg-${color}-600 text-${color}-200 hover:border-transparent  mt-4 lg:mt-0`,
      { 'rounded-full': rounded },
    ]"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
    },
    rounded: Boolean,
    
  },
};
</script>
