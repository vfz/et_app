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
                  <div class="table-item-part-left-date d-flex">
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
                  <div class="trip-info-description d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
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
                      <div class="col-12">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <!--                            Для каждой кнопки таба необходимо расставить свой id data-bs-target aria-controls для корректной работы-->
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="ticket1-tab-back" data-bs-toggle="tab" data-bs-target="#ticket1-back" type="button" role="tab" aria-controls="ticket1-back" aria-selected="true">Билет №1</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="ticket2-tab-back" data-bs-toggle="tab" data-bs-target="#ticket2-back" type="button" role="tab" aria-controls="ticket2-back" aria-selected="false">Билет №2</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="ticket3-tab-back" data-bs-toggle="tab" data-bs-target="#ticket3-back" type="button" role="tab" aria-controls="ticket3-back" aria-selected="false">Билет №3</button>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <!--                            Для tab-pane необходимо расставить свой id, aria-labelledby-->
                          <div class="tab-pane fade show active" id="ticket1-back" role="tabpanel" aria-labelledby="ticket1-tab-back">
                            <div class="ticket-info-wrapper">
                              <div class="row">
                                <div class="col-12">
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
                                <div class="col-12">
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
                              <div class="row flex-column-reverse ticket-info-wrapper-footer">
                                <div class="col-12">
                                  <div class="cancel-ticket">
                                    <button type="button">
                                      Сдать билет
                                      <CancelIcon color="#1399FF"/>
                                    </button>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <p class="cancel-ticket-description">
                                    Для посадки, необходимо иметь при себе
                                    <span>оригинал указанного документа </span> и <span>билет</span>
                                    (будет отправлен на указанную вами эл.почту).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="ticket2-back" role="tabpanel" aria-labelledby="ticket2-tab-back">
                            <div class="ticket-info-wrapper">
                              <div class="row">
                                <div class="col-12">
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
                                <div class="col-12">
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
                              <div class="row flex-column-reverse ticket-info-wrapper-footer">
                                <div class="col-12">
                                  <div class="cancel-ticket">
                                    <button type="button">
                                      Сдать билет
                                      <CancelIcon color="#1399FF"/>
                                    </button>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <p class="cancel-ticket-description">
                                    Для посадки, необходимо иметь при себе
                                    <span>оригинал указанного документа </span> и <span>билет</span>
                                    (будет отправлен на указанную вами эл.почту).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="ticket3-back" role="tabpanel" aria-labelledby="ticket3-tab-back">
                            <div class="ticket-info-wrapper">
                              <div class="row">
                                <div class="col-12">
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
                                <div class="col-12">
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
                              <div class="row flex-column-reverse ticket-info-wrapper-footer">
                                <div class="col-12">
                                  <div class="cancel-ticket">
                                    <button type="button">
                                      Сдать билет
                                      <CancelIcon color="#1399FF"/>
                                    </button>
                                  </div>
                                </div>
                                <div class="col-12">
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
                      <div class="col-12">
                        <div class="row">
                          <div class="col-12">
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
                          <div class="col-12">
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