<template>
  <div class="row file-uploader-section">
    <div class="col-12">
      <h2 class="title-section">
        Резюме
      </h2>
    </div>
    <div class="col-12">
      <div class="form-wrapper">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUploader"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.file-uploader-section {
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
}
</style>