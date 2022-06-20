<template>
  <div class="body-app-white">
    <Header/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import LoginModal from "@/components/LoginModal";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
export default {
  name: "Payment-success",
  components: {ForgotPasswordModal, RegistrationModal, Footer, Header, LoginModal}
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