<template>
<div class="row europoints-about-section">
  <div class="col-12">
    <p class="europoints-description">
      Евробаллы — это полезная бонусная программа, с помощью которой, Вы сможете минимизировать свои затраты на приобретение билетов или же полностью оплатить билет. Покупая билеты на нашем сайте или с помощью нашего приложения, Вы получаете евробаллы (10% от стоимости билета). Евробаллы начисляются после завершения поездки. Срок жизни евробаллов — неограничен.
    </p>
  </div>
  <div class="col-12">
    <div class="details w-100 d-flex justify-content-between" v-bind:class="{'d-none': isShowDetails}">
      <button class="d-flex w-100 align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEuropoints" aria-expanded="false" aria-controls="collapseEuropoints" v-on:click="showCollapse()">
        Подробнее
        <ArrowDownIcon color="#283256"/>
      </button>
    </div>
    <div class="details details-hide w-100 d-flex justify-content-between" v-bind:class="{'d-none': isHideDetails}">
      <button class="d-flex w-100 align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEuropoints" aria-expanded="false" aria-controls="collapseEuropoints" v-on:click="showCollapse()">
        Свернуть
        <ArrowDownIcon color="#283256"/>
      </button>
    </div>
    <div class="collapse" id="collapseEuropoints">
      <div class="collapse-wrapper">

      </div>
    </div>
  </div>
</div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";

export default {
  name: "EuropointsAbout",
  components: {ArrowPathIcon, CancelIcon, ArrowDownIcon},
  data() {
    return {
      isShowDetails: false,
      isHideDetails: true,
    }
  },
  methods: {
    showCollapse: function () {
      this.isHideDetails = !this.isHideDetails;
      this.isShowDetails = !this.isShowDetails;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.europoints-about-section {
  margin-bottom: 32px;
  .europoints-description {
    @include font($uni,$light,18px,24.3px,$base);
  }
  .details {
    padding-bottom: 16px;
    border-bottom: 1px solid #E1EEF6;
    button {
      background: none;
      outline: none;
      border: none;
      @include font($uni,$bold,24px,32.4px,$base);
      svg {

      }
    }
  }
  .details-hide {
    @include animation;
    border-bottom: none;
    button {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>