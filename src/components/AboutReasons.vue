<template>
<section class="about-reasons-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Мы заботимся о Вас
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-xxl-7">
        <div class="description-section">
          <p>
            Excepteur sint occaecat  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="reasons-block">
          <div class="row">
            <div class="col-12">
              <h3 class="title-block">
                Профессиональные водители
              </h3>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Опыт
              </h4>
              <p class="description-reason">
                Все наши водители, имеют опыт междугородных перевозок от 10 лет
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Режим труда
              </h4>
              <p class="description-reason">
                График работы построен так, чтобы избежать переутомления и переработок
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Медосмотр
              </h4>
              <p class="description-reason">
                Водители перед рейсом, проходят медицинский осмотр
              </p>
            </div>
          </div>
        </div>
        <div class="reasons-block">
          <div class="row">
            <div class="col-12">
              <h3 class="title-block">
                Комфорт в поездке
              </h3>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Безопасность
              </h4>
              <p class="description-reason">
                Современные автобусы, с грамотным
                техническим обслуживанием.
                Есть дежурный автобус с водителем на
                случай нештатных ситуаций
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Удобность
              </h4>
              <p class="description-reason">
                Комфортабельные кресла, большое
                расстояние между рядами.
                Розетки для зарядки гаджетов, остановки в поездке каждые 4 часа
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Скорость
              </h4>
              <p class="description-reason">
                20 часов до Москвы – лучший
                результат среди ставропольских
                перевозчиков
              </p>
            </div>
          </div>
        </div>
        <div class="reasons-block">
          <div class="row">
            <div class="col-12">
              <h3 class="title-block">
                Современный автотранспорт
              </h3>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Комфорт
              </h4>
              <p class="description-reason">
                Setra – признанный лидер по
                комфорту для пассажиров
                среди мировой автобусной
                техники
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Исправность
              </h4>
              <p class="description-reason">
                Техника проходит регулярные
                осмотры и плановое
                техническое обслуживание
              </p>
            </div>
            <div class="col">
              <h4 class="title-reason">
                Чистота
              </h4>
              <p class="description-reason">
                Мойка автобусов и чистка
                салонов дважды – до и после
                рейса.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-xxl-5">
        <img src="/img/about/reasons.svg" alt="Мы заботимся о вас" class="img-section">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "AboutReasons"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.about-reasons-section {
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
  }
  .description-section {
    @include font($uni,$light,18px,24.3px,#000);
    margin-bottom: 32px;
    p {
      margin-bottom: 0;
    }
  }
  .reasons-block {
    .title-block {
      @include font($uni,$bold,18px,24.3px,$base);
      margin-bottom: 24px;
    }
    .title-reason {
      @include font($uni,$bold,18px,24.3px,$secondary);
      margin-bottom: 16px;
    }
    .description-reason {
      @include font($uni,$light,18px,24.3px,#000);
    }
  }
  .img-section {
    max-width: 652px;
    width: 100%;
  }
}
</style>