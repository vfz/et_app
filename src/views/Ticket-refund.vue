<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Возврат билета"/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10">
        <TicketRefundInfo/>
      </div>
    </div>
  </div>
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
import TicketRefundInfo from "@/components/TicketRefundInfo";
export default {
  name: "Ticket-refund",
  components: {TicketRefundInfo, SectionTitle, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
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