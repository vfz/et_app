<template>
<div class="row ticket-reason-refund-section">
  <div class="col-12">
    <h2 class="title-section">
      Причина возврата билета
    </h2>
  </div>
  <div class="col-12">
    <div class="form-wrapper">
      <div class="row">
        <div class="col-12 col-lg-12 col-xl-4">
          <textarea class="form-control" id="ticket-refund-reason" rows="3" placeholder="Напишите пожалуйста, почему вы решили сдать билет."></textarea>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MessageInfo"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.ticket-reason-refund-section {
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
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
      border-radius: 0;
      padding-left: 0;
      resize: none;
      min-height: 220px;
    }
    .form-control:focus {
      @include animation;
      outline: none;
      border: none;
      border-bottom: none;
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