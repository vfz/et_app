<template>
<div class="row">
  <div class="col">
    <div class="stats">
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
  <div class="col"></div>
  <div class="col"></div>
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

.stats {
  &-title {
    @include font($uni,$regular,14px,18.9px,$base);
    text-align: center;
    margin-bottom: 37px;
  }
  &-number {
    @include font($uni,$bold,24px,32.4px,$blue-active);
    margin-bottom: 16px;
    text-align: center;
  }
  &-footer {
    @include font($uni,$regular,14px,18.9px,#B5BDDB);
    text-align: center;
  }
}
</style>