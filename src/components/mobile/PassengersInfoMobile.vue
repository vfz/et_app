<template>
  <!--    информация о пассажирах-->
  <div class="passengers-info-mobile-section">
    <div class="passengers-info-mobile-wrapper">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-12 p-0">
            <div class="info-passengers-mobile">
              <nav>
                <div class="nav overflow-x-scroll nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                  <button
                      v-for="(passenger,index) in getPassengers"
                      :key="index"
                      :class="{active: index === 0}"
                      class="nav-link"
                      :id="'passenger-'+index+'-tab'"
                      data-bs-toggle="tab"
                      :data-bs-target="'#passenger-'+index"
                      type="button"
                      role="tab"
                      :aria-controls="'passenger-'+index"
                      :aria-selected="{true : index === 0}">{{passenger.isAdult ? "" : '&#128118'}} Пассажир №{{index+1}}</button>
                </div>
              </nav>
              <div class="tab-content position-relative" id="nav-tabContent">
                <div
                    v-for="(passenger,index) in getPassengers"
                    :key="index"
                    :class="{'show active': index === 0}"
                    class="tab-pane fade"
                    :id="'passenger-'+index"
                    role="tabpanel"
                    :aria-labelledby="'passenger-'+index+'-tab'">
                  <div class="form-wrapper">
                    <div class="row my-data-button-row">
                      <MyDataButton :is-login="getIsLogin" :is-collapse="false"/>
                    </div>
                    <div class="checkbox-form d-flex flex-wrap align-items-center justify-content-between w-100">
                      <!--<div class="checkbox-form d-block w-100">-->
                        <!--<div class="form-check">-->
                          <!--<input @click="UpdateOneWay(true)" :checked="oneWay" :id="'checkbox1'+index" class="form-check-input" type="radio" :name="'inlineRadioOptions'+index">-->
                          <!--<label class="form-check-label" for="inlineRadio1">В одну сторону</label>-->
                        <!--</div>-->
                        <!--<div class="form-check">-->
                          <!--<input @click="UpdateOneWay(false)" :checked="!oneWay" :id="'checkbox2'+index" class="form-check-input" type="radio" v-on:click="UpdateOneWay(false)"  :name="'inlineRadioOptions'+index">-->
                          <!--<label class="form-check-label" for="inlineRadio2">Туда-обратно</label>-->
                        <!--</div>-->
                      <!--</div>-->
                      <div class="d-inline-block">
                        <!-- Button trigger modal -->
                        <button v-if="index !== 0" type="button" class="remove-button" data-bs-toggle="modal" :data-bs-target="'#removeModal'+index">
                          Убрать
                          <CancelIcon color="#196EFFFF"/>
                        </button>
                      </div>
                    </div>
                    <!-- secondName -->
                    <div class="d-block">
                      <label :for="'secondName'+index"  class="form-label">Фамилия</label>
                      <input
                          @input="validateForm([index, 'secondName', $event]);"
                      :value="passenger.secondName"
                      type="text"
                      class="form-control"
                          :class="{'is-ok': !passenger.errors.secondName,'is-error' : passenger.errors.secondName}"
                      :id="'secondName' + index"
                      placeholder="Иванов">
                      <div :class="{
                    'd-none': !passenger.errors.secondName}"
                           class="error-feedback">
                        {{passenger.errors.secondName}}
                      </div>
                    </div>
                    <!-- firstName -->
                    <div class="d-block">
                      <label :for="'firstName'+index" class="form-label">Имя</label>
                      <input
                          @input="validateForm([index, 'firstName', $event]);"
                      :value="passenger.firstName"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !passenger.errors.firstName,
                        'is-error' : passenger.errors.firstName}"
                      :id="'firstName'+ index"
                      placeholder="Иван">
                      <div :class="{
                    'd-none': !passenger.errors.firstName}"
                           class="error-feedback">{{passenger.errors.firstName}}</div>
                    </div>
                    <!-- MiddleName -->
                    <div class="d-block">
                      <label :for="'MiddleName'+index" class="form-label">Отчество</label>
                      <input
                          @input="validateForm([index, 'middleName', $event]);"
                      :value="passenger.middleName"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !passenger.errors.middleName,
                        'is-error' : passenger.errors.middleName}"
                      :id="'MiddleName' + index"
                      placeholder="Иванович">
                      <div
                          :class="{'d-none': !passenger.errors.middleName}"
                          class="error-feedback">{{passenger.errors.middleName}}</div>
                    </div>
                    <!-- birthday -->
                    <div class="d-block">
                      <label :for="'birthday'+index" class="form-label">Дата рождения</label>
                      <input
                          @input="validateForm([index, 'birthday', $event, passenger.isAdult])"
                      :value="passenger.birthday"
                      type="date"
                      class="form-control"
                      :class="{
                        'is-ok': !passenger.errors.birthday,
                        'is-error' :passenger.errors.birthday}"
                      :id="'birthday'+index"
                      pattern="\d{4}-\d{2}-\d{2}"
                      placeholder="дд.мм.гггг"
                      required>
                      <div
                          :class="{'d-none': !passenger.errors.birthday}"
                          class="error-feedback">{{passenger.errors.birthday}}</div>
                    </div>
                    <!-- gender -->
                    <div class="d-block">
                      <label :for="'gender'+index" class="form-label">Пол</label>
                      <div class="position-relative">
                        <select
                            @input="validateForm([index, 'gender', $event]);"
                          :value="passenger.gender"
                          class="form-control"
                          :id="'gender'+index"
                          :class="{'is-ok': !passenger.errors.gender,
                        'is-error' : passenger.errors.gender}">
                          <option value="0">Женский</option>
                          <option selected value="1">Мужской</option>
                          </select>
                        <div v-if="!passenger.gender" class="select-placeholder position-absolute pe-none">Мужской</div>
                        <div :class="{'d-none': !passenger.errors.gender}" class="error-feedback">{{passenger.errors.gender}}</div>
                      </div>
                    </div>
                    <!-- citizenship -->
                    <div class="d-block">
                      <label :for="'citizenship'+index" class="form-label">Гражданство</label>
                      <div class="position-relative">
                        <select
                            @input="validateForm([index,'citizenship',$event]);"
                          :value="passenger.citizenship"
                            :class="{
                           'is-ok': !passenger.errors.citizenship,
                           'is-error' : passenger.errors.citizenship}"
                          class="form-control"
                          :id="'citizenship'+index"
                          >
                            <option
                                v-for="option in getCitizenships"
                                :key="option.code"
                                :value="option.code"
                                :selected="option.code === '643'"
                                class="form-option">
                                {{option.name}}
                            </option>
                          </select>

                        <div :class="{'d-none': !passenger.errors.citizenship}" class="error-feedback">{{passenger.errors.citizenship}}</div>
                      </div>
                    </div>
                    <!-- document -->
                    <div class="d-block">
                      <label :for="'document'+index" class="form-label">Документ</label>
                      <div class="position-relative">
                        <select
                            @input="validateForm([index, 'document', $event])"
                          :value="passenger.document"
                          :class="{
                          'is-ok': !passenger.errors.document,
                          'is-error' : passenger.errors.document}"
                          class="form-control"
                          :id="'document'+index"
                          >
                            <option v-for="option in getDocumentTypes" 
                            :key="option.id" :value="option.id"  >{{option.name}}</option>
                          </select>
                        <div :class="{'d-none': !passenger.errors.document}" class="error-feedback">{{passenger.errors.document}}</div>
                      </div>
                    </div>
                    <!-- documentInfo -->
                    <div class="d-block">
                      <label :for="'documentInfo'+index" class="form-label">Серия и номер документа</label>
                      <input
                          @input="validateForm([index,'documentInfo', $event, passenger.document])"
                          :value="passenger.documentInfo"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !passenger.errors.documentInfo,
                        'is-error' : passenger.errors.documentInfo}"
                      :id="'documentInfo'+index"
                      placeholder="01 23 456789">
                      <div
                          :class="{'d-none': !passenger.errors.documentInfo}"
                          class="error-feedback">{{passenger.errors.documentInfo}}</div>
                    </div>
                  </div>
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
import MyDataButton from "@/components/MyDataButton";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import CancelIcon from "@/components/icons/CancelIcon";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PassengersInfoMobile",
  components: {MyDataButton, ArrowDownIcon, CancelIcon},
  methods: {
    ...mapActions([
      'UpdateOneWay',
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
      'addPassenger',
        'validateForm'
    ]),
    // validatePassenger(fieldType, value, additional=true) {
    //   if (fieldType === 'secondName') {
    //     if (value === '') {
    //       return 'заполните фамилию'
    //     }
    //   }
    //   if (fieldType === 'firstName') {
    //     if (value === '') {
    //       return 'заполните имя'
    //     }
    //   }
    //   if (fieldType === 'middleName') {
    //     if (value === '') {
    //       return 'заполните отчество'
    //     }
    //   }
    //   if (fieldType === 'citizenship') {
    //     if (value === '') {
    //       return 'заполните гражданство'
    //     }
    //   }
    //   if (fieldType === 'gender') {
    //     if (value !=='0' && value !=='1') {
    //       return 'Выбирите пол'
    //     }
    //   }
    //   if (fieldType === 'birthday') {
    //     if (value === '') {
    //       return 'Укажиите дату рождения'
    //     }
    //     let today = new Date();
    //     let birthDate = new Date(value);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     let m = today.getMonth() - birthDate.getMonth();
    //     let d = today.getDay() - birthDate.getDay();
    //
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //       age--;
    //     }
    //     if ( age === 0 ) {
    //       m = 12 + m;
    //       if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
    //         m--;
    //       }
    //     }
    //     if (age < 0) {
    //       return 'Укажиите дату рождения корректно'
    //     }
    //
    //     if(!additional && age>12){
    //       return 'Детский билет до 12 лет'
    //     }
    //     if(additional && age>100){
    //       return 'Вам больше 100 лет?'
    //     }
    //
    //
    //   }
    //   // TODO доделать валидацию с документам
    //   if (fieldType === 'documentInfo') {
    //
    //     // Проверка паспорта РФ
    //     if(additional === '0'){
    //       const regexpPassport = /^\d{10}$/
    //       if (!regexpPassport.test(value)) {
    //         return 'Серия и номер паспорта состоит из 10 цифр'
    //       }
    //     }
    //     // Проверка загранпаспорта РФ
    //     if (additional === '2') {
    //       const regexpPassport = /^\d{9}$/
    //       if (!regexpPassport.test(value)) {
    //         return 'Серия и номер паспорта состоит из 9 цифр'
    //       }
    //     }
    //     //Проверка свидетельства о рождении
    //     if(additional === '4' || additional === '11'){
    //       let regexpDoc = /^[IVXLCDM]{1,3}[А-Я^]{2}[0-9]{6}$/g
    //       if (regexpDoc.test(value)) {
    //         return false
    //       }
    //       else {
    //         return 'Введите корректные данные (IIДН123456)'
    //       }
    //       //IIДН123456 правильный
    //       //ДН123456II неверный
    //     }
    //     //Проверка Военного билета военнослужащего или куранта военной образовательной организации
    //     if (additional === '1' || additional === '5' || additional === '8') {
    //       let regexpDoc = /[А-Я^]{2}[0-9]{7}$/g
    //       if (regexpDoc.test(value)) {
    //         return false
    //       }
    //       else {
    //         return 'Введите корректные данные (AC9876543)'
    //       }
    //     }
    //   }
    //
    //   return false
    // },
  },
  mounted() {
    this.fetchDocumentType();
    this.fetchCitizenShip();
  },
  computed: {
    ...mapGetters([
      'getPassengers',
      'getDocumentsTypes',
      'oneWay',
      'getIsLogin',
      'getCitizenships',
      'getDocumentTypes'
    ]),
  },
  data: () => {
    return {
      isLogin: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation.scss";

.passengers-info-mobile-wrapper {
  padding: 12px 12px 28px;
  @media screen and (max-width: 767px) {
    padding: 12px 12px 0;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .nav-tabs::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .nav-tabs {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    .nav-link {
      min-width: 135px;
    }
  }
}
.info-passengers-mobile {
  .my-data-button-row {
    margin-bottom: 32px;
  }
  .nav-tabs {
    position: relative;
    z-index: 1;
    overflow-y: hidden;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$deactivate);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
      background-color: #FAFBFF;
      @media screen and (max-width: 992px) {
        font-size: 16px;
        line-height: 21.6px;
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
    @media screen and (max-width: 767px) {
      padding: 12px 16px 32px;
    }
    .checkbox-form {
      margin-bottom: 16px !important;
      @media screen and (max-width: 767px) {
        width: 100% !important;
        margin-bottom: 16px;
        margin-left: 0;
        margin-right: 0;
      }
      .form-check {
        margin-top: 16px !important;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          padding-left: 0;
        }
        .form-check-input {
          border-color: #1399FF;
        }
        .form-check-input[type=radio] {
          @media screen and (max-width: 767px) {
            width: 18px;
            height: 18px;
            margin-left: 0;
            margin-right: 16px;
          }
        }
        .form-check-input:checked {
          border: 4px solid $blue-active;
          @media screen and (max-width: 768px) {
            border: 4px solid $blue-active;
          }
        }
        .form-check-input:checked:before {
          box-shadow: none;
        }
        .form-check-input:checked:after {
          border: none;
          background: none;
        }
        .form-check-input[type=radio]:before {
          @media screen and (max-width: 767px) {
            width: 18px;
            height: 18px;
          }
        }
        .form-check-input[type=radio]:after {
          @media screen and (max-width: 767px) {
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
          @media screen and (max-width: 767px) {
            display: block;
            margin-left: 0;
            font-size: 14px;
            line-height: 18.9px;
            margin-bottom: 0;
          }
        }
      }
      .form-check:first-child {
        margin-top: 0 !important;
      }
    }
    .remove-button {
      @include font($uni,$light,14px,18.9px,$blue-active);
      background: none;
      border: none;
      padding-left: 0;
      svg {
        margin-left: 8px;
      }
    }
    .d-block {
      margin-bottom: 32px;
      .form-label {
        @include font($uni,$light,14px,18.9px,$secondary);
        @media screen and (max-width: 767px) {
          font-size: 11px;
          line-height: 14.85px;
        }
      }
      .form-control, .form-select {
        @include font($uni,$regular,18px,24.3px,$base);
        padding: 0 0 6px;
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 18.9px;
        }
      }
      .form-control {
        border: none;
        border-bottom: 1px solid #8F8C8C;
        border-radius: 0;
        padding-left: 0;
        padding-right: 1rem;
      }
      .select-placeholder {
        top: 0;
        @include font($uni,$regular,18px,24.3px,$base);
        cursor: pointer;
        color: #B5BDDB; /* Цвет подсказывающего текста */
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 18.9px;
        }
      }
      input[type="date"]::-webkit-inner-spin-button,
      input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
      .form-control::-moz-placeholder {
        color: #B5BDDB; /* Цвет подсказывающего текста */
      }
      .form-control::-webkit-input-placeholder { color: #B5BDDB; }
      .form-control:-ms-input-placeholder { color: #B5BDDB; }
      .form-control::-ms-input-placeholder { color: #B5BDDB; }
      .form-control::placeholder { color: #B5BDDB; }
      .arrow-down-icon {
        right: 0;
        bottom: 50%;
        cursor: pointer;
        pointer-events: none;
      }
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
    .d-block:last-child {
      margin-bottom: 0;
    }
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
</style>