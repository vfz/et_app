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
                <!--secondName-->
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="secondName" class="form-label">Фамилия</label>
                  <input
                      @input="validateForm([index, 'secondName', $event]);"
                      :value="passenger.secondName"
                      type="text"
                      class="form-control"
                      :class="{
                        'is-ok': !passenger.errors.secondName,
                        'is-error' : passenger.errors.secondName}"
                      :id="'secondName' + index"
                      placeholder="Иванов">
                  <div :class="{
                    'd-none': !passenger.errors.secondName}"
                    class="error-feedback">
                    {{passenger.errors.secondName}}
                  </div>
                </div>
                <!-- firstName -->
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="firstName" class="form-label">Имя</label>
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
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="MiddleName" class="form-label">Отчество</label>
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
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="birthday" class="form-label">Дата рождения</label>
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
              </div>
              <div class="row gy-2">
                <!-- gender -->
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="gender" class="form-label">Пол</label>
                  <div class="position-relative">
                    <select
                        @input="validateForm([index, 'gender', $event]);"
                        :value="passenger.gender"
                        class="form-control form-control-select"
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
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="citizenship" class="form-label">Гражданство</label>
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
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="document" class="form-label">Документ</label>
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
                        <option v-for="option in passenger.isAdult ? getDocumentTypes : getDocumentTypes.filter(opt=>(['4','2','3'].includes(opt.id)))"
                        :key="option.id" :value="option.id"  >{{option.name}}</option>
                      </select>
                    <div :class="{'d-none': !passenger.errors.document}" class="error-feedback">{{passenger.errors.document}}</div>
                  </div>
                </div>
                <!-- documentInfo -->
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="documentInfo" class="form-label">Серия и номер документа</label>
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
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import MyDataButton from "@/components/MyDataButton";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "PassengersInfo",
  components: {MyDataButton, ArrowDownIcon, CancelIcon},
  data(){
    return {
      secondName: '',
      citizenship: '',
      isShowGender: false,
      isShowCitizenship: false,
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
        'updateCitizenship',
        'updateDocument',
        'updateDocumentInfo',
        'fetchDocumentType',
        'fetchCitizenShip',
        'addPassenger',
        'setActiveTab',
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
    // toggleDropdownGender() {
    //   this.isShowGender = !this.isShowGender
    // },
    // toggleDropdownCitizenship() {
    //   this.isShowCitizenship = !this.isShowCitizenship
    // }
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
        'getActiveTab',
        'getCitizenships',
        'getDocumentTypes',
        'getCitizenshipByCode'
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
    .form-control-select {
      cursor: pointer;
    }
    .select-placeholder {
      top: 0;
      @include font($uni,$regular,18px,24.3px,$base);
      cursor: pointer;
      color: #B5BDDB; /* Цвет подсказывающего текста */
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
    .form-option { 
      background-color:#F3F7FF;

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