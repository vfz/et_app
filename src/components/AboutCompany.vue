<template>
<section class="about-company-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-7 col-xl-7">
        <p class="description-section">
          Компания «Евротранс» занимается пассажирскими
          междугородными перевозками.
          Мы соединили автобусными маршрутами более 20 населенных
          пунктов. Каждый день мы перевозим сотни пассажиров, сокращая
          расстояния и делая перевозки доступными для всех.
          Наши принципы – скорость и комфорт пассажиров. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="quote d-flex justify-content-end">
          <q>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</q>
        </p>
      </div>
      <div class="col-3 col-xl-3 d-flex justify-content-center">
        <img class="director" src="/img/about/director.png" alt="руководитель компании">
      </div>
      <div class="col-2 col-xl-2">
        <div class="about-director d-flex flex-column justify-content-center text-center">
          <h3 class="title">
            Максим Яцунов
          </h3>
          <div class="border-line align-self-center"></div>
          <p class="description">
            10 лет в автоперевозках
          </p>
          <div class="border-line align-self-center"></div>
          <p class="job">
            Исполнительный директор
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "AboutCompany"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.about-company-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .description-section {
    @include font($uni,$light,18px,24.3px,#000000);
    margin-bottom: 24px;
  }
  .quote {
    @include font($uni,$regular,18px,24.3px,#000000);
    width: 100%;
    text-align: right;
    q {
      max-width: 574px;
    }
  }
  .director {
    max-width: 349px;
  }
  .about-director {
    @include font($uni,$regular,18px,24.3px,$base);
    .border-line {
      height: 102px;
      width: 1px;
      background: #C4C4C4;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .title {
      font-weight: $bold;
      font-size: 24px;
      line-height: 32.4px;
      margin-bottom: 0;
    }
    .description, .job {
      margin-bottom: 0;
    }
    .job {
      font-weight: $light;
    }
  }
}
</style>