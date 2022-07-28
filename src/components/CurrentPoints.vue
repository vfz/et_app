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
      <div class="col-12 col-md-12 d-flex flex-wrap align-items-center">
        <div class="current-value-points d-flex">
          На данный момент у Вас &nbsp;
          <div class="current-value-points-data">
            3 650 &nbsp;
          </div>
          <div class="current-value-points-europoints">
            евробаллов
          </div>
        </div>
<!--        Использовать баллы кнопка-->
        <div class="use-points-button">
          <button type="button" class="btn btn-primary">
            Использовать
          </button>
        </div>
<!--        Вернуть баллы кнопка-->
        <div class="turn-back-points-button d-none">
          <button type="button" class="btn btn-primary">
            Вернуть
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
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    margin-left: 8px;
    margin-right: 8px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 24.3px;
      margin-bottom: 14px;
    }
  }
  .current-value-points {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-right: 40px;
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 16px;
      margin-right: 0;
    }
    @media screen and (max-width: 576px) {
      flex-wrap: wrap;
      font-size: 14px;
      line-height: 18.9px;
    }
    &-data, &-europoints {
      color: $blue-active;
    }
  }
  .use-points-button {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    .btn {
      @include font($uni,$regular,16px,21.6px,$white);
      padding: 11px 47px;
      border-radius: 8px;
      border: none;
      color: $white;
      background-color: $blue-active;
      text-transform: none;
      filter: drop-shadow(0px 8px 12px rgba(161, 159, 255, 0.56));
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
}
</style>