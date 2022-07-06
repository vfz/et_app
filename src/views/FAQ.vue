<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Вопросы и ответы"/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
  <RemoveModal/>
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import RemoveModal from "@/components/RemoveModal";
export default {
  name: "FAQ",
  components: {RemoveModal, ForgotPasswordModal, RegistrationModal, LoginModal, SectionTitle, Footer, Header}
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