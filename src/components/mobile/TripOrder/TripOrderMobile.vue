<template>
  <div>
    <div class="row gy-4">
      <div class="col-12">
        <div class="table-item">
          <div class="table-item-content-wrapper">
            <div class="row">
              <div class="col-12">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Дата поездки
                  </h3>
                  <div class="table-item-part-left-date-trip d-flex">
                    25.11.2019
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-12">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Маршрут
                  </h3>
                  <div class="table-item-part-left-trip-info-description trip-info-description d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                    <div class="trip-info-description-start">
                      Белгород
                    </div>
                    <ArrowPathIcon/>
                    <div class="trip-info-description-end">
                      Ставрополь
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-12">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Количество билетов
                  </h3>
                  <div class="table-item-part-left-date d-flex">
                    <div class="trip-info-count">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-12">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Итого
                  </h3>
                  <div class="table-item-part-left-date">
                    <div class="amount">
                      4 500 ₽
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-7">
                <div class="table-item-part-right">
                  <h3 class="table-item-part-right-title">
                    Евробаллы
                  </h3>
                  <div class="table-item-part-right-date">
                    <div class="europoints">
                      + 450
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-12 text-center">
                <div class="table-item-part-center">
                  <div class="details d-flex justify-content-center align-items-center" v-bind:class="{'d-none': isShowDetails}">
                    <button v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTicketsDetails" aria-expanded="false" aria-controls="collapseTicketsDetails">
                      Подробнее
                      <ArrowDownIcon color="#77BCFC"/>
                    </button>
                  </div>
                  <div class="details details-hide d-flex justify-content-center align-items-center" v-bind:class="{'d-none': isHideDetails}">
                    <button v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTicketsDetails" aria-expanded="false" aria-controls="collapseTicketsDetails">
                      Свернуть
                      <ArrowDownIcon color="#77BCFC"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <!--                убрать класс show для закрытия collapse-->
              <div class="collapse" id="collapseTicketsDetails">
                <div class="collapse-wrapper">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        <h2 class="collapse-title">
                          Детали поездки
                        </h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <h3 class="collapse-section-title">
                          Информация о билете
                        </h3>
                      </div>
                    </div>
                    <div class="row ticket-info">
                      <div class="col-lg col-xl">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Маршрут:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            <div class="trip-info-description-start">
                              Белгород
                            </div>
                            <ArrowPathIcon/>
                            <div class="trip-info-description-end">
                              Ставрополь
                            </div>
                          </div>
                          <div class="trip-info-link table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                            Показать карту
                          </div>
                        </div>
                      </div>
                      <div class="col-lg col-xl">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Отправление:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            25.11.2019 в 15:30
                          </div>
                          <div class="trip-info-link table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                            Автостанция “Белый город”
                            <br>
                            ул. Ленина, 324
                          </div>
                        </div>
                      </div>
                      <div class="col-lg col-xl">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Время в пути:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            16 часов
                          </div>
                        </div>
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Места:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            25,26,27
                          </div>
                        </div>
                      </div>
                      <div class="col-lg col-xl">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Прибытие:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            26.11.2019 в 07:30
                          </div>
                          <div class="trip-info-link table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                            Железнодорожный вокзал
                            <br>
                            ул. Вокзальная, 15
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <h3 class="collapse-section-title ">
                        Информация о пассажирах
                      </h3>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            ФИО:
                          </h4>
                          <div class="trip-info-link table-link">
                            Ермолаева К.Д.
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            ФИО:
                          </h4>
                          <div class="trip-info-link table-link">
                            Ермолаева К.Д.
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            ФИО:
                          </h4>
                          <div class="trip-info-link table-link">
                            Ермолаева К.Д.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid">
            <button class="btn btn-primary price" data-bs-toggle="modal" data-bs-target="#place-left-modal">
              Сдать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";

export default {
  name: "TripOrderMobile",
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
  },
  components: {
    ArrowPathIcon,
    ArrowDownIcon, CancelIcon
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/variables.scss";
@import "/src/assets/font.scss";

.title-table {
  @include font($uni,$bold, 24px, 32.4px, $black);
  &-counter {
    font-size: 18px;
    color: $secondary;
  }
}
.table-item {
  max-width: unset;
  box-shadow: $regular-shadow;
  &-content-wrapper {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
  }
  &-part {
    .table-link {
      cursor: pointer;
    }
    &-left {
      &-title {
        @include font($uni,$regular,11px,14.85px,$base);
        margin-bottom: 10px;
      }
      &-date-trip {
        @include font($uni,$regular,13px,17.55px,$base);
      }
      &-trip-info-description {
        @include font($uni,$bold,14px,18.9px,$base);
        .trip-info-description-start {
          margin-right: 8px;
        }
        svg {
          width: 5px;
        }
        .trip-info-description-end {
          margin-left: 8px;
        }
      }
    }
    &-center {
      .details {
        button {
          background: none;
          outline: none;
          border: none;
          @include font($uni,$light,18px,24.3px,$blue-color);
          svg {
            margin-left: 8px;
          }
        }
      }
      .details-hide {
        margin-bottom: 12px;
        button {
          svg {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
  .collapse, .collapsing {
    .collapse-wrapper {
      background-color: #F3F7FF;
      padding: 13px 16px;
      .collapse-title {
        margin-bottom: 24px;
        @include font($uni,$bold,24px,32.4px,$base);
        @media screen and (max-width: 1199px) {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
    }
    .collapse-section-title {
      @include font($uni,$bold,20px,27px,$base);
      margin-bottom: 16px;
      @media screen and (max-width: 1199px) {
        font-size: 14px;
      }
    }
    .trip-info {
      &-title {
        @include font($uni,$regular,18px,24.3px,$secondary);
        margin-bottom: 8px;
        @media screen and (max-width: 1199px) {
          font-size: 13px;
        }
      }
      &-description {
        @include font($uni,$regular,18px,24.3px,$base);
        margin-bottom: 8px;
        @media screen and (max-width: 1199px) {
          font-size: 13px;
        }
        &-start {
          margin-right: 8px;
        }
        &-end {
          margin-left: 8px;
        }
      }
      &-link {
        @include font($uni,$regular,18px,24.3px,$blue-active);
        @media screen and (max-width: 1199px) {
          font-size: 13px;
        }
      }
    }
  }
  .btn {
    @include font($uni,$bold,16px,21.6px,$white);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
.active {
  background: #F3F7FF;
}
</style>