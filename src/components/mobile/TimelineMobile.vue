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
    margin-left: 8px;
    margin-right: 8px;
  }
  .timeline-item {
    &-title {
      @include font($uni,$bold,20px,27px,$base);
      margin-bottom: 4px;
    }
    &-description {
      @include font($uni,$light,11px,14.85px,$base);
    }
  }
}
</style>