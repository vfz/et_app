<template>
  <div class="body-app-white">
    <Header/>
    <SectionTitle/>
    <Footer/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
export default {
  name: "Lost-and-found",
  components: {ForgotPasswordModal, RegistrationModal, LoginModal, Footer, SectionTitle, Header}
}
</script>

<style scoped>

</style>