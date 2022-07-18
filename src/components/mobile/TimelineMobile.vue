<template>
  <div>
    <section class="timeline-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div v-if="currentRouteName === 'Flight-selection-search'" class="timeline-wrapper d-flex">
              <div class="timeline-item active">
                <h1 class="timeline-item-title">
                  Выбор рейса
                </h1>
                <div class="timeline-item-description">
                  Шаг 1
                </div>
              </div>
            </div>
            <div v-if="currentRouteName === 'Ticket-booking'" class="timeline-wrapper d-flex">
              <div class="timeline-item ready">
                <h1 class="timeline-item-title">
                  Бронирование билета
                </h1>
                <div class="timeline-item-description">
                  шаг 2
                </div>
              </div>
<!--              <div class="timeline-item">-->
<!--                <h1 class="timeline-item-title">-->
<!--                  Оплата-->
<!--                </h1>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TimelineMobile",
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.timeline-section {
  margin-top: 40px;
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
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
    &-title {
      font-family: $uni;
      font-weight: $bold;
      font-size: 30px;
      color: $deactivate;
      padding-right: 40px;
    }
    &-description {
      margin-top: 7px;
      font-family: $uni;
      font-weight: $light;
      font-size: 14px;
      color: $base;
    }
  }
}
</style>