<template>
  <!-- Modal -->
  <div class="modal fade" id="WriteUsModal" tabindex="-1" aria-labelledby="WriteUsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="modal-title text-center" id="WriteUsModalLabel">Помогите стать нам лучше</h5>
          <p class="modal-description text-center">
            Ваше обращение поступит непосредственно исполнительному директору компании ЕвроТранс.
          </p>
          <p class="modal-description deactivate text-center">
            Если у вас есть пожелания, рекомендации или претензии относительно оказанных услуг, пожалуйста, направьте их лично мне.
          </p>
<!--          TODO добавить стили для валидации формы-->
          <form class="modal-form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Имя</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваше имя">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Телефон</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваш номер телефона">
            </div>
            <div class="mb-3 input-group position-relative">
              <label for="exampleFormControlInput1" class="form-label">Эл. почта</label>
              <div class="input-group position-relative">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваш email">
                <div class="icon-bg position-absolute d-flex align-items-center">
                  <MailIcon/>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Сообщение</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MailIcon from "@/components/icons/MailIcon";
export default {
  name: "WriteUsModal",
  components: {MailIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.modal {
  &-header {
    border-bottom: 0;
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 40px;
  }
  &-body {
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 40px;
    @media screen and (max-width: 991px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    .modal-title {
      @include font($uni,$bold,36px,48.6px,$base);
      margin-bottom: 40px;
      @media screen and (max-width: 991px) {
        font-size: 18px;
        line-height: 24.3px;
        margin-bottom: 24px;
      }
    }
    .modal-description {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 24px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
        line-height: 18.9px;
        margin-bottom: 16px;
      }
    }
    .deactivate {
      color: #B5BDDB;
      margin-bottom: 32px;
      @media screen and (max-width: 991px) {
        margin-bottom: 16px;
      }
    }
    .modal-form {
      .form-label {
        @include font($uni,$regular,18px,24.3px,$secondary);
        @media screen and (max-width: 991px) {
          font-size: 14px;
          line-height: 18.9px;
        }
      }
      .mb-3 {
        margin-bottom: 32px !important;
        .form-control {
          @include font($uni,$regular,18px,24.3px,$base);
          border: none;
          padding-left: 16px;
          padding-top: 12px;
          padding-bottom: 12px;
          box-shadow: $regular-shadow;
          height: 48px;
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
        }
        textarea {
          height: auto !important;
        }
      }
      .mb-3:last-child {
        margin-bottom: 1rem !important;
      }
      .btn {
        padding-top: 12px;
        padding-bottom: 12px;
        @include font($uni,$regular,18px,24.3px,$white);
        @media screen and (max-width: 991px) {
          font-size: 16px;
          line-height: 21.6px;
        }
      }
    }
  }
}
</style>