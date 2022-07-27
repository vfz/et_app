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
        <div class="col-12 col-lg-8 col-xl-9">
          <form class="needs-validation" novalidate>
            <PassengersInfoMobile/>
            <BuyerInfo/>
            <TicketInfo/>
            <BaggageRules/>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TicketInfo from "@/components/TicketInfo";
import BaggageRules from "@/components/BaggageRules";
import BuyerInfo from "@/components/BuyerInfo";
import CheckIcon from "@/components/icons/CheckIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
import CancelIcon from "@/components/icons/CancelIcon";
import PassengersInfoMobile from "@/components/mobile/PassengersInfoMobile";

export default {
  name: "PassengersFormInfoMobile",
  components: {TicketInfo, BaggageRules, BuyerInfo, PassengersInfoMobile, CheckIcon, ArrowPathIcon, CancelIcon},
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    margin-left: 8px;
    margin-right: 8px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 24.3px;
    }
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      margin-bottom: 16px;
    }
  }
}
</style>