<template>
<section class="passengers-form-info-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Данные пассажиров
        </h2>
        <p class="title-section-description">
          Заполните ниже данные, для оформления билета
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <form>
          <!--    информация о пассажирах-->
          <div class="row info-passengers">
            <div class="col-12">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="passenger-1-tab" data-bs-toggle="tab" data-bs-target="#passenger-1" type="button" role="tab" aria-controls="passenger-1" aria-selected="true">Пассажир №1</button>
                  <button class="nav-link" id="passenger-2-tab" data-bs-toggle="tab" data-bs-target="#passenger-2" type="button" role="tab" aria-controls="passenger-2" aria-selected="false">Пассажир №2</button>
                </div>
              </nav>
              <div class="tab-content position-relative" id="nav-tabContent">
                <div class="tab-pane fade show active" id="passenger-1" role="tabpanel" aria-labelledby="passenger-1-tab">
                  <div class="form-wrapper">
                    <div class="row">
                      <div class="col-12">
                        <div class="checkbox-form d-block w-100">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                          </div>
                          <div class="d-inline-block">
                            <button type="button" class="cancel-button">
                              Убрать
                              <CancelIcon/>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <label for="secondName1" class="form-label">Фамилия</label>
                          <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                        </div>
                        <div class="col-3">
                          <label for="firstName1" class="form-label">Имя</label>
                          <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                        </div>
                        <div class="col-3">
                          <label for="MiddleName1" class="form-label">Отчество</label>
                          <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                        </div>
                        <div class="col-3">
                          <label for="birthday1" class="form-label">Дата рождения</label>
                          <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                        </div>
                      </div>
                      <div class="row gy-2">
                        <div class="col-3">
                          <label for="gender1" class="form-label">Пол</label>
                          <select id="gender1" class="form-select">
                            <option selected>Мужской</option>
                            <option>Женский</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="citizenship1" class="form-label">Гражданство</label>
                          <select id="citizenship1" class="form-select">
                            <option selected>Российская Федерация</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="document1" class="form-label">Документ</label>
                          <select id="document1" class="form-select">
                            <option selected>Паспорт РФ</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                          <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="passenger-2" role="tabpanel" aria-labelledby="passenger-2-tab">
                  <div class="form-wrapper">
                    <div class="row">
                      <div class="col-12">
                        <div class="checkbox-form d-block w-100">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                          </div>
                          <div class="d-inline-block">
                            <button type="button" class="cancel-button">
                              Убрать
                              <CancelIcon/>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <label for="secondName1" class="form-label">Фамилия</label>
                          <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                        </div>
                        <div class="col-3">
                          <label for="firstName1" class="form-label">Имя</label>
                          <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                        </div>
                        <div class="col-3">
                          <label for="MiddleName1" class="form-label">Отчество</label>
                          <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                        </div>
                        <div class="col-3">
                          <label for="birthday1" class="form-label">Дата рождения</label>
                          <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                        </div>
                      </div>
                      <div class="row gy-2">
                        <div class="col-3">
                          <label for="gender2" class="form-label">Пол</label>
                          <select id="gender2" class="form-select">
                            <option selected>Мужской</option>
                            <option>Женский</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="citizenship2" class="form-label">Гражданство</label>
                          <select id="citizenship2" class="form-select">
                            <option selected>Российская Федерация</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="document2" class="form-label">Документ</label>
                          <select id="document2" class="form-select">
                            <option selected>Паспорт РФ</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label for="documentInfo2" class="form-label">Серия и номер документа</label>
                          <input type="text" class="form-control" id="documentInfo2" placeholder="01 23 456789">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--    информация о покупателе-->
          <div class="row info-buyer">
            <div class="col-12">
              <h2 class="title-section">
                Информация о покупателе
              </h2>
            </div>
            <div class="col-6">
              <p class="title-section-description">
                Указывайте корректные e-mail и номер телефона, т.к. они необходимы для получения и возврата билета, а так же для обратной связи.
              </p>
            </div>
            <div class="col-6">
              <p class="title-section-description active-description">
                Указывайте корректные e-mail и номер телефона, т.к. они необходимы для получения и возврата билета, а так же для обратной связи.
              </p>
            </div>
            <div class="col-12">
              <div class="form-wrapper">
                <div class="row">
                  <div class="row">
                    <div class="col-3">
                      <label for="secondNameBuyer" class="form-label">Фамилия</label>
                      <input type="text" class="form-control" id="secondNameBuyer" placeholder="Иванов">
                    </div>
                    <div class="col-3">
                      <label for="firstNameBuyer" class="form-label">Имя</label>
                      <input type="text" class="form-control" id="firstNameBuyer" placeholder="Иван">
                    </div>
                    <div class="col-3">
                      <label for="mailBuyer" class="form-label">Электронная почта</label>
                      <input type="text" class="form-control" id="mailBuyer" placeholder="name@mail.ru">
                    </div>
                    <div class="col-3">
                      <label for="numberBuyer" class="form-label">Телефон</label>
                      <input type="text" class="form-control" id="numberBuyer" placeholder="+7 (___)-___-__-__">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--          правила перевозки багажа-->
          <div class="row rules-baggage">
            <div class="col-5 col-xl-7 col-xxl-5">
              <h2 class="title-section">
                Правила перевозки багажа
              </h2>
              <p class="title-section-description">
                Вы можете бесплатно перевезти одно место ручной клади.
              </p>
              <div class="mb-3">
                <h3 class="title-info-baggage">
                  Ограничение для ручной клади:
                </h3>
                <p class="description-info-baggage">
                  — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
                  <br>
                  — Вес до 7 килограмм
                </p>
              </div>
              <div class="mb-3">
                <p class="description-info-baggage">
                  Цена платного багажа составляет <span> 250 ₽.</span>
                </p>
              </div>
              <div class="mb-3">
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
                <div class="mb-3">
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Введите промокод">
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary">
                        Применить
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row g-2">
                  <div class="col-6">
                    <button class="btn btn-lg btn-primary">
                      Перейти к оплате
                    </button>
                  </div>
                  <div class="col-6">
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
            <div class="col-7 col-xl-5 col-xxl-7 d-flex justify-content-xl-center">
              <img class="payment-img" alt="оплата" src="img/ticket-booking/payment.svg">
            </div>
          </div>
        </form>
      </div>
      <div class="col-3">
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
          <div class="paths-final-amount">
            Итого <span>14 000 ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
