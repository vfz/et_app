<template>
<section class="payment-success-layout">
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h1 class="title-section text-center">
        Оплата успешно завершена
      </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <p class="description-section text-center">
        Чек за покупку и билет, будут отправлены на указанную вами почту. Желаем Вам счастливого пути!
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <img class="image-section" alt="успешная оплата" src="img/payment-success/payment-success.svg">
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  name: "Payment-success-layout"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.payment-success-layout {
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