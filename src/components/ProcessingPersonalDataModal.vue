<template>
  <!-- Modal -->
  <div class="modal fade" id="processingPersonalDataModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Согласие на обработку персональных данных.</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="modal-description">
            Я даю свое согласие ИП Яцунов М.С. на обработку моих персональных данных предоставленных мной при регистрации на сайте/оформлении на сайте *.evrotrans.net, для их использования (в т.ч. передачу третьим лицам) всоответствии с Федеральным законом от 27. 07. 2006 ФЗ-152“О защиет персональных данных” в рамках и целях, опреде-ленных Политикой конфиденциальности и пользовательским соглашением.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Понятно</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessingPersonalDataModal"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.modal-description {
  @include font($uni,$regular,18px,24.3px,$base);
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 18.9px;
  }
}
.modal-title {
  @include font($uni,$bold,36px,48.6px,$base);
  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 24.3px;
  }
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
</style>