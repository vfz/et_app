<template>
  <div class="body-app-white">
    <Header/>
    <SectionTitle/>
    <section class="lost-and-found-info">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <LostAndFoundInfo/>
            <form>
              <PersonalInfo/>
              <TripInfo/>
            </form>
          </div>
          <div v-if="!isMobile()" class="col-lg-5 col-xl-5 d-none d-lg-flex align-items-center justify-content-center">
            <img class="image-section" alt="Возврат билетов" src="/img/lost-and-found/lost-and-found.svg">
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
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import LostAndFoundInfo from "@/components/LostAndFoundInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TripInfo from "@/components/TripInfo";
export default {
  name: "Lost-and-found",
  components: {
    TripInfo,
    PersonalInfo,
    LostAndFoundInfo, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, SectionTitle, Header},
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
  .lost-and-found-info {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 991px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .image-section {
    width: 100%;
    max-width: 572px;
  }
  .btn {
    @include font($uni,$regular,24px,32.4px,$white);
    padding: 23px 83px;
    margin-top: 40px;
    border-radius: 16px;
  }
}
.footer {
  margin-top: 72px;
}
</style>