<template>
<div class="body-app-white">
  <Header/>
  <JobDescriptionContent/>
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
import JobDescriptionContent from "@/components/JobDescriptionContent";
export default {
  name: "JobDescription",
  components: {JobDescriptionContent, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
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