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
              <div class="slider-block">
                <tiny-slider :controls-text="['','']" class="tiny-slider-wrapper" slide-by="page" :nav="false" :mouse-drag="true" gutter="40" :controls="true" items="3" :loop="true">
                  <div class="slide-wrapper">
                    <div class="slide">
                      <a data-fancybox="gallery" href="/img/about/buses/twoFloors/1.png">
                        <img src="/img/about/buses/twoFloors/1.png" alt="автобус" class="img-slide">
                      </a>
                    </div>
                  </div>
                  <div class="slide-wrapper">
                    <div class="slide">
                      <a data-fancybox="gallery" href="/img/about/buses/twoFloors/1.png">
                        <img src="/img/about/buses/twoFloors/1.png" alt="автобус" class="img-slide">
                      </a>
                    </div>
                  </div>
                  <div class="slide-wrapper">
                    <div class="slide">
                      <a data-fancybox="gallery" href="/img/about/buses/twoFloors/1.png">
                        <img src="/img/about/buses/twoFloors/1.png" alt="автобус" class="img-slide">
                      </a>
                    </div>
                  </div>
                  <div class="slide-wrapper">
                    <div class="slide">
                      <a data-fancybox="gallery" href="/img/about/buses/twoFloors/1.png">
                        <img src="/img/about/buses/twoFloors/1.png" alt="автобус" class="img-slide">
                      </a>
                    </div>
                  </div>
                  <div class="slide-wrapper">
                    <div class="slide">
                      <a data-fancybox="gallery" href="/img/about/buses/twoFloors/1.png">
                        <img src="/img/about/buses/twoFloors/1.png" alt="автобус" class="img-slide">
                      </a>
                    </div>
                  </div>
                </tiny-slider>
              </div>
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
import VueTinySlider from 'vue-tiny-slider';
import {Fancybox} from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css'

export default {
  name: "AboutSlider",
  components: {
    'tiny-slider': VueTinySlider
  },
  computed: {
    fancyBoxInit() {
      Fancybox.bind("[data-fancybox]", {
        // Your options go here
      });
    }
  },
}
</script>
<style>
.tns-liveregion {
  display: none !important;
}
.tns-controls button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 88px;
  margin: auto 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
  background-position: center center;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 4px;
}

.tns-controls button[data-controls=next] {
  background-image: url("/img/about/right-arrow.svg");
  background-repeat: no-repeat;
  top: 50px;
}
.tns-controls button[data-controls=prev] {
  background-image: url("/img/about/left-arrow.svg");
  background-repeat: no-repeat;
  bottom: 120px;
}
</style>

<style lang="scss" scoped>
@import 'tiny-slider/src/tiny-slider';
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
//@import "@fancyapps/ui/dist/fancybox.css";

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
  .tab-pane {
    .slider-block {
      max-width: 100%;
      overflow-x: hidden;
      position: relative;
      .slide-wrapper {
        max-width: 593px;
        padding-bottom: 40px;
        .slide {
          padding: 16px;
          filter: drop-shadow(0px 8px 12px rgba(161, 159, 255, 0.2));
          background: $white;
          .img-slide {
            width: 100%;
            max-width: 561px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>