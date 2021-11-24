
<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl lg:text-4xl font-semibold">Browser Our Trending</h1>
      <h2 class="text-2xl lg:text-4xl font-semibold text-primary-500">Receipt</h2>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 py-12 lg:py-16 receipt">
        <div
          v-for="(item, i) in receipt"
          :key="i"
          :class="`receipt__card p-10 bg-${item.theme}-200 rounded-lg space-y-2 shadow-lg relative z-0`"
        >
          <img
            class="w-28 h-28 mb-4 rounded-lg"
            :src="`../${item.image}`"
            alt=""
          />
          <h1 class="text-2xl font-bold">{{ item.title }}</h1>
          <p class="text-lg text-primary-500">
            {{ item.category }}
          </p>
          <Stars :stars="item.stars" />
        </div>
      </div>
      <div class="text-center hidden lg:block">
        <Button rounded color="primary">ALL Receipt</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receipt: [
        {
          theme: "teal",
          image: "pexels-brett-jordan-842519 1.png",
          title: "Pizza Paperoni",
          category: "Pizza",
          stars: 4,
        },
        {
          theme: "teal",
          image: "pexels-daria-shevtsova-1260968 1.png",
          title: "Pizza Meat",
          category: "Pizza",
          stars: 3,
        },
        {
          theme: "blue",
          image: "pexels-nishant-aneja-2955819 1.png",
          title: "Doner Kebab",
          category: "Kebab",
          stars: 5,
        },
        {
          theme: "raspberry",
          image: "pexels-olga-lioncat-7245464 1.png",
          title: "Salmon Roll",
          category: "Salmon",
          stars: 4,
        },
        {
          theme: "primary",
          image: "pexels-oleg-magni-1908674 1.png",
          title: "Cupcake Choco",
          category: "Cupcake",
          stars: 4,
        },
        {
          theme: "lime",
          image: "pexels-alena-shekhovtcova-6940978 1.png",
          title: "Doughnut Milk",
          category: "Doughnut",
          stars: 5,
        },
        {
          theme: "lime",
          image: "pexels-karley-saagi-2064449 1.png",
          title: "Doughnut Unicorn",
          category: "Doughnut",
          stars: 4,
        },
        {
          theme: "blue",
          image: "pexels-polina-tankilevitch-6419736 1.png",
          title: "Kathi Kebab",
          category: "Kebab",
          stars: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.receipt {
  .receipt__card {
    transition: ease 0.5s;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.08;
        background-size: 100%;
        background-image: url("../static/background.png");
      }
    }
  }
}
</style>