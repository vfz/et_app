<template>
  <section class="tickets-history-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <TicketOrder v-if="!isMobile()"/>
          <TicketOrderMobile v-if="isMobile()"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TicketOrder from "@/components/desktop/TicketOrder/TicketOrder";
import TicketOrderMobile from "@/components/mobile/TicketOrder/TicketOrderMobile";
export default {
  name: "TicketsHistory",
  components: {TicketOrderMobile, TicketOrder},
  methods: {
    isMobile() {
      return screen.width <= 992;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.tickets-history-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>