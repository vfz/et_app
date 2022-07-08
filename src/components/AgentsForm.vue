<template>
  <form>
    <div class="form-wrapper">
      <h2 class="title-section text-center">
        Мы ждем Вас!
      </h2>
      <div class="row">
        <div class="col-12">
          <label for="city" class="form-label">Город</label>
          <input type="text" class="form-control" id="city" placeholder="Введите название вашего города">
        </div>
        <div class="col-12">
          <label for="company" class="form-label">Наименование компании</label>
          <input type="text" class="form-control" id="company" placeholder="Введите название вашей компании">
        </div>
        <div class="col-12">
          <label for="name" class="form-label">Контактное лицо</label>
          <input type="text" class="form-control" id="name" placeholder="Введите ваше имя">
        </div>
        <div class="col-12">
          <label for="email" class="form-label">Эл. почта</label>
          <div class="input-group position-relative">
            <input type="email" class="form-control is-valid" id="email" placeholder="Введите email">
            <div class="valid-feedback icon-bg position-absolute d-flex align-items-center">
              <MailIcon/>
            </div>
          </div>
        </div>
        <div class="col-12">
          <label for="number" class="form-label">Телефон</label>
          <div class="input-group position-relative">
            <input type="text" class="form-control" id="number" placeholder="+7 (___)-___-__-__">
            <div class="valid-feedback icon-bg position-absolute d-flex align-items-center">
              <MobileIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import MailIcon from "@/components/icons/MailIcon";
import MobileIcon from "@/components/icons/MobileIcon";
export default {
  name: "AgentsForm",
  components: {MobileIcon, MailIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.form-wrapper {
  padding: 64px 60px;
  box-shadow: $regular-shadow;
  border-radius: 16px;
  max-width: 521px;
  @media screen and (max-width: 1399px) {
    max-width: 454px;
  }
  @media screen and (max-width: 1199px) {
    padding: 32px 30px;
  }
  @media screen and (max-width: 991px) {
    box-shadow: none;
    padding: 0;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 40px;
  }
  .col-12 {
    margin-bottom: 40px;
    .form-label {
      @include font($uni,$regular,18px,24.3px,$secondary);
      margin-bottom: 12px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    .form-control {
      @include font($uni,$regular,18px,24.3px,$base);
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      box-shadow: $regular-shadow;
      border: none;
      border-radius: 8px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .icon-bg {
      background-color: $blue-active;
      height: 100%;
      padding-left: 20px;
      padding-right: 20px;
      right: 0;
      border-radius: 8px;
      margin: 0;
      z-index: 9999;
    }
  }
  .col-12:last-child {
    margin-bottom: 0;
  }
}

</style>