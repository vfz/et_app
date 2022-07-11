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
      <div class="col-xl-7">

      </div>
      <div class="col-xl-5">

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

.title-section {
  @include font($uni,$bold,24px,32.4px,$base);
  margin-bottom: 32px;
  margin-top: 40px;
}
</style>