<template>
<section class="section-title-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="title-section">
          {{title}}
        </h1>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ['title'],
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.section-title-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .title-section {
    @include font($uni,$bold,36px,48.6px,$base);
    margin-bottom: 40px;
    @media screen and (max-width: 991px) {
      font-size: 20px;
      margin-bottom: 24px;
      line-height: 27px;
    }
  }
}
</style>