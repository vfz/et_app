<template>
  <!--          правила перевозки багажа-->
  <div class="row rules-baggage">
    <div class="col-12 col-lg-12 col-xl-7 col-xxl-7">
      <h2 v-if="!isMobile()" class="title-section">
        Правила перевозки багажа
      </h2>
      <div v-if="!isMobile()">
        <p class="title-section-description">
          Вы можете бесплатно перевезти одно место ручной клади.
        </p>
        <div class="d-block">
          <h3 class="title-info-baggage">
            Ограничение для ручной клади:
          </h3>
          <p class="description-info-baggage">
            — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
            <br>
            — Вес до 7 килограмм
          </p>
        </div>
        <div class="d-block">
          <p class="description-info-baggage">
            Цена платного багажа составляет <span> 250 ₽.</span>
          </p>
        </div>
        <div class="d-block">
          <h3 class="title-info-baggage">
            Ограничения для платного багажа:
          </h3>
          <p class="description-info-baggage">
            — Сумма измерений не превышает 180 см (Высота + Ширина + Длина)
            <br>
            — Вес до 20 килограмм
          </p>
        </div>
        <div class="promo-code">
          <h2 class="title-section">
            Промокод
          </h2>
          <p class="title-section-description">
            Введите промокод в соответствующее поле
          </p>
          <div class="d-block">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="input-group position-relative">
                  <input
                      @input="validatePromocode($event)"
                      :value="getPromoCode.value"
                      :disabled="getPromoCode.promoType !== ''"
                      type="text"
                      class="form-control form-control-bordered"
                      placeholder="Введите промокод">
                  <div
                      :class="{'is-error-icon' : getPromoCode.error, 'is-ok-icon' : getPromoCode.promoType}"
                      class="icon-bg position-absolute d-flex align-items-center">
                    <CheckIcon color="#fff"/>
                  </div>
                </div>
                <div
                    v-if="getPromoCode.error"
                    class="error-feedback-bordered">
                  {{getPromoCode.error}}
                </div>
                <div
                    v-if="getPromoCode.promoType"
                    class="is-ok-feedback-bordered">
                  Промокод успешно применен
                </div>
              </div>
              <div class="col-12 col-md-6">
                <button type="button"
                        @click="applyPromocode($event)"
                        :class="{'disabled' : getPromoCode.error, 'disabled' : getPromoCode.promoType}"
                        class="btn btn-primary btn-promo-code">
                  Применить
                </button>
              </div>
            </div>
          </div>
          <div class="row flex-column-reverse flex-md-row">
            <div class="col-12 col-md-6">
            <button
                @click.prevent="transactionForVue"
                :class="{'disabled': !validateButton(selectedSeat, getPassengers, getBuyerInfo, getHaveErrors)}"
                class="btn btn-lg btn-primary">
                Перейти к оплате
              </button>
            </div>
            <div class="col-12 col-md-6">
              <div class="payment-info d-flex align-items-center">
                <p>
                  Нажимая на кнопку "перейти к оплате" я соглашаюсь с <a target="_blank" href="https://evrotrans.net/upload/offer.pdf">договором оферты</a>
                  и <a target="_blank" href="https://evrotrans.net/upload/offer.pdf">политикой конфиденциальности</a> и даю
                  <a data-bs-toggle="modal" data-bs-target="#processingPersonalDataModal">согласие на обработку персональных данных.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile()">
        <a v-on:click="rotateArrowBaggage" class="title-section-mobile pointer-event d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#collapseBaggage" aria-expanded="false" aria-controls="collapseBaggage">
          <h2>Правила перевозки багажа</h2>
          <ArrowDownIcon class="arrow-down-collapse arrow-up" color="#283256"/>
        </a>
        <div class="collapse" id="collapseBaggage">
          <p class="title-section-description">
            Вы можете бесплатно перевезти одно место ручной клади.
          </p>
          <div class="d-block">
            <h3 class="title-info-baggage">
              Ограничение для ручной клади:
            </h3>
            <p class="description-info-baggage">
              — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
              <br>
              — Вес до 7 килограмм
            </p>
          </div>
          <div class="d-block">
            <p class="description-info-baggage">
              Цена платного багажа составляет <span> 250 ₽.</span>
            </p>
          </div>
          <div class="d-block">
            <h3 class="title-info-baggage">
              Ограничения для платного багажа:
            </h3>
            <p class="description-info-baggage">
              — Сумма измерений не превышает 180 см (Высота + Ширина + Длина)
              <br>
              — Вес до 20 килограмм
            </p>
          </div>
        </div>
        <div class="promo-code">
          <a v-on:click="rotateArrowPromocode" class="title-section-mobile pointer-event d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#collapsePromocode" aria-expanded="false" aria-controls="collapsePromocode">
            <h2>Промокод</h2>
            <ArrowDownIcon class="arrow-down-collapse arrow-up" color="#283256"/>
          </a>
          <div class="collapse" id="collapsePromocode">
            <p class="title-section-description">
              Введите промокод в соответствующее поле
            </p>
            <div class="d-block">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="input-group position-relative">
                    <input
                        @input="validatePromocode($event)"
                        :value="getPromoCode.value"
                        :disabled="getPromoCode.promoType !== ''"
                        type="text"
                        class="form-control form-control-bordered"
                        placeholder="Введите промокод">
                    <div
                        :class="{'is-error-icon' : getPromoCode.error, 'is-ok-icon' : getPromoCode.promoType}"
                        class="icon-bg position-absolute d-flex align-items-center">
                      <CheckIcon color="#fff"/>
                    </div>
                  </div>
                  <div
                      v-if="getPromoCode.error"
                      class="error-feedback-bordered">
                    {{getPromoCode.error}}
                  </div>
                  <div
                      v-if="getPromoCode.promoType"
                      class="is-ok-feedback-bordered">
                    Промокод успешно применен
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <button
                      @click="applyPromocode($event)"
                      type="button"
                      :class="{'disabled' : getPromoCode.error, 'disabled' : getPromoCode.promoType}"
                      class="btn btn-primary btn-promo-code">
                    Применить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-12 col-md-6">
            <button
                @click.prevent="transactionForVue"
                :class="{'disabled': !validateButton(selectedSeat, getPassengers, getBuyerInfo, getHaveErrors)}"
                class="btn btn-lg btn-primary">
              Перейти к оплате
            </button>
          </div>
          <div class="col-12 col-md-6">
            <div class="payment-info d-flex align-items-center">
              <p>
                Нажимая на кнопку "перейти к оплате" я соглашаюсь с <a target="_blank" href="https://evrotrans.net/upload/offer.pdf">договором оферты</a>
                и <a target="_blank" href="https://evrotrans.net/upload/offer.pdf">политикой конфиденциальности</a> и даю
                <a data-bs-toggle="modal" data-bs-target="#processingPersonalDataModal">согласие на обработку персональных данных.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7 col-xl-5 col-xxl-5 d-none d-lg-none d-xl-flex justify-content-xl-center">
      <img class="payment-img" alt="оплата" src="img/ticket-booking/payment.svg">
    </div>
  </div>
