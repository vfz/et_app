<template>
  <div class="hero-content">
    <div class="container-fluid">
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
            <!--one-way-input-->
            <div class="one-way-inputs w-100" v-if="oneWay">
              <div class="row">
                <div class="col-md-12 col-lg-6 col-xl-6 col-xxl-3 mb-lg-4 mb-xxl-0">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="dataListFrom" class="form-label">Откуда</label>
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
                             v-on:click="setFrom(pointFrom.id_from);fromPlaceV=false;fromPlace=pointFrom.name"
                        >
                          <div class="title">{{pointFrom.name}}</div>
                          <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointFrom.address}}</div>
                        </div>
                      </div>
                      <span class="card-example">
                                                Например:
                                                <span id="city-example-from" class="card-example-date city-example-from text-decoration-underline"
                                                      v-on:click="setFrom('1');fromPlaceV=false;fromPlace='Ставрополь'"
                                                >Ставрополь</span>
                                            </span>
                      <!--                          TODO добавить вывод станции отправления. Убрать d-none для отображения-->
                      <a href="#" class="card-place-link d-none" data-bs-toggle="modal" data-bs-target="#dispatch-modal">
                        <div>
                          Ставрополь, ж/д
                        </div>
                      </a>
                      <div id="swiper-inputs" class="swiper-inputs" v-on:click="castling();temp = fromPlace;fromPlace = toPlace;toPlace = temp;">
                        <div class="swiper-inputs-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-6 col-xxl-3 mb-lg-4 mb-xxl-0">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="datalistTo" class="form-label">Куда</label>
                      <input class="form-control one-way-inputs-input shadow-none"
                             @focus="toPlaceV=true"
                             v-model="toPlace"
                             v-mmodel="toPlace"
                             placeholder="Введите название населенного пункта" style="padding-left: 7pt;">
                      <div class="find-place" v-if="toPlace && !to || toPlaceV ">
                        <div class="meta"
                             v-for="pointTo in toStations" :key="pointTo.id_to"
                             v-show="search(pointTo.name,toPlace)"
                             v-on:click="setTo(pointTo.id_to);toPlaceV=false;toPlace=pointTo.name">
                          <div class="title">{{pointTo.name}}</div>
                          <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointTo.address}}</div>
                        </div>
                      </div>
                      <span class="card-example">
                                                Например:
                                                <span id="city-example-to" class="card-example-date city-example-to text-decoration-underline"
                                                      v-on:click="setTo('190');toPlaceV=false;toPlace='Москва'">Москва</span>
                                            </span>
                      <!--                          TODO добавить вывод станции отправления. Убрать d-none для отображения-->
                      <a href="#" class="card-place-link d-none" data-bs-toggle="modal" data-bs-target="#dispatch-modal">
                        <div>
                          Ставрополь, ж/д
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-6 col-xxl-3">
                  <PassengersCounter/>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-6 col-xxl-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="datepickerinputStart" class="form-label">Когда</label>
                      <div class="input-group">
                        <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату"
                               v-model="dateArival"
                               @focus="UpdateselectDate()"
                        >
                        <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                      </div>
                      <div class="select-date" v-if="selectDate">
                        <DataPicker/>
                      </div>
                      <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDate();SetDateArival(false);UpdateselectDate()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDate();SetDateArival(true);UpdateselectDate()">Завтра</span>
                                            </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center align-items-center">
                  <button
                      :disabled="isFlightsLoading" id="submit-button" type="button" class="btn">
                    <span v-if="isFlightsLoading === true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Найти билеты
                  </button>
                </div>
              </div>
            </div>
            <!-- two-way-input-->
            <div class="two-ways-inputs w-100" v-else>
              <div class="row">
                <div class="col-lg-6 col-xl-6 col-xxl mb-lg-4 mb-xxl-0 mw-300 min-w-300">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="dataListFrom" class="form-label">Откуда</label>
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
                             v-on:click="setFrom(pointFrom.id_from);fromPlaceV=false;fromPlace=pointFrom.name"
                        >
                          <div class="title">{{pointFrom.name}}</div>
                          <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointFrom.address}}</div>
                        </div>
                      </div>
                      <span class="card-example">
                                                Например:
                                                <span id="city-example-from" class="card-example-date city-example-from text-decoration-underline"
                                                      v-on:click="setFrom('1');fromPlaceV=false;fromPlace='Ставрополь'"
                                                >Ставрополь</span>
                                            </span>

                      <div id="swiper-inputs" class="swiper-inputs" v-on:click="castling();temp = fromPlace;fromPlace = toPlace;toPlace = temp;">
                        <div class="swiper-inputs-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl mb-lg-4 mb-xxl-0 mw-300 min-w-300">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="datalistTo" class="form-label">Куда</label>
                      <input class="form-control one-way-inputs-input shadow-none"
                             @focus="toPlaceV=true"
                             v-model="toPlace"
                             v-mmodel="toPlace"
                             placeholder="Введите название населенного пункта" style="padding-left: 7pt;">
                      <div class="find-place" v-if="toPlace && !to || toPlaceV ">
                        <div class="meta"
                             v-for="pointTo in toStations" :key="pointTo.id_to"
                             v-show="search(pointTo.name,toPlace)"
                             v-on:click="setTo(pointTo.id_to);toPlaceV=false;toPlace=pointTo.name">
                          <div class="title">{{pointTo.name}}</div>
                          <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointTo.address}}</div>
                        </div>
                      </div>
                      <span class="card-example">
                                                Например:
                                                <span id="city-example-to" class="card-example-date city-example-to text-decoration-underline"
                                                      v-on:click="setTo('190');toPlaceV=false;toPlace='Москва'">Москва</span>
                                            </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl mb-lg-4 mb-xxl-0 mw-300 min-w-300">
                  <PassengersCounter/>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl mb-lg-4 mb-xxl-0 mw-300 min-w-300">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="datepickerinputStart" class="form-label">Когда</label>
                      <div class="input-group">
                        <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату"
                               v-model="dateArival"
                               @focus="UpdateselectDate()"
                        >
                        <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                      </div>
                      <div class="select-date" v-if="selectDate">
                        <DataPicker which-way="from"/>
                      </div>
                      <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDate();SetDateArival(false);UpdateselectDate()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDate();SetDateArival(true);UpdateselectDate()">Завтра</span>
                                            </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl mw-300 min-w-300">
                  <div class="card h-100">
                    <div class="card-body">
                      <label for="datepickerinputStart" class="form-label">Обратно</label>
                      <div class="input-group">
                        <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату"
                               v-model="dateBack"
                               @focus="UpdateselectDateBack()"
                        >
                        <span class="input-group-text calendar-span" v-on:click="UpdateselectDateBack()" ><img class="calendar-icon" alt="calendar" src="/img/hero/calendar.svg"></span>
                      </div>
                      <div class="select-date" v-if="selectDateBack">
                        <DataPicker which-way="to"/>
                      </div>
                      <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDateBack();SetDateBack(false);UpdateselectDateBack()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                      v-on:click="UpdateselectDateBack();SetDateBack(true);UpdateselectDateBack()">Завтра</span>
                                            </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center align-items-center">
                  <button :disabled="isFlightsLoading" v-if="$route.name !== 'Ticket-booking'" id="submit-button-twoWays" type="button" class="btn" >
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
import PassengersCounter from "@/components/PassengersCounter"
import {mapGetters,mapActions} from 'vuex'
import moment from 'moment'
export default {
  name: "Flight-form",
  components:{DataPicker,PassengersCounter},
  computed: mapGetters(
    [
      'fromStations',
      'toStations',
      'from',
      'to',
      'dateArival',
      'dateBack',
      'selectDate',
      'selectDateBack',
      'oneWay',
        'isFlightsLoading'
    ]),
  data(){
    return{
      toPlace:'',
      fromPlace:'',
      fromPlaceV:false,
      toPlaceV:false,
      temp:'',
      tomorrow: new Date(new Date())

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
      'PlusAdult',
      'MinusAdult',
      'PlusChild',
      'MinusChild',
      'addPassenger',
      'removePassenger'
    ]),

    search(str,target){
      //Вариант поиска ЗАВИСИМЫЙ от регистра
      //return str.indexOf(target)+1
      //Вариант поиска НЕзависимый от регистра
      return str.toLowerCase().indexOf(target.toLowerCase())+1
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
    let oneWay = (this.$route.params.oneWay === 'true')
    this.$store.commit('updateOneWay', oneWay)
  },
  created(){
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

<style scoped lang="scss">
@import "../../assets/variables";
@import "../../assets/font";

.hero {
  &-content {
    margin-top: 41px;
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 767px) {
      margin-left: 5px;
      margin-right: 5px;
    }
    @media screen and (max-width: 991px) {
      margin-left: 80px;
      margin-right: 80px;
    }
    .search-form {
      .checkbox-form {
        margin-bottom: 32px;
        @media screen and (max-width: 991px) {
          display: flex !important;
          width: 100% !important;
          margin-bottom: 16px;
          margin-left: 0;
          margin-right: 0;
        }
        .form-check-label {
          font-family: $uni;
          font-weight: $bold;
          font-size: 18px;
          margin-left: 24px;
          color: $base;
        }
        .form-check-inline {
          display: inline-flex;
          align-items: center;
          margin-right: 64px;
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
            color: $base !important;
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
        border-radius: .85rem;
        &-body {
          padding: 2.5rem;
          .form-label {
            @include font($uni,$regular,18px,24.3px,$base);
            margin-bottom: 19px;
          }
          .form-control {
            padding-left: 0 !important;
            padding-right: 0;
            font-family: $uni;
            font-weight: $bold;
            font-size: 18px;
            color: $base;
            border: none;
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
            .minus-button {
              margin-right: 8px;
            }
            .plus-button {
              margin-left: 8px;
            }
            .count-button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 24px;
              height: 24px;
              border-radius: 5px;
              background-color: $blue-active;
              color: $white;
              border: 1px solid $blue-active;
              cursor: pointer;
              font-size: 10px;
              box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.25);
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
        .swiper-inputs {
          background-color: $blue-active;
          width: 64px;
          height: 64px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 30px;
          right: -46px;
          z-index: 999;
          cursor: pointer;
          @media screen and (max-width: 767px) {
            right: 0;
            bottom: -40px;
            transform: rotate(90deg);
          }
          &-icon {
            background: url("@/../public/img/hero/arrows.svg") no-repeat;
            width: 33px;
            height: 24px;

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
        &-place-link {
          div {
            @include font($uni,$light,14px,18.9px,$blue-active);
            @media screen and (max-width: 768px) {
              font-size: 12px;
              line-height: 16.2px;
            }
          }
        }

        .calendar-span{
          background: #FFF;
          border: 0px;
        }
        .select-date{
          position: absolute;
          display: block;
          z-index: 1051;
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
        font-family: $uni;
        font-weight: $regular;
        font-size: 24px;
        padding: 23px 65px;
        border-radius: 15px;
        border: none;
        margin-top: 40px;
        color: $white;
        background-color: $blue-active;
      }
      .btn-disabled {
        background-color: #A3D7FF;
      }
      .mw-300{
        max-width: 300px;
        @media screen and (min-width: 1291px) {
          max-width: 1200px;
        }
        @media screen and (max-width: 1290px){
          max-width: 1200px;
        }
        @media screen and (max-width: 767px) {
          max-width: 767px;
        }
      }
      .min-w-300{
        min-width: 300px;
        @media (min-width: 1400px) {
          min-width: unset;
        }
      }
    }

  }
}
</style>