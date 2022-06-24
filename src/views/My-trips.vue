<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="История поездок"/>
  <EmptyHistory class="d-none" description-text="К нашему сожалению, у Вас не было поездок, но Вы можете их" link-text="совершить."/>
  <TripsHistory/>
  <SectionImage src="img/my-trips/my-trips.svg" alt="История поездок"/>
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
import SectionTitle from "@/components/SectionTitle";
import EmptyHistory from "@/components/EmptyHistory";
import SectionImage from "@/components/SectionImage";
import TripsHistory from "@/components/TripsHistory";
export default {
  name: "My-trips",
  components: {
    TripsHistory,
    SectionImage,
    EmptyHistory, SectionTitle, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
  .btn {
    @include font($uni,$regular,16px,21.6px,$white);
    padding: 11px 47px;
    border-radius: 8px;
    border: none;
    color: $white;
    background-color: $blue-active;
    margin-bottom: 72px;
    text-transform: none;
  }
  .footer {
    margin-top: 72px;
  }
}
</style>