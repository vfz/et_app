<template>
  <!--    информация о покупателе-->
  <div class="row info-buyer">
    <div class="col-12">
      <h2 class="title-section">
        Информация о покупателе
      </h2>
    </div>
    <div class="col-12 col-lg-6">
      <p class="title-section-description">
        Указывайте корректные e-mail и номер телефона, т.к. они необходимы для получения и возврата билета, а так же для обратной связи.
      </p>
    </div>
    <div class="col-12 col-lg-6">
      <p class="title-section-description active-description">
        Для посадки, необходимо иметь при себе <span class="fw-normal">оригинал указанного
        документа</span> и <span class="fw-normal">билет</span> (будет отправлен на указанную вами эл.почту).
      </p>
    </div>
    <div class="col-12">
      <div class="form-wrapper">
        <div class="row my-data-button-row">
          <MyDataButton class="my-data-button-component" :is-login="getIsLogin" :is-collapse="false"/>
          <div :class="{show : !getIsLogin}" class="collapse" id="collapseData">
            <div class="row">
              <div class="col-12 col-lg-6 col-xl mb-lg-4 mb-xl-0">
                <div class="d-block">
                  <label for="secondNameBuyer" class="form-label">Фамилия</label>
                  <input
                      @input="updateSecondNameBuyer($event)"
                      :value="getBuyerInfo.secondName"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !validateBuyer('secondName',getBuyerInfo.secondName),
                        'is-error' : validateBuyer('secondName', getBuyerInfo.secondName)}"
                      id="secondNameBuyer"
                      placeholder="Иванов">
                  <div :class="{
                        'd-none': !validateBuyer('secondName', getBuyerInfo.secondName)}"
                       class="error-feedback">
                    {{validateBuyer('secondName', getBuyerInfo.secondName)}}
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl mb-lg-4 mb-xl-0">
                <div class="d-block">
                  <label for="firstNameBuyer" class="form-label">Имя</label>
                  <input
                      @input="updateFirstNameBuyer($event)"
                      :value="getBuyerInfo.firstName"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !validateBuyer('firstName',getBuyerInfo.firstName),
                        'is-error' : validateBuyer('firstName', getBuyerInfo.firstName)}"
                      id="firstNameBuyer"
                      placeholder="Иван">
                  <div :class="{
                        'd-none': !validateBuyer('firstName', getBuyerInfo.secondName)}"
                       class="error-feedback">
                    {{validateBuyer('firstName', getBuyerInfo.firstName)}}
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl">
                <div class="d-block">
                  <label for="mailBuyer" class="form-label">Электронная почта</label>
                  <input
                      @input="updateEmailBuyer($event);"
                      :value="getBuyerInfo.email"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !validateBuyer('email',getBuyerInfo.email),
                        'is-error' : validateBuyer('email', getBuyerInfo.email)}"
                      id="mailBuyer"
                      placeholder="name@mail.ru">
                  <div :class="{
                        'd-none': !validateBuyer('email', getBuyerInfo.email)}"
                       class="error-feedback">
                    {{validateBuyer('email', getBuyerInfo.email)}}
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl">
                <div class="d-block">
                  <label for="numberBuyer" class="form-label">Телефон</label>
                  <input
                      @input="updateNumberBuyer($event);"
                      :value="getBuyerInfo.number"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !validateBuyer('number',getBuyerInfo.number),
                        'is-error' : validateBuyer('number', getBuyerInfo.number)}"
                      id="numberBuyer"
                      placeholder="+7 (___)-___-__-__">
                  <div :class="{
                        'd-none': !validateBuyer('number', getBuyerInfo.number)}"
                       class="error-feedback">
                    {{validateBuyer('number', getBuyerInfo.number)}}
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
import {mapActions, mapGetters} from "vuex";
export default {
  name: "BuyerInfo",
  components: {MyDataButton},
  methods: {
    ...mapActions([
        'updateSecondNameBuyer',
        'updateFirstNameBuyer',
        'updateEmailBuyer',
        'updateNumberBuyer',
        'validateSecondNameBuyer',
        'validateFirstNameBuyer',
        'validateEmailBuyer',
        'validateNumberBuyer'
    ]),
    validateBuyer(fieldType, value) {
      if (fieldType === 'secondName') {
        if (value === '') {
          return 'заполните фамилию'
        }
      }
      if (fieldType === 'firstName') {
        if (value === '') {
          return 'заполните имя'
        }
      }
      if (fieldType === 'email') {
        let regexpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regexpEmail.test(value)) {
          return false
        }
        else {
          return 'Введите корректно почту name@mail.ru'
        }
      }
      if (fieldType === 'number') {
        let regexpNumber =/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
        if (regexpNumber.test(value)) {
          return false
        }
        else {
          return 'Введите корретно номер +7 (___)-___-__-__ '
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getIsLogin',
      'getBuyerInfo'
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation";
.info-buyer {
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 24.3px;
    }
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      margin-bottom: 12px;
    }
  }
  .active-description {
    color: $blue-active;
  }
  margin-top: 40px;
  .form-wrapper {
    background-color: $white;
    border-radius: 16px;
    box-shadow: $regular-shadow;
    padding: 35px 29px;
    @media screen and (max-width: 768px) {
      padding: 16px 16px;
    }
    .d-block {
      margin-bottom: 32px;
      .form-label {
        @include font($uni,$light,14px,18.9px,$secondary);
        @media screen and (max-width: 768px) {
          font-size: 11px;
          line-height: 14.45px;
          margin-bottom: 6px;
        }
      }
      .form-control {
        @include font($uni,$regular,18px,24.3px,$base);
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 18.9px;
          padding-bottom: 6px;
        }
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
    }
    .d-block:last-child {
      margin-bottom: 0;
    }
    .my-data-button-component + .show {
      @include animation;
      margin-top: 37px;
      @media screen and (max-width: 767px) {
        @include animation;
        margin-top: 32px;
      }
    }
    .my-data-button-component + .collapsing {
      @include animation;
      margin-top: 37px;
      @media screen and (max-width: 767px) {
        @include animation;
        margin-top: 32px;
      }
    }
  }
}
</style>