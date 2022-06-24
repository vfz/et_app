<template>
  <div class="there-back-tabs-mobile-section">
    <TicketOrderThereTable/>
    <PathsFinalAmount/>
  </div>
</template>

<script>
import PathsFinalAmount from "@/components/mobile/TicketOrder/Paths-final-amount";
import TicketOrderThereTable from "@/components/mobile/TicketOrder/TicketOrderThereTable";
export default {
  name: "TicketOrderMobile",
  components: {
    TicketOrderThereTable,
    PathsFinalAmount,
  }
}
</script>

<style lang="scss" scoped>
.there-back-tabs-mobile-section {
  margin-bottom: 40px;
  .active {
    background: #F3F7FF;
  }
}
</style>