<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Вакансии"/>
  <section class="jobs-list-section">
    <div class="container-fluid">
      <div class="row">
        <Job/>
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