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
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import CancelIcon from "@/components/icons/CancelIcon";
import TicketOrder from "@/components/TicketOrder";
export default {
  name: "TicketsHistory",
  components: {TicketOrder, CancelIcon, ArrowDownIcon},
  data() {
    return {
      isShowDetails: false,
      isHideDetails: true,
    }
  },
  methods: {
    showCollapse: function () {
      console.log('hello');
      this.isHideDetails = !this.isHideDetails;
      this.isShowDetails = !this.isShowDetails;
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
}
</style>