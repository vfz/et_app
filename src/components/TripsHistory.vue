<template>
  <section class="trips-history-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TripsHistory"
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.trips-history-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>