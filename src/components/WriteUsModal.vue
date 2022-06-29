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
          <form class="modal-form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Имя</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваше имя">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Телефон</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваш номер телефона">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Эл. почта</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Введите ваш email">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Сообщение</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriteUsModal"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.modal {
  &-body {
    padding-left: 80px;
    padding-right: 80px;
    .modal-title {
      @include font($uni,$bold,36px,48.6px,$base);
      margin-bottom: 40px;
    }
    .modal-description {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 24px;
    }
    .deactivate {
      color: #B5BDDB;
      margin-bottom: 32px;
    }
    .modal-form {
      .form-label {
        @include font($uni,$regular,18px,24.3px,$secondary);
      }
    }
  }
}
</style>