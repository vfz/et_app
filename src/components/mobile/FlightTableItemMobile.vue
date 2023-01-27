<template>
  <div
      class="col-12 col-sm-6"
      v-for="flight in (flightType=='there') ? flightThere:flightBack"
      :key="flight.ticket_id_2+'_'+flight.id_trip">
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
export default {
  name: "FlightTableItemMobile"
}
</script>

<style scoped>

</style>