<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Возврат билета"/>
  <section class="refund-info">
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <TicketRefundInfo/>
          <form>
            <PersonalInfo/>
            <TripInfo/>
            <TicketReasonRefund/>
          </form>
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
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import SectionTitle from "@/components/SectionTitle";
import TicketRefundInfo from "@/components/TicketRefundInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TripInfo from "@/components/TripInfo";
import TicketReasonRefund from "@/components/TicketReasonRefund";
export default {
  name: "Ticket-refund",
  components: {
    TicketReasonRefund,
    TripInfo,
    PersonalInfo,
    TicketRefundInfo, SectionTitle, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.body-app-white {
  background-color: $bg-app-light;
  .refund-info {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 767px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
.footer {
  margin-top: 72px;
}
</style>