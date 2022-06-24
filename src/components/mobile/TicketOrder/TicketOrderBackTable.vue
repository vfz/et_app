<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2 class="title-table">
          Туда
        </h2>
      </div>
    </div>
    <div class="row gy-4">
      <div class="col-12">
        <div class="table-item">
          <div class="table-item-content-wrapper">
            <div class="row">
              <div class="col-6">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Время отправления
                  </h3>
                  <div class="table-item-part-left-date d-flex">
                    <div class="dispatch-time">
                      09:30
                    </div>
                    <div class="dispatch-date">
                      <span class="dispatch-date-day">30</span>
                      <span class="dispatch-date-month">Янв'</span>
                      <span class="dispatch-date-year">20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="table-item-part-right">
                  <h3 class="table-item-part-right-title">
                    Время прибытия
                  </h3>
                  <div class="table-item-part-right-date d-flex">
                    <div class="arrival-time">
                      05:30
                    </div>
                    <div class="arrival-date">
                      <span class="arrival-date-day">31</span>
                      <span class="arrival-date-month">Янв'</span>
                      <span class="arrival-date-year">20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-6">
                <div class="table-item-part-left">
                  <div class="table-item-part-left-city">
                    Ставрополь
                  </div>
                  <div class="table-item-part-left-place table-link" data-bs-toggle="modal" data-bs-target="#dispatch-modal">
                    ж/д вокзал
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="table-item-part-right">
                  <div class="table-item-part-right-city">
                    Москва
                  </div>
                  <div class="table-item-part-right-place table-link" data-bs-toggle="modal" data-bs-target="#dispatch-modal">
                    АВ “Орехово”
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-6">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Время в пути
                  </h3>
                  <div class="table-item-part-left-date">
                    <div class="dispatch-time table-link" data-bs-toggle="modal" data-bs-target="#dispatch-length-time-modal">
                      20 часов
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="table-item-part-right">
                  <h3 class="table-item-part-right-title">
                    Места
                  </h3>
                  <div class="table-item-part-right-date">
                    <div class="arrival-time table-link" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                      33,34,35,36
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-5">
                <div class="table-item-part-left">
                  <h3 class="table-item-part-left-title">
                    Итого
                  </h3>
                  <div class="table-item-part-left-date">
                    <div class="amount">
                      7000 ₽
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-7">
                <div class="table-item-part-right">
                  <h3 class="table-item-part-right-title">
                    Использованы
                  </h3>
                  <div class="table-item-part-right-date">
                    <div class="europoints">
                      евробаллы (3000 ₽)
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
export default {
  name: "TicketOrderBackTable",
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
    ArrowDownIcon, CancelIcon
  }
}
</script>

<style lang="scss" scoped>

</style>