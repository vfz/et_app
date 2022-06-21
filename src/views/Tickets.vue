<template>
  <div class="body-app-white">
    <Header/>
    <Footer/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
    <RemoveModal/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import RemoveModal from "@/components/RemoveModal";
export default {
  name: "Tickets",
  components: {RemoveModal, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
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