<template>
<section class="current-points-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Евробаллы
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="current-value-points">
          На данный момент у Вас
          <div class="current-value-points-data">
            3 650
          </div>
          <div class="current-value-points-europoints">
            евробаллов
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "CurrentPoints"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.current-points-section {
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
  }
  .current-value-points {
    @include font($uni,$regular,18px,24.3px,$base);
    &-data, &-europoints {
      color: $blue-active;
    }
  }
}
</style>