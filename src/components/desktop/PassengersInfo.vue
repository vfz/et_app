<template>
  <!--    информация о пассажирах-->
  <div class="row info-passengers">
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
              v-for="passenger in getPassengers"
              :key="passenger.id"
              :class="{active: passenger.id === 0}"
              class="nav-link"
              :id="'passenger-'+passenger.id+'-tab'"
              data-bs-toggle="tab"
              :data-bs-target="'#passenger-'+passenger.id"
              type="button" role="tab"
              :aria-controls="'passenger-'+passenger.id"
              :aria-selected="{true : passenger.id === 0}"
          >Пассажир №{{passenger.id+1}}</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div
            v-for="passenger in getPassengers"
            :key="passenger.id"
            :class="{'show active': passenger.id === 0}"
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
                    <button type="button" class="remove-button" data-bs-toggle="modal" :data-bs-target="'#removeModal'+passenger.id">
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
                      @input="updateSecondName($event);validateSecondName($event);"
                      :value="passenger.secondName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': passenger.secondName, 'is-error' : passenger.errors.secondName}"
                      :id="'secondName' + passenger.id"
                      placeholder="Иванов">
                  <div :class="{'d-none': !passenger.errors.secondName}" class="error-feedback">{{passenger.errors.secondName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="firstName" class="form-label">Имя</label>
                  <input
                      @input="updateFirstName($event);validateFirstName($event)"
                      :value="passenger.firstName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': passenger.firstName, 'is-error' : passenger.errors.firstName}"
                      :id="'firstName'+ passenger.id"
                      placeholder="Иван">
                  <!--                          TODO убрать d-none когда валидация неверная-->
                  <div :class="{'d-none': !passenger.errors.firstName}" class="error-feedback">{{passenger.errors.firstName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="MiddleName" class="form-label">Отчество</label>
                  <input
                      @input="updateMiddleName($event);validateMiddleName($event)"
                      :value="passenger.middleName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': passenger.middleName, 'is-error' : passenger.errors.middleName}"
                      :id="'MiddleName' + passenger.id"
                      placeholder="Иванович">
                  <div :class="{'d-none': !passenger.errors.middleName}" class="error-feedback">{{passenger.errors.middleName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="birthday" class="form-label">Дата рождения</label>
                  <input
                      @input="updateBirthday($event);validateBirthday($event)"
                      :value="passenger.birthday"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': passenger.birthday, 'is-error' : passenger.errors.birthday}"
                      :id="'birthday'+passenger.id"
                      placeholder="дд.мм.гггг">
                  <div :class="{'d-none': !passenger.errors.birthday}" class="error-feedback">{{passenger.errors.birthday}}</div>
                </div>
              </div>
              <div class="row gy-2">
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="gender" class="form-label">Пол</label>
                  <select
                      @change="updateGender"
                      :id="'gender'+passenger.id"
                      class="form-select is-ok">
                    <option value="Мужской" selected>Мужской</option>
                    <option value="Женский">Женский</option>
                  </select>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="citizenship" class="form-label">Гражданство</label>
                  <select
                      @change="updateCitizenship"
                      :id="'citizenship'+passenger.id"
                      class="form-select is-ok">
                    <option value="Российская Федерация" selected>Российская Федерация</option>
                  </select>
                  <!--                          TODO убрать d-none когда валидация неверная-->
                  <div class="error-feedback d-none">Выберите пол</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="document" class="form-label">Документ</label>
                  <select
                      @change="updateDocument"
                      :id="'document'+passenger.id"
                      class="form-select is-ok">
                    <option v-for="documentType in getDocumentsTypes"
                            :key="documentType.id"
                            :value="documentType.name">
                      {{documentType.name}}
                    </option>
                  </select>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="documentInfo" class="form-label">Серия и номер документа</label>
                  <input
                      @input="updateDocumentInfo($event)"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': passenger.documentInfo, 'is-error' : passenger.errors.documentInfo}"
                      :id="'documentInfo'+passenger.id"
                      placeholder="01 23 456789">
                  <div :class="{'d-none': !passenger.errors.documentInfo}" class="error-feedback">{{passenger.errors.documentInfo}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import MyDataButton from "@/components/MyDataButton";
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  name: "PassengersInfo",
  components: {MyDataButton, ArrowDownIcon, CancelIcon},
  methods: {
    ...mapActions([
        'updateSecondName',
        'updateFirstName',
        'updateMiddleName',
        'updateBirthday',
        'updateGender',
        'updateCitizenship',
        'updateDocument',
        'updateDocumentInfo',
        'fetchDocumentType',
        'fetchCitizenShip',
        'validateSecondName',
        'validateFirstName',
        'validateMiddleName',
        'validateBirthday',
        'addPassenger',
    ]),
  },
  mounted() {
    this.updateGender();
    this.updateCitizenship();
    this.updateDocument();
    this.fetchDocumentType();
    this.fetchCitizenShip();
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters([
       'getPassengers',
        'getDocumentsTypes'
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";
@import "@/assets/formValidation.scss";
.info-passengers {
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$deactivate);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
      background-color: #FAFBFF;
      @media (min-width: 992px) and (max-width: 1399px) {
        font-size: 18px;
        padding: 12px 16px;
      }
    }
    .active {
      color: $base;
      border-color: unset;
      border-bottom: none;
      box-shadow: $regular-shadow;
      background-color: $white;
    }
  }
  .tab-content {
    position: relative;
    z-index: 2;
  }
  .form-wrapper {
    background-color: $white;
    border-radius: 0 16px 16px 16px;
    box-shadow: $regular-shadow;
    padding: 35px 29px;
    .checkbox-form {
      margin-bottom: 24px;
    }
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
      padding-bottom: 0.5rem;
    }
    .form-select {
      padding-bottom: 0.4rem;
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