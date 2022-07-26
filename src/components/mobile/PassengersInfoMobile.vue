<template>
  <!--    информация о пассажирах-->
  <div class="carousel-bootstrap">
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
                <div class="info-passengers-mobile">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="passenger-1-tab" data-bs-toggle="tab" data-bs-target="#passenger-1" type="button" role="tab" aria-controls="passenger-1" aria-selected="true">Пассажир №1</button>
                    </div>
                  </nav>
                  <div class="tab-content position-relative" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="passenger-1" role="tabpanel" aria-labelledby="passenger-1-tab">
                      <div class="form-wrapper">
                        <div class="row my-data-button-row">
                          <MyDataButton :isLogin="false"/>
                        </div>
                        <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                          <div class="checkbox-form d-block w-100">
                            <div class="form-check">
                              <input class="form-check-input" type="radio" v-on:click="UpdateOneWay(true)" name="inlineRadioOptions" id="inlineRadio1" value="option1" :checked="oneWay">
                              <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" v-on:click="UpdateOneWay(false)"  name="inlineRadioOptions" id="inlineRadio2" value="option2" :checked="!oneWay">
                              <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                            </div>
                          </div>
                          <div class="d-inline-block">
                            <!-- Button trigger modal -->
                            <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                              Убрать
                              <CancelIcon color="#196EFFFF"/>
                            </button>
                          </div>
                        </div>
                        <div class="d-block">
                          <label for="secondName1" class="form-label">Фамилия</label>
                          <input type="text" class="form-control" id="secondName1" placeholder="Иванов" required>
                        </div>
                        <div class="d-block">
                          <label for="firstName1" class="form-label">Имя</label>
                          <input type="text" class="form-control" id="firstName1" placeholder="Иван" required>
                        </div>
                        <div class="d-block">
                          <label for="MiddleName1" class="form-label">Отчество</label>
                          <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович" required>
                        </div>
                        <div class="d-block">
                          <label for="birthday1" class="form-label">Дата рождения</label>
                          <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг" required>
                        </div>
                        <div class="d-block">
                          <label for="gender1" class="form-label">Пол</label>
                          <select id="gender1" class="form-select">
                            <option selected>Мужской</option>
                            <option>Женский</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="citizenship1" class="form-label">Гражданство</label>
                          <select id="citizenship1" class="form-select">
                            <option selected>Российская Федерация</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="document1" class="form-label">Документ</label>
                          <select id="document1" class="form-select">
                            <option selected>Паспорт РФ</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                          <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789" required>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="info-passengers-mobile">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="passenger-1-tab" data-bs-toggle="tab" data-bs-target="#passenger-1" type="button" role="tab" aria-controls="passenger-1" aria-selected="true">Пассажир №1</button>
                    </div>
                  </nav>
                  <div class="tab-content position-relative" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="passenger-1" role="tabpanel" aria-labelledby="passenger-1-tab">
                      <div class="form-wrapper">
                        <div class="row my-data-button-row">
                          <MyDataButton :isLogin="false"/>
                        </div>
                        <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                          <div class="checkbox-form d-block w-100">
                            <div class="form-check">
                              <input class="form-check-input" type="radio" v-on:click="UpdateOneWay(true)" name="inlineRadioOptions" id="inlineRadio1" value="option1" :checked="oneWay">
                              <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" v-on:click="UpdateOneWay(false)"  name="inlineRadioOptions" id="inlineRadio2" value="option2" :checked="!oneWay">
                              <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                            </div>
                          </div>
                          <div class="d-inline-block">
                            <!-- Button trigger modal -->
                            <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                              Убрать
                              <CancelIcon color="#196EFFFF"/>
                            </button>
                          </div>
                        </div>
                        <div class="d-block">
                          <label for="secondName1" class="form-label">Фамилия</label>
                          <input type="text" class="form-control" id="secondName1" placeholder="Иванов" required>
                        </div>
                        <div class="d-block">
                          <label for="firstName1" class="form-label">Имя</label>
                          <input type="text" class="form-control" id="firstName1" placeholder="Иван" required>
                        </div>
                        <div class="d-block">
                          <label for="MiddleName1" class="form-label">Отчество</label>
                          <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович" required>
                        </div>
                        <div class="d-block">
                          <label for="birthday1" class="form-label">Дата рождения</label>
                          <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг" required>
                        </div>
                        <div class="d-block">
                          <label for="gender1" class="form-label">Пол</label>
                          <select id="gender1" class="form-select">
                            <option selected>Мужской</option>
                            <option>Женский</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="citizenship1" class="form-label">Гражданство</label>
                          <select id="citizenship1" class="form-select">
                            <option selected>Российская Федерация</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="document1" class="form-label">Документ</label>
                          <select id="document1" class="form-select">
                            <option selected>Паспорт РФ</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="d-block">
                          <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                          <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789" required>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyDataButton from "@/components/MyDataButton";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import CancelIcon from "@/components/icons/CancelIcon";

