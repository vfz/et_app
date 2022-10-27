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
                <div class="checkbox-form d-flex align-items-center w-100">
                  <MyDataButton :is-login="getIsLogin" :is-collapse="false" class="my-data-button"/>
                  <div class="form-checks">
                    <div class="form-check form-check-inline">
                      <input @click="UpdateOneWay(true)" :checked="oneWay" :id="'checkbox1'+passenger.id" class="form-check-input" type="radio" :name="'inlineRadioOptions'+passenger.id">
                      <label class="form-check-label" :for="'checkbox1'+passenger.id">В одну сторону</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input @click="UpdateOneWay(false)" :checked="!oneWay" :id="'checkbox2'+passenger.id" class="form-check-input" type="radio" :name="'inlineRadioOptions'+passenger.id">
                      <label class="form-check-label" :for="'checkbox2'+passenger.id">Туда-обратно</label>
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <!-- Button trigger modal -->
                    <button v-if="passenger.id !== 0" type="button" class="remove-button" data-bs-toggle="modal" :data-bs-target="'#removeModal'+passenger.id">
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
                  <div class="position-relative">
                    <ArrowDownIcon v-if="!passenger.errors.gender" class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchGender($event);validateGender($event)"
                        :value="passenger.genderSearchQuery"
                        class="form-control"
                        :id="'gender'+passenger.id"
                        placeholder="Мужской"
                        :class="{'is-ok': passenger.gender, 'is-error' : passenger.errors.gender}">
                    <div :class="{'d-none': !passenger.errors.gender}" class="error-feedback">{{passenger.errors.gender}}</div>
                    <div v-if="getDropdownById(passenger.id).isShowGender" class="find-gender">
                      <div
                          @click="updateGender(['Мужской', passenger.id]);
                          $store.commit('updateDropdown', [passenger.id, 'isShowGender'])"
                          class="meta">
                        <div class="title">Мужской</div>
                      </div>
                      <div @click="updateGender(['Женский', passenger.id]);
                      $store.commit('updateDropdown', [passenger.id, 'isShowGender'])"
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
                    <ArrowDownIcon v-if="!passenger.errors.citizenship" class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchCitizenship($event);validateCitizenship($event)"
                        :value="passenger.citizenShipSearchQuery"
                        :class="{'is-ok': passenger.citizenShipSearchQuery, 'is-error' : passenger.errors.citizenship}"
                        class="form-control"
                        :id="'citizenship'+passenger.id"
                        placeholder="РОССИЯ"
                        type="text">
                    <div :class="{'d-none': !passenger.errors.citizenship}" class="error-feedback">{{passenger.errors.citizenship}}</div>
                    <div
                        v-if="getDropdownById(passenger.id).isShowCitizenship" class="find-citizenship">
                      <div
                          v-for="citizenship in getCitizenshipsById(passenger.id)"
                          :key="citizenship.code"
                          @click="updateCitizenship([citizenship.name, passenger.id]);
                          $store.commit('updateDropdown', [passenger.id, 'isShowCitizenship'])"
                          class="meta">
                        <div class="title">{{citizenship.name}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-lg-6 col-xl-3">
                  <label for="document" class="form-label">Документ</label>
                  <div class="position-relative">
                    <ArrowDownIcon v-if="!passenger.errors.document" class="arrow-down-icon position-absolute" color="#283256"/>
                    <input
                        @click="toggleDropdown($event)"
                        @input="searchDocument($event);validateDocument($event)"
                        :value="passenger.documentSearchQuery"
                        :class="{'is-ok': passenger.document, 'is-error' : passenger.errors.document}"
                        class="form-control"
                        :id="'document'+passenger.id"
                        placeholder="Паспорт РФ"
                        type="text">
                    <div v-if="getDropdownById(passenger.id).isShowDocument" class="find-document">
                      <div
                          @click="updateDocument([documentType.name, passenger.id]);
                          $store.commit('updateDropdown', [passenger.id, 'isShowDocument'])"
                          v-for="documentType in getDocumentById(passenger.id)"
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
                      @input="updateDocumentInfo($event);validateDocumentInfo([$event, getPassengerDocumentById(passenger.id)])"
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
        'validateSecondName',
        'validateFirstName',
        'validateMiddleName',
        'validateBirthday',
        'validateDocumentInfo',
        'validateCitizenship',
        'validateGender',
        'validateDocument',
        'addPassenger',
        'toggleDropdown'
    ]),
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
        'getDropdownById'
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