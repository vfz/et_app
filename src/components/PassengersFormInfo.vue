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
      <div class="col-9">
        <form>
          <PassengersInfo/>
          <BuyerInfo/>
          <BaggageRules/>
        </form>
      </div>
      <div class="col-3">
        <TicketInfo/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import PassengersInfo from "@/components/PassengersInfo";
import BuyerInfo from "@/components/BuyerInfo";
import BaggageRules from "@/components/BaggageRules";
import TicketInfo from "@/components/TicketInfo";
export default {
  name: "PassengersFormInfo",
  components: {TicketInfo, BaggageRules, BuyerInfo, PassengersInfo, CheckIcon, ArrowPathIcon, CancelIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
  }
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$base);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
    }
    .active {
      border-color: unset;
      border-bottom: none;
      box-shadow: $regular-shadow;
    }
  }
  .tab-content {
    position: relative;
    z-index: 2;
  }
  .form-wrapper {
    background-color: $white;
    border-radius: 0 16px 16px 16px;
    box-shadow: $regular-shadow;
    padding: 35px 29px;
    .cancel-button {
      background: none;
      border: none;
      @include font($uni,$light,18px,24.3px,$blue-link);
    }
    .form-label {
      @include font($uni,$light,14px,18.9px,$secondary);
    }
    .form-control, .form-select {
      @include font($uni,$regular,18px,24.3px,$base);
    }
    .form-control {
      border: none;
      border-bottom: 1px solid #8F8C8C;
      border-radius: 0;
      padding-left: 0;
    }
    .form-control:focus {
      @include animation;
      outline: none;
      border: none;
      border-bottom: 1px solid $blue-active;
      box-shadow: none;
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .form-select {
      border: none;
      border-bottom: 1px solid #8F8C8C;
      border-radius: 0;
      padding-left: 0;
    }
    .form-select::selection {
      color: #B5BDDB;
    }
  }
}
</style>