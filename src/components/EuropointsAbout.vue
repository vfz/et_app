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
        <div class="collapse-block">
          <h4 class="collapse-title">
            Что такое евробаллы
          </h4>
          <p class="collapse-description">
            Евробаллы — единица, которой евротранс оценивает вашу лояльность, и одновременно бонус, которым можно полностью оплатить билет на нашем сервисе.
          </p>
        </div>
        <div class="collapse-block">
          <h4 class="collapse-title">
            Как накопить евробаллы
          </h4>
          <p class="collapse-description">
            Евробаллы начисляются за билеты, оформленные на сайте или в приложении, после завершения поездки и только в том случае, если она была совершена.
            Количество начисляемых за рейс евробаллов зависит от итоговой суммы билетов (10% от суммы).
            <span>Евробаллы конвертируются в деньги по следующему курсу:</span>
            <br>
            1 евробалл = 1 российский рубль
          </p>
        </div>
        <div class="collapse-block">
          <h4 class="collapse-title">
            На что тратить евробаллы
          </h4>
          <p class="collapse-description">
            Евробаллы можно тратить на частичную или полную оплату суммы билета(ов).
          </p>
        </div>
        <div class="collapse-block">
          <h4 class="collapse-title">
            Сгорают ли евробаллы
          </h4>
          <p class="collapse-description">
            Евробаллы не сгорают и могут быть использованы спустя любой промежуток времени.
          </p>
        </div>
        <div class="collapse-block">
          <h4 class="collapse-title">
            Что происходит с евробаллами при сдаче билета
          </h4>
          <p class="collapse-description">
            Билет, приобретенный за евробаллы, отменяется по тем же правилам, что и билет, оплаченный банковской картой: при возврате будет произведено удержание, которое зависит от момента возврата, а остальная часть зачислена на лицевой счет.
          </p>
        </div>
        <div class="collapse-block">
          <h4 class="collapse-title">
            Возврат евробаллов
          </h4>
          <p class="collapse-description">
            Если возврат билета инициирует пассажир, то Сервис производит удержание евробаллов в соответствии со следующими правилами:
            <br>
            <span> В течении 12 часов после оплаты, если до рейса больше 24 часов - 0% </span>
            <br>
            <span> Если до рейса 2 часа </span> - 5% тарифа
            <br>
            <span> Если до рейса менее 2 часов </span> - 15% тарифа
            <br>
            <span> В случае опоздания к отправлению транспортного средства в течение 3 часов </span> - 25% тарифа
            <br>
            <span> Опоздание по объективным причинам (болезнь, несчастный случай), при наличии подтверждающих документов, менее чем за 3 дня, после отправления рейса </span> - 25% тарифа
            <br>
            При отмене рейса с нашей стороны, возвращается 100% от стоимости билета
            <br>
            <span class="active"> * Сумма тарифа включает комиссионные сборы (агентский, информационный и т.д.). </span>
            <br>
            <span class="active"> * В случае возврата сумма комиссионных сборов возврату не подлежат </span>
            <br>
          </p>
        </div>
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
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .details {
    padding-bottom: 16px;
    border-bottom: 1px solid #E1EEF6;
    button {
      background: none;
      outline: none;
      border: none;
      padding-left: 0;
      @include font($uni,$bold,24px,32.4px,$base);
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24.3px;
      }
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
  .collapse {
    &-block {
      margin-bottom: 12px;
    }
    &-block:last-child {
      margin-bottom: 0;
    }
    &-title {
      @include font($uni,$regular,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    &-description {
      @include font($uni,$light,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
      span {
        color: $secondary;
      }
      .active {
        color: $blue-active;
      }
    }
  }
  .show {
    border-bottom: 1px solid #E1EEF6;
    @include animation
  }
}
</style>