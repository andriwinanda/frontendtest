<template>
  <div class="rating p-4 px-6">
    <article class="flex space-x-4">
      <img
        :src="`../${rating.imageUrl}`"
        alt=""
        class="flex-none w-14 h-14 lg:w-20 lg:h-20 rounded-lg"
      />
      <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <p class="text-sm lg:text-lg font-semibold text-black">
          {{ rating.title }}
        </p>
        <small>{{ rating.category }}</small>
        <Stars :stars="rating.stars"/>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: ["rating"],
};
</script>
<style lang="scss" scoped>
.rating {
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(11px);
}
</style>