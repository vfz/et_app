<template>
<div class="row europoints-trips-history-section">
  <div class="col-12">
    <h2 class="title-section">
      История заказов
    </h2>
  </div>
</div>
</template>

<script>
export default {
  name: "EuropointsTripsHistory"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.europoints-trips-history-section {
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
}
</style>