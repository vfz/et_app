<template>
  <div class="body-app-white">
    <Header/>
    <SectionTitle title="Билеты"/>
    <EmptyHistory class="d-none" descriptionText="На данный момент, Вы не приобрели билет, но это можно сделать." linkText="здесь"/>
    <TicketsHistory/>
    <SectionImage src="/img/tickets/tickets.svg" alt="билеты"/>
    <Footer/>
    <DispatchModal/>
    <dispatch-length-time-modal/>
    <PlaceLeftModal/>
    <LoginModal/>
    <RegistrationModal/>
    <ForgotPasswordModal/>
    <RemoveModal/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import RemoveModal from "@/components/RemoveModal";
import SectionTitle from "@/components/SectionTitle";
import EmptyHistory from "@/components/EmptyHistory";
import SectionImage from "@/components/SectionImage";
import TicketsHistory from "@/components/TicketsHistory";
import DispatchModal from "@/components/Dispatch-modal";
import DispatchLengthTimeModal from "@/components/Dispatch-length-time-modal";
import PlaceLeftModal from "@/components/Place-left-modal";
export default {
  name: "Tickets",
  components: {
    PlaceLeftModal,
    DispatchLengthTimeModal,
    DispatchModal,
    TicketsHistory,
    SectionImage,
    EmptyHistory,
    SectionTitle,
    RemoveModal, ForgotPasswordModal, RegistrationModal, LoginModal, Footer, Header}
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