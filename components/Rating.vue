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
        <div class="flex space-x-1">
          <div v-for="item in 5" :key="item">
            <span
              :class="`text-${
                item <= rating.rating ? 'yellow-500' : 'gray-400'
              }`"
            >
              <svg width="16" height="20" fill="currentColor">
                <path
                  d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
                />
              </svg>
            </span>
          </div>
        </div>
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