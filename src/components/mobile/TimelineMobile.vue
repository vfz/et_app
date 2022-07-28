<template>
  <div>
    <section class="timeline-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="timeline-wrapper d-flex">
              <div class="timeline-item active">
                <h1 class="timeline-item-title">
                  {{title}}
                </h1>
                <div class="timeline-item-description">
                  {{description}}
                </div>
              </div>
            </div>
<!--            <div class="timeline-wrapper d-flex">-->
<!--              <div class="timeline-item ready">-->
<!--                <h1 class="timeline-item-title">-->
<!--                  Бронирование билета-->
<!--                </h1>-->
<!--                <div class="timeline-item-description">-->
<!--                  шаг 2-->
<!--                </div>-->
<!--              </div>-->
<!--&lt;!&ndash;              <div class="timeline-item">&ndash;&gt;-->
<!--&lt;!&ndash;                <h1 class="timeline-item-title">&ndash;&gt;-->
<!--&lt;!&ndash;                  Оплата&ndash;&gt;-->
<!--&lt;!&ndash;                </h1>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
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
  },
  props: ['title', 'description']
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