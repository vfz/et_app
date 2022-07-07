<template>
<div class="row europoints-about-section">
  <div class="col-12">
    <p class="europoints-description">
      Евробаллы — это полезная бонусная программа, с помощью которой, Вы сможете минимизировать свои затраты на приобретение билетов или же полностью оплатить билет. Покупая билеты на нашем сайте или с помощью нашего приложения, Вы получаете евробаллы (10% от стоимости билета). Евробаллы начисляются после завершения поездки. Срок жизни евробаллов — неограничен.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "EuropointsAbout"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.europoints-about-section {
  margin-bottom: 32px;
  .europoints-description {
    @include font($uni,$light,18px,24.3px,$base);
  }
}
</style>