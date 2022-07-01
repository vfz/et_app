<template>
<div>
  <h2 class="title-section">
    Данные аккаунта
  </h2>
  <div class="form-wrapper">
    <div class="row">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-3">
          <label for="email" class="form-label">Эл.почта</label>
          <input type="email" class="form-control" id="email" value="ErmoKris@yandex.ru" placeholder="ErmoKris@yandex.ru">
        </div>
        <div class="col-12 col-lg-6 col-xl-3">
          <label for="firstName1" class="form-label">Телефон</label>
          <input type="text" class="form-control" id="number" value="+7 (123)-456-78-90" placeholder="+7 (123)-456-78-90">
        </div>
        <div class="col-12 col-lg-6 col-xl-3">
          <label for="password" class="form-label">Пароль</label>
          <div class="password-block position-relative">
            <input :type="passwordFieldType" v-model="password" type="password" class="form-control" id="password">
            <button v-on:click="switchVisibility()" class="eye-button position-absolute top-50 end-0 translate-middle-y" type="button">
              <EyeCloseIcon v-bind:class="{'d-none': isShow}"/>
              <EyeOpenIcon v-bind:class="{'d-none' : isHide}"/>
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-3">
          <label for="passwordNew" class="form-label">Новый пароль</label>
          <input type="password" class="form-control" id="passwordNew" placeholder="Введите новый пароль">
        </div>
      </div>
      <div class="row gy-2">
        <div class="col-12 col-lg-6 col-xl-3">
          <label for="passwordNewRepeat" class="form-label">Подтверждение</label>
          <input type="password" class="form-control" id="passwordNewRepeat" placeholder="Повторите новый пароль">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EyeCloseIcon from "@/components/icons/EyeCloseIcon";
import EyeOpenIcon from "@/components/icons/EyeOpenIcon";
export default {
  name: "ProfileData",
  components: {EyeOpenIcon, EyeCloseIcon},
  data(){
    return {
      password: '',
      passwordFieldType: 'password',
      isShow: false,
      isHide: true,
    };
  },
  methods: {
    switchVisibility(){
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      this.isHide = !this.isHide;
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.title-section {
  @include font($uni,$bold,24px,32.4px,$base);
  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 24.3px;
  }
}
.form-wrapper {
  background-color: $white;
  border-radius: 0 16px 16px 16px;
  box-shadow: $regular-shadow;
  padding: 35px 29px;
  .remove-button {
    background: none;
    border: none;
    @include font($uni,$light,18px,24.3px,$blue-link);
  }
  .form-label {
    @include font($uni,$light,14px,18.9px,$secondary);
    @media screen and (max-width: 991px) {
      font-size: 11px;
      line-height: 14.85px;
    }
  }
  .form-control, .form-select {
    @include font($uni,$regular,18px,24.3px,$base);
    @media screen and (max-width: 991px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .eye-button {
    background: none;
    border: none;
    outline: none;
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
</style>