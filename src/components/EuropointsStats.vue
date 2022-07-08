<template>
<div class="row europoints-stats-section">
  <div class="col-12 col-md">
    <div class="stats d-flex flex-column justify-content-between align-items-center">
      <h3 class="stats-title">
        За прошлый месяц
      </h3>
      <div class="stats-number stats-plus">
        +440
      </div>
      <div class="stats-footer">
        Евробаллов
      </div>
    </div>
  </div>
  <div class="col-12 col-md">
    <div class="stats d-flex flex-column justify-content-between align-items-center">
      <h3 class="stats-title">
        На данный момент
      </h3>
      <div class="stats-number stats-current">
        440
      </div>
      <div class="stats-footer">
        Евробаллов
      </div>
    </div>
  </div>
  <div class="col-12 col-md">
    <div class="stats d-flex flex-column justify-content-between align-items-center">
      <h3 class="stats-title">
        За весь период
      </h3>
      <div class="stats-number stats-amount">
        10 550
      </div>
      <div class="stats-footer">
        Евробаллов
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "EuropointsStats"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.europoints-stats-section {
  margin-bottom: 47px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
  .stats {
    height: 100%;
    @media screen and (max-width: 767px) {
      margin-bottom: 32px;
      height: auto;
    }
    &-title {
      @include font($uni,$regular,14px,18.9px,$base);
      text-align: center;
      margin-bottom: 37px;
      @media screen and (max-width: 767px) {
        margin-bottom: 24px;
      }
    }
    &-number {
      @include font($uni,$bold,24px,32.4px,$blue-active);
      margin-bottom: 16px;
      text-align: center;
    }
    &-current {
      font-size: 48px;
      line-height: 64.8px;
      color: $base;
      @media screen and (max-width: 767px) {
        margin-bottom: 36px;
        font-size: 36px;
      }
    }
    &-amount {
      color: $secondary;
    }
    &-footer {
      @include font($uni,$regular,14px,18.9px,#B5BDDB);
      text-align: center;
    }
  }
}
</style>