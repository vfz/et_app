<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Евробаллы"/>
  <EuropointsStats/>
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
}
.footer {
  margin-top: 72px;
}
</style>