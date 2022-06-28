<template>
  <section class="trips-history-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <TripOrder v-if="!isMobile()"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TripOrder from "@/components/desktop/TripOrder";
export default {
  name: "TripsHistory",
  components: {TripOrder},
  methods: {
    isMobile() {
      return screen.width <= 991;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.trips-history-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-bottom: 42px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>