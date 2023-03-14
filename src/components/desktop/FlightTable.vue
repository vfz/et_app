<template>
  <section class="thereTable-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-table" v-if="flightType=='there'">
             Туда <span class="title-table-counter">({{flightThere.length}})</span>
          </h2>
          <h2 class="title-table" v-if="flightType=='back'">
             Обратно <span class="title-table-counter">({{flightBack.length}})</span>
          </h2>
          <h2 class="title-table" v-if="flightType=='backAnother'">
            Обратно другие рейсы <span class="title-table-counter">({{flightBackAnother.length}})</span>
          </h2>
          <h2 class="title-table" v-if="flightType=='thereAnother'">
            Туда другие рейсы <span class="title-table-counter">({{flightThereAnother.length}})</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="!isFlightsLoading" class="table-wrapper table-responsive">
            <table class="table align-middle">
              <thead>
              <tr>
                <th>
                  Время отправления
                </th>
                <th>
                  Пункт отправления
                </th>
                <th>
                  Время в пути / маршрут
                </th>
                <th>
                  Время прибытия
                </th>
                <th>
                  Пункт прибытия
                </th>
                <th>
                  Осталось мест
                </th>
                <th>
                  Итого
                </th>
                <th>
                  Покупка
                </th>
              </tr>
              </thead>
              <tbody>
                <!--              Добавить класс active-row для tr и будет выделение вместо false условие что выбран рейс-->
              <tr
                  v-for="flight in getFlightType()"
                  :key="flight.ticket_id_2+'_'+flight.id_trip"

                  :class="{'active-row' : selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected,
                      'd-none' : notSelectedFlights(flight)}"
              >
                <td>
                  <div class="dispatch-time">
                    <!-- время отправления -->
                    {{flight.time_trip}}
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">{{flight.date_trip.split('-')[2]}} </span>
                    <span class="dispatch-date-month">{{ monthes[--flight.date_trip.split('-')[1]]}}</span> 
                    <span class="dispatch-date-year">`{{flight.date_trip.split('-')[0].split('')[2]+flight.date_trip.split('-')[0].split('')[2]}}</span>
                    
                  </div>
                </td>
                <td>
                  <div class="dispatch-city">
                    {{flight.from_name_point}}
                  </div>
                  <!--                  для вызова модального окна нужно добавить атрибуты data-bs-toggle со значением modal и data-bs-target со значением id модального окна
                 data-bs-target="#dispatch-modal" :data-bs-target="flight.id_from_point"-->
                  
                  <div class="dispatch-place table-link" data-bs-toggle="modal" data-bs-target="#dispatch-modal" v-on:click="updateCords(flight.from_yam),updateIcon(flight.from_name)">
                     {{flight.from_address_point}}
                  </div>
                </td>
                <td>
                  <div class="dispatch-length-time">
                    <span v-if="flight.time_duration_trip.split(':')[0]>0">
                    {{flight.time_duration_trip.split(':')[0]}}
                    {{
                        timeFormat(flight.time_duration_trip,'hours')
                    }} 
                    </span>

                    <span v-if="flight.time_duration_trip.split(':')[1]>0">
                    {{flight.time_duration_trip.split(':')[1]}} 
                    {{
                        timeFormat(flight.time_duration_trip,'minutes')
                    }} 
                    </span>
                  </div>
                  <!--                  для вызова модального окна нужно добавить атрибуты data-bs-toggle со значением modal и data-bs-target со значением id модального окна-->
                  <!-- <div class="dispatch-length-time-saw table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                    Посмотреть
                  </div> -->
                </td>
                <td>
                  <div class="arrival-time">
                    {{flight.time_arrival_trip}}
                  </div>
                  <div class="arrival-date">
                    <span class="arrival-date-day">{{flight.date_arrival_trip.split('-')[2]}} </span>
                    <span class="arrival-date-month">{{ monthes[--flight.date_arrival_trip.split('-')[1]]}}</span> 
                    <span class="arrival-date-year">`{{flight.date_arrival_trip.split('-')[0].split('')[2]+flight.date_arrival_trip.split('-')[0].split('')[3]}}</span>
                  </div>
                </td>
                <td>
                  <div class="arrival-city">
                     {{flight.to_name_point}}
                  </div>
                  <!--                  для вызова модального окна нужно добавить атрибуты data-bs-toggle со значением modal и data-bs-target со значением id модального окна
                 data-bs-target="#dispatch-modal" :data-bs-target="flight.id_to_point"-->
                  <div class="arrival-place  table-link" data-bs-toggle="modal" data-bs-target="#dispatch-modal" v-on:click="updateIcon(flight.to_name),updateCords(flight.to_yam)">
                   {{flight.to_address_point}}
                  </div>
                </td>
                <td>
                  <div v-if="true" class="places-left">
                    {{flight.count_available_seats_trip}}
                  </div>
                  <div
                      class="places-left table-link"
                      data-bs-toggle="modal"
                      data-bs-target="#place-left-modal"
                      v-if="true">
