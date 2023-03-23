<template>
<!--  информация о билете-->
  <div>
    <h3 v-if="isMobile()" class="title-card">
      Информация о билете
    </h3>
    <div v-if="isMobile()" class="carousel-bootstrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button v-if="selectedBackFlightInfo" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div class="carousel-inner">
                <!-- ПУТЬ ТУДА -->
                <div class="carousel-item active">
                  <div class="info-ticket-wrapper">
                    <div class="path-info-ticket">
                      <h4 class="path-info-ticket-title">
                        Туда
                      </h4>
                      <h5 class="path-info-ticket-title-paragraph">
                        Маршрут:
                      </h5>
                      <div class="path-info-cities">
                        <span class="path-info-city-from">{{selectedThereFlightTicket.from_name_point}}</span>
                        <ArrowPathIcon class="arrow-path-icon"/>
                        <span class="path-info-city-to">{{selectedThereFlightTicket.to_name_point}}</span>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Отправление:
                      </h5>
                      <div class="path-info-from">
                        <div class="path-info-from-datetime">
                          <span class="path-info-from-datetime-date">
                            {{selectedThereFlightTicket.date_trip}}
                          </span>
                                    в
                                    <span class="path-info-from-datetime-time">
                            {{selectedThereFlightTicket.time_trip}}
                          </span>
                        </div>
                        <div class="path-info-from-place d-flex flex-column">
                          <span class="path-info-from-place-name">
                          </span>
                                    <span class="path-info-from-datetime-address">
                            {{selectedThereFlightTicket.from_address_point}}
                          </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Прибытие:
                      </h5>
                      <div class="path-info-to">
                        <div class="path-info-to-datetime">
                          <span class="path-info-to-datetime-date">
                            {{selectedThereFlightTicket.date_arrival_trip}}
                          </span>
                                    в
                                    <span class="path-info-to-datetime-time">
                                      {{selectedThereFlightTicket.time_arrival_trip}}
                          </span>
                                  </div>
                                  <div class="path-info-to-place d-flex flex-column">
                          <span class="path-info-from-place-name">
                            {{selectedThereFlightTicket.to_name}}
                          </span>
                                    <span class="path-info-from-datetime-address">
                            {{selectedThereFlightTicket.to_address_point}}
                          </span>
                        </div>
                      </div>
                      <h5 v-if="selectedThereFlightInfo.flight_type === 'there'" class="path-info-ticket-title-paragraph">
                        Места
                      </h5>
                      <div v-if="selectedThereFlightInfo.flight_type === 'there'" class="path-info-places">
                        <span class="path-info-place-number">
                          <span v-for="(seat, index) in selectedThereFlightInfo.seats"
                            :key="index"
                            class="path-info-place-number">
                            {{seat}}
                          </span>
                        </span>
                      </div>
                      <div class="path-info-sum">
                        Сумма заказа <span class="path-info-sum-number">{{sumThere}}</span>₽
                      </div>
                    </div>
                    <div v-if="!selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{sumThere-sumWithPromocode}}₽ (Евробаллы)</div>
                    <div v-if="selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{(sumThere+sumBack)-sumWithPromocode}}₽ (Евробаллы)</div>
                    <div class="paths-final-amount d-inline-block position-relative">
                      <div v-if="!selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere}}₽</div>
                      <div v-if="selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere+sumBack}}₽</div>
                      Итого
                      <span v-if="selectedBackFlightTicket && !sumWithPromocode">{{sumBack + sumThere}} ₽</span>
                      <span v-if="!selectedBackFlightTicket && !sumWithPromocode">{{sumThere}} ₽</span>
                      <span v-if="sumWithPromocode">{{sumWithPromocode}} ₽</span>
                    </div>
                  </div>
                </div>
                <!-- ПУТЬ ОБРАТНО -->
                <div v-if="selectedBackFlightInfo" class="carousel-item">
                  <div class="info-ticket-wrapper">
                    <div class="path-info-ticket">
                      <h4 class="path-info-ticket-title">
                        Обратно
                      </h4>
                      <h5 class="path-info-ticket-title-paragraph">
                        Маршрут:
                      </h5>
                      <div class="path-info-cities">
                        <span class="path-info-city-from">{{selectedBackFlightTicket.from_name_point}}</span>
                        <ArrowPathIcon class="arrow-path-icon"/>
                        <span class="path-info-city-to">{{selectedBackFlightTicket.to_name_point}}</span>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Отправление:
                      </h5>
                      <div class="path-info-from">
                        <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  {{selectedBackFlightTicket.date_arrival_trip}}
                </span>
                          в
                          <span class="path-info-from-datetime-time">
                  {{selectedBackFlightTicket.time_arrival_trip}}
                </span>
                        </div>
                        <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedBackFlightTicket.to_name}}
                </span>
                          <span class="path-info-from-datetime-address">
                  {{selectedBackFlightTicket.to_address_point}}
                </span>
                        </div>
                      </div>
                      <h5 class="path-info-ticket-title-paragraph">
                        Прибытие:
                      </h5>
                      <div class="path-info-to">
                        <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  {{selectedBackFlightTicket.date_arrival_trip}}
                </span>
                          в
                          <span class="path-info-to-datetime-time">
                  {{selectedBackFlightTicket.time_arrival_trip}}
                </span>
                        </div>
                        <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedBackFlightTicket.to_name_point}}
                </span>
                          <span class="path-info-from-datetime-address">
                  {{selectedBackFlightTicket.to_address_point}}
                </span>
                        </div>
                      </div>
                      <h5 v-if="selectedThereFlightInfo.flight_type === 'back'" class="path-info-ticket-title-paragraph">
                        Места
                      </h5>
                      <div v-if="selectedThereFlightInfo.flight_type === 'back'" class="path-info-places">
                        <span  v-for="(seat, index) in selectedBackFlightInfo.seats" :key="index" class="path-info-place-number">{{seat}}</span>
                      </div>
                      <div class="path-info-sum">
                        Сумма заказа <span class="path-info-sum-number">{{sumBack}}</span>₽
                      </div>
                    </div>
                    <div v-if="!selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{sumThere-sumWithPromocode}}₽ (Евробаллы)</div>
                    <div v-if="selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{(sumThere+sumBack)-sumWithPromocode}}₽ (Евробаллы)</div>
                    <div class="paths-final-amount d-inline-block position-relative">
                      <div v-if="!selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere}}₽</div>
                      <div v-if="selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere+sumBack}}₽</div>
                      Итого
                      <span v-if="selectedBackFlightTicket && !sumWithPromocode">{{sumBack + sumThere}} ₽</span>
                      <span v-if="!selectedBackFlightTicket && !sumWithPromocode">{{sumThere}} ₽</span>
                      <span v-if="sumWithPromocode">{{sumWithPromocode}} ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile()" class="info-ticket-wrapper">
      <h3 class="title-card">
        Информация о билете
      </h3>
      <!-- ПУТЬ ТУДА -->
      <div class="path-info-ticket">
        <h4 class="path-info-ticket-title">
          Туда
        </h4>
        <h5 class="path-info-ticket-title-paragraph">
          Маршрут:
        </h5>
        <div class="path-info-cities">
          <span class="path-info-city-from">{{selectedThereFlightTicket.from_name_point}}</span>
          <ArrowPathIcon class="arrow-path-icon"/>
          <span class="path-info-city-to">{{selectedThereFlightTicket.to_name_point}}</span>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Отправление:
        </h5>
        <div class="path-info-from">
          <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  {{selectedThereFlightTicket.date_trip}}
                </span>
            в
            <span class="path-info-from-datetime-time">
                  {{selectedThereFlightTicket.time_trip}}
                </span>
          </div>
          <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedThereFlightTicket.from_name}}
                </span>
            <span class="path-info-from-datetime-address">
                  {{selectedThereFlightTicket.from_address_point}}
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Прибытие:
        </h5>
        <div class="path-info-to">
          <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  {{selectedThereFlightTicket.date_arrival_trip}}
                </span>
            в
            <span class="path-info-to-datetime-time">
                  {{selectedThereFlightTicket.time_arrival_trip}}
                </span>
          </div>
          <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedThereFlightTicket.to_name}}
                </span>
            <span class="path-info-from-datetime-address">
                  {{selectedThereFlightTicket.to_address_point}}
                </span>
          </div>
        </div>
        <h5 v-if="selectedThereFlightInfo.flight_type === 'there'" class="path-info-ticket-title-paragraph">
          Места
        </h5>
        <div v-if="selectedThereFlightInfo.flight_type === 'there'" class="path-info-places">
          <span v-for="(seat, index) in selectedThereFlightInfo.seats"
                :key="index"
                class="path-info-place-number">
            {{seat}}
          </span>
        </div>
        <div class="path-info-sum">
          Сумма заказа <span class="path-info-sum-number">
          {{sumThere}}
        </span>₽
        </div>
      </div>
      <div class="cross-line"></div>
      <!-- ПУТЬ ОБРАТНО -->
      <div v-if="!oneWay" class="path-info-ticket">
        <h4 class="path-info-ticket-title">
          Обратно
        </h4>
        <h5 class="path-info-ticket-title-paragraph">
          Маршрут:
        </h5>
        <div class="path-info-cities">
          <span class="path-info-city-from">
            {{selectedBackFlightTicket.from_name_point}}
          </span>
          <ArrowPathIcon class="arrow-path-icon"/>
          <span class="path-info-city-to">
            {{selectedBackFlightTicket.to_name_point}}
          </span>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Отправление:
        </h5>
        <div class="path-info-from">
          <div class="path-info-from-datetime">
                <span class="path-info-from-datetime-date">
                  {{selectedBackFlightTicket.date_arrival_trip}}
                </span>
            в
            <span class="path-info-from-datetime-time">
                  {{selectedBackFlightTicket.time_arrival_trip}}
                </span>
          </div>
          <div class="path-info-from-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedBackFlightTicket.to_name}}
                </span>
            <span class="path-info-from-datetime-address">
                  {{selectedBackFlightTicket.to_address_point}}
                </span>
          </div>
        </div>
        <h5 class="path-info-ticket-title-paragraph">
          Прибытие:
        </h5>
        <div class="path-info-to">
          <div class="path-info-to-datetime">
                <span class="path-info-to-datetime-date">
                  {{selectedBackFlightTicket.date_arrival_trip}}
                </span>
            в
            <span class="path-info-to-datetime-time">
                  {{selectedBackFlightTicket.time_arrival_trip}}
                </span>
          </div>
          <div class="path-info-to-place d-flex flex-column">
                <span class="path-info-from-place-name">
                  {{selectedBackFlightTicket.to_name_point}}
                </span>
            <span class="path-info-from-datetime-address">
                  {{selectedBackFlightTicket.to_address_point}}
                </span>
          </div>
        </div>
        <h5 v-if="selectedBackFlightInfo.flight_type === 'back' " class="path-info-ticket-title-paragraph">
          Места
        </h5>
        <div class="path-info-places">
              <span
                  v-for="(seat, index) in selectedBackFlightInfo.seats"
                  :key="index"
                  class="path-info-place-number">
                {{seat}}
              </span>
        </div>
        <div class="path-info-sum">
          Сумма заказа <span class="path-info-sum-number">{{sumBack}}</span>₽
        </div>
      </div>
      <div v-if="!selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{sumThere-sumWithPromocode}}₽ (Евробаллы)</div>
      <div v-if="selectedBackFlightTicket &&sumWithPromocode" class="point-minus">- {{(sumThere+sumBack)-sumWithPromocode}}₽ (Евробаллы)</div>
      <div class="paths-final-amount d-inline-block position-relative">
        <div v-if="!selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere}}₽</div>
        <div v-if="selectedBackFlightTicket && sumWithPromocode" class="old-amount position-absolute">{{sumThere+sumBack}}₽</div>
        Итого
        <span v-if="selectedBackFlightTicket && !sumWithPromocode">{{sumBack + sumThere}} ₽</span>
        <span v-if="!selectedBackFlightTicket && !sumWithPromocode">{{sumThere}} ₽</span>
        <span v-if="sumWithPromocode">{{sumWithPromocode}} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
