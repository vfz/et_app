<template>
<section class="image-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <img v-bind:src="src" v-bind:alt="alt">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SectionImage",
  props: ['src', 'alt']
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.image-section {
  margin-left: 88px;
  margin-right: 88px;
  img {
    @media (min-width: 992px) {
      width: 698px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>