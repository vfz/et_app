<template>
  <section class="thereTable-section">
    <div class="container-fluid">
      <div class="row">
        <h2 class="title-table">
          Туда <span class="title-table-counter">(3)</span>
        </h2>
      </div>
      <div class="row">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThereTable"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.thereTable-section {
  margin-top: 41px;
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  .title-table {
    @include font($uni,$bold, 24px, 32.4px, $black);
    &-counter {
      font-size: 18px;
      color: $deactivate;
    }
  }
}
</style>