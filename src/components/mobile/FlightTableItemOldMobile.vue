<template>
  <div
      class="col-12 col-sm-6">
    <div v-if="$route.name !== 'Ticket-booking'" class="table-item"
         :class="{'active-row' : selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected }">
      <div class="table-item-content-wrapper">
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <h3 class="table-item-part-left-title">
                Время отправления
              </h3>
              <div class="table-item-part-left-date d-flex">
                <div class="dispatch-time">
                  <!-- время отправления -->
                  {{flight.time_trip}}
                </div>
                <div class="dispatch-date">
                  <span class="dispatch-date-day">{{flight.date_trip.split('-')[2]}} </span>
                  <span class="dispatch-date-month">{{ monthes[--flight.date_trip.split('-')[1]]}}`</span>
                  <span class="dispatch-date-year">
                          {{flight.date_trip.split('-')[0].split('')[2]}}{{flight.date_trip.split('-')[0].split('')[3]}}
                        </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <h3 class="table-item-part-right-title">
                Время прибытия
              </h3>
              <div class="table-item-part-right-date d-flex">
                <div class="arrival-time">
                  {{flight.time_arrival_trip}}
                </div>
                <div class="arrival-date">
                  <span class="arrival-date-day">{{flight.date_arrival_trip.split('-')[2]}} </span>
                  <span class="arrival-date-month">{{ monthes[--flight.date_arrival_trip.split('-')[1]]}}`</span>
                  <span class="arrival-date-year">
                          {{flight.date_arrival_trip.split('-')[0].split('')[2]}}{{flight.date_arrival_trip.split('-')[0].split('')[3]}}
                        </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <div class="table-item-part-left-city">
                {{flight.from_name_point}}
              </div>
              <div
                  class="table-item-part-left-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal"
                  v-on:click="updateCords(flight.from_yam),updateIcon(flight.from_name)">
                {{flight.from_address_point}}
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <div class="table-item-part-right-city">
                {{flight.to_name_point}}
              </div>
              <div
                  class="table-item-part-right-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal"
                  v-on:click="updateCords(flight.to_yam),updateIcon(flight.to_name)">
                {{flight.to_address_point}}
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <h3 class="table-item-part-left-title">
                Время в пути
              </h3>
              <div class="table-item-part-left-date">
                <!-- <div class="time-length-trip table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal"> -->
                <div class="time-length-trip" >
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
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <h3 class="table-item-part-right-title">
                Осталось мест ({{flight.count_available_seats_trip}})
              </h3>
              <div class="table-item-part-right-date">
                <div class="arrival-time table-link"
                     data-bs-toggle="modal"
                     data-bs-target="#place-left-modal"
                     v-on:click="updatebBusTriptId(flight.id_trip)"
                     v-if="+flight.count_available_seats_trip>=getAdultsCount+getChildrensCount"
                >

                  {{ selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].seats.toString() }} изменить
                  <span v-if="getChildrensCount+getAdultsCount===1">место</span>
                  <span v-if="getChildrensCount+getAdultsCount>1">места</span>
                </div>
                <div class="place-left-count table-link" v-else>
                  недостаточно мест :(
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid">
        <button
            class="btn btn-primary price"
            :class="{'active-button' : selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected }"
            v-if="+flight.count_available_seats_trip>=getAdultsCount+getChildrensCount"
            @click="chengeSelectTrip(flight.id_trip)">
          {{(+flight.full_ticket_price*+getAdultsCount)+(+flight.child_ticket_price*+getChildrensCount)}}₽
        </button>
        <button class="btn btn-primary price disabled"
                v-if="+flight.count_available_seats_trip<getAdultsCount+getChildrensCount || +flight.count_available_seats_trip===0">
          недостаточно мест :(
        </button>
      </div>
    </div>
    <div v-if="$route.name === 'Ticket-booking' && selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected"
         class="table-item active-row">
      <div class="table-item-content-wrapper">
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <h3 class="table-item-part-left-title">
                Время отправления
              </h3>
              <div class="table-item-part-left-date d-flex">
                <div class="dispatch-time">
                  <!-- время отправления -->
                  {{flight.time_trip}}
                </div>
                <div class="dispatch-date">
                  <span class="dispatch-date-day">{{flight.date_trip.split('-')[2]}} </span>
                  <span class="dispatch-date-month">{{ monthes[--flight.date_trip.split('-')[1]]}}`</span>
                  <span class="dispatch-date-year">
                          {{flight.date_trip.split('-')[0].split('')[2]}}{{flight.date_trip.split('-')[0].split('')[3]}}
                        </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <h3 class="table-item-part-right-title">
                Время прибытия
              </h3>
              <div class="table-item-part-right-date d-flex">
                <div class="arrival-time">
                  {{flight.time_arrival_trip}}
                </div>
                <div class="arrival-date">
                  <span class="arrival-date-day">{{flight.date_arrival_trip.split('-')[2]}} </span>
                  <span class="arrival-date-month">{{ monthes[--flight.date_arrival_trip.split('-')[1]]}}`</span>
                  <span class="arrival-date-year">
                          {{flight.date_arrival_trip.split('-')[0].split('')[2]}}{{flight.date_arrival_trip.split('-')[0].split('')[3]}}
                        </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <div class="table-item-part-left-city">
                {{flight.from_name_point}}
              </div>
              <div
                  class="table-item-part-left-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal"
                  v-on:click="updateCords(flight.from_yam),updateIcon(flight.from_name)">
                {{flight.from_address_point}}
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <div class="table-item-part-right-city">
                {{flight.to_name_point}}
              </div>
              <div
                  class="table-item-part-right-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal"
                  v-on:click="updateCords(flight.to_yam),updateIcon(flight.to_name)">
                {{flight.to_address_point}}
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <h3 class="table-item-part-left-title">
                Время в пути
              </h3>
              <div class="table-item-part-left-date">
                <!-- <div class="time-length-trip table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal"> -->
                <div class="time-length-trip" >
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
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <h3 class="table-item-part-right-title">
                Осталось мест ({{flight.count_available_seats_trip}})
              </h3>
              <div class="table-item-part-right-date">
                <div class="arrival-time table-link"
                     data-bs-toggle="modal"
                     data-bs-target="#place-left-modal"
                     v-on:click="updatebBusTriptId(flight.id_trip)"
                     v-if="+flight.count_available_seats_trip>=getAdultsCount+getChildrensCount"
                >

                  {{ selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0].seats.toString() }} изменить
                  <span v-if="getChildrensCount+getAdultsCount===1">место</span>
                  <span v-if="getChildrensCount+getAdultsCount>1">места</span>
                </div>
                <div class="place-left-count table-link" v-else>
                  недостаточно мест :(
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid">
        <button
            class="btn btn-primary price"
            :class="{'active-button' : selectedSeat.filter(flightFilter=>(flightFilter.id_trip === flight.id_trip))[0] &&
                      selectedSeat.filter(flightFiltr=>(flightFiltr.id_trip === flight.id_trip))[0].is_selected }"
            v-if="+flight.count_available_seats_trip>=getAdultsCount+getChildrensCount"
            @click="chengeSelectTrip(flight.id_trip)">
          {{(+flight.full_ticket_price*+getAdultsCount)+(+flight.child_ticket_price*+getChildrensCount)}}₽
        </button>
        <button class="btn btn-primary price disabled"
                v-if="+flight.count_available_seats_trip<getAdultsCount+getChildrensCount || +flight.count_available_seats_trip===0">
          недостаточно мест :(
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FlightTableItemOldMobile",
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
      'getChildrensCount',
      'getAdultsCount',
      'selectedSeat',
      'isFlightsLoading'
    ])
  },
  methods: {
    ...mapActions([
      'updatebBusTriptId',
      'updateCords',
      'updateIcon',
      'chengeSelectTrip',
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
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.table-item {
  max-width: unset;
  box-shadow: $regular-shadow;
  border-radius: 8px;
  &-content-wrapper {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
  }
  &-part {
    .table-link {
      cursor: pointer;
    }
    &-left {
      &-title {
        @include font($uni,$regular,11px,14.85px,$base);
        margin-bottom: 4px;
      }
      &-date {
        .dispatch-time {
          @include font($uni,$bold,18px,24.3px,$base);
          margin-right: 8px;
        }
        .dispatch-time:hover {
          @include animation;
          color: $blue-link;
        }
        .dispatch-date {
          &-day, &-month, &-year {
            @include font($uni,$regular,12px,21.94px,$secondary)
          }
          &-month {
            font-size: 12px;
            line-height: 16.2px;
          }
          &-month, &-year {
            font-size: 10px;
            line-height: 13.5px;
          }
        }
        .time-length-trip {
          @include font($uni,$bold,13px,17.55px,$base);
        }
        .time-length-trip:hover {
          @include animation;
          color: $blue-active;
        }
      }
      &-city {
        @include font($uni,$bold,14px,18.9px,$base);
        margin-bottom: 3px;
      }
      &-place {
        @include font($uni, $light, 11px, 14.85px, $blue-active);
      }
    }
    &-right {
      &-title {
        @include font($uni,$regular,11px,14.85px,$base);
        margin-bottom: 4px;
      }
      &-date {
        .arrival-time {
          @include font($uni,$bold,18px,24.3px,$base);
          margin-right: 8px;
        }
        .arrival-time:hover {
          @include animation;
          color: $blue-link;
        }
        .arrival-date {
          &-day, &-month, &-year {
            @include font($uni,$regular,12px,21.94px,$secondary)
          }
          &-month {
            font-size: 12px;
            line-height: 16.2px;
          }
          &-month, &-year {
            font-size: 10px;
            line-height: 13.5px;
          }
        }
        .place-left-count {
          @include font($uni,$bold,13px,17.55px,$base);
        }
      }
      &-city {
        @include font($uni,$bold,14px,18.9px,$base);
        margin-bottom: 3px;
      }
      &-place {
        @include font($uni, $light, 11px, 14.85px, $blue-active);
      }
    }
  }
  .btn {
    @include font($uni,$bold,16px,21.6px,$white);
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 0 0 8px 8px;
  }
  .disabled {
    background-color: $disabled;
    box-shadow: none;
  }
}
</style>