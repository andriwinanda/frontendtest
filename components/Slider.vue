
<template>
  <div class="py-6">
    <div class="container mx-auto px-4 pb-12 lg:pb-16">
      <h1 class="text-2xl lg:text-4xl font-semibold">Browser Our Category</h1>
      <h2 class="text-2xl lg:text-4xl font-semibold text-primary-500">Receipt</h2>
    </div>
    <swiper class="swiper ml-4 lg:ml-12" :options="swiperOption">
      <swiper-slide v-for="(item, i) in slideData" :key="i">
        <div
          :style="`background-color: ${item.theme}`"
          :class="`swiper__slide__wrapper p-10 text-center rounded-lg transform`"
        >
          <img class="mx-auto w-14 h-14" :src="`../${item.image}`" alt="" />
          <h2 class="font-bold pt-2">{{ item.title }}</h2>
          <p class="text-sm">
            {{ item.stock + " item" + (item.stock > 1 ? "s" : "") }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="container mx-auto p-4">
      <div class="text-right">
        <Button rounded color="primary" class="swiper-button-prev-custom">
          <span class="swiper__nav__icon text-primary-500" /> Prev</Button
        >
        <Button rounded color="primary" class="swiper-button-next-custom"
          >Next <span class="swiper__nav__icon text-primary-500"
        /></Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-navigation",
  title: "Navigation",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideData: [
        {
          theme: "#F0FEEB",
          image: "cupcake.png",
          title: "Cupcakes",
          stock: 22,
        },
        {
          theme: "#E6F3F5",
          image: "pizza.png",
          title: "Pizza",
          stock: 25,
        },
        {
          theme: "#EAEEFA",
          image: "kebab.png",
          title: "Kebab",
          stock: 12,
        },
        {
          theme: "#F9EEF3",
          image: "salmon.png",
          title: "Salmon",
          stock: 22,
        },
        {
          theme: "#F3F7D9",
          image: "doughnut.png",
          title: "Doughnut",
          stock: 11,
        },
        {
          theme: "#F0FEEB",
          image: "cupcake.png",
          title: "Cupcakes",
          stock: 22,
        },
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true,
        containerModifierClass: "custom",
        navigation: {
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  .swiper__slide__wrapper {
    transition: ease 0.5s;
    &:hover {
      padding-bottom: 3rem;
      padding-top: 3rem;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.08;
        z-index: -1;
        background-size: 120%;
        background-image: url("../static/background.png");
      }
    }
  }
}
.swiper-button-prev-custom ::after {
  font-family: swiper-icons;
  content: "prev";
}
.swiper-button-next-custom ::after {
  font-family: swiper-icons;
  content: "next";
}
.swiper__nav__icon {
  position: relative;
  width: 24px;
  height: 24px;
  padding: 2px;
  display: inline-block;
  background-color: white;
  border-radius: 100%;
}
</style>