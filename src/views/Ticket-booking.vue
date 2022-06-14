<template>
  <div class="body-app-white">
    <Header/>
    <Timeline/>
    <FlightForm/>
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
export default {
  name: "Ticket-booking",
  components: {Footer, FlightForm, Timeline, Header, LoginModal, RegistrationModal, ForgotPasswordModal}
}
</script>

<style scoped>

</style>