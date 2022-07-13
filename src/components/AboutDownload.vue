<template>
<section class="about-download-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Мы стали ещё ближе!
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-7">
        <p class="description-section">
          Для удобства наших пассажиров и сокращения времени на
          оформление билетов, мы создали сервис бронирования. Удобный,
          организованный и быстрый.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a class="btn btn-lg btn-primary" href="#">
          Скачать
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "AboutDownload"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.about-download-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
    margin-top: 40px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 24.3px;
      margin-bottom: 16px;
    }
  }
  .description-section {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 32px;
    @media screen and (max-width: 991px) {
      font-size: 14px;
      line-height: 18.9px;
      margin-bottom: 16px;
    }
  }
  .btn {
    @include font($uni,$regular,24px,32.4px,$white);
    border-radius: 16px;
    padding: 24px 98px;
    @media screen and (max-width: 575px) {
      width: 100%;
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      line-height: 21.6px;
    }
  }
}

</style>