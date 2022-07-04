<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Вакансии"/>
  <section class="jobs-list-section">
    <div class="container-fluid">
      <div class="row">
        <Job id="1" title="Бухгалтер" payment="30 000" city="Ставрополь" place="Главный офис"/>
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
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import SectionTitle from "@/components/SectionTitle";
import Job from "@/components/Job";
export default {
  name: "Jobs",
  components: {Job, SectionTitle, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.body-app-white {
  background-color: $bg-app-light;
  .jobs-list-section {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 991px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
.footer {
  margin-top: 72px;
}
</style>