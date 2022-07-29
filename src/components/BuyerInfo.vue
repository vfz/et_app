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
          <MyDataButton :is-login="false" :is-collapse="true"/>
        </div>
        <div class="collapse" id="collapseData">
          <div class="row">
            <!--                        TODO сделать валидацию по классам .is-ok и .is-error к классу form-control -->
            <div class="col-12 col-lg-6 col-xl mb-lg-4 mb-xl-0">
              <div class="d-block">
                <label for="secondNameBuyer" class="form-label">Фамилия</label>
                <input type="text" class="form-control" id="secondNameBuyer" placeholder="Иванов">
                <!--                          TODO убрать d-none когда валидация неверная-->
                <div class="error-feedback d-none">Укажите фамилию</div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl mb-lg-4 mb-xl-0">
              <div class="d-block">
                <label for="firstNameBuyer" class="form-label">Имя</label>
                <input type="text" class="form-control" id="firstNameBuyer" placeholder="Иван">
                <!--                          TODO убрать d-none когда валидация неверная-->
                <div class="error-feedback d-none">Укажите имя</div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl">
              <div class="d-block">
                <label for="mailBuyer" class="form-label">Электронная почта</label>
                <input type="text" class="form-control" id="mailBuyer" placeholder="name@mail.ru">
                <!--                          TODO убрать d-none когда валидация неверная-->
                <div class="error-feedback d-none">Электронная почта в неправильном формате</div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl">
              <div class="d-block">
                <label for="numberBuyer" class="form-label">Телефон</label>
                <input type="text" class="form-control" id="numberBuyer" placeholder="+7 (___)-___-__-__">
                <!--                          TODO убрать d-none когда валидация неверная-->
                <div class="error-feedback d-none">Номер телефона в неправильном формате</div>
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
export default {
  name: "BuyerInfo",
  components: {MyDataButton}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation";
.info-buyer {
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
  }
}
</style>