<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <TimelineMobile class="timeline-mobile" title="Бронирование билета" description="Шаг 2" v-if="isMobile()"/>
    <EuroPointsOffer/>
    <CurrentPoints class="d-none"/>
    <PassengersFormInfo v-if="!isMobile()"/>
    <PassengersFormInfoMobile v-if="isMobile()"/>
    <Footer/>
    <DispatchModal/>
    <DispatchLengthTimeModal/>
    <PlaceLeftModal :mobile="isMobile()"/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
    <ProcessingPersonalDataModal/>
    <RemoveModal v-for="(passenger,index) in getPassengers" :key="index" :index="index"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Timeline from "@/components/desktop/Timeline";
import FlightForm from "@/components/desktop/Flight-form";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import ThereBackTabs from "@/components/desktop/ThereBackTabs";
import CurrentPoints from "@/components/CurrentPoints";
import PassengersFormInfo from "@/components/desktop/PassengersFormInfo";
import RemoveModal from "@/components/RemoveModal";
import TimelineMobile from "@/components/mobile/TimelineMobile";
import ThereTabMobile from "@/components/mobile/ThereTabMobile";
import BackTabMobile from "@/components/mobile/BackTabMobile";
import PassengersFormInfoMobile from "@/components/mobile/PassengersFormInfoMobile";
import EuroPointsOffer from "@/components/EuroPointsOffer";
import FlightTable from "@/components/desktop/FlightTable";
import FlightTableMobile from "@/components/mobile/FlightTableMobile";
import {mapGetters,mapActions} from 'vuex'
import DispatchModal from "@/components/Dispatch-modal";
import DispatchLengthTimeModal from "@/components/Dispatch-length-time-modal";
import PlaceLeftModal from "@/components/Place-left-modal";
import ProcessingPersonalDataModal from "@/components/ProcessingPersonalDataModal.vue";

export default {
  name: "Ticket-booking",
  components: {
    ProcessingPersonalDataModal,
    PlaceLeftModal,
    DispatchLengthTimeModal,
    DispatchModal,
    EuroPointsOffer,
    PassengersFormInfoMobile,
    FlightTable,
    FlightTableMobile,
    BackTabMobile,
    ThereTabMobile,
    TimelineMobile,
    RemoveModal,
    PassengersFormInfo,
    CurrentPoints,
    ThereBackTabs, 
    Footer,
    Timeline, 
    Header, 
    LoginModal, 
    RegistrationModal, 
    ForgotPasswordModal
    },
  computed: mapGetters(['oneWay', 'getPassengers']),
  mounted() {
    this.fetchSelectedSeat();
  },
  methods: {
    ...mapActions([
       'fetchSelectedSeat'
    ]),
    isMobile() {
      return screen.width <= 991;
    }
  }
}
</script>
<style>
.slider-table {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.slider-table .container-fluid {
  padding:  0;
}
.slider-table .col-12 {
  padding: 0;
}
.slider-table .col-sm-6 {
  padding: 0;
}
.timeline-mobile .timeline-section {
  margin-top: 24px;
}
</style>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
  .carousel-bootstrap {
    margin-right: 88px;
    margin-left: 88px;
    @media screen and (max-width: 767px) {
      margin-right: 8px;
      margin-left: 8px;
    }
    .carousel-indicators .active {
      background-color: $base;
    }
    .carousel-indicators button {
      background-color: $deactivate;
    }
    .carousel-item {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
.footer {
  margin-top: 72px;
}

</style>