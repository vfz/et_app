<template>
  <div class="body-app-white">
    <Header/>
    <Timeline v-if="!isMobile()"/>
    <TimelineMobile v-if="isMobile()"/>
    <FlightForm/>
    <ThereBackTabs/>
    <CurrentPoints/>
    <PassengersFormInfo/>
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
import ThereBackTabs from "@/components/ThereBackTabs";
import CurrentPoints from "@/components/CurrentPoints";
import PassengersFormInfo from "@/components/PassengersFormInfo";
import RemoveModal from "@/components/RemoveModal";
import TimelineMobile from "@/components/mobile/TimelineMobile";
export default {
  name: "Ticket-booking",
  components: {
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