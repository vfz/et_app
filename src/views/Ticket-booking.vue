<template>
  <div class="body-app-white">
    <Header/>
    <Timeline/>
    <FlightForm/>
    <ThereBackTabs/>
    <CurrentPoints/>
    <Footer/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
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
export default {
  name: "Ticket-booking",
  components: {
    CurrentPoints,
    ThereBackTabs, Footer, FlightForm, Timeline, Header, LoginModal, RegistrationModal, ForgotPasswordModal}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
}

</style>