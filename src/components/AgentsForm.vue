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
          <input type="email" class="form-control" id="email" placeholder="Введите email">
        </div>
        <div class="col-12">
          <label for="number" class="form-label">Телефон</label>
          <input type="text" class="form-control" id="number" placeholder="+7 (___)-___-__-__">
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AgentsForm"
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
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 40px;
  }
  .col-12 {
    margin-bottom: 40px;
    .form-label {
      @include font($uni,$regular,18px,24.3px,$secondary);
      margin-bottom: 12px;
    }
    .form-control {
      @include font($uni,$regular,18px,24.3px,$base);
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      box-shadow: $regular-shadow;
      border: none;
      border-radius: 8px;
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
  }
  .col-12:last-child {
    margin-bottom: 0;
  }
}

</style>