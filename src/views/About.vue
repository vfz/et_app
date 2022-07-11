<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="О нас"/>
  <AboutCompany/>
  <AboutNumbers/>
  <AboutReasons/>
  <AboutSlider/>
  <Footer/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import AboutCompany from "@/components/AboutCompany";
import AboutNumbers from "@/components/AboutNumbers";
import AboutReasons from "@/components/AboutReasons";
import AboutSlider from "@/components/AboutSlider";
export default {
  name: "About",
  components: {
    AboutSlider,
    AboutReasons,
    AboutNumbers,
    AboutCompany, ForgotPasswordModal, RegistrationModal, LoginModal, SectionTitle, Footer, Header}
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