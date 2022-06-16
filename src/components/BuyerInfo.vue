<template>
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
        Для посадки, необходимо иметь при себе <span class="fw-normal">оригинал указанного
        документа</span> и <span class="fw-normal">билет</span> (будет отправлен на указанную вами эл.почту).
      </p>
    </div>
    <div class="col-12">
      <div class="form-wrapper">
        <div class="row my-data-button-row d-none">
          <MyDataButton/>
        </div>
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
.info-buyer {
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