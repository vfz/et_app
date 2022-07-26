<template>
<div>
  <section class="timeline-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div v-if="page === 'flight-selection'" class="timeline-wrapper d-flex">
            <div class="timeline-item active">
              <h1 class="timeline-item-title">
                {{title}}
                Выбор рейса
              </h1>
              <div class="timeline-item-underline position-relative">
                <div class="timeline-item-underline-point start"></div>
                <div class="timeline-item-underline-point end"></div>
              </div>
              <div class="timeline-item-description">
                Куда поедем?
              </div>
            </div>
            <div class="timeline-item">
              <h1 class="timeline-item-title">
                Бронирование билета
              </h1>
              <div class="timeline-item-underline position-relative">
                <!--                <div class="timeline-item-underline-point start"></div>-->
              </div>
              <span class="timeline-item-description">
                Оформляем документы
              </span>
            </div>
            <div class="timeline-item">
              <h1 class="timeline-item-title">
                Оплата
              </h1>
              <div class="timeline-item-underline position-relative">
                <div class="timeline-item-underline-point start"></div>
              </div>
              <span class="timeline-item-description">
                Оплачиваем билет
              </span>
            </div>
          </div>
          <div v-if="page === 'ticket-booking'" class="timeline-wrapper d-flex">
            <div class="timeline-item ready">
              <h1 class="timeline-item-title">
                Выбор рейса
              </h1>
              <div class="timeline-item-underline position-relative">
                <div class="timeline-item-underline-point start"></div>
              </div>
              <div class="timeline-item-description">
                Куда поедем?
              </div>
            </div>
            <div class="timeline-item active">
              <h1 class="timeline-item-title">
                Бронирование билета
              </h1>
              <div class="timeline-item-underline position-relative">
                <div class="timeline-item-underline-point start"></div>
                <div class="timeline-item-underline-point end"></div>
              </div>
              <span class="timeline-item-description">
                Оформляем документы
              </span>
            </div>
            <div class="timeline-item">
              <h1 class="timeline-item-title">
                Оплата
              </h1>
              <div class="timeline-item-underline position-relative">
                <div class="timeline-item-underline-point end"></div>
              </div>
              <span class="timeline-item-description">
                Оплачиваем билет
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Timeline",
  props: ['page']
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.timeline-section {
  margin-left: 88px;
  margin-right: 88px;
  .active {
    .timeline-item-title {
      color: $black;
    }
    .timeline-item-underline {
      background-color: $black;
      .timeline-item-underline-point {
        background-color: $black;
      }
    }
    .timeline-item-description {
      color: $black;
    }
  }
  .ready {
    .timeline-item-title {
      color: $blue-active;
    }
    .timeline-item-underline {
      background-color: $blue-active;
      .timeline-item-underline-point {
        background-color: $blue-active;
      }
    }
    .timeline-item-description {
      color: $blue-active;
    }
  }
  .timeline-item {
    @media screen and (max-width: 768px) {
      display: none;
    }
    &-title {
      font-family: $uni;
      font-weight: $bold;
      font-size: 36px;
      color: $deactivate;
      padding-right: 40px;
      @media screen and (max-width: 1011px) {
        font-size: 30px;
      }
      @media screen and (max-width: 894px) {
        font-size: 23px;
      }
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
    &-underline {
      display: block;
      width: 100%;
      height: 1px;
      background-color: $deactivate;
      &-point {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        background-color: $deactivate;
      }
      .start {
        left: -1px;
        bottom: -4px;
      }
      .end {
        right: -1px;
        bottom: -4px;
      }
    }
    &-description {
      margin-top: 7px;
      font-family: $uni;
      font-weight: $regular;
      font-size: 14px;
      color: $deactivate;
    }
  }
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>