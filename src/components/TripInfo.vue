<template>
  <div class="row trip-info">
    <div class="col-12">
      <h2 class="title-section">
        Информация о рейсе
      </h2>
    </div>
    <div class="col-12">
      <div class="form-wrapper">
        <div class="row">
          <div class="col-12 col-xl-4">
            <label for="ticketNumber" class="form-label">Номер билета</label>
            <input type="text" class="form-control" id="ticketNumber" placeholder="000–000">
          </div>
          <div class="col-12 col-xl-4">
            <label for="pathStart" class="form-label">Точка отправления</label>
            <select class="form-select" aria-label="pathStart">
              <option selected>Ставрополь</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-12 col-xl-4">
            <label for="pathEnd" class="form-label">Точка отправления</label>
            <select class="form-select" aria-label="pathEnd">
              <option selected>Москва</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mt-lg-3">
          <div class="col-12 col-xl-4">
            <label for="timeStart" class="form-label">Время отправления</label>
            <input type="text" class="form-control" id="timeStart" placeholder="чч:мм">
          </div>
          <div class="col-12 col-xl-4">
            <label for="dateStart" class="form-label">Дата отправления</label>
            <input type="text" class="form-control" id="dateStart" placeholder="дд.мм.гггг">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripInfo"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.trip-info {
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
    .form-select {
      padding-bottom: 3.28px;
      outline: none;
    }
    .form-select:focus {
      box-shadow: none;
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