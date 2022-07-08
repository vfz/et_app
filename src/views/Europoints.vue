<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Евробаллы"/>
  <section class="europoints-section">
    <div class="container-fluid px-lg-4">
      <div class="row gx-lg-5">
        <div class="col-12 col-lg-7">
          <EuropointsStats/>
          <EuropointsAbout/>
          <EuropointsTripsHistory/>
        </div>
        <div class="col-12 col-lg-5">
          <img v-if="!isMobile()" class="img-section" src="/img/europoints/europoints.svg" alt="евробаллы">
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
</div>
</template>

<script>
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import EuropointsStats from "@/components/EuropointsStats";
import EuropointsAbout from "@/components/EuropointsAbout";
import EuropointsTripsHistory from "@/components/EuropointsTripsHistory";
import Footer from "@/components/Footer";
export default {
  name: "Europoints",
  components: {
    Footer,
    EuropointsTripsHistory,
    EuropointsAbout,
    EuropointsStats, ForgotPasswordModal, RegistrationModal, LoginModal, SectionTitle, Header},
  methods: {
    isMobile() {
      return screen.width <= 992;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
  .europoints-section {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 991px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    .img-section {
      width: 100%;
      max-width: 697px;
    }
  }
}
.footer {
  margin-top: 72px;
}
</style>