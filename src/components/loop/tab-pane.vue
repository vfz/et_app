<template>
  <div
      v-for="passenger in passengers"
      :key="passenger.id"
      :class="{'show active': passenger.id === 1}"
      class="tab-pane fade"
      :id="'passenger-'+passenger.id"
      role="tabpanel"
      :aria-labelledby="'passenger-'+passenger.id+'-tab'">
    <div class="form-wrapper">
      <div class="row">
        <div class="col-12">
          <div class="checkbox-form d-flex align-items-center justify-content-between w-100">
            <MyDataButton class="d-none"/>
            <div class="form-checks">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
              </div>
            </div>
            <div class="d-inline-block">
              <!-- Button trigger modal -->
              <button type="button" class="remove-button" data-bs-toggle="modal" data-bs-target="#removeModal">
                Убрать
                <CancelIcon color="#1399FF"/>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <!--                        TODO сделать валидацию по классам .is-ok и .is-error-->
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="secondName" class="form-label">Фамилия</label>
            <input
                @input="updateSecondName($event);validateNameField($event);"
                :value="passenger.secondName"
                type="text"
                class="form-control" :id="'secondName' + passenger.id"
                placeholder="Иванов">
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div v-if="passenger.error" class="error-feedback">{{passenger.error}}</div>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="firstName" class="form-label">Имя</label>
            <input type="text" class="form-control" id="firstName" placeholder="Иван">
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div class="error-feedback d-none">Укажите имя</div>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="MiddleName" class="form-label">Отчество</label>
            <input type="text" class="form-control" id="MiddleName" placeholder="Иванович">
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div class="error-feedback d-none">Укажите отчество</div>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="birthday" class="form-label">Дата рождения</label>
            <input type="text" class="form-control" id="birthday" placeholder="дд.мм.гггг">
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div class="error-feedback d-none">Некорректная дата, вам больше 125 лет?</div>
          </div>
        </div>
        <div class="row gy-2">
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="gender" class="form-label">Пол</label>
            <select id="gender" class="form-select">
              <option selected>Мужской</option>
              <option>Женский</option>
            </select>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="citizenship" class="form-label">Гражданство</label>
            <select id="citizenship" class="form-select">
              <option selected>Российская Федерация</option>
              <option>...</option>
            </select>
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div class="error-feedback d-none">Выберите пол</div>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="document" class="form-label">Документ</label>
            <select id="document" class="form-select">
              <option selected>Паспорт РФ</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-3 col-lg-6 col-xl-3">
            <label for="documentInfo" class="form-label">Серия и номер документа</label>
            <input type="text" class="form-control" id="documentInfo" placeholder="01 23 456789">
            <!--                          TODO убрать d-none когда валидация неверная-->
            <div class="error-feedback d-none">Некорректные серия и номер документа</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-pane",
  props: {
    passengers: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>