<template>
  <section class="thereTable-section-mobile">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-table" v-if="flightType=='there'">
             Туда <span v-if="$route.name !== 'Ticket-booking'" class="title-table-counter">({{flightThere.length}})</span>
          </h2>
          <h2 class="title-table" v-if="flightType=='back'">
             Обратно <span v-if="$route.name !== 'Ticket-booking'" class="title-table-counter">({{flightBack.length}})</span>
          </h2>
        </div>
      </div>
      <div class="row gy-4">
        <!--      новая версия-->
        <FlightTableItemMobile
            v-for="flight in (flightType=='there') ? flightThere:flightBack"
            :key="flight.ticket_id_2+'_'+flight.id_trip"
            :flightType="flightType"
            :flight="flight"
        />
      </div>
      <div v-if="isFlightsLoading" :class="{'gy-4': $route.name !== 'Ticket-booking'}" class="row">
        <div class="col-12">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Загрузка...</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import FlightTableItemOldMobile from "@/components/mobile/FlightTableItemOldMobile.vue";
import FlightTableItemMobile from "@/components/mobile/FlightTableItemMobile.vue";
export default {
  name: "ThereTableMobile",
  components: {FlightTableItemMobile, FlightTableItemOldMobile},
  props: ['flightType'],
  computed: {
    ...mapGetters([
      'flightThere',
      'flightBack',
      'isFlightsLoading'
    ])
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.thereTable-section-mobile {
  margin: 41px 88px;
  @media screen and (max-width: 767px) {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 24px;
  }
  .title-table {
    @include font($uni,$bold,18px,24.3px,$base);
    margin-bottom: 16px;
    &-counter {
      font-size: 14px;
      line-height: 18.9px;
      color: $secondary;
    }
  }
  .active {
    background: #F3F7FF;
  }
  .active-row {
          background-color: $blue-hover;
  }
  .active-button:hover, .active-button {
    background-color: $green !important;
  }
}
</style>