import {mapGetters, mapState} from "vuex";
export default {
  name: "TicketInfo",
  components: {ArrowPathIcon},
  methods: {
    isMobile() {
      return screen.width <= 991;
    }
  },
  computed: {
    ...mapGetters([
       'selectedSeat',
        'flightThere',
        'flightThereAnother',
        'flightBackAnother',
        'flightBack',
        'getChildrensCount',
        'getAdultsCount',
        'oneWay',
        'getPromoCode'
    ]),
    sumWithPromocode() {
      let countPassengers = this.getChildrensCount + this.getAdultsCount
      let countPassengersPromocode = this.getPromoCode.countPassenger

      if (this.getPromoCode.orderOrPassenger === '1') {
        //Процентная скидка на весь заказ
        if (this.getPromoCode.promoType === '1') {
          if (this.getPromoCode.orderOrPassenger === '1') {
            if (!this.selectedBackFlightTicket) {
              return this.sumThere - this.sumThere*(this.getPromoCode.discount/100)
            }
            if (this.selectedBackFlightTicket) {
              return (this.sumThere + this.sumBack) - (this.sumThere + this.sumBack)*(this.getPromoCode.discount/100)
            }
          }
        }
        //Скидка на указанную сумму на весь заказ
        if (this.getPromoCode.promoType === '2') {
          if (!this.selectedBackFlightTicket) {
            return this.sumThere - this.getPromoCode.discount
          }
          if (this.selectedBackFlightTicket) {
            return (this.sumThere + this.sumBack) - this.getPromoCode.discount
          }
        }
      }
      if (this.getPromoCode.orderOrPassenger === '2') {
        //Процентная скидка на пассажира/ов
        if (this.getPromoCode.promoType === '1') {
          if (!this.selectedBackFlightTicket) {
            for (let i = 1; i <= this.getPromoCode.countPassenger; i++) {
              if (i == this.getPromoCode.countPassenger) {
                return this.sumThere - this.sumThere*(this.getPromoCode.discount/100)
              }
            }
          }
          if (this.selectedBackFlightTicket) {
            for (let i = 1; i <= this.getPromoCode.countPassenger; i++) {
              if (i == this.getPromoCode.countPassenger) {
                return (this.sumThere + this.sumBack) - (this.sumThere + this.sumBack)*(this.getPromoCode.discount/100)
              }
            }
          }
        }
        if (this.getPromoCode.promoType === '2') {
          if (!this.selectedBackFlightTicket) {
            for (let i = 1; i <= this.getPromoCode.countPassenger; i++) {
              if (i == this.getPromoCode.countPassenger) {
                return this.sumThere - this.getPromoCode.discount
              }
            }
          }
          if (this.selectedBackFlightTicket) {
            for (let i = 1; i <= this.getPromoCode.countPassenger; i++) {
              if (i == this.getPromoCode.countPassenger) {
                return (this.sumThere + this.sumBack) - this.getPromoCode.discount
              }
            }
          }
        }
      }
    },
    selectedThereFlightInfo() {
      return this.selectedSeat.filter(flight => flight.is_selected && flight.flight_type === 'there' || flight.flight_type === 'thereAnother')[0]
    },
    selectedBackFlightInfo() {
      return this.selectedSeat.filter(flight => flight.is_selected && flight.flight_type === 'back' || flight.flight_type === 'backAnother')[0]
    },

    selectedThereFlightTicket() {
      if (this.selectedThereFlightInfo.flight_type === 'there') {
        return this.flightThere.filter(flight => flight.id_trip === this.selectedThereFlightInfo.id_trip && flight.ticket_id_2 === this.selectedThereFlightInfo.id_ticket)[0]
      }
      else {
        return this.flightThereAnother.filter(flight => flight.id_trip === this.selectedThereFlightInfo.id_trip && flight.ticket_id_2 === this.selectedThereFlightInfo.id_ticket)[0]
      }
    },
    selectedBackFlightTicket() {
      if (this.selectedBackFlightInfo) {
        if (this.selectedBackFlightInfo.flight_type === 'back') {
        return this.flightBack.filter(flight => flight.id_trip === this.selectedBackFlightInfo.id_trip && flight.ticket_id_2 === this.selectedBackFlightInfo.id_ticket)[0]
      }
        if (this.selectedBackFlightInfo.flight_type === 'backAnother') {
          return this.flightBackAnother.filter(flight => flight.id_trip === this.selectedBackFlightInfo.id_trip && flight.ticket_id_2 === this.selectedBackFlightInfo.id_ticket)[0]
        }
      }
      else {
        return false
      }
    },

    sumThere() {
      return this.selectedThereFlightTicket.child_ticket_price * this.getChildrensCount + this.selectedThereFlightTicket.total_full_ticket_price * this.getAdultsCount
    },
    sumBack() {
      if (!this.oneWay) {
        return this.selectedBackFlightTicket.child_ticket_price * this.getChildrensCount + this.selectedBackFlightTicket.total_full_ticket_price * this.getAdultsCount
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.title-card {
  @include font($uni,$bold,18px,24.3px,$base);
  margin-bottom: 16px;
  margin-top: 24px;
}
.carousel-bootstrap {
  .container-fluid {
    padding: 0;
  }
  .carousel-indicators {
    margin-bottom: 0;
  }
  .carousel-indicators .active {
    background-color: $base;
  }
  .carousel-indicators button {
    background-color: $deactivate;
  }
  .carousel-inner {
    padding: 12px 12px 28px;
  }
}
.info-ticket-wrapper {
  background-color: $white;
  box-shadow: $regular-shadow;
  border-radius: 16px;
  padding: 24px 16px;
  @media screen and (max-width: 992px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px 16px;
    margin-top: 0;
  }
  .title-card {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 24px;
  }
  .path-info-ticket-title {
    @include font($uni,$bold,20px,27px,$base);
    margin-bottom: 16px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .path-info-ticket-title-paragraph {
    @include font($uni,$regular,18px,24.3px,$secondary);
    margin-bottom: 8px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .path-info-cities {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .arrow-path-icon {
    margin-right: 8px;
    margin-left: 8px;
    @media screen and (max-width: 767px) {
      width: 15px;
    }
  }
  .path-info-from {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .path-info-to {
    &-datetime {
      @include font($uni,$regular,18px,24.3px,$base);
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    &-place {
      margin-bottom: 12px;
      @include font($uni,$light,18px,24.3px,$base);
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
  .path-info-places {
    @include font($uni,$regular,18px,24.3px,$base);
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
    span {
      @media screen and (max-width: 767px) {
        margin-right: 5px;
      }
    }
    span:last-child {
      @media screen and (max-width: 767px) {
        margin-right: 0
      }
    }
  }
  .path-info-sum {
    @include font($uni,$bold,20px,27px,$secondary);
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .cross-line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed $blue-link;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  .paths-final-amount {
    margin-top: 24px;
    @include font($uni,$bold,20px,27px,$blue-active);
    text-transform: uppercase;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
      margin-top: 16px;
      color: $blue-color;
    }
    .old-amount {
      @include font($uni,$bold,14px,18.9px,$secondary);
      text-decoration: line-through;
      top: -15px;
      right: 0;
      @media screen and (max-width: 767px) {
        font-size: 11px;
        line-height: 14.85px;
      }
    }
  }
  .point-minus {
    margin-top: 12px;
    @include font($uni,$regular,18px,24.3px,$blue-active);
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18.9px;
    }
  }
}
</style>