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
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $white;
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
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import FlightForm from "@/components/Flight-form";

export default {
  name: 'Flightselection',
  components: {
    FlightForm,
    Timeline,
    Header,
    Hero,Footer,Populardirections,Registrationhero,LoginModal,RegistrationModal,ForgotPasswordModal
  }
}
</script>
