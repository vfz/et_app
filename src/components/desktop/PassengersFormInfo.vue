<template>
  <section class="passengers-form-info-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-section">
            Данные пассажиров
          </h2>
          <p class="title-section-description">
            Заполните ниже данные, для оформления билета
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-9 col-lg-12 col-xl-9">
          <form @keydown.enter.prevent>
            <PassengersInfo />
            <BuyerInfo />
            <TicketInfo v-if="isTablet()" />
            <BaggageRules />
          </form>
        </div>
        <div class="col-3 col-lg-12 col-xl-3">
          <TicketInfo v-if="!isTablet()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import PassengersInfo from "@/components/desktop/PassengersInfo";
import BuyerInfo from "@/components/BuyerInfo";
import BaggageRules from "@/components/BaggageRules";
import TicketInfo from "@/components/TicketInfo";
export default {
  name: "PassengersFormInfo",
  components: { TicketInfo, BaggageRules, BuyerInfo, PassengersInfo, CheckIcon, ArrowPathIcon, CancelIcon },
  methods: {
    isTablet() {
      return screen.width <= 1199;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/font.scss";

.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;

  .title-section {
    @include font($uni, $bold, 24px, 32.4px, $base);
    margin-bottom: 16px;
  }

  .title-section-description {
    @include font($uni, $light, 18px, 24.3px, $base);
    margin-bottom: 40px;
  }
}
</style>