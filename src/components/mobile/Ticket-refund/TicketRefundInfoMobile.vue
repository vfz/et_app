<template>
  <div class="refund-info-section">
    <div class="refund-info">
      <p class="refund-info-description">
        Возврат билета возможен только в том случае, если билет был куплен онлайн у нас на сайте или на кассе по ул. Карла Маркса 1А.
      </p>
      <p class="refund-info-description active">
        <span> * Если билет был куплен на кассе, </span> то вам необходимо прийти и заполнить заявление на возврат и вы получите деньги сразу.
      </p>
      <p class="refund-info-description active">
        <span> * Если билет вы покупали онлайн, </span> то ниже заполните данные на возврат и деньги вам поступят на карту, с которой вы оплачивали билет, в течении 5 рабочих дней.
      </p>
    </div>
    <h3 class="refund-keeping-title">
      Удержания при возврате
    </h3>
    <div class="details d-flex" v-bind:class="{'d-none': isShowDetails}">
      <button class="d-flex justify-content-between align-items-center w-100" v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#refund-keeping-collapse" aria-expanded="false" aria-controls="refund-keeping-collapse">
        Подробнее
        <ArrowDownIcon color="#676767"/>
      </button>
    </div>
    <div class="details details-hide d-flex" v-bind:class="{'d-none': isHideDetails}">
      <button class="d-flex justify-content-between align-items-center w-100" v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#refund-keeping-collapse" aria-expanded="false" aria-controls="refund-keeping-collapse">
        Свернуть
        <ArrowDownIcon color="#676767"/>
      </button>
    </div>
    <div class="collapse" id="refund-keeping-collapse">
      <div class="refund-keeping">
        <p class="refund-keeping-description">
          При отмене рейса с нашей стороны, возвращается 100% от стоимости билета.
        </p>
        <p class="refund-keeping-description active">
          * Сумма оплаты включает комиссионные сборы (агентский, информационный и т.д.).
        </p>
        <p class="refund-keeping-description active">
          * В случае возврата маршрутной квитанции комиссионные сборы возврату не подлежат.
        </p>
        <p class="refund-keeping-description">
          При возврате маршрутной квитанции по причине отказа от поездки, производятся следующие удержания:
          <br>
          <span> В течении 12 часов после оплаты, если до рейса больше 24 часов </span> — 0%
          <br>
          <span> Более чем за 2 ч., до отправления рейса </span> — 5% тарифа
          <br>
          <span> Менее чем за 2 ч., до отправления рейса </span> — 15% тарифа
          <br>
          <span> В течении 3 ч., после отправления рейса </span> — 25% тарифа;
          <br>
          <span> По объективным причинам (болезнь, несчастный случай), при наличии подтверждающих документов, менее чем за
        3 дня, после отправления рейса </span> — 25% тарифа;

        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

export default {
  name: "TicketRefundInfoMobile",
  components: {CancelIcon, ArrowDownIcon},
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
@import "@/assets/variables.scss";
@import "@/assets/font.scss";
.refund-info-section {
  .refund-info {
    margin-bottom: 40px;
    &-description {
      @include font($uni,$light,18px,24.3px,$base);
      margin-bottom: 16px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
      }
    }
    &-description:last-child {
      margin-bottom: 0;
    }
    .active {
      color: $blue-active;
      span {
        font-weight: $bold;
      }
    }
  }
  .details {
    button {
      padding-left: 0;
      background: none;
      outline: none;
      border: none;
      @include font($uni,$light,14px,18.9px,$secondary);
      svg {
        //margin-left: 8px;
        width: 9px;
      }
    }
  }
  .details-hide {
    margin-bottom: 16px;
    button {
      padding-left: 0;
      svg {
        transform: rotate(180deg);
      }
    }
  }
  .refund-keeping-title {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
    @media screen and (max-width: 991px) {
      font-size: 18px;
    }
  }
  .refund-keeping {
    &-description {
      @include font($uni,$light,18px,24.3px,$base);
      margin-bottom: 16px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
      }
      span {
        color: $secondary;
      }
    }
    &-description:last-child {
      margin-bottom: 0;
    }
    .active {
      color: $blue-active;
    }
  }
}
</style>