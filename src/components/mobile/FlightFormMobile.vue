<template>
  <div class="hero-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-section">
            Куда поедем?
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form id="hero-form" class="search-form d-flex flex-wrap justify-content-center">
            <div class="checkbox-form d-block w-100">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-on:click="changeUrlByWay(true);UpdateOneWay(true)" name="inlineRadioOptions" id="inlineRadio1" value="option1" :checked="oneWay">
                <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-on:click="changeUrlByWay(false);UpdateOneWay(false)"  name="inlineRadioOptions" id="inlineRadio2" value="option2" :checked="!oneWay">
                <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
              </div>
            </div>
            <div class="path-direction w-100">
              <h3 class="path-title">
                Билеты на автобус
              </h3>
              <div class="path-content">
                <span class="path-content-start">{{ fromPlace }}</span>
                –
                <span class="path-content-end">{{ toPlace }}</span>
              </div>
            </div>
            <!-- Form-input-->
            <div class="two-ways-inputs w-100 form-header">
              <div class="row flex-wrap">
                <div class="col-12 col-sm-12 col-lg-6 col-xl min-w-300">
                  <div class="card h-100">
                    <div class="card-body">
                      <div class="card-body-section position-relative">
                        <!-- ВЫБОР ПЫНКТА ОТПРАВЛЕНИЯ -->
                        <label for="dataListFrom" class="form-label">Откуда</label>
                        <div class="city-name city-name-from">
                          <input class="form-control one-way-inputs-input shadow-none"
                                 @focus="fromPlaceV=true"
                                 v-mmodel="fromPlace"
                                 v-model="fromPlace"
                                 placeholder="Введите название населенного пункта"
                                 style="padding-left: 7pt;">
                          <div class="find-place" v-if="fromPlace  && !from || fromPlaceV">
                            <div class="meta"
                                 v-for="pointFrom in fromStations" :key="pointFrom.id_from"
                                 v-show="search(pointFrom.name,fromPlace)"
                                 v-on:click="setFrom(pointFrom.id_from);fromPlaceV=false;fromPlace=pointFrom.name;changeUrlByStation()"
                            >
                              <div class="title">{{pointFrom.name}}</div>
                              <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointFrom.address}}</div>
                            </div>
                          </div>
                        </div>
                        <!-- РАКИРОВКА -->
                        <div id="swiper-inputs" class="swiper-inputs" v-on:click="castling();temp = fromPlace;fromPlace = toPlace;toPlace = temp;">
                          <img alt="swiper-inputs-icon" class="swiper-inputs-icon" src="/img/hero/arrows-mobile.svg">
                        </div>
                        <div class="cross-line first-line"></div>
                      </div>
                      <div class="card-body-section">
                        <!-- ВЫБОР ПЫНКТА НАЗНАЧЕНИЯ -->
                        <label for="datalistTo" class="form-label">Куда</label>
                        <div class="city-name city-name-to">
                          <input class="form-control one-way-inputs-input shadow-none"
                                 @focus="toPlaceV=true"
                                 v-model="toPlace"
                                 v-mmodel="toPlace"
                                 placeholder="Введите название населенного пункта" style="padding-left: 7pt;">
                          <div class="find-place" v-if="toPlace && !to || toPlaceV ">
                            <div class="meta"
                                 v-for="pointTo in toStations" :key="pointTo.id_to"
                                 v-show="search(pointTo.name,toPlace)"
                                 v-on:click="setTo(pointTo.id_to);toPlaceV=false;toPlace=pointTo.name;changeUrlByStation()">
                              <div class="title">{{pointTo.name}}</div>
                              <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointTo.address}}</div>
                            </div>
                          </div>
                        </div>
                        <div class="cross-line"></div>
                      </div>
                      <!-- ВЫБОР ДАТЫ ТУДА-->                  
                      <div class="card-body-section" v-if="oneWay">
                        <div class="path-date d-flex">
                          <div>
                            <label class="form-label dispatch-title">
                              Дата поездки <span>(Туда)</span>
                            </label>
                            <div class="dispatch-date d-flex justify-content-between align-items-center">
                              <div>
                                <span class="dispatch-date-day">{{dateArival.split('.')[0]}} </span>
                                <span class="dispatch-date-month">{{  monthes[--dateArival.split('.')[1]].split('')[0]+monthes[--dateArival.split('.')[1]].split('')[1]+ monthes[--dateArival.split('.')[1]].split('')[2]}} </span>
                                <span class="dispatch-date-year">`{{dateArival.split('.')[2].split('')[2]+dateArival.split('.')[2].split('')[3]}}</span>
                              </div>
                              <div class="select-date" v-if="selectDate">
                                <DataPicker/>
                              </div>
                              <div>
                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="cross-line"></div>
                      </div>
                      <!-- ВЫБОР ДАТ ТУДА - ОБРАТНО-->
                      <div class="card-body-section" v-else>
                        <div class="path-date d-flex justify-content-between">
                          <div>
                            <label class="form-label dispatch-title">
                              Дата поездки <span>(Туда)</span>
                            </label>
                            <div class="dispatch-date d-flex justify-content-between align-items-center">
                              <div>
                                <span class="dispatch-date-day">{{dateArival.split('.')[0]}} </span>
                                <span class="dispatch-date-month">{{ monthes[--dateArival.split('.')[1]].split('')[0]+monthes[--dateArival.split('.')[1]].split('')[1]+monthes[--dateArival.split('.')[1]].split('')[2]}} </span> 
                                <span class="dispatch-date-year">`{{dateArival.split('.')[2].split('')[2]+dateArival.split('.')[2].split('')[3]}}</span>
                              </div>
                              <div class="select-date" v-if="selectDate">
                                <DataPicker which-way="from"/>
                              </div>
                              <div>
                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label class="form-label arrival-title">
                              Дата поездки <span>(обратно)</span>
                            </label>
                            <div class="arrival-date d-flex justify-content-between align-items-center">
                              <div>
                                <span class="dispatch-date-day">{{dateBack.split('.')[0]}} </span>
                                <span class="dispatch-date-month">{{ monthes[--dateBack.split('.')[1]].split('')[0]+monthes[--dateBack.split('.')[1]].split('')[1]+monthes[--dateBack.split('.')[1]].split('')[2]}} </span>
                                <span class="dispatch-date-year">`{{dateBack.split('.')[2].split('')[2]+dateBack.split('.')[2].split('')[3]}}</span>
                              </div>
                              <div class="select-date" v-if="selectDateBack">
                                <DataPicker which-way="to"/>
                              </div>
                              <div>
                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDateBack()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="cross-line"></div>
                      </div>
                      <div class="card-body-section d-flex justify-content-between align-items-center">
                        <div>
                          <label v-bind:class="{'d-none': isHidden}" for="dataListFrom" class="form-label">Пассажиры</label>
                          <div class="passengers-count" v-bind:class="{'d-none': isHidden}" v-on:click="isHidden = true; isShow = true">
                            <span>{{getPassengers.length}} 
                              {{humans[
                                (getPassengers.length > 10 && getPassengers.length < 20)? 2 :
                                (getPassengers.length > 1 && getPassengers.length < 5) ? 1 :
                                (getPassengers.length === 1) ? 0 : 2
                              ]}} 
                          </span>
                          </div>
                          <PassengersCounter class="passenger-count-expand" v-bind:class="{'d-flex': isShow, 'd-none': !isShow}"/>
                        </div>
                        <div v-bind:class="{'d-block': !isShow, 'd-none': isShow}">
                          <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center align-items-center">
                  <button :disabled="isFlightsLoading" id="submit-button-twoWays" type="button" class="btn" >
                    <span v-if="isFlightsLoading === true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Найти билеты
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataPicker from '@/components/DataPicker'
import {mapGetters,mapActions} from 'vuex'
import PassengersCounter from "@/components/PassengersCounter";
import moment from "moment";
export default {
  name: "Flight-form-mobile",
  components:{PassengersCounter, DataPicker,},
  computed: mapGetters([
    'fromStations',
    'toStations',
    'from',
    'to',
    'dateArival',
    'dateBack',
    'selectDate',
    'selectDateBack',
    'oneWay',
    'getPassengers',
      'isFlightsLoading'
  ]),
  data(){
    return{
      toPlace:'',
      fromPlace:'',
      fromPlaceV:false,
      toPlaceV:false,
      temp:'',
      tomorrow: new Date(new Date()),
      isHidden: false,
      isShow: false,
      monthes: ["Янв", "Фев", "Мар", "Апр", "Мая", "Июня", "Июля", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      humans: ['Человек', 'Человека', 'Человек'],
    }

  },
  //Директива для того чтобы при работе в мобильной версии отрабатывался поиск остановочных пунктов,
  // сразу после ввода символа а не после нажатия на Enter
  directives: {
    mmodel: {
      bind: function(el, binding, vnode) {
        el.oninput = () => (vnode.context[binding.expression] = el.value)
      }
    }
  },
  methods: {
    ...mapActions([
      'UpdateOneWay',
      'getFromStations',
      'getToStations',
      'UpdateselectDate',
      'UpdateselectDateBack',
      'selectDateFalse',
      'SetDate',
      'SetDateBack',
      'SetDateArival',
      'setFrom',
      'setTo',
      'castling',
        'addPassenger',
        'removePassenger'
    ]),

    search(str,target){
      //Вариант поиска ЗАВИСИМЫЙ от регистра
      //return str.indexOf(target)+1
      //Вариант поиска НЕзависимый от регистра
      return str.toLowerCase().indexOf(target.toLowerCase())+1
    },
    changeUrlByStation() {
      this.$router.push('/flight-selection/search/'+this.from+'/'+this.to)
    },
    changeUrlByWay(oneWay) {
      this.$store.commit('updateOneWay', oneWay)
      this.$router.push('/flight-selection/search/'+this.from+'/'+this.to+'/'+this.dateArival+'/'+oneWay)
    }
  },
  async mounted(){
    await this.getFromStations();
    await this.getToStations();
    this.setFrom(this.$route.params.from);
    this.setTo(this.$route.params.to);
    this.toPlace= this.toStations.find(station => station.id_to === this.$route.params.to).name;
    this.fromPlace= this.fromStations.find(station => station.id_from === this.$route.params.from).name;
    let oneWay = true
    if (this.$route.params.oneWay) {
      oneWay = (this.$route.params.oneWay === 'true')
    }
    else {
      oneWay = true
    }
    this.$store.commit('updateOneWay', oneWay)
  },
  created() {
    let queryDateArrival = this.$route.params.dateArrival
    let queryDateBack = this.$route.params.dateBack
    let today = new Date()
    let dayToday = String(today.getDate()).padStart(2, '0');
    let monthToday = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yearToday = today.getFullYear();
    today = dayToday + '.' + monthToday + '.' + yearToday
    if (queryDateArrival) {
      if (moment(queryDateArrival, 'DD.MM.YYYY').isValid()) {
        this.$store.commit('setDateArrivalByQuery', queryDateArrival)
      }
      else {
        this.$router.push('/flight-selection/search/' + '1' + '/' + '190' + '/' + today)
      }
    }
    if (queryDateArrival && queryDateBack) {
      if (moment(queryDateArrival, 'DD.MM.YYYY').isValid() && moment(queryDateBack, 'DD.MM.YYYY').isValid()) {
        this.$store.commit('setDateArrivalByQuery', queryDateArrival)
        this.$store.commit('setDateBackByQuery', queryDateBack)
      }
      else {
        this.$router.push('/flight-selection/search/' + '1' + '/' + '190' + '/' + today)
      }
    }
  }
}
</script>

<style lang="scss">
.passenger-count-expand {
  box-shadow: none;
  .card-body {
    padding: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.hero {
  &-content {
    margin-top: 41px;
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
      margin-left: 8px;
      margin-right: 8px;
    }
    .form-header {
      @media screen and (max-width: 991px) {
        margin-right: 0;
        margin-left: 0;
      }
    }
    .search-form {
      .checkbox-form {
        margin-bottom: 16px;
        @media screen and (max-width: 767px) {
          display: flex !important;
          width: 100% !important;
          margin-bottom: 16px;
          margin-left: 0;
          margin-right: 0;
        }
        .form-check-inline {
          @media screen and (max-width: 767px) {
            display: flex;
            flex-direction: column-reverse;
            padding-left: 0;
            margin-right: 38px;
          }
          .form-check-input {
            border-color: #1399FF;
          }
          .form-check-input[type=radio] {
            @media screen and (max-width: 767px) {
              width: 18px;
              height: 18px;
              margin-left: 0;
              float: unset;
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
            color: $base !important;
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
              margin-bottom: 8px;
            }
          }
        }
        .form-check {
          margin-bottom: 0;
        }
        .form-check-inline:last-child {
          @media screen and (max-width: 768px) {
            margin-right: 0;
          }
        }
      }
      .path-direction {
        margin-bottom: 8px;
        .path-title {
          @include font($uni,$light,14px,18.9px,$base);
        }
        .path-content {
          @include font($uni,$bold,14px,18.9px,$base);
        }
      }
      .card:first-child {
        &-body {
          position: relative;
        }
      }
      .card:nth-child(2) {
        &-body {
          position: relative;
          z-index: 9998;
        }
      }
      .card {
        border-radius: 8px;
        &-body {
          &-section {
            .form-label {
              font-family: $uni;
              font-weight: $regular;
              font-size: 12px;
              color: $black;
              margin-bottom: 8px;
            }
            .city-name {
              @include font($uni,$bold,16px,21.6px,$blue-color);
              margin-bottom: 11px;
              span {
                border-bottom: 1px dashed $blue-color;
              }
            }
            .path-date {
              margin-bottom: 12px;
              .dispatch-date, .arrival-date {
                &-day, &-month, &-year {
                  @include font($uni,$bold,16px,24.3px,$base)
                }
                &-day {
                  margin-right: 4px;
                }
                &-month, &-year {
                  font-size: 12px;
                }
              }
              .dispatch-title, .arrival-title {
                @include font($uni,$regular,12px,16.2px,$base);
                span {
                  font-weight: $light;
                }
              }
            }
            .passengers-count {
              @include font($uni,$bold,16px,21.6px,$blue-color);
              span {
                border-bottom: 1px dashed $blue-color;
              }
            }
            .passengers-count:hover {
              @include animation;
              color: $blue-active;
            }
            .cross-line {
              width: 100%;
              height: 1px;
              background-color: #E1EEF6;
              margin-bottom: 8px;
            }
            .swiper-inputs {
              background-color: $blue-active;
              width: 40px;
              height: 40px;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              bottom: -20px;
              right: 0;
              z-index: 999;
              cursor: pointer;
              -webkit-box-shadow: 12px 0px 0px -4px rgba(255, 255, 255, 1);
              -moz-box-shadow: 12px 0px 0px -4px rgba(255, 255, 255, 1);
              box-shadow: 12px 0px 0px -4px rgba(255, 255, 255, 1);
              transform: rotate(180deg);
              .swiper-inputs-icon {
                @media screen and (max-width: 991px) {
                  background: none;
                }
              }
            }
          }
          //TODO deleted form control
          .form-control {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0 !important;
            padding-right: 0;
            @include font($uni,$bold,16px,21.6px,$blue-color);
            border: none;
            text-decoration: underline dotted $blue-color;
            outline: none !important;

          }
          input:-ms-input-placeholder{
            font-weight: normal;
            font-style: normal;
            font-family: $uniBook;
          }
          input::-webkit-input-placeholder{
            font-weight: normal;
            font-style: normal;
            font-family: $uniBook;
          }
          input::-moz-placeholder{
            font-weight: normal;
            font-style: normal;
            font-family: $uniBook;
          }
          input:-moz-placeholder{
            font-weight: normal;
            font-style: normal;
            font-family: $uniBook;
          }
          .count-passenger {
            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
            input[type=number] {
              -moz-appearance: textfield;
            }

            .form-control {
              width: 20px;
            }
            .count-button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 5px;
              background-color: $blue-active;
              color: $white;
              border: 1px solid $blue-active;
              cursor: pointer;
              box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.25);
            }
            .minus-button {
              margin-right: 8px;
            }
            .plus-button {
              margin-left: 8px;
            }
            .disabled {
              background-color: #F8FAFC;
              border: 1px solid rgba(47, 56, 71, 0.1);
              color: #c0c0c0;
              cursor: auto;
              box-shadow: none;
            }

          }
          .card-example-date {
            cursor: pointer;
          }
        }
        .find-place{
          position: absolute;
          display: block;
          z-index: 998;
          left:0;
          width:100%;
          max-height: 360px;
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

        .calendar-span{
          background: #FFF;
          border: 0px;
          padding: 0;
          .calendar-icon {
            @media screen and (max-width: 767px) {
              width: 16px;
              height: auto;
            }
          }
        }
        .select-date{
          position: absolute;
          display: block;
          z-index: 1051;
          top: 0;
          right:0;
          width: 507px;
          //max-height: 364px;
          padding: .7rem;
          background: #FAFCFF;
          /* Shadow / Normal */
          box-shadow: 0px 8px 12px rgba(161, 159, 255, 0.2);
          border-radius: 16px;
          @media screen and (max-width: 767px) {
            width: 100%;

          }

        }
      }
      .btn {
        width: 100%;
        font-family: $uni;
        font-weight: $regular;
        font-size: 16px;
        padding: 10px 65px;
        border-radius: 8px;
        border: none;
        margin-top: 20px;
        color: $white;
        background-color: $blue-active;
        filter: drop-shadow(0px 8px 12px rgba(161, 159, 255, 0.56));
      }
      .btn:hover {
        @include animation;
        background-color: $btn-hover;
      }
      .btn-disabled {
        background-color: #A3D7FF;
      }
      .mw-300{
        max-width: 300px;
        @media screen and (max-width: 1290px){
          max-width: 1200px;
        }
        @media screen and (max-width: 767px) {
          max-width: 767px;
        }
      }
      .min-w-300{
        min-width: 300px;

      }
    }
    .title-section {
      @include font($uni,$bold,20px,27px,$base);
      margin-bottom: 16px;
    }

  }
}
</style>