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
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import Footer from "@/components/Footer";
export default {
  name: "Payment-error",
  components: {Footer, ForgotPasswordModal, RegistrationModal, Header, LoginModal}
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