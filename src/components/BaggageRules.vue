<template>
  <!--          правила перевозки багажа-->
  <div class="row rules-baggage">
    <div class="col-12 col-lg-12 col-xl-7 col-xxl-7">
      <h2 class="title-section">
        Правила перевозки багажа
      </h2>
      <p class="title-section-description">
        Вы можете бесплатно перевезти одно место ручной клади.
      </p>
      <div class="d-block">
        <h3 class="title-info-baggage">
          Ограничение для ручной клади:
        </h3>
        <p class="description-info-baggage">
          — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
          <br>
          — Вес до 7 килограмм
        </p>
      </div>
      <div class="d-block">
        <p class="description-info-baggage">
          Цена платного багажа составляет <span> 250 ₽.</span>
        </p>
      </div>
      <div class="d-block">
        <h3 class="title-info-baggage">
          Ограничения для платного багажа:
        </h3>
        <p class="description-info-baggage">
          — Сумма измерений не превышает 180 см (Высота + Ширина + Длина)
          <br>
          — Вес до 20 килограмм
        </p>
      </div>
      <div class="promo-code">
        <h2 class="title-section">
          Промокод
        </h2>
        <p class="title-section-description">
          Введите промокод в соответствующее поле
        </p>
        <div class="d-block">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="input-group position-relative">
<!--                TODO добавить класс is-ok-bordered или is-error-bordered для инпута-->
                <input type="text" class="form-control form-control-bordered" placeholder="Введите промокод">
                <!--                TODO изменить класс is-ok-icon на is-error-icon, если валидация неверная. Убрать d-none для отображения элемента -->
                <div class="d-none is-error-icon icon-bg position-absolute d-flex align-items-center">
                  <CheckIcon color="#fff"/>
                </div>
              </div>
<!--              TODO убрать d-none для отображения ответа неверной валидации-->
              <div class="error-feedback-bordered d-none">
                Неверный промокод
              </div>
            </div>
            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-primary btn-promo-code disabled">
                Применить
              </button>
            </div>
          </div>
        </div>
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-12 col-md-6">
            <button class="btn btn-lg btn-primary">
              Перейти к оплате
            </button>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-check d-flex align-items-center">
              <input class="form-check-custom-input form-check-input" type="checkbox" value="" id="privacyCheck">
              <label class="form-check-label" for="privacyCheck">
                Я ознакомлен и согласен с <a href="#">договором оферты</a>
                и <a href="#">политикой конфиденциальности</a> и даю
                <a href="#">согласие на обработку персональных данных.</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7 col-xl-5 col-xxl-5 d-none d-lg-none d-xl-flex justify-content-xl-center">
      <img class="payment-img" alt="оплата" src="/img/ticket-booking/payment.svg">
    </div>
  </div>
</template>

<script>
import CheckIcon from "@/components/icons/CheckIcon";
export default {
  name: "BaggageRules",
  components: {CheckIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation.scss";
p {
  margin-bottom: 0;
}
.rules-baggage {
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 24.3px;
    }
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 8px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .title-info-baggage {
    @include font($uni,$regular,18px,24.3px,$secondary);
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      font-weight: $light;
    }
  }
  .description-info-baggage {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
    span {
      @include font($uni,$regular,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .payment-img {
    @media screen and (max-width: 1920px) {
      width: 100%;
    }
  }
  .promo-code {
    margin-top: 40px;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
    }
    .title-section-description {
      margin-bottom: 24px;
      @media screen and (max-width: 767px) {
        margin-bottom: 16px;
      }
    }
    .d-block {
      margin-bottom: 24px;
    }
    .input-group {
      .icon-bg {
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
        right: 0;
        border-radius: 8px;
        z-index: 9999;
      }
    }
    .form-control {
      height: 100%;
      padding: 12px 16px;
      @include font($uni,$regular,18px,24.3px,$base);
      border-radius: 8px !important;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 24px;
        padding: 10px 16px;
      }
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .btn {@include font($uni,$regular,18px,24.3px,$white);
      padding: 12px 68px;
      text-transform: none;
      border-radius: 16px;
      @media screen and (max-width: 767px) {
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        line-height: 21.6px;
      }
    }
    .disabled {
      opacity: 1;
      background-color: $disabled;
      box-shadow: none;
    }
    .btn-promo-code {
      @media screen and (max-width: 768px) {
        margin-top: 16px;
      }
    }
    .btn-lg {
      @include font($uni,$regular,18px,24.3px,$white);
      padding: 23px 46px;
      border-radius: 16px;
      @media screen and (max-width: 767px) {
        margin-top: 24px;
        padding: 10px 0;
        width: 100%;
        border-radius: 8px;
        font-size: 16px;
        line-height: 21.6px;
      }
    }
    .form-check {
      position: relative;
      &-label {
        @include font($uni,$light,14px,18.9px,$base);
        a {
          color: $blue-link;
        }
        a:hover {
          @include animation;
          color: $blue-active;
        }
      }
      &-input {
        position: absolute;
      }
    }
  }
}
</style>