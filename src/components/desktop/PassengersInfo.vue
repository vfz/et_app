<template>
  <!--    информация о пассажирах-->
  <div class="row info-passengers">
    <div class="col-12">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
              v-for="(passenger,index) in getPassengers"
              :key="index"
              @click="setActiveTab(index)"
              :class="{active: index === getActiveTab}"
              class="nav-link"
              :id="'passenger-'+index+'-tab'"
              data-bs-toggle="tab"
              :data-bs-target="'#passenger-'+index"
              type="button" role="tab"
              :aria-controls="'passenger-'+index"
              :aria-selected="{true : index === getActiveTab}"
          >{{passenger.isAdult ? "" : '&#128118'}} Пассажир №{{index+1}}</button>
        </div>
      </nav>
      <div class="tab-content position-relative" id="nav-tabContent">
        <div
            v-for="(passenger,index) in getPassengers"
            :key="index"
            :class="{'show active': index === getActiveTab}"
            class="tab-pane fade"
            :id="'passenger-'+index"
            role="tabpanel"
            :aria-labelledby="'passenger-'+index+'-tab'">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="checkbox-form d-flex align-items-center w-100">
                  <MyDataButton :is-login="getIsLogin" :is-collapse="false" class="my-data-button"/>
<!--                  <div class="form-checks">-->
<!--                    <div class="form-check form-check-inline">-->
<!--                      <input @click="UpdateOneWay(true)" :checked="oneWay" :id="'checkbox1'+index" class="form-check-input" type="radio" :name="'inlineRadioOptions'+index">-->
<!--                      <label class="form-check-label" :for="'checkbox1'+index">В одну сторону</label>-->
<!--                    </div>-->
<!--                    <div class="form-check form-check-inline">-->
<!--                      <input @click="UpdateOneWay(false)" :checked="!oneWay" :id="'checkbox2'+index" class="form-check-input" type="radio" :name="'inlineRadioOptions'+index">-->
<!--                      <label class="form-check-label" :for="'checkbox2'+index">Туда-обратно</label>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button v-if="index !== 0" type="button" class="remove-button" data-bs-toggle="modal" :data-bs-target="'#removeModal'+index">
                      Убрать
                      <CancelIcon color="#1399FF"/>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="secondName" class="form-label">Фамилия</label>
                  <input
                      @input="validatePassenger('secondName', secondName, index)"
                      v-model="secondName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': secondName, 'is-error' : error.secondName}"
                      :id="'secondName' + index"
                      placeholder="Иванов">
                  <div :class="{'d-none': secondName}" class="error-feedback">{{error.secondName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="firstName" class="form-label">Имя</label>
                  <input
                      @input="validatePassenger('firstName', firstName, index)"
                      v-model="firstName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': firstName, 'is-error' : error.firstName}"
                      :id="'firstName'+ index"
                      placeholder="Иван">
                  <div :class="{'d-none': firstName}" class="error-feedback">{{error.firstName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="MiddleName" class="form-label">Отчество</label>
                  <input
                      @input="validatePassenger('middleName', middleName, index)"
                      v-model="middleName"
                      type="text"
                      class="form-control"
                      :class="{'is-ok': middleName, 'is-error' : error.middleName}"
                      :id="'middleName' + index"
                      placeholder="Иванович">
                  <div :class="{'d-none': middleName}" class="error-feedback">{{error.middleName}}</div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="birthday" class="form-label">Дата рождения</label>
                  <input
                      type="date"
                      class="form-control"
                      :id="'birthday'+index"
                      pattern="\d{4}-\d{2}-\d{2}"
                      placeholder="дд.мм.гггг"
                      required>
                </div>
              </div>
              <div class="row gy-2">
                <div class="col-3 col-lg-6 col-xl-3">
<!--                  TODO изменить валидацию-->
                  <label for="gender" class="form-label">Пол</label>
                  <div class="position-relative">
                    <ArrowDownIcon class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchGender($event);validateGender($event)"
                        :value="passenger.genderSearchQuery"
                        class="form-control"
                        :id="'gender'+index"
                        placeholder="Мужской">
                    <div v-if="passenger.dropdowns.isShowGender" class="find-gender">
                      <div
                          @click="updateGender(['Мужской', index]);
                          $store.commit('updateDropdown', [index, 'isShowGender'])"
                          class="meta">
                        <div class="title">Мужской</div>
                      </div>
                      <div @click="updateGender(['Женский', index]);
                      $store.commit('updateDropdown', [index, 'isShowGender'])"
                           class="meta">
                        <div class="title">Женский</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="citizenship" class="form-label">Гражданство</label>
<!--                  TODO при клике выводить список-->
                  <div class="position-relative">
                    <ArrowDownIcon class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchCitizenship($event)"
                        class="form-control"
                        :id="'citizenship'+index"
                        placeholder="РОССИЯ"
                        type="text">
                    <div
                        v-if="passenger.dropdowns.isShowCitizenship" class="find-citizenship">
                      <div
                          v-for="citizenship in getCitizenshipsById(index)"
                          :key="citizenship.code"
                          @click="updateCitizenship([citizenship.name, index]);
                          $store.commit('updateDropdown', [index, 'isShowCitizenship'])"
                          class="meta">
                        <div class="title">{{citizenship.name}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="document" class="form-label">Документ</label>
                  <div class="position-relative">
                    <ArrowDownIcon class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchDocument($event);"
                        :value="passenger.documentSearchQuery"
                        class="form-control"
                        :id="'document'+index"
                        placeholder="Паспорт гражданина Российской Федерации"
                        type="text">
                    <div v-if="passenger.dropdowns.isShowDocument" class="find-document">
                      <div
                          @click="updateDocument([documentType.name, index]);
                          validateDocument([documentType.name, passenger.id])
                          $store.commit('updateDropdown', [index, 'isShowDocument'])"
                          v-for="documentType in getDocumentById(index)"
                          :key="documentType.id"
                          class="meta">
                        <div class="title">{{documentType.name}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="documentInfo" class="form-label">Серия и номер документа</label>
                  <input
                      @focusout="validateDocumentInfo($event)"
                      @input="updateDocumentInfo($event);"
                      type="text"
                      class="form-control"
                      :id="'documentInfo'+index"
                      placeholder="01 23 456789">
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
  data(){
    return {
      secondName: '',
      firstName: '',
      middleName: '',
      error: {
        firstName : 'Заполните имя',
        secondName : 'Заполните фамилию',
        middleName : 'Заполните отчество',
      },
    }
  },
  methods: {
    ...mapActions([
        'UpdateOneWay',
        'updateSecondName',
        'updateFirstName',
        'updateMiddleName',
        'updateBirthday',
        'updateGender',
        'searchGender',
        'updateCitizenship',
        'updateDocument',
        'searchDocument',
        'updateDocumentInfo',
        'fetchDocumentType',
        'fetchCitizenShip',
        'searchCitizenship',
        'validateBirthday',
        'validateDocumentInfo',
        'validateCitizenship',
        'validateGender',
        'validateDocument',
        'addPassenger',
        'toggleDropdown',
        'setActiveTab'
    ]),
    validatePassenger(fieldType, value, id) {
      if (fieldType === 'secondName') {
        if (value) {
          this.error.secondName = ''
          this.$store.commit('updateSecondName', [value, id])
        }
        else {
          this.error.secondName = 'Заполните фамилию'
          this.$store.commit('updateSecondName', [value, id])
        }
      }
      if (fieldType === 'firstName') {
        if (value) {
          this.error.firstName = ''
          this.$store.commit('updateFirstName', [value, id])
        }
        else {
          this.error.firstName = 'Заполните имя'
          this.$store.commit('updateFirstName', [value, id])
        }
      }
      if (fieldType === 'middleName') {
        if (value) {
          this.error.middleName = ''
          this.$store.commit('updateMiddleName', [value, id])
        }
        else {
          this.error.middleName = 'Заполните отчество'
          this.$store.commit('updateMiddleName', [value, id])
        }
      }
    },
  },
  mounted() {
    this.fetchDocumentType();
    this.fetchCitizenShip();
  },
  computed: {
    ...mapGetters([
       'getPassengers',
        'getDocumentsTypes',
        'getCitizenshipsById',
        'getDocumentById',
        'getPassengerDocumentById',
        'oneWay',
        'getIsLogin',
        'getActiveTab'
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
      .my-data-button {
        margin-right: 64px;
        @media screen and (max-width: 1472px) {
          margin-right: 32px;
        }
        @media screen and (max-width: 1324px) {
          margin-right: 12px;
        }
        @media screen and (max-width: 1199px) {
          margin-right: 64px;
        }
      }
      .form-checks {
        margin-right: 64px;
        @media screen and (max-width: 1472px) {
          margin-right: 32px;
        }
        @media screen and (max-width: 1324px) {
          margin-right: 12px;
        }
        @media screen and (max-width: 1199px) {
          margin-right: 64px;
        }
      }
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
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
    .form-select {
      padding-bottom: 0.4rem;
    }
    .arrow-down-icon {
      right: 0;
      bottom: 50%;
      cursor: pointer;
      pointer-events: none;
    }
    .form-check-label {
      font-family: $uni;
      font-weight: $bold;
      font-size: 18px;
      margin-left: 24px;
      color: $base;
      @media screen and (max-width: 1472px) {
        margin-left: 12px !important;
      }
      @media screen and (max-width: 1199px) {
        margin-left: 24px;
      }
    }
    .form-check-inline {
      display: inline-flex;
      align-items: center;
      margin-right: 64px;
      @media screen and (max-width: 1472px) {
        margin-right: 38px;
      }
      @media screen and (max-width: 1324px) {
        margin-right: 12px;
      }
      @media screen and (max-width: 1205px) {
        margin-right: 6px;
      }
      @media screen and (max-width: 1199px) {
        margin-right: 64px;
      }
      @media screen and (max-width: 991px) {
        display: flex;
        flex-direction: column-reverse;
        padding-left: 0;
        margin-right: 38px;
      }
      .form-check-input {
        border-color: #1399FF;
      }
      .form-check-input[type=radio] {
        margin-right: 0;
      }
      .form-check-input:checked {
        border: 4px solid $blue-active;
      }
      .form-check-input:checked:before {
        box-shadow: none;
      }
      .form-check-input:checked:after {
        border: none;
        background: none;
      }
      .form-check-input[type=radio]:before {
        @media screen and (max-width: 991px) {
          width: 18px;
          height: 18px;
        }
      }
      .form-check-input[type=radio]:after {
        @media screen and (max-width: 991px) {
          width: 18px;
          height: auto;
        }
      }
      .form-check-input:checked + .form-check-label {
        font-weight: $light;
        color: $base;
      }
      .form-check-label {
        font-family: $uni;
        font-weight: $light;
        font-size: 18px;
        margin-left: 24px;
        color: $deactivate;
        padding-left: 0;
        @media screen and (max-width: 991px) {
          display: block;
          margin-left: 0;
          font-size: 14px;
          line-height: 18.9px;
          margin-bottom: 8px;
        }
      }
    }
    .form-check {
      margin-bottom: 0;
    }
    .form-check-inline:last-child {
      margin-right: 0;
    }
    .form-control {
      border: none;
      border-bottom: 1px solid #8F8C8C;
      border-radius: 0;
      padding-left: 0;
      padding-right: 2.25rem;
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
    .find-citizenship, .find-document, .find-gender{
      position: absolute;
      display: block;
      z-index: 998;
      left:0;
      width:100%;
      max-height: 160px;
      margin: 0;
      overflow-y: auto;
      //overflow-y: hidden;
      background: #F3F7FF;
      cursor: pointer;

      /* Shadow / Hover */
      :hover{
        background: #1399FF;
      }
      box-shadow: 0px 2px 4px rgba(161, 159, 255, 0.1);
      border-radius: 0px 0px 16px 16px;
      .meta{
        padding: 0 .7rem .4rem .7rem ;
      }
      .meta-end{
        padding: 0 .7rem .4rem .7rem ;
        border-radius: 0px 0px 16px 16px;
      }
      @media screen and (max-width: 767px) {
        z-index: 9999;
      }
    }
  }
}
</style>