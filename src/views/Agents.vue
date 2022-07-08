<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Агентам"/>
  <section class="agents-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-7">
          <AgentsDescription/>
        </div>
        <div class="col-12 col-lg-5">
          <AgentsForm/>
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
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import AgentsDescription from "@/components/AgentsDescription";
import AgentsForm from "@/components/AgentsForm";
export default {
  name: "Agents",
  components: {
    AgentsForm,
    AgentsDescription, ForgotPasswordModal, RegistrationModal, LoginModal, SectionTitle, Footer, Header}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.body-app-white {
  background-color: $bg-app-light;
  .agents-section {
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