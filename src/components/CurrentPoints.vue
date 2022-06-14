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
      <div class="col-12 d-flex align-items-center">
        <div class="current-value-points d-flex">
          На данный момент у Вас &nbsp;
          <div class="current-value-points-data">
            3 650 &nbsp;
          </div>
          <div class="current-value-points-europoints">
            евробаллов
          </div>
        </div>
        <div class="use-points-button">
          <button type="button" class="btn btn-primary">
            Использовать
          </button>
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
  margin-top: 40px;
  margin-left: 88px;
  margin-right: 88px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
  }
  .current-value-points {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-right: 40px;
    &-data, &-europoints {
      color: $blue-active;
    }
  }
  .btn {
    @include font($uni,$regular,16px,21.6px,$white);
    padding: 11px 47px;
    border-radius: 8px;
    border: none;
    color: $white;
    background-color: $blue-active;
    text-transform: none;
  }
}
</style>