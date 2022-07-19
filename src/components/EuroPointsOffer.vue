<template>
<section class="euro-points-offer-section">
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <p class="description-section">
        <span>Зарегистрированные пользователи имеют ряд преимуществ.</span> Одно из них — использование системы “евробаллов”,  с помощью которой, Вы сможете минимизировать свои затраты на приобретение билетов или же полностью оплатить билет. Если Вы ещё не зарегистрированны, Вы можете это сделать <a href="#">здесь.</a>
      </p>
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
    @include font($uni,$light,18px,24.3px,$base);
    span {
      color: $secondary;
      font-weight: normal;
    }
    a {
      color: $blue-color;
      font-weight: normal;
      text-decoration: underline $blue-color;
    }
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>