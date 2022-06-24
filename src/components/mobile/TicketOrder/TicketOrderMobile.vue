<template>
  <div class="there-back-tabs-mobile-section">
    <TicketOrderThereTable/>
    <TicketOrderBackTable/>
    <PathsFinalAmount/>
  </div>
</template>

<script>
import PathsFinalAmount from "@/components/mobile/TicketOrder/TicketOrder-paths-final-amount";
import TicketOrderThereTable from "@/components/mobile/TicketOrder/TicketOrderThereTable";
import TicketOrderBackTable from "@/components/mobile/TicketOrder/TicketOrderBackTable";
export default {
  name: "TicketOrderMobile",
  components: {
    TicketOrderBackTable,
    TicketOrderThereTable,
    PathsFinalAmount,
  }
}
</script>

<style lang="scss" scoped>
.there-back-tabs-mobile-section {
  margin-bottom: 40px;
}
</style>