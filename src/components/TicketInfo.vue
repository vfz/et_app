<template>
<!--  информация о билете-->
  <div class="info-ticket-wrapper">
    <h3 class="title-card">
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
    <div class="point-minus d-none">
      - 3000₽ (Евробаллы)
    </div>
    <div class="paths-final-amount d-inline-block position-relative">
      <div class="old-amount position-absolute d-none">14 000₽</div>
      Итого <span>14 000 ₽</span>
    </div>
  </div>
</template>

<script>
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
export default {
  name: "TicketInfo",
  components: {ArrowPathIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.info-ticket-wrapper {
  background-color: $white;
  box-shadow: $regular-shadow;
  border-radius: 16px;
  padding: 24px 16px;
  @media screen and (max-width: 992px) {
    margin-top: 24px;
  }
  .title-card {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 24px;
  }
  .path-info-ticket-title {
    @include font($uni,$bold,20px,27px,$base);
    margin-bottom: 16px;
  }
  .path-info-ticket-title-paragraph {
    @include font($uni,$regular,18px,24.3px,$secondary);
    margin-bottom: 8px;
  }
  .path-info-cities {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
  }
  .arrow-path-icon {
    margin-right: 8px;
    margin-left: 8px;
  }
  .path-info-from {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
    }
  }
  .path-info-to {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
    }
  }
  .path-info-places {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
  }
  .path-info-sum {
    @include font($uni,$bold,20px,27px,$secondary);
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
    .old-amount {
      @include font($uni,$bold,14px,18.9px,$secondary);
      text-decoration: line-through;
      top: -15px;
      right: 0;
    }
  }
  .point-minus {
    margin-top: 12px;
    @include font($uni,$regular,18px,24.3px,$blue-active);
  }
}
</style>