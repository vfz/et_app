<template>
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
                  09:30
                </div>
              </td>
              <td>
                <div class="dispatch-city">
                  Ставрополь
                </div>
                <!--                  для вызова модального окна нужно добавить атрибуты data-bs-toggle со значением modal и data-bs-target со значением id модального окна-->
                <div class="dispatch-place table-link" data-bs-toggle="modal" data-bs-target="#dispatch-modal">
                  ж/д вокзал
                </div>
              </td>
              <td>
                <div class="dispatch-length-time">
                  20 часов
                </div>
                <!--                  для вызова модального окна нужно добавить атрибуты data-bs-toggle со значением modal и data-bs-target со значением id модального окна-->
                <div class="dispatch-length-time-saw table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                  Посмотреть
                </div>
              </td>
              <td>
                <div class="arrival-time">
                  05:30
                </div>
                <div class="arrival-date">
                  <span class="arrival-date-day">31</span>
                  <span class="arrival-date-month">Янв</span>'
                  <span class="arrival-date-year">20</span>
                </div>
              </td>
              <td>
                <div class="arrival-city">
                  Ставрополь
                </div>
                <div class="arrival-place">
                  ж/д вокзал
                </div>
              </td>
              <td>
                <div class="places-left">
                  33,34,35,36
                </div>
              </td>
              <td class="align-middle">
                <div class="d-flex align-content-center">
                  <div class="price d-inline-block">
                    7000₽
                  </div>
                  <div class="d-inline-block">
                    <img class="help-icon" alt="help" src="img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
                  </div>
                </div>
              </td>
              <td>
                <div class="place-choice-cancel">
                  Сдать
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
                      Детали билетов
                    </h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <!--                            Для каждой кнопки таба необходимо расставить свой id data-bs-target aria-controls для корректной работы-->
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="ticket1-tab" data-bs-toggle="tab" data-bs-target="#ticket1" type="button" role="tab" aria-controls="ticket1" aria-selected="true">Билет №1</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="ticket2-tab" data-bs-toggle="tab" data-bs-target="#ticket2" type="button" role="tab" aria-controls="ticket2" aria-selected="false">Билет №2</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="ticket3-tab" data-bs-toggle="tab" data-bs-target="#ticket3" type="button" role="tab" aria-controls="ticket3" aria-selected="false">Билет №3</button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <!--                            Для tab-pane необходимо расставить свой id, aria-labelledby-->
                      <div class="tab-pane fade show active" id="ticket1" role="tabpanel" aria-labelledby="ticket1-tab">
                        <div class="ticket-info-wrapper">
                          <div class="row">
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Фамилия:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Ермолаева
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Имя:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Кристина
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Отчество:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Дмитриевна
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Дата рождения:
                                  </h4>
                                  <div class="list-group-item-description">
                                    24.10.1991
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4  class="list-group-item-title">
                                    Пол:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Женский
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Гражданство:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Российская Федерация
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Документ:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Паспорт РФ
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Серия и номер документа:
                                  </h4>
                                  <div class="list-group-item-description">
                                    01 23 456789
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="row ticket-info-wrapper-footer">
                            <div class="col-6">
                              <div class="cancel-ticket">
                                <button type="button">
                                  Сдать билет
                                  <CancelIcon color="#1399FF"/>
                                </button>
                              </div>
                            </div>
                            <div class="col-6">
                              <p class="cancel-ticket-description">
                                Для посадки, необходимо иметь при себе
                                <span>оригинал указанного документа </span> и <span>билет</span>
                                (будет отправлен на указанную вами эл.почту).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="ticket2" role="tabpanel" aria-labelledby="ticket2-tab">
                        <div class="ticket-info-wrapper">
                          <div class="row">
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Фамилия:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Ермолаева
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Имя:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Кристина
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Отчество:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Дмитриевна
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Дата рождения:
                                  </h4>
                                  <div class="list-group-item-description">
                                    24.10.1991
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4  class="list-group-item-title">
                                    Пол:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Женский
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Гражданство:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Российская Федерация
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Документ:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Паспорт РФ
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Серия и номер документа:
                                  </h4>
                                  <div class="list-group-item-description">
                                    01 23 456789
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="row ticket-info-wrapper-footer">
                            <div class="col-6">
                              <div class="cancel-ticket">
                                <button type="button">
                                  Сдать билет
                                  <CancelIcon color="#1399FF"/>
                                </button>
                              </div>
                            </div>
                            <div class="col-6">
                              <p class="cancel-ticket-description">
                                Для посадки, необходимо иметь при себе
                                <span>оригинал указанного документа </span> и <span>билет</span>
                                (будет отправлен на указанную вами эл.почту).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="ticket3" role="tabpanel" aria-labelledby="ticket3-tab">
                        <div class="ticket-info-wrapper">
                          <div class="row">
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Фамилия:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Ермолаева
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Имя:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Кристина
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Отчество:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Дмитриевна
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Дата рождения:
                                  </h4>
                                  <div class="list-group-item-description">
                                    24.10.1991
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="col-6">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <h4  class="list-group-item-title">
                                    Пол:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Женский
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Гражданство:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Российская Федерация
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Документ:
                                  </h4>
                                  <div class="list-group-item-description">
                                    Паспорт РФ
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <h4 class="list-group-item-title">
                                    Серия и номер документа:
                                  </h4>
                                  <div class="list-group-item-description">
                                    01 23 456789
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="row ticket-info-wrapper-footer">
                            <div class="col-6">
                              <div class="cancel-ticket">
                                <button type="button">
                                  Сдать билет
                                  <CancelIcon color="#1399FF"/>
                                </button>
                              </div>
                            </div>
                            <div class="col-6">
                              <p class="cancel-ticket-description">
                                Для посадки, необходимо иметь при себе
                                <span>оригинал указанного документа </span> и <span>билет</span>
                                (будет отправлен на указанную вами эл.почту).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col-6">
                        <div class="buyer-info">
                          <h3 class="buyer-info-title">
                            Информация о покупателе
                          </h3>
                          <ul class="list-group">
                            <li class="list-group-item">
                              <h4 class="list-group-item-title">
                                Фамилия:
                              </h4>
                              <div class="list-group-item-description">
                                Ермолаева
                              </div>
                            </li>
                            <li class="list-group-item">
                              <h4 class="list-group-item-title">
                                Имя:
                              </h4>
                              <div class="list-group-item-description">
                                Кристина
                              </div>
                            </li>
                            <li class="list-group-item">
                              <h4 class="list-group-item-title">
                                Эл. почта:
                              </h4>
                              <div class="list-group-item-description">
                                ErmoKris@yandex.ru
                              </div>
                            </li>
                            <li class="list-group-item">
                              <h4 class="list-group-item-title">
                                Телефон:
                              </h4>
                              <div class="list-group-item-description">
                                +7 (123)-456-78-90
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="baggage-rules buyer-info">
                          <h3 class="buyer-info-title">
                            Правила перевозки багажа
                          </h3>
                          <p class="buyer-info-description">
                            Вы можете бесплатно перевезти одно место ручной клади.
                          </p>
                          <h5 class="buyer-info-description-title">
                            Ограничения для ручной клади:
                          </h5>
                          <p class="buyer-info-description">
                            — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
                            <br>
                            — Вес до 7 килограмм
                          </p>
                          <p class="buyer-info-description">
                            Цена платного багажа составляет &nbsp;<span>250 ₽.</span>
                          </p>
                          <h5 class="buyer-info-description-title">
                            Ограничения для ручной клади:
                          </h5>
                          <p class="buyer-info-description">
                            — Сумма измерений не превышает 120 см (Высота + Ширина + Длина)
                            <br>
                            — Вес до 7 килограмм
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-table d-flex align-items-center justify-content-between">
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
            <div class="used-europoints justify-content-end d-flex">
              Использованы &nbsp;<span>евробаллы (3000 ₽)</span>
            </div>
          </div>
        </div>
        <div class="table-amount d-flex justify-content-end">
          <div class="paths-final-amount d-inline-block position-relative">
            <div class="old-amount position-absolute">14 000₽</div>
            Итого <span>11 000 ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
