<template>
  <div class="lg:hidden block bg-white shadow fixed bottom-0 w-full z-10">
    <nav class="container mx-auto flex items-center p-2">
      <div class="w-1/3 text-center" v-for="item in navMenu" :key="item.title">
        <a :href="item.url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-sm text-gray-500">{{ item.title }}</p>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navMenu: [
        {
          title: "Home",
          url: "#",
          badge: "",
        },
        {
          title: "Promotions",
          url: "#",
          badge: "HOT",
        },
        {
          title: "Others",
          url: "#",
          badge: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.logo {
  .logo__img {
    width: 150px;
  }
}
</style>