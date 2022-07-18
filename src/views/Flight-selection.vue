<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <FlightForm v-if="!isMobile()"/>
    <FlightFormMobile v-if="isMobile()"/>
    <TimelineMobile title="Выбор рейса" description="Шаг 1" v-if="isMobile()"/>

    <FlightTable flight-type="there" v-if="!isMobile()"/>
    <FlightTableMobile flight-type="there" v-if="isMobile()"/>
    
    <FlightTable flight-type="back" v-if="!isMobile() && !oneWay"/>
    <FlightTableMobile flight-type="back" v-if="isMobile() && !oneWay"/>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <button type="button" class="btn submit-flight btn-primary">
            Перейти к бронированию
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    <DispatchModal/>
    <DispatchLengthTimeModal/>
    <PlaceLeftModal/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>

  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
  .btn {
    @include font($uni,$regular,16px,21.6px,$white);
    padding: 11px 47px;
    border-radius: 8px;
    border: none;
    color: $white;
    background-color: $blue-active;
    margin-bottom: 72px;
    text-transform: none;
  }
}
</style>
<script>
import Header from "@/components/Header"
import Timeline from "@/components/desktop/Timeline"
import TimelineMobile from "@/components/mobile/TimelineMobile"

import FlightForm from "@/components/desktop/Flight-form"
import FlightFormMobile from "@/components/mobile/FlightFormMobile"

import FlightTable from "@/components/desktop/FlightTable"
import FlightTableMobile from "@/components/mobile/FlightTableMobile"

import Footer from '@/components/Footer'
import DispatchModal from "@/components/Dispatch-modal"
import DispatchLengthTimeModal from "@/components/Dispatch-length-time-modal"
import PlaceLeftModal from "@/components/Place-left-modal"

import LoginModal from '@/components/LoginModal'
import RegistrationModal from '@/components/RegistrationModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Flight-selection',
  components: {
    Header,
    Timeline,
    TimelineMobile,

    FlightForm,
    FlightFormMobile,

    FlightTable,
    FlightTableMobile,

    Footer,
    DispatchModal,
    DispatchLengthTimeModal,
    PlaceLeftModal,
    
    LoginModal,
    RegistrationModal,
    ForgotPasswordModal,

    // Populardirections,
    // Registrationhero,

  }, 
  computed: mapGetters(['oneWay']),
  methods: {
    ...mapActions([
      'setFrom',
      'setTo',
    ]),

    isMobile() {
      return screen.width <= 992;
    },
  },
  mounted(){
  }
}
</script>
<style scoped>

</style>
