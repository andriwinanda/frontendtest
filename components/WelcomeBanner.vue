<template>
  <div class="welcome-banner">
    <div class="align-middle container mx-auto p-6">
      <!-- <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5 py-12 lg:py-32">
          <h1 class="lg:text-6xl text-5xl font-semibold text-primary-600 pb-5">
            Good Food Us <br />
            Good Mood
          </h1>
          <p class="hidden lg:block text-gray-500 pb-5">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <Button rounded color="primary">Daftar Sekarang</Button>
        </div>
        <div class="w-full lg:w-3/5">
          <img class="welcome-banner__img" src="../static/meals.png" alt="" />
        </div>
      </div> -->

      <div class="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
         <h1 class="lg:text-6xl text-5xl font-semibold text-primary-600">
            Good Food Us <br />
            Good Mood
          </h1>
        </div>
        <div class="col-start-1 lg:col-start-2">
         <img class="welcome-banner__img block lg:absolute" src="../static/meals.png" alt="" />
        </div>
        <div>
          <p class="text-gray-500 pb-5">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <Button rounded color="primary">Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.welcome-banner {
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.01;
    z-index: -1;
    background-repeat: no-repeat;
    background: url("../static/background.png");
  }
  .welcome-banner__img {
    width: 400px;
    border-radius: 50%;
    border: 40px solid rgba(0, 0, 0, 0.1);
  }
}
</style>