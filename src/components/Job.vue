<template>
<div class="col-12">
  <div class="job-wrapper d-flex justify-content-between align-items-center">
    <div class="job-main-info d-flex flex-column">
      <h3 class="job-title">
        Бухгалтер
      </h3>
      <div class="job-short">
        <span class="job-payment">
          зп от 30 000₽
        </span>
        /
        <span class="job-city">Ставрополь,</span>
        &nbsp;
        <span class="job-place">Главный офис</span>
      </div>
    </div>
    <div class="job-details">
      <button type="button" class="btn-primary btn">
        Подробнее
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Job"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.job-wrapper {
  padding: 12px 16px;
  box-shadow: $regular-shadow;
  .job-main-info {
    .job-title {
      @include font($uni,$bold,24px,32.4px,$base);
      margin-bottom: 16px;
    }
    .job-short {
      @include font($uni,$regular,18px,24.3px,$secondary);
      .job-payment {
        color: $blue-active;
      }
      .job-city {

      }
      .job-place {

      }
    }
  }
  .job-details {
    .btn {
      padding: 12px 68px;
      border-radius: 8px;
      @include font($uni,$regular,18px,24.3px,$white);
    }
  }
}
</style>