<template>
  <div class="row personal-info">
    <div class="col-12">
      <h2 class="title-section">
        Персональная информация
      </h2>
    </div>
    <div class="col-12">
      <div class="form-wrapper">
        <div class="row">
          <div class="col-12 col-lg-12 col-xl-4">
            <label for="firstName" class="form-label">Имя</label>
            <input type="text" class="form-control" id="firstName" placeholder="Иван">
          </div>
          <div class="col-12 col-lg-12 col-xl-4">
            <label for="secondName" class="form-label">Фамилия</label>
            <input type="text" class="form-control" id="secondName" placeholder="Иванов">
          </div>
          <div class="col-12 col-lg-12 col-xl-4">
            <label for="secondName" class="form-label">Отчество</label>
            <input type="text" class="form-control" id="secondName" placeholder="Иванов">
          </div>
        </div>
        <div class="row mt-lg-3">
          <div class="col-12 col-lg-12 col-xl-4">
            <label for="number" class="form-label">Телефон</label>
            <input type="text" class="form-control" id="number" placeholder="+7 (___)-___-__-__">
          </div>
          <div class="col-12 col-lg-12 col-xl-4">
            <label for="mail" class="form-label">Электронная почта</label>
            <input type="text" class="form-control" id="mail" placeholder="name@mail.ru">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.personal-info {
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
  }
  .active-description {
    color: $blue-active;
  }
  margin-top: 40px;
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
}
</style>