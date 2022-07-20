<template>
  <!--    информация о пассажирах-->
  <div class="row info-passengers-mobile">
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="passenger-1-tab" data-bs-toggle="tab" data-bs-target="#passenger-1" type="button" role="tab" aria-controls="passenger-1" aria-selected="true">Пассажир №1</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div class="tab-pane fade show active" id="passenger-1" role="tabpanel" aria-labelledby="passenger-1-tab">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                  <MyDataButton class="d-none"/>
                  <div class="form-checks">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                      <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                      Убрать
                      <CancelIcon color="#1399FF"/>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="secondName1" class="form-label">Фамилия</label>
                  <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="firstName1" class="form-label">Имя</label>
                  <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="MiddleName1" class="form-label">Отчество</label>
                  <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="birthday1" class="form-label">Дата рождения</label>
                  <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                </div>
              </div>
              <div class="row gy-2 align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="gender1" class="form-label">Пол</label>
                  <select id="gender1" class="form-select">
                    <option selected>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="citizenship1" class="form-label">Гражданство</label>
                  <select id="citizenship1" class="form-select">
                    <option selected>Российская Федерация</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="document1" class="form-label">Документ</label>
                  <select id="document1" class="form-select">
                    <option selected>Паспорт РФ</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                  <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="passenger-2-tab" data-bs-toggle="tab" data-bs-target="#passenger-2" type="button" role="tab" aria-controls="passenger-2" aria-selected="false">Пассажир №2</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div class="tab-pane fade show active" id="passenger-2" role="tabpanel" aria-labelledby="passenger-2-tab">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                  <MyDataButton class="d-none"/>
                  <div class="form-checks">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                      <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                      Убрать
                      <CancelIcon color="#1399FF"/>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="secondName1" class="form-label">Фамилия</label>
                  <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="firstName1" class="form-label">Имя</label>
                  <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="MiddleName1" class="form-label">Отчество</label>
                  <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="birthday1" class="form-label">Дата рождения</label>
                  <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                </div>
              </div>
              <div class="row gy-2 align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="gender1" class="form-label">Пол</label>
                  <select id="gender1" class="form-select">
                    <option selected>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="citizenship1" class="form-label">Гражданство</label>
                  <select id="citizenship1" class="form-select">
                    <option selected>Российская Федерация</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="document1" class="form-label">Документ</label>
                  <select id="document1" class="form-select">
                    <option selected>Паспорт РФ</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                  <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="passenger-3-tab" data-bs-toggle="tab" data-bs-target="#passenger-3" type="button" role="tab" aria-controls="passenger-3" aria-selected="false">Пассажир №3</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div class="tab-pane fade show active" id="passenger-3" role="tabpanel" aria-labelledby="passenger-3-tab">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                  <MyDataButton class="d-none"/>
                  <div class="form-checks">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                      <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                      Убрать
                      <CancelIcon color="#1399FF"/>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="secondName1" class="form-label">Фамилия</label>
                  <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="firstName1" class="form-label">Имя</label>
                  <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="MiddleName1" class="form-label">Отчество</label>
                  <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="birthday1" class="form-label">Дата рождения</label>
                  <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                </div>
              </div>
              <div class="row gy-2 align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="gender1" class="form-label">Пол</label>
                  <select id="gender1" class="form-select">
                    <option selected>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="citizenship1" class="form-label">Гражданство</label>
                  <select id="citizenship1" class="form-select">
                    <option selected>Российская Федерация</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="document1" class="form-label">Документ</label>
                  <select id="document1" class="form-select">
                    <option selected>Паспорт РФ</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                  <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="passenger-4-tab" data-bs-toggle="tab" data-bs-target="#passenger-4" type="button" role="tab" aria-controls="passenger-4" aria-selected="false">Пассажир №4</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div class="tab-pane fade show active" id="passenger-4" role="tabpanel" aria-labelledby="passenger-4-tab">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                  <MyDataButton class="d-none"/>
                  <div class="form-checks">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                      <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                      Убрать
                      <CancelIcon color="#1399FF"/>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="secondName1" class="form-label">Фамилия</label>
                  <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="firstName1" class="form-label">Имя</label>
                  <input type="text" class="form-control" id="firstName1" placeholder="Иван">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="MiddleName1" class="form-label">Отчество</label>
                  <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="birthday1" class="form-label">Дата рождения</label>
                  <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
                </div>
              </div>
              <div class="row gy-2 align-items-md-end">
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="gender1" class="form-label">Пол</label>
                  <select id="gender1" class="form-select">
                    <option selected>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="citizenship1" class="form-label">Гражданство</label>
                  <select id="citizenship1" class="form-select">
                    <option selected>Российская Федерация</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="document1" class="form-label">Документ</label>
                  <select id="document1" class="form-select">
                    <option selected>Паспорт РФ</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                  <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                  <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
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
    @media screen and (max-width: 992px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 767px) {
      padding: 12px 16px;
    }
    .checkbox-form {
      margin-bottom: 24px;
    }
    .remove-button {
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
}
</style>