<!--                    TODO отобразить выбранные места-->
                  </div>
                  <!-- При нажатии открывается модальное окно с автобусом-->
                  <div
                    class="place-choice table-link" 
                    data-bs-toggle="modal" 
                    data-bs-target="#place-left-modal"
                    @click="updatebBusTriptId(flight.id_trip)"
                    v-if="+flight.count_available_seats_trip>=getAdultsCount+getChildrensCount">
                    <span v-if="getChildrensCount+getAdultsCount===1">место: </span>
                    <span v-if="getChildrensCount+getAdultsCount>1">места: </span>
                    {{ selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].seats.toString() }} изменить 
                  </div>
                </td>
                <td class="align-middle">
                  <div class="d-flex align-content-center">
                    <div class="d-flex flex-column">
                      <div class="price mb-1 d-inline-block">
                        {{(+flight.full_ticket_price*+getAdultsCount)+(+flight.child_ticket_price*+getChildrensCount)}}₽
                      </div> 
                      <span class="badge rounded-pill text-bg-primary">{{ getNameBage(flight.source) }}</span>
                    </div>
                    <!-- <div class="d-inline-block">
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Взрослый - '+flight.full_ticket_price+'₽\n'+'Детский - '+flight.child_ticket_price+'₽'" >
                    </div> -->
                  </div>
                </td>
                <td>
                  <div class="place-choice-buy table-link" 
                    v-if="
                      +flight.count_available_seats_trip>=getAdultsCount+getChildrensCount && 
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip && flightFilter.id_ticket === flight.ticket_id_2))[0] && 
                      !selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip && flightFilter.id_ticket === flight.ticket_id_2))[0].is_selected"
                    @click="chengeSelectTrip([flight.id_trip, flight.ticket_id_2])">
                    Выбрать
                  </div>
                  <div class="place-choice-buy" 
                    v-if="+flight.count_available_seats_trip<getAdultsCount+getChildrensCount || +flight.count_available_seats_trip===0">
                    недостаточно мест :(
                  </div>
                  <div class="place-choice-buy table-link" 
                    v-if="
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip && flightFilter.id_ticket === flight.ticket_id_2))[0] && 
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip && flightFilter.id_ticket === flight.ticket_id_2))[0].is_selected"
                    @click="chengeSelectTrip([flight.id_trip, flight.ticket_id_2])">
                    Убрать
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-if="isFlightsLoading" class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
  name: "ThereTable",
  props: ['flightType'],
  data(){
    return{
        hours: ['час', 'часа', 'часов'],
        minutes: ['минута', 'минуты', 'минут'],
        cases: [2, 0, 1, 1, 1, 2],
        monthes: ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        flights:[],
    }
  },
  computed: {
    ...mapGetters([
      'flightThere',
      'flightBack',
      'flightThereAnother',
      'flightBackAnother',
      'getChildrensCount',
      'getAdultsCount',
      'selectedSeat',
      'isFlightsLoading',
        'oneWay'
    ]),
  },
  mounted(){
    this.getFlightBack()
  },
    methods: {
    ...mapActions([
      'updatebBusTriptId',
      'updateCords',
      'updateIcon',
      'chengeSelectTrip',
      'getFlightBack',
      'getSelectedFlightType'
    ]),
    getNameBage(name) {
       if (name === 'evrotrans') {
         return 'Евротранс'
       }
       if (name === 'rosbilet') {
         return 'Росбилет'
       }
     },
    getFlightType() {
      if (this.flightType == 'there') {
        return this.flightThere
      }
      if (this.flightType == 'back') {
        return this.flightBack
      }
      if (this.flightType == 'backAnother') {
        return this.flightBackAnother
      }
      if (this.flightType == 'thereAnother') {
        return this.flightThereAnother
      }
    },
      notSelectedFlights(flight) {
        const selectedFlights = this.selectedSeat.filter((flightFilter) => flightFilter.id_trip !== flight.id_trip && flightFilter.is_selected === true)
        if (selectedFlights.length > 0) {
          let sameSourceSelectedFlightsThere = this.selectedSeat.filter((flightFilter) => flightFilter.source !== selectedFlights[0].source)
        }
        if (selectedFlights.length === 1 && this.oneWay) {
          return true
        }
        if (selectedFlights.length === 2 && !this.oneWay ) {
          if (selectedFlights[0].source !== selectedFlights[1].source) {
            return false
          }
          else {
            return true
          }
        }
        return false
      },
    timeFormat(time,target){
      
      if(target==='hours'){
        return this.hours[
                  (time.split(':')[0] % 100 > 4 && time.split(':')[0] % 100 < 20) 
                  ? 2 
                  : this.cases[(time.split(':')[0] % 10 < 5) 
                    ? time.split(':')[0] % 10 
                    : 5]
                ]
      }
      if(target==='minutes'){
        return this.minutes[
                  (time.split(':')[1] % 100 > 4 && time.split(':')[1] % 100 < 20) 
                  ? 2 
                  : this.cases[(time.split(':')[1] % 10 < 5) 
                    ? time.split(':')[1] % 10 
                    : 5]
                ]
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.thereTable-section {
  margin: 41px 88px;
  @media screen and (max-width: 767px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  .title-table {
    @include font($uni,$bold, 24px, 32.4px, $black);
    &-counter {
      font-size: 18px;
      color: $secondary;
    }
  }
  .table-wrapper {
    background-color: $white;
    border-radius: 16px;
    box-shadow: $regular-shadow;
    padding: 12px 0 0;
    .table>:not(:first-child) {
      border-top: unset;
    }
    .table {
      margin-bottom: 0;
      td {
        padding: 1rem 1rem;
      }
      th {
        padding: 1rem 1rem;
      }
      thead {
        tr {
          th {
            @include font($uni, $regular, 14px, 18.9px, $base);
          }
        }
      }
      tbody {
        tr {
          td {
            .dispatch-time, .arrival-time, .dispatch-city, .arrival-city, .places-left {
              margin-bottom: 4px;
            }
            .dispatch-time, .arrival-time, .price {
              @include font($uni, $bold, 20px, 27px, $base);
            }
            .dispatch-date, .arrival-date {
              @include font($uni, $regular, 14px, 18.9px, $secondary)
            }
            .dispatch-date {
              &-day {
                font-size: 18px;
              }
              &-month, &-year {
                font-size: 14px;
              }
            }
            .arrival-date {
              &-day {
                font-size: 18px;
              }
            }
            .dispatch-city, .arrival-city, .places-left, .place-choice-buy {
              @include font($uni, $regular, 18px, 24.3px, $base);
              
            }
            .dispatch-length-time-saw, .dispatch-place, .arrival-place, .place-choice {
              @include font($uni, $light, 14px, 18.9px, $blue-link);
            }
            .price {
              margin-bottom: 4px;
            }
            .badge {
               font-family: $uni;
               font-weight: $regular;
               color: $base
             }
            .table-link {
              cursor: pointer;
            }
          }
        }
        .active-row {
          background-color: $blue-hover;
        }
        tr:hover{
          @include animation;
          background-color: $blue-hover;
        }
        .another-flights-title, .another-flights-items {
          background-color: #e9f0ff;
        }
        tr.another-flights-items.active-row {
          background-color: $blue-active;
          .dispatch-date, .arrival-date, .dispatch-city, .arrival-city, .places-left, .place-choice-buy, .dispatch-time, .arrival-time, .price, .dispatch-length-time {
            color: $white;
          }
        }
      }
    }
  }
}
</style>