<template>
<section class="section-title-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="title-section">

        </h1>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SectionTitle"
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
}
</style>