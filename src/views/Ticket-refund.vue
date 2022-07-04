<template>
<div class="body-app-white">
  <Header/>
  <SectionTitle title="Возврат билета"/>
  <section class="refund-info">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-xl-7">
          <TicketRefundInfo/>
          <form>
            <PersonalInfo/>
            <TripInfo/>
            <TicketReasonRefund/>
            <button class="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
        <div v-if="!isMobile()" class="col-lg-5 col-xl-5 d-none d-lg-flex align-items-center justify-content-center">
          <img class="image-section" alt="Возврат билетов" src="/img/tickets-refund/tickets-refund.svg">
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
    TicketRefundInfo, SectionTitle, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header},
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
  .refund-info {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 767px) {
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