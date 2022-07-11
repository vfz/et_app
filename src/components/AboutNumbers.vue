<template>
  <section class="about-numbers-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-section">
            ЕвроТранс в цифрах
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
      </div>
    </div>
    <div class="container-lg">
      <div class="row align-items-end">
        <div class="col-12 col-lg">
          <div class="number">
            10
          </div>
          <h3 class="title">
            лет в пассажирских
            перевозках
          </h3>
        </div>
        <div class="col-12 col-lg">
          <div class="number">
            25
          </div>
          <h3 class="title">
            автобусов в
            автопарке
          </h3>
        </div>
        <div class="col-12 col-lg">
          <div class="number">
            167
          </div>
          <h3 class="title">
            Excepteur sint
            occaecat
          </h3>
        </div>
        <div class="col-12 col-lg">
          <div class="number">
            3 658
          </div>
          <h3 class="title">
            Duis aute irure
            dolor
          </h3>
        </div>
      </div>
      <div class="row mt-4 align-items-end">
        <div class="col-12 col-lg">
          <div class="number">
            10
          </div>
          <h3 class="title">
            лет в пассажирских
            перевозках
          </h3>
        </div>
        <div class="col-12 col-lg">
          <div class="number">
            25
          </div>
          <h3 class="title">
            автобусов в
            автопарке
          </h3>
        </div>
        <div class="col-12 col-lg">
          <div class="number">
            167
          </div>
          <h3 class="title">
            Excepteur sint
            occaecat
          </h3>
        </div>
        <div class="col-12 col-lg">
          <p class="more">
            Более
          </p>
          <div class="number">
            186 687
          </div>
          <h3 class="title">
            купленных билетов
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutNumbers"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.about-numbers-section {
  background-color: #0D1883;
  padding: 40px 88px 104px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$white);
    margin-bottom: 32px;
  }
  .row:first-child {
    margin-top: 0;
  }
  .row {
    margin-top: 32px;
    .col-12 {
      .number {
        @include font($uni,$bold,48px,64.8px,$white);
        margin-bottom: 8px;
      }
      .title {
        @include font($uni,$light,18px,24.3px,$white);
      }
      .more {
        @include font($uni,$light,18px,24.3px,#B5BDDB);
      }
    }
  }
}
</style>