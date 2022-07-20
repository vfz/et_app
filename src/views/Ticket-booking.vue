<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <TimelineMobile class="timeline-mobile" title="Бронирование билета" description="Шаг 2" v-if="isMobile()"/>
    <FlightForm v-if="!isMobile()"/>
    <ThereBackTabs v-if="!isMobile()"/>
<!--    TODO добавить props для отображения контента-->
    <section class="carousel-bootstrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button v-if="!oneWay" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <FlightTableMobile class="slider-table" flight-type="there" v-if="isMobile()"/>
                </div>
                <div v-if="!oneWay" class="carousel-item">
                  <FlightTableMobile class="slider-table" flight-type="back" v-if="isMobile() && !oneWay"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EuroPointsOffer/>
    <CurrentPoints class="d-none"/>
    <PassengersFormInfo v-if="!isMobile()"/>
    <PassengersFormInfoMobile v-if="isMobile()"/>
    <Footer/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
    <RemoveModal/>
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
export default {
  name: "Ticket-booking",
  components: {
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
    ThereBackTabs, Footer, FlightForm, Timeline, Header, LoginModal, RegistrationModal, ForgotPasswordModal},
  methods: {
    isMobile() {
      return screen.width <= 992;
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