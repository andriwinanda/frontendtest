<template>
  <div class="welcome-banner">
    <div class="align-middle container mx-auto px-4">
      <div class="flex flex-wrap py-8 lg:py-48">
        <div class="w-full lg:w-2/5 pb-10">
          <h1 class="lg:text-6xl text-5xl font-semibold text-primary-500">
            Good Food Us <br />
            Good Mood
          </h1>
        </div>
        <div class="w-full lg:w-3/5 pb-14 relative">
          <img
            class="
              welcome-banner__img
              rounded-full
              w-60
              md:w-auto
              block
              lg:absolute
              -top-32
              right-0
            "
            src="../static/meals.png"
            alt=""
          />
          <Rating :rating="rating" class="absolute bottom-8 lg:-bottom-48 right-3 lg:right-48" />
        </div>
        <div class="w-full lg:w-2/5">
          <p class="text-gray-500 pb-5">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <Button rounded color="primary">Daftar Sekarang</Button>
          <Button rounded color="gray" light>About Us</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      rating: {
        imageUrl: 'meals.png',
        title: 'Green Salad Tomato',
        category: 'Tomato',
        rating: 4

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome-banner {
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: -1;
    background-size: 200%;
    background: url("../static/background.png");
  }
  .welcome-banner__img {
    border: 30px solid rgba(0, 0, 0, 0.05);
  }
}
</style>