<template>
  <div>
    <nav class="container mx-auto flex items-center p-4">
      <div class="lg:w-1/5 w-1/2 flex items-center text-white mr-6">
        <a href="/" class="logo block">
          <img class="logo__img" src="../static/logo-elemes.png" alt="" />
        </a>
      </div>
      <div class="lg:w-3/5 hidden lg:block flex text-center">
        <div v-for="item in navMenu" :key="item.title" class="relative inline-block">
          <a :href="item.url" class="px-3 hover:text-gray-400">
            {{ item.title }}
          </a>
          <span v-if="item.badge" class="absolute bottom-5 right-0  px-2 py-1 text-xs leading-none text-red-100 bg-red-500 rounded-full"><small>{{item.badge}}</small></span>
        </div>
      </div>
      <div class="lg:w-1/5 w-1/2 align-middle block text-right">
        <a href="#" class="hidden lg:inline-block hover:text-gray-400 px-3">
          Masuk
        </a>
        <Button rounded color="primary">Daftar Sekarang</Button>
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
          title:"Home",
          url: "#",
          badge: ""
        },
        {
          title:"About",
          url: "#",
          badge: ""
        },
        {
          title:"Promotions",
          url: "#",
          badge: "HOT"
        },
        {
          title:"Blogs",
          url: "#",
          badge: ""
        },
        {
          title:"Contact Us",
          url: "#",
          badge: ""
        }
      ]
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