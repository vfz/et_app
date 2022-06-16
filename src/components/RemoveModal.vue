<template>
  <!-- Modal -->
  <div class="modal fade" id="removeModal" tabindex="-1" aria-labelledby="removeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
<!--          сообщение с пассажиром-->
          <p class="modal-body-text text-center passenger-message">
            Вы уверены, что хотите убрать
            билет <span>пассажира № 1?</span>
          </p>
<!--          сообщение с маршрутом-->
          <p class="modal-body-text text-center there-message d-none">
            Вы уверены, что хотите убрать
            билеты маршрута <span>"Туда"</span>
          </p>
        </div>
        <div class="modal-footer justify-content-center">
          <button class="btn-yes">
            Да
          </button>
          <button class="btn-close" data-bs-dismiss="modal">
            Нет
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemoveModal"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.modal-body {
  &-text {
    @include font($uni,$regular,24px,32.4px,$base);
    span {
      color: $blue-active;
    }
  }
}
.modal-footer {
  .btn-yes, .btn-close {
    @include font($uni,$regular,24px,32.4px,$deactivate);
    background: none;
    border: none;
    outline: none;
    width: unset;
    height: unset;
  }
  .btn-yes:hover, .btn-close:hover {
    @include animation;
    color: $secondary;
  }
}
</style>