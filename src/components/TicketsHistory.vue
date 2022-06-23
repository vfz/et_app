<template>
  <section class="tickets-history-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <TicketOrder/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TicketOrder from "@/components/TicketOrder";
export default {
  name: "TicketsHistory",
  components: {TicketOrder},
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.tickets-history-section {
  margin-left: 88px;
  margin-right: 88px;
}
</style>