</template>

<script>
import CheckIcon from "@/components/icons/CheckIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import {mapActions, mapGetters} from "vuex";
import axios from 'axios'
export default {
  name: "BaggageRules",
  components: {ArrowDownIcon, CheckIcon},
  data(){
    return {
      isShowBaggage: false,
      isShowPromocode: false,
      awaitTransaction: false,
    }
  },
  computed: {
    ...mapGetters([
        'getHaveErrors',
        'getEmptyFieldsFormPassengers',
        'getEmptyFieldsFormBuyer',
        'selectedSeat',
        'getPassengers',
        'getBuyerInfo',
        'getPromoCode'
    ])
  },
  methods: {
    ...mapActions([
       'validatePromocode',
        'applyPromocode'
    ]),
    isMobile() {
      return screen.width <= 991;
    },
    rotateArrowBaggage(event) {
      const parent = event.target;
      const arrow = parent.querySelector('.arrow-down-collapse');
      const collapse = parent.nextSibling;
      this.isShowBaggage = !this.isShowBaggage;
      if (this.isShowBaggage === true) {
        arrow.classList.remove('arrow-up')
      }
      else {
        arrow.classList.add('arrow-up')
      }
    },
    rotateArrowPromocode(event) {
      const parent = event.target;
      const arrow = parent.querySelector('.arrow-down-collapse');
      const collapse = parent.nextSibling;
      this.isShowPromocode = !this.isShowPromocode;
      if (this.isShowPromocode === true) {
        arrow.classList.remove('arrow-up')
      }
      else {
        arrow.classList.add('arrow-up')
      }
    },
    validateButton(reisy,passengers,buyer, haveErrors) {
      if (this.awaitTransaction === true) {
        return false
      }

      if (reisy.length === 0) {
        return false
      }
      if (passengers) {
        if (this.getEmptyFieldsFormPassengers) {
          return false
        }
      }
      else {
        return false
      }
      if (buyer) {
        if (this.getEmptyFieldsFormBuyer) {
          return false
        }
      }
      else {
        return false
      }
      if (haveErrors === true) {
        return false
      }
      return true
    },

    async transactionForVue() {
      this.awaitTransaction=true
      const config = {
        method: 'post',
        url : 'https://api.evrotrans.net/APIet/transaction_for_vue3Bonus.php',
        data : {
          'reisy': this.selectedSeat.filter(reis=>(reis.is_selected)),
          'passengers': this.getPassengers,
          'buyer':this.getBuyerInfo,
          'promo':this.getPromoCode
      }
      }
      try {
        const response = await axios.request(config);
        const mydata = response.data;

        if (+mydata.Erorr > 0) {
            alert(mydata.Error_description);
        }

        if (response.data.formUrl) {
            window.location.href = response.data.formUrl;
        }
    } catch (error) {
      this.awaitTransaction=true
        console.log(error);
    } finally {
        this.awaitTransaction = false;
    }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "src/assets/formValidation.scss";
p {
  margin-bottom: 0;
}
.rules-baggage {
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 24.3px;
    }
  }
  .title-section-mobile {
    margin-bottom: 16px;
    h2 {
      @include font($uni,$bold,24px,32.4px,$base);
      margin-bottom: 0;
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24.3px;
      }
    }
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 8px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .title-info-baggage {
    @include font($uni,$regular,18px,24.3px,$secondary);
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      font-weight: $light;
    }
  }
  .description-info-baggage {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
    span {
      @include font($uni,$regular,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .payment-img {
    @media screen and (max-width: 1920px) {
      width: 100%;
    }
  }
  .promo-code {
    margin-top: 40px;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
    }
    .title-section-description {
      margin-bottom: 24px;
      @media screen and (max-width: 767px) {
        margin-bottom: 16px;
      }
    }
    .d-block {
      margin-bottom: 24px;
    }
    .input-group {
      .icon-bg {
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
        right: 0;
        border-radius: 8px;
        z-index: 9999;
      }
    }
    .form-control {
      height: 100%;
      padding: 12px 16px;
      @include font($uni,$regular,18px,24.3px,$base);
      border-radius: 8px !important;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 24px;
        padding: 10px 16px;
      }
    }
    .form-control::-moz-placeholder {
      color: #B5BDDB; /* Цвет подсказывающего текста */
    }
    .form-control::-webkit-input-placeholder { color: #B5BDDB; }
    .form-control:-ms-input-placeholder { color: #B5BDDB; }
    .form-control::-ms-input-placeholder { color: #B5BDDB; }
    .form-control::placeholder { color: #B5BDDB; }
    .btn {@include font($uni,$regular,18px,24.3px,$white);
      padding: 12px 68px;
      text-transform: none;
      border-radius: 16px;
      @media screen and (max-width: 767px) {
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        line-height: 21.6px;
      }
    }
    .disabled {
      opacity: 1;
      background-color: $disabled;
      box-shadow: none;
    }
    .btn-promo-code {
      @media screen and (max-width: 768px) {
        margin-top: 16px;
      }
    }
    .btn-lg {
      @include font($uni,$regular,18px,24.3px,$white);
      padding: 23px 46px;
      border-radius: 16px;
      @media screen and (max-width: 767px) {
        margin-top: 24px;
        padding: 10px 0;
        width: 100%;
        border-radius: 8px;
        font-size: 16px;
        line-height: 21.6px;
      }
    }
  }
  .payment-info {
    margin-bottom: 24px;
    @include font($uni,$light,14px,18.9px,$base);
    a {
      cursor: pointer;
      color: $blue-active;
    }
    a:hover {
      @include animation;
      color: $blue-link;
    }
  }
  .btn {
    padding: 12px 68px;
    text-transform: none;
    border-radius: 16px;
    @media screen and (max-width: 767px) {
      border-radius: 8px;
      width: 100%;
      font-size: 16px;
      line-height: 21.6px;
    }
  }
  .arrow-down-collapse {
    @include animation;
    pointer-events: none;
    transform: rotate(0deg);
  }
  .arrow-up {
    @include animation;
    transform: rotate(180deg);
  }
}
</style>