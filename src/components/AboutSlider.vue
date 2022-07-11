<template>
<section class="about-slider-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Наш автопарк
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <ul class="nav flex-column nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="TwoFloors-tab" data-bs-toggle="tab" data-bs-target="#TwoFloors" type="button" role="tab" aria-controls="TwoFloors" aria-selected="true">Двухэтажные автобусы</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="semiFloor-tab" data-bs-toggle="tab" data-bs-target="#semiFloor" type="button" role="tab" aria-controls="semiFloor" aria-selected="false">Полутораэтажные автобусы</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="oneFloor-tab" data-bs-toggle="tab" data-bs-target="#oneFloor" type="button" role="tab" aria-controls="oneFloor" aria-selected="false">Одноэтажные автобусы</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="mercedesSprinter-tab" data-bs-toggle="tab" data-bs-target="#mercedesSprinter" type="button" role="tab" aria-controls="mercedesSprinter" aria-selected="false">Mercedes Sprinter </button>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="twoFloors" role="tabpanel" aria-labelledby="twoFloors-tab">
            hello
          </div>
          <div class="tab-pane fade" id="semiFloor" role="tabpanel" aria-labelledby="semiFloor-tab"></div>
          <div class="tab-pane fade" id="oneFloor" role="tabpanel" aria-labelledby="oneFloor-tab"></div>
          <div class="tab-pane fade" id="mercedesSprinter" role="tabpanel" aria-labelledby="mercedesSprinter-tab"></div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import {Swiper} from "swiper";
import 'swiper/swiper.min.css';
export default {
  name: "AboutSlider"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.about-slider-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
    margin-top: 40px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 24.3px;
    }
  }
  .nav {
    &-item {

    }
    &-link {
      @include font($uni,$bold,18px,24.3px,$deactivate);
      padding-left: 0;
      padding-right: 0;
      text-transform: none;
    }
    .active {
      color: $blue-active;
    }
  }
}
</style>