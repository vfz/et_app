<template>
  <div>
    <h2 class="title-section">
      Данные для автозаполнения
    </h2>
    <div class="form-wrapper">
      <div class="row">
        <div class="row">
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="secondName1" class="form-label">Фамилия</label>
            <input type="text" class="form-control" id="secondName1" placeholder="Иванов">
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="firstName1" class="form-label">Имя</label>
            <input type="text" class="form-control" id="firstName1" placeholder="Иван">
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="MiddleName1" class="form-label">Отчество</label>
            <input type="text" class="form-control" id="MiddleName1" placeholder="Иванович">
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="birthday1" class="form-label">Дата рождения</label>
            <input type="text" class="form-control" id="birthday1" placeholder="дд.мм.гггг">
          </div>
        </div>
        <div class="row gy-2">
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="gender1" class="form-label">Пол</label>
            <select id="gender1" class="form-select">
              <option selected>Мужской</option>
              <option>Женский</option>
            </select>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="citizenship1" class="form-label">Гражданство</label>
            <select id="citizenship1" class="form-select">
              <option selected>Российская Федерация</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="document1" class="form-label">Документ</label>
            <select id="document1" class="form-select">
              <option selected>Паспорт РФ</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="documentInfo1" class="form-label">Серия и номер документа</label>
            <input type="text" class="form-control" id="documentInfo1" placeholder="01 23 456789">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAutocomplete"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.title-section {
  margin-top: 40px;
  @include font($uni,$bold,24px,32.4px,$base);
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
  }
  .form-control, .form-select {
    @include font($uni,$regular,18px,24.3px,$base);
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