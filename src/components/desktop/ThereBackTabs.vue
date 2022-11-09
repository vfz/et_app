<template>
  <section class="there-back-tabs-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Туда</button>
              <button v-if="!oneWay" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Обратно</button>
            </div>
          </nav>
          <div class="tab-content position-relative" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="table-wrapper table-responsive">
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
                  <tr
                      v-for="flight in flightThere"
                      v-if="selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected"
                      :key="flight.ticket_id_2+'_'+flight.id_trip"
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
                        {{ selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].seats.toString() }} изменить
                        <span v-if="getChildrensCount+getAdultsCount===1">место</span>
                        <span v-if="getChildrensCount+getAdultsCount>1">места</span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-content-center">
                        <div class="price d-inline-block">
                          {{(+flight.full_ticket_price*+getAdultsCount)+(+flight.child_ticket_price*+getChildrensCount)}}₽
                        </div>
                        <div class="d-inline-block">
                          <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Взрослый - '+flight.full_ticket_price+'₽\n'+'Детский - '+flight.child_ticket_price+'₽'" >
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="place-choice-buy table-link"
                           v-if="
                      +flight.count_available_seats_trip>=getAdultsCount+getChildrensCount &&
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      !selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].is_selected"
                           @click="chengeSelectTrip(flight.id_trip)">
                        Выбрать
                      </div>
                      <div class="place-choice-buy"
                           v-if="+flight.count_available_seats_trip<getAdultsCount+getChildrensCount || +flight.count_available_seats_trip===0">
                        недостаточно мест :(
                      </div>
                      <div class="place-choice-buy table-link"
                           v-if="
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected"
                           @click="chengeSelectTrip(flight.id_trip)">
                        Убрать
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-if="!oneWay" class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="table-wrapper table-responsive">
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
                  <tr
                      v-for="flight in flightBack"
                      v-if="selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected"
                      :key="flight.ticket_id_2+'_'+flight.id_trip"
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
                        {{ selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].seats.toString() }} изменить
                        <span v-if="getChildrensCount+getAdultsCount===1">место</span>
                        <span v-if="getChildrensCount+getAdultsCount>1">места</span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-content-center">
                        <div class="price d-inline-block">
                          {{(+flight.full_ticket_price*+getAdultsCount)+(+flight.child_ticket_price*+getChildrensCount)}}₽
                        </div>
                        <div class="d-inline-block">
                          <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Взрослый - '+flight.full_ticket_price+'₽\n'+'Детский - '+flight.child_ticket_price+'₽'" >
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="place-choice-buy table-link"
                           v-if="
                      +flight.count_available_seats_trip>=getAdultsCount+getChildrensCount &&
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      !selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].is_selected"
                           @click="chengeSelectTrip(flight.id_trip)">
                        Выбрать
                      </div>
                      <div class="place-choice-buy"
                           v-if="+flight.count_available_seats_trip<getAdultsCount+getChildrensCount || +flight.count_available_seats_trip===0">
                        недостаточно мест :(
                      </div>
                      <div class="place-choice-buy table-link"
                           v-if="
                      selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected"
                           @click="chengeSelectTrip(flight.id_trip)">
                        Убрать
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "ThereBackTabs",
  data(){
    return{
      hours: ['час', 'часа', 'часов'],
      minutes: ['минута', 'минуты', 'минут'],
      cases: [2, 0, 1, 1, 1, 2],
      monthes: ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      flights:[],
    }
  },
  computed: mapGetters([
    'flightThere',
    'flightBack',
    'getChildrensCount',
    'getAdultsCount',
    'flightThere',
    'flightBack',
    'getChildrensCount',
    'getAdultsCount',
    'selectedSeat',
      'oneWay'
  ]),
  methods: {
    ...mapActions([
      'updatebBusTriptId',
      'updateCords',
      'updateIcon',
      'chengeSelectTrip'
    ]),
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
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.there-back-tabs-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$base);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
    }
    .active {
      border-color: unset;
      border-bottom: none;
      box-shadow: $regular-shadow;
    }
  }
  .tab-content {
    position: relative;
    z-index: 2;
    .table-wrapper {
      background-color: $white;
      border-radius: 0 16px 16px 16px;
      box-shadow: $regular-shadow;
      padding: 12px 0;
      .table>:not(:first-child) {
        border-top: unset;
      }
      .table {
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
                margin-right: 24px;
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
        }
      }
    }
  }
}
</style>