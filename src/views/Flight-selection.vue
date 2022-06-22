<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <FlightForm v-if="!isMobile()"/>
    <FlightFormMobile v-if="isMobile()"/>
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
import FlightForm from "@/components/desktop/Flight-form"
import ThereTable from "@/components/desktop/ThereTable"
import BackTable from "@/components/desktop/BackTable"

import TimelineMobile from "@/components/mobile/TimelineMobile"
import ThereTable from "@/components/desktop/ThereTable"
import ThereTableMobile from "@/components/mobile/ThereTableMobile"
import BackTable from "@/components/desktop/BackTable"
import BackTableMobile from "@/components/mobile/BackTableMobile"
import Footer from '@/components/Footer'
import DispatchModal from "@/components/Dispatch-modal"
import DispatchLengthTimeModal from "@/components/Dispatch-length-time-modal"
import PlaceLeftModal from "@/components/Place-left-modal"
import FlightFormMobile from "@/components/mobile/FlightFormMobile"

import LoginModal from '@/components/LoginModal'
import RegistrationModal from '@/components/RegistrationModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'


import LoginModal from '@/components/LoginModal'
import RegistrationModal from '@/components/RegistrationModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'


export default {
  name: 'Flight-selection',
  components: {

    FlightFormMobile,
    PlaceLeftModal,
    DispatchLengthTimeModal,
    DispatchModal,
    BackTableMobile,
    ThereTableMobile,
    Header,
    Timeline,
    FlightForm,
    TimelineMobile,
    ThereTable,
    ThereTableMobile,
    BackTable,
    BackTableMobile,
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
  methods: {
    isMobile() {
      return screen.width <= 767;
    }

  }
}
</script>
<style scoped>

</style>