export default {
  name: "TripOrder",
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
            .date-trip {
              @include font($uni,$regular,18px,24.3px,$base);
            }
            .date-trip, .arrival-time, .dispatch-city, .arrival-city, .places-left {
              margin-bottom: 4px;
            }
            .dispatch-date {
              &-day {
                font-size: 18px;
              }
              &-month, &-year {
                font-size: 14px;
              }
            }
            .arrival-date {
              &-day {
                font-size: 18px;
              }
            }
            .dispatch-city, .arrival-city, .places-left, .place-choice-cancel {
              @include font($uni, $regular, 18px, 24.3px, $base);
            }
            .dispatch-length-time-saw, .dispatch-place, .arrival-place, .place-choice {
              @include font($uni, $light, 14px, 18.9px, $blue-link);
            }
            .price {
              margin-right: 24px;
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
        background-color: #F3F7FF;;
        .collapse-title {
          margin-top: 13px;
          margin-bottom: 24px;
          @include font($uni,$bold,24px,32.4px,$base);
        }
        .nav-tabs {
          .nav-item {
            box-shadow: none;
            margin-right: 40px;
            .nav-link {
              padding: 0;
              @include font($uni,$bold,20px,27px,$deactivate);
            }
            .active {
              background: none;
              color: $blue-active;
              box-shadow: none;
              border-bottom: 1px solid $blue-active;
              padding-bottom: 4px;
            }
          }
          .nav-item:last-child {
            margin-right: 0;
          }
        }
        .tab-content {
          .tab-pane {
            .ticket-info-wrapper {
              padding-top: 12px;
              padding-bottom: 12px;
              &-footer {
                margin-top: 24px;
                .cancel-ticket {
                  button {
                    background: none;
                    border: none;
                    outline: none;
                    padding: 0;
                    @include font($uni,$light,18px,24.3px,$blue-color);
                    svg {
                      margin-left: 8px;
                    }
                  }
                }
                .cancel-ticket-description {
                  @include font($uni,$light,18px,24.3px,$blue-active);
                  span {
                    font-weight: $regular;
                  }
                }
              }
              .list-group {
                &-item {
                  background: none;
                  border: none;
                  padding-left: 0;
                  padding-right: 0;
                  &-title {
                    @include font($uni,$regular,18px,24.3px,$secondary);
                    margin-bottom: 8px;
                  }
                  &-description {
                    @include font($uni,$regular,18px,24.3px,$base);
                  }
                }
              }
            }
          }
        }
        .buyer-info {
          &-title {
            @include font($uni,$bold,20px,27px,$base);
            margin-bottom: 16px;
          }
          &-description-title {
            @include font($uni,$regular,18px,24.3px,$secondary);
            margin-bottom: 0;
          }
          &-description {
            @include font($uni,$light,18px,24.3px,$secondary);
            margin-bottom: 8px;
            span {
              color: $base;
              font-weight: $regular;
            }
          }
          .list-group {
            &-item {
              background: none;
              border: none;
              padding-left: 0;
              padding-right: 0;
              &-title {
                @include font($uni,$regular,18px,24.3px,$secondary);
                margin-bottom: 8px;
              }
              &-description {
                @include font($uni,$regular,18px,24.3px,$base);
              }
            }
          }
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
  .table-amount {
    margin-top: 8px;
    .paths-final-amount {
      margin-top: 24px;
      @include font($uni,$bold,20px,27px,$blue-active);
      text-transform: uppercase;
      .old-amount {
        @include font($uni,$bold,14px,18.9px,$secondary);
        text-decoration: line-through;
        top: -15px;
        right: 0;
      }
    }
  }
}
</style>