export default {
  name: "PassengersInfoMobile",
  components: {MyDataButton, ArrowDownIcon, CancelIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation";
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
.info-passengers-mobile {
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$base);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
      @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 21.6px;
        padding: 12px 16px;
      }
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
    @media screen and (max-width: 767px) {
      padding: 12px 16px 32px;
    }
    .checkbox-form {
      margin-bottom: 16px !important;
      @media screen and (max-width: 767px) {
        width: 100% !important;
        margin-bottom: 16px;
        margin-left: 0;
        margin-right: 0;
      }
      .form-check {
        margin-top: 16px !important;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          padding-left: 0;
        }
        .form-check-input {
          border-color: #1399FF;
        }
        .form-check-input[type=radio] {
          @media screen and (max-width: 767px) {
            width: 18px;
            height: 18px;
            margin-left: 0;
            margin-right: 16px;
          }
        }
        .form-check-input:checked {
          border: 4px solid $blue-active;
          @media screen and (max-width: 768px) {
            border: 4px solid $blue-active;
          }
        }
        .form-check-input:checked:before {
          box-shadow: none;
        }
        .form-check-input:checked:after {
          border: none;
          background: none;
        }
        .form-check-input[type=radio]:before {
          @media screen and (max-width: 767px) {
            width: 18px;
            height: 18px;
          }
        }
        .form-check-input[type=radio]:after {
          @media screen and (max-width: 767px) {
            width: 18px;
            height: auto;
          }
        }
        .form-check-input:checked + .form-check-label {
          font-weight: $light;
          color: $base;
        }
        .form-check-label {
          font-family: $uni;
          font-weight: $light;
          font-size: 18px;
          margin-left: 24px;
          color: $deactivate;
          padding-left: 0;
          @media screen and (max-width: 767px) {
            display: block;
            margin-left: 0;
            font-size: 14px;
            line-height: 18.9px;
            margin-bottom: 0;
          }
        }
      }
      .form-check:first-child {
        margin-top: 0 !important;
      }
    }
    .remove-button {
      @include font($uni,$light,14px,18.9px,$blue-active);
      background: none;
      border: none;
      padding-left: 0;
      svg {
        margin-left: 8px;
      }
    }
    .d-block {
      margin-bottom: 32px;
      .form-label {
        @include font($uni,$light,14px,18.9px,$secondary);
        @media screen and (max-width: 767px) {
          font-size: 11px;
          line-height: 14.85px;
        }
      }
      .form-control, .form-select {
        @include font($uni,$regular,18px,24.3px,$base);
        padding: 0 0 6px;
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 18.9px;
        }
      }
      .form-control {
        border: none;
        border-bottom: 1px solid #8F8C8C;
        border-radius: 0;
        padding-left: 0;
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
    .d-block:last-child {
      margin-bottom: 0;
    }
  }
}
</style>