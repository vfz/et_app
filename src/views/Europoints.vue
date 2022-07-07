<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Евробаллы"/>
  <section class="europoints-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7">
          <EuropointsStats/>
        </div>
        <div class="col-5">
          <img class="img-section" src="/img/europoints/europoints.svg" alt="евробаллы">
        </div>
      </div>
    </div>
  </section>
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
export default {
  name: "Europoints",
  components: {EuropointsStats, ForgotPasswordModal, RegistrationModal, LoginModal, SectionTitle, Header}
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