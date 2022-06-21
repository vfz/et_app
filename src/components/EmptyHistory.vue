<template>
<section class="empty-history-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="description-section">
          {{descriptionText}}
          <a href="#">{{linkText}}</a>
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "EmptyHistory",
  props: ['descriptionText', 'linkText'],
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.empty-history-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .description-section {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
    a {
      color: $blue-color;
      text-decoration: underline $blue-color;
    }
  }
}
</style>