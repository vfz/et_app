<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-end">
      <div class="paths-final-amount d-inline-block position-relative">
        <div class="old-amount position-absolute">14 000₽</div>
        Итого <span>11 000 ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paths-final-amount"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.paths-final-amount {
  margin-top: 24px;
  @include font($uni,$bold,20px,27px,$blue-active);
  text-transform: uppercase;
  .old-amount {
    @include font($uni,$bold,14px,18.9px,$secondary);
    text-decoration: line-through;
    top: -15px;
    right: 0;
  }
}
</style>