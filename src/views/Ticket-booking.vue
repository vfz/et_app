<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <TimelineMobile v-if="isMobile()"/>
    <FlightForm v-if="!isMobile()"/>
    <ThereBackTabs v-if="!isMobile()"/>
    <ThereTabMobile v-if="isMobile()"/>
    <BackTabMobile v-if="isMobile()"/>
    <CurrentPoints/>
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
import FlightForm from "@/components/Flight-form";
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
export default {
  name: "Ticket-booking",
  components: {
    PassengersFormInfoMobile,
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

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
}
.footer {
  margin-top: 72px;
}

</style>