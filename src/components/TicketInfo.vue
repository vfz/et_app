<template>
<!--  информация о билете-->
  <div>
    <h3 v-if="isMobile()" class="title-card">
      Информация о билете
    </h3>
    <div v-if="isMobile()" class="carousel-bootstrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="info-ticket-wrapper">
                    <div class="path-info-ticket">
                      <h4 class="path-info-ticket-title">
                        Туда
                      </h4>
                      <h5 class="path-info-ticket-title-paragraph">
                        Маршрут:
                      </h5>
                      <div class="path-info-cities">
                        <span class="path-info-city-from">Ставрополь</span>
                        <ArrowPathIcon class="arrow-path-icon"/>
                        <span class="path-info-city-to">Москва</span>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Отправление:
                      </h5>
                      <div class="path-info-from">
                        <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  30.01.2020
                </span>
                          в
                          <span class="path-info-from-datetime-time">
                  15:30
                </span>
                        </div>
                        <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
                          <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Прибытие:
                      </h5>
                      <div class="path-info-to">
                        <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  30.01.2020
                </span>
                          в
                          <span class="path-info-to-datetime-time">
                  15:30
                </span>
                        </div>
                        <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
                          <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Места
                      </h5>
                      <div class="path-info-places">
              <span class="path-info-place-number">
                33,
              </span>
                        <span class="path-info-place-number">
                34,
              </span>
                        <span class="path-info-place-number">
                35,
              </span>
                        <span class="path-info-place-number">
                36,
              </span>
                      </div>
                      <div class="path-info-sum">
                        Сумма заказа <span class="path-info-sum-number">7 000</span>₽
                      </div>
                    </div>
                    <div class="point-minus">
                      - 3000₽ (Евробаллы)
                    </div>
                    <div class="paths-final-amount d-inline-block position-relative">
                      <div class="old-amount position-absolute d-none">14 000₽</div>
                      Итого <span>14 000 ₽</span>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="info-ticket-wrapper">
                    <div class="path-info-ticket">
                      <h4 class="path-info-ticket-title">
                        Обратно
                      </h4>
                      <h5 class="path-info-ticket-title-paragraph">
                        Маршрут:
                      </h5>
                      <div class="path-info-cities">
                        <span class="path-info-city-from">Москва</span>
                        <ArrowPathIcon class="arrow-path-icon"/>
                        <span class="path-info-city-to">Ставрополь</span>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Отправление:
                      </h5>
                      <div class="path-info-from">
                        <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  10.02.2020
                </span>
                          в
                          <span class="path-info-from-datetime-time">
                  20:45
                </span>
                        </div>
                        <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Автостанция “Орехово”
                </span>
                          <span class="path-info-from-datetime-address">
                  ул. Шипиловский проезд, 12
                </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Прибытие:
                      </h5>
                      <div class="path-info-to">
                        <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  11.02.2020
                </span>
                          в
                          <span class="path-info-to-datetime-time">
                  15:30
                </span>
                        </div>
                        <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
                          <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Места
                      </h5>
                      <div class="path-info-places">
              <span class="path-info-place-number">
                16,
              </span>
                        <span class="path-info-place-number">
                17,
              </span>
                        <span class="path-info-place-number">
                18,
              </span>
                        <span class="path-info-place-number">
                19,
              </span>
                      </div>
                      <div class="path-info-sum">
                        Сумма заказа <span class="path-info-sum-number">7 000</span>₽
                      </div>
                    </div>
                    <div class="point-minus">
                      - 3000₽ (Евробаллы)
                    </div>
                    <div class="paths-final-amount d-inline-block position-relative">
                      <div class="old-amount position-absolute d-none">14 000₽</div>
                      Итого <span>14 000 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile()" class="info-ticket-wrapper">
      <h3 v-if="!isMobile()" class="title-card">
        Информация о билете
      </h3>
      <div class="path-info-ticket">
        <h4 class="path-info-ticket-title">
          Туда
        </h4>
        <h5 class="path-info-ticket-title-paragraph">
          Маршрут:
        </h5>
        <div class="path-info-cities">
          <span class="path-info-city-from">Ставрополь</span>
          <ArrowPathIcon class="arrow-path-icon"/>
          <span class="path-info-city-to">Москва</span>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Отправление:
        </h5>
        <div class="path-info-from">
          <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  30.01.2020
                </span>
            в
            <span class="path-info-from-datetime-time">
                  15:30
                </span>
          </div>
          <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
            <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Прибытие:
        </h5>
        <div class="path-info-to">
          <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  30.01.2020
                </span>
            в
            <span class="path-info-to-datetime-time">
                  15:30
                </span>
          </div>
          <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
            <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Места
        </h5>
        <div class="path-info-places">
              <span class="path-info-place-number">
                33,
              </span>
          <span class="path-info-place-number">
                34,
              </span>
          <span class="path-info-place-number">
                35,
              </span>
          <span class="path-info-place-number">
                36,
              </span>
        </div>
        <div class="path-info-sum">
          Сумма заказа <span class="path-info-sum-number">7 000</span>₽
        </div>
      </div>
      <div class="cross-line"></div>
      <div class="path-info-ticket">
        <h4 class="path-info-ticket-title">
          Обратно
        </h4>
        <h5 class="path-info-ticket-title-paragraph">
          Маршрут:
        </h5>
        <div class="path-info-cities">
          <span class="path-info-city-from">Москва</span>
          <ArrowPathIcon class="arrow-path-icon"/>
          <span class="path-info-city-to">Ставрополь</span>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Отправление:
        </h5>
        <div class="path-info-from">
          <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  10.02.2020
                </span>
            в
            <span class="path-info-from-datetime-time">
                  20:45
                </span>
          </div>
          <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Автостанция “Орехово”
                </span>
            <span class="path-info-from-datetime-address">
                  ул. Шипиловский проезд, 12
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Прибытие:
        </h5>
        <div class="path-info-to">
          <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  11.02.2020
                </span>
            в
            <span class="path-info-to-datetime-time">
                  15:30
                </span>
          </div>
          <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  Железнодорожный вокзал
                </span>
            <span class="path-info-from-datetime-address">
                  ул. Вокзальная, 15
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Места
        </h5>
        <div class="path-info-places">
              <span class="path-info-place-number">
                16,
              </span>
          <span class="path-info-place-number">
                17,
              </span>
          <span class="path-info-place-number">
                18,
              </span>
          <span class="path-info-place-number">
                19,
              </span>
        </div>
        <div class="path-info-sum">
          Сумма заказа <span class="path-info-sum-number">7 000</span>₽
        </div>
      </div>
      <div class="point-minus">
        - 3000₽ (Евробаллы)
      </div>
      <div class="paths-final-amount d-inline-block position-relative">
        <div class="old-amount position-absolute d-none">14 000₽</div>
        Итого <span>14 000 ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
