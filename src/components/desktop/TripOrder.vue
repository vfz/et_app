<template>
  <div class="row">
    <div class="col-9">
      <div class="trip-order">
        <div class="tab-content position-relative" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-there" role="tabpanel" aria-labelledby="nav-there-tab">
            <div class="table-wrapper table-responsive">
              <table class="table align-middle">
                <thead>
                <tr>
                  <th>
                    Дата поездки
                  </th>
                  <th>
                    Маршрут
                  </th>
                  <th>
                    Количество билетов
                  </th>
                  <th>
                    Итого
                  </th>
                  <th>
                    Евробаллы
                  </th>
                </tr>
                </thead>
                <tbody>
                <!--              Добавить класс active-row и будет выделение-->
                <tr>
                  <td>
                    <div class="date-trip">
                      25.11.2019
                    </div>
                  </td>
                  <td>
                    <div class="path-trip d-flex align-items-center">
                      <div class="path-trip-start">
                        Белгород
                      </div>
                      <ArrowPathIcon/>
                      <div class="path-trip-end">
                        Ставрополь
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="tickets-count-trip">
                      3
                    </div>
                  </td>
                  <td>
                    <div class="amount-sum-trip">
                      4 500₽
                    </div>
                  </td>
                  <td>
                    <div class="added-europoints-trip">
                      +450
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
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
                      <div class="col">
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
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Отправление:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            <div>25.11.2019</div>
                            &nbsp;
                            в
                            &nbsp;
                            <div> 15:30</div>
                          </div>
                          <div class="trip-info-link table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                            <div>
                              Автостанция “Белый город”
                            </div>
                            <div>
                              ул. Ленина, 324
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Время в пути:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            16 часов
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Прибытие:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            <div>26.11.2019</div>
                            &nbsp;
                            в
                            &nbsp;
                            <div> 07:30</div>
                          </div>
                          <div class="trip-info-link table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                            <div>
                              Железнодорожный вокзал
                            </div>
                            <div>
                              ул. Вокзальная, 15
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="trip-info">
                          <h4 class="trip-info-title">
                            Места:
                          </h4>
                          <div class="trip-info-description d-flex align-items-center">
                            25,26,27
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
                      <div class="col"></div>
                      <div class="col"></div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-table d-flex align-items-center">
                <div class="details d-flex align-items-center" v-bind:class="{'d-none': isShowDetails}">
                  <button v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTicketsDetails" aria-expanded="false" aria-controls="collapseTicketsDetails">
                    Подробнее
                    <ArrowDownIcon color="#77BCFC"/>
                  </button>
                </div>
                <div class="details details-hide d-flex align-items-center" v-bind:class="{'d-none': isHideDetails}">
                  <button v-on:click="showCollapse()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTicketsDetails" aria-expanded="false" aria-controls="collapseTicketsDetails">
                    Свернуть
                    <ArrowDownIcon color="#77BCFC"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-3 d-flex align-items-center">
      <div class="btn-repeat-trip">
        <button class="btn btn-primary btn-lg">
          Повторить поездку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
export default {
  name: "TripOrder",
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
@import "@/assets/variables.scss";
@import "@/assets/font.scss";
.trip-order {
  .tab-content {
    position: relative;
    z-index: 2;
    .table-wrapper {
      background-color: $white;
      border-radius: 0 16px 16px 16px;
      box-shadow: $regular-shadow;
      padding: 12px 0;
      .table>:not(:first-child) {
        border-top: unset;
      }
      .table {
        margin-bottom: 0;
        td {
          padding: 1rem 1rem;
        }
        th {
          padding: 1rem 1rem;
        }
        thead {
          tr {
            th {
              @include font($uni, $regular, 14px, 18.9px, $base);
            }
          }
        }
        tbody {
          tr {
            td {
              .path-trip {
                &-start, &-end {
                  @include font($uni,$bold,20px,27px,$base);
                }
                &-start {
                  margin-right: 8px;
                }
                &-end {
                  margin-left: 8px;
                }
              }
              .date-trip, .tickets-count-trip, .amount-sum-trip {
                @include font($uni,$regular,18px,24.3px,$base);
              }
              .date-trip, .arrival-time, .dispatch-city, .arrival-city, .places-left {
                margin-bottom: 4px;
              }
              .added-europoints-trip {
                @include font($uni,$regular,18px,24.3px,$blue-active);
              }
              .table-link {
                cursor: pointer;
              }
            }
          }
          .active-row {
            background-color: $blue-hover;
          }
          tr:hover{
            @include animation;
            background-color: $blue-hover;
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
          }
        }
        .collapse-section-title {
          @include font($uni,$bold,20px,27px,$base);
          margin-bottom: 16px;
        }
        .trip-info {
          &-title {
            @include font($uni,$regular,18px,24.3px,$secondary);
            margin-bottom: 8px;
          }
          &-description {
            @include font($uni,$regular,18px,24.3px,$base);
            margin-bottom: 8px;
            &-start {
              margin-right: 8px;
            }
            &-end {
              margin-left: 8px;
            }
          }
          &-link {
            @include font($uni,$light,18px,24.3px,$blue-link);
          }
        }
      }
      .footer-table {
        padding: 1rem 1rem;
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
          button {
            svg {
              transform: rotate(180deg);
            }
          }
        }
        .used-europoints {
          @include font($uni,$light,18px,24.3px,$base);
          span {
            color: $blue-color;
          }
        }
      }
    }
  }
  .ticket-info {
    margin-bottom: 24px;
  }
}
.btn {
  font-size: 24px;
  border-radius: 16px;
}
.table-link {
  cursor: pointer;
}
</style>