export default {
  name: "PassengersFormInfo",
  components: {ArrowPathIcon, CancelIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
  }
  .active-description {
    color: $blue-active;
  }
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$base);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
    }
    .active {
      border-color: unset;
      border-bottom: none;
      box-shadow: $regular-shadow;
    }
  }
  .tab-content {
    position: relative;
    z-index: 2;
  }
  .form-wrapper {
    background-color: $white;
    border-radius: 0 16px 16px 16px;
    box-shadow: $regular-shadow;
    padding: 35px 29px;
    .cancel-button {
      background: none;
      border: none;
      @include font($uni,$light,18px,24.3px,$blue-link);
    }
    .form-label {
      @include font($uni,$light,14px,18.9px,$secondary);
    }
    .form-control, .form-select {
      @include font($uni,$regular,18px,24.3px,$base);
    }
    .form-control {
      border: none;
      border-bottom: 1px solid #8F8C8C;
      border-radius: 0;
      padding-left: 0;
    }
    .form-control:focus {
      @include animation;
      outline: none;
      border: none;
      border-bottom: 1px solid $blue-active;
      box-shadow: none;
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .form-select {
      border: none;
      border-bottom: 1px solid #8F8C8C;
      border-radius: 0;
      padding-left: 0;
    }
    .form-select::selection {
      color: #B5BDDB;
    }
  }
  .info-ticket-wrapper {
    background-color: $white;
    box-shadow: $regular-shadow;
    border-radius: 16px;
    padding: 24px 16px;
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
    }
  }
  .info-buyer {
    margin-top: 40px;
  }
  .rules-baggage {
    margin-top: 40px;
    .title-info-baggage {
      @include font($uni,$regular-shadow,18px,24.3px,$secondary);
      margin-bottom: 0;
    }
    .description-info-baggage {
      @include font($uni,$light,18px,24.3px,$secondary);
      span {
        @include font($uni,$regular,18px,24.3px,$base);
      }
    }
    .payment-img {
      @media screen and (max-width: 1920px) {
        width: 100%;
      }
    }
  }
  .promo-code {
    margin-top: 40px;
    .title-section-description {
      margin-bottom: 24px;
    }
    .form-control {
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      padding-right: 16px;
      @include font($uni,$regular,18px,24.3px,$base);
      border-radius: 8px;
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .btn {
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 68px;
      padding-right: 68px;
      @include font($uni,$regular,18px,24.3px,$white);
      text-transform: none;
    }
    .btn-lg {
      @include font($uni,$regular,18px,24.3px,$white);
      padding-top: 23px;
      padding-bottom: 23px;
      padding-left: 46px;
      padding-right: 46px;
      border-radius: 16px;
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