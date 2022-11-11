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
<!--                      <div class="checkbox-form d-block w-100">-->
<!--                        <div class="form-check">-->
<!--                          <input @click="UpdateOneWay(true)" :checked="oneWay" :id="'checkbox1'+index" class="form-check-input" type="radio" :name="'inlineRadioOptions'+index">-->
<!--                          <label class="form-check-label" for="inlineRadio1">В одну сторону</label>-->
<!--                        </div>-->
<!--                        <div class="form-check">-->
<!--                          <input @click="UpdateOneWay(false)" :checked="!oneWay" :id="'checkbox2'+index" class="form-check-input" type="radio" v-on:click="UpdateOneWay(false)"  :name="'inlineRadioOptions'+index">-->
<!--                          <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>-->
<!--                        </div>-->
<!--                      </div>-->
                      <div class="d-inline-block">
                        <!-- Button trigger modal -->
                        <button v-if="index !== 0" type="button" class="remove-button" data-bs-toggle="modal" :data-bs-target="'#removeModal'+index">
                          Убрать
                          <CancelIcon color="#196EFFFF"/>
                        </button>
                      </div>
                    </div>
                    <div class="d-block">
                      <label :for="'secondName1'+index"  class="form-label">Фамилия</label>
                      <input
                          @input="updateSecondName($event);validateSecondName($event);"
                          :value="passenger.secondName"
                          :class="{'is-ok': passenger.secondName, 'is-error' : passenger.errors.secondName}"
                          type="text"
                          class="form-control"
                          placeholder="Иванов"
                          :id="'secondName' + index">
                      <div :class="{'d-none': !passenger.errors.secondName}" class="error-feedback">{{passenger.errors.secondName}}</div>
                    </div>
                    <div class="d-block">
                      <label for="firstName1" class="form-label">Имя</label>
                      <input
                          @input="updateFirstName($event);validateFirstName($event)"
                          :value="passenger.firstName"
                          type="text"
                          :class="{'is-ok': passenger.firstName, 'is-error' : passenger.errors.firstName}"
                          class="form-control"
                          :id="'firstName'+ index"
                          placeholder="Иван">
                      <div :class="{'d-none': !passenger.errors.firstName}" class="error-feedback">{{passenger.errors.firstName}}</div>
                    </div>
                    <div class="d-block">
                      <label for="MiddleName1" class="form-label">Отчество</label>
                      <input
                          @input="updateMiddleName($event);validateMiddleName($event)"
                          :value="passenger.middleName"
                          type="text"
                          class="form-control"
                          :class="{'is-ok': passenger.middleName, 'is-error' : passenger.errors.middleName}"
                          :id="'MiddleName' + index"
                          placeholder="Иванович">
                      <div :class="{'d-none': !passenger.errors.middleName}" class="error-feedback">{{passenger.errors.middleName}}</div>
                    </div>
                    <div class="d-block">
                      <label for="birthday1" class="form-label">Дата рождения</label>
                      <input
                          @input="updateBirthday($event);validateBirthday($event)"
                          :value="passenger.birthday"
                          type="text"
                          class="form-control"
                          :class="{'is-ok': passenger.birthday, 'is-error' : passenger.errors.birthday}"
                          :id="'birthday'+index"
                          placeholder="дд.мм.гггг">
                      <div :class="{'d-none': !passenger.errors.birthday}" class="error-feedback">{{passenger.errors.birthday}}</div>
                    </div>
                    <div class="d-block">
                      <label for="gender1" class="form-label">Пол</label>
                      <div class="position-relative">
                        <ArrowDownIcon v-if="!passenger.errors.gender" class="arrow-down-icon position-absolute" color="#283256"/>
                        <input
                            @click="toggleDropdown($event)"
                            @input="searchGender($event);validateGender($event)"
                            :value="passenger.genderSearchQuery"
                            class="form-control"
                            :id="'gender'+index"
                            placeholder="Мужской"
                            :class="{'is-ok': passenger.gender, 'is-error' : passenger.errors.gender}">
                        <div :class="{'d-none': !passenger.errors.gender}" class="error-feedback">{{passenger.errors.gender}}</div>
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
                    <div class="d-block">
                      <label for="citizenship1" class="form-label">Гражданство</label>
                      <div class="position-relative">
                        <ArrowDownIcon v-if="!passenger.errors.citizenship" class="arrow-down-icon position-absolute" color="#283256"/>
                        <input
                            @click="toggleDropdown($event)"
                            @input="searchCitizenship($event);validateCitizenship($event)"
                            :value="passenger.citizenShipSearchQuery"
                            :class="{'is-ok': passenger.citizenShipSearchQuery, 'is-error' : passenger.errors.citizenship}"
                            class="form-control"
                            :id="'citizenship'+index"
                            placeholder="РОССИЯ"
                            type="text">
                        <div :class="{'d-none': !passenger.errors.citizenship}" class="error-feedback">{{passenger.errors.citizenship}}</div>
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
                    <div class="d-block">
                      <label for="document1" class="form-label">Документ</label>
                      <div class="position-relative">
                        <ArrowDownIcon v-if="!passenger.errors.document" class="arrow-down-icon position-absolute" color="#283256"/>
                        <input
                            @click="toggleDropdown($event)"
                            @input="searchDocument($event);validateDocument($event)"
                            :value="passenger.documentSearchQuery"
                            :class="{'is-ok': passenger.document, 'is-error' : passenger.errors.document}"
                            class="form-control"
                            :id="'document'+index"
                            placeholder="Паспорт гражданина Российской Федерации"
                            type="text">
                        <div v-if="passenger.dropdowns.isShowDocument" class="find-document">
                          <div
                              @click="updateDocument([documentType.name, index]);
                          $store.commit('updateDropdown', [index, 'isShowDocument'])"
                              v-for="documentType in getDocumentById(index)"
                              :key="documentType.id"
                              class="meta">
                            <div class="title">{{documentType.name}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-block">
                      <label for="documentInfo1" class="form-label">Серия и номер документа</label>
                      <input
                          @input="updateDocumentInfo($event);validateDocumentInfo([$event, getPassengerDocumentById(index)])"
                          type="text"
                          class="form-control"
                          :class="{'is-ok': passenger.documentInfo, 'is-error' : passenger.errors.documentInfo}"
                          :id="'documentInfo'+index"
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