<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <FlightForm/>
    <TimelineMobile v-if="isMobile()"/>
    <ThereTable v-if="!isMobile()"/>
    <ThereTableMobile v-if="isMobile()"/>
    <BackTable v-if="!isMobile()"/>
    <BackTableMobile v-if="isMobile()"/>
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
  background-color: $white;
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

import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import LoginModal from '@/components/LoginModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'
import RegistrationModal from '@/components/RegistrationModal'
import Populardirections from '@/components/Populardirections'
import Registrationhero from '@/components/Registrationhero'
import Header from "@/components/Header"
import Timeline from "@/components/desktop/Timeline"
import FlightForm from "@/components/Flight-form"
import ThereTable from "@/components/desktop/ThereTable"
import BackTable from "@/components/desktop/BackTable"
import TimelineMobile from "@/components/mobile/TimelineMobile"
import ThereTableMobile from "@/components/mobile/ThereTableMobile"
import BackTableMobile from "@/components/mobile/BackTableMobile"
import DispatchModal from "@/components/Dispatch-modal"
import DispatchLengthTimeModal from "@/components/Dispatch-length-time-modal"
import PlaceLeftModal from "@/components/Place-left-modal"

export default {
  name: 'Flightselection',
  components: {
    PlaceLeftModal,
    DispatchLengthTimeModal,
    DispatchModal,
    BackTableMobile,
    ThereTableMobile,
    TimelineMobile,
    BackTable,
    ThereTable,
    FlightForm,
    Timeline,
    Header,
    Hero,Footer,Populardirections,Registrationhero,LoginModal,RegistrationModal,ForgotPasswordModal
  },
  methods: {
    isMobile() {
      return screen.width <= 768;
    }
  }
}
</script>
