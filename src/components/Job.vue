<template>
<div class="col-12">
  <div class="job-wrapper flex-wrap flex-lg-nowrap d-flex justify-content-center justify-content-lg-between align-items-center">
    <div class="job-main-info text-center text-lg-start d-flex flex-column">
      <h3 class="job-title">
        {{title}}
      </h3>
      <div class="job-short">
        <span class="job-payment">
          зп от {{payment}}₽
        </span>
        <span class="job-city">{{city}},</span>
        <span class="job-place">{{place}}</span>
      </div>
    </div>
    <div class="job-details">
      <router-link class="btn btn-primary" :to="{path: '/jobs/' + id, params: {title: title}}">
        Подробнее
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Job",
  props: {
    id: Number,
    title: String,
    payment: String,
    city: String,
    place: String
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.job-wrapper {
  padding: 12px 16px;
  box-shadow: $regular-shadow;
  margin-bottom: 40px;
  @media screen and (max-width: 991px) {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .job-main-info {
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    .job-title {
      @include font($uni,$bold,24px,32.4px,$base);
      margin-bottom: 16px;
      @media screen and (max-width: 991px) {
        font-size: 18px;
      }
    }
    .job-short {
      @include font($uni,$regular,18px,24.3px,$secondary);
      @media screen and (max-width: 991px) {
        font-size: 14px;
        margin-bottom: 12px;
      }
      .job-payment {
        color: $blue-active;
        @media screen and (max-width: 991px) {
          display: block;
        }
      }
      .job-city {

      }
      .job-place {

      }
    }
  }
  .job-details {
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    .btn {
      padding: 12px 68px;
      border-radius: 8px;
      @include font($uni,$regular,18px,24.3px,$white);
      @media screen and (max-width: 991px) {
        width: 100%;
      }
    }
  }
}
</style>