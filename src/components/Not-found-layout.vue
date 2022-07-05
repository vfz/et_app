<template>
  <section class="not-found-layout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title-section text-center">
            Упс . . .
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="description-section text-center">
            Простите, но у нас возникли проблемы с поиском страницы, которую Вы запрашиваете.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center">

          <img class="image-section" alt="Запрашиваемая страница не найдена" src="/img/not-found/not-found.svg">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "not-found-layout"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.not-found-layout {
  .title-section {
    @include font($uni,$bold,20px,27px,$base);
    margin-bottom: 16px;
    @media (min-width: 992px) {
      font-size: 36px;
    }
  }
  .description-section {
    @include font($uni,$light,14px,18.9px,$base);
    margin-bottom: 40px;
    @media (min-width: 992px) {
      font-size: 18px;
    }
  }
  .image-section {
    @media (min-width: 992px) {
      width: 285px;
    }
  }
}
</style>