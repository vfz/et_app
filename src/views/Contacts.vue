<template>
<div class="body-app-white">
  <Header/>
  <ContactMap v-if="!isMobile()"/>
  <ContactMapMobile/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import ContactMap from "@/components/desktop/Contacts/ContactMap";
import ContactMapMobile from "@/components/mobile/Contacts/ContactMapMobile";
export default {
  name: "Contacts",
  components: {ContactMapMobile, ContactMap, LoginModal,ForgotPasswordModal, RegistrationModal, Footer, Header},
  methods: {
    isMobile() {
      return screen.width <= 991;
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
</style>