<template>
<div class="body-app-white">
  <Header/>
  <Footer/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
export default {
  name: "JobDescription",
  components: {ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
}
</script>

<style scoped>

</style>