export default {
  name: "TicketInfo",
  components: {ArrowPathIcon},
  methods: {
    isMobile() {
      return screen.width <= 991;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.title-card {
  @include font($uni,$bold,18px,24.3px,$base);
  margin-bottom: 16px;
  margin-top: 24px;
}
.carousel-bootstrap {
  .container-fluid {
    padding: 0;
  }
  .carousel-indicators {
    margin-bottom: 0;
  }
  .carousel-indicators .active {
    background-color: $base;
  }
  .carousel-indicators button {
    background-color: $deactivate;
  }
  .carousel-inner {
    padding: 12px 12px 28px;
  }
}
.info-ticket-wrapper {
  background-color: $white;
  box-shadow: $regular-shadow;
  border-radius: 16px;
  padding: 24px 16px;
  @media screen and (max-width: 992px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px 16px;
    margin-top: 0;
  }
  .title-card {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 24px;
  }
  .path-info-ticket-title {
    @include font($uni,$bold,20px,27px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .path-info-ticket-title-paragraph {
    @include font($uni,$regular,18px,24.3px,$secondary);
    margin-bottom: 8px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .path-info-cities {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .arrow-path-icon {
    margin-right: 8px;
    margin-left: 8px;
    @media screen and (max-width: 767px) {
      width: 15px;
    }
  }
  .path-info-from {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .path-info-to {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .path-info-places {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .path-info-sum {
    @include font($uni,$bold,20px,27px,$secondary);
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .cross-line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed $blue-link;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  .paths-final-amount {
    margin-top: 24px;
    @include font($uni,$bold,20px,27px,$blue-active);
    text-transform: uppercase;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      margin-top: 16px;
      color: $blue-color;
    }
    .old-amount {
      @include font($uni,$bold,14px,18.9px,$secondary);
      text-decoration: line-through;
      top: -15px;
      right: 0;
      @media screen and (max-width: 767px) {
        font-size: 11px;
        line-height: 14.85px;
      }
    }
  }
  .point-minus {
    margin-top: 12px;
    @include font($uni,$regular,18px,24.3px,$blue-active);
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
}
</style>