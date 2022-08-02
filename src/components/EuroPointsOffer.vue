<template>
<section class="euro-points-offer-section">
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <a class="description-section pointer-event" data-bs-toggle="collapse" href="#collapseEuropoints" aria-expanded="false" aria-controls="collapseEuropoints">
        Зарегистрированные пользователи имеют ряд преимуществ...
      </a>
      <div class="collapse" id="collapseEuropoints">
        Одно из них — использование системы “евробаллов”,  с помощью которой, Вы сможете минимизировать свои затраты на приобретение билетов или же полностью оплатить билет. Если Вы ещё не зарегистрированны, Вы можете это сделать <a href="#">здесь.</a>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  name: "EuroPointsOffer"
}
</script>

<style lang="scss" scoped>
.euro-points-offer-section {
  @import "src/assets/variables.scss";
  @import "src/assets/font.scss";

  margin-top: 40px;
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  .description-section {
    @include font($uni,$regular,18px,24.3px,$base);
    a {
      color: $blue-color;
      font-weight: normal;
      text-decoration: underline $blue-color;
    }
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
  .description-section:hover {
    @include animation;
    color: $blue-color;
  }
  .collapse {
    @include font($uni,$light,18px,24.3px,$base);
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
    a {
      color: $blue-color;
      font-weight: normal;
      text-decoration: underline $blue-color;
    }
  }
  .collapsing {
    @include font($uni,$light,18px,24.3px,$base);
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
    a {
      color: $blue-color;
      font-weight: normal;
      text-decoration: underline $blue-color;
    }
  }
}
</style>