<template>
  <section class="thereTable-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-table">
            Туда <span class="title-table-counter">(3)</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="table-wrapper table-responsive">
            <table class="table align-middle">
              <thead>
              <tr>
                <th>
                  Время отправления
                </th>
                <th>
                  Пункт отправления
                </th>
                <th>
                  Время в пути / маршрут
                </th>
                <th>
                  Время прибытия
                </th>
                <th>
                  Пункт прибытия
                </th>
                <th>
                  Осталось мест
                </th>
                <th>
                  Итого
                </th>
                <th>
                  Покупка
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="dispatch-time">
                    09:30
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">30</span>
                    <span class="dispatch-date-month">Янв'</span>'
                    <span class="dispatch-date-year">20</span>
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
                    24
                  </div>
<!--                  При нажатии открывается модальное окно с-->
                  <div class="place-choice table-link" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                    Выбрать
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
                  <div class="place-choice-buy">
                    Выбрать
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="dispatch-time">
                    09:30
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">30</span>
                    <span class="dispatch-date-month">Янв'</span>'
                    <span class="dispatch-date-year">20</span>
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
                    24
                  </div>
                  <div class="place-choice">
                    Выбрать
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
                  <div class="place-choice-buy">
                    Выбрать
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="dispatch-time">
                    09:30
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">30</span>
                    <span class="dispatch-date-month">Янв'</span>'
                    <span class="dispatch-date-year">20</span>
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
                    24
                  </div>
                  <div class="place-choice">
                    Выбрать
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
                  <div class="place-choice-buy">
                    Выбрать
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="dispatch-time">
                    09:30
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">30</span>
                    <span class="dispatch-date-month">Янв'</span>'
                    <span class="dispatch-date-year">20</span>
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
                    24
                  </div>
                  <div class="place-choice">
                    Выбрать
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
                  <div class="place-choice-buy">
                    Выбрать
                  </div>
                </td>
              </tr>
<!--              Добавить класс active-row и будет выделение-->
              <tr class="active-row">
                <td>
                  <div class="dispatch-time">
                    09:30
                  </div>
                  <div class="dispatch-date">
                    <span class="dispatch-date-day">30</span>
                    <span class="dispatch-date-month">Янв'</span>'
                    <span class="dispatch-date-year">20</span>
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
                  <div class="place-choice">
                    Выбрать
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
                  <div class="place-choice-buy">
                    Убрать
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
    <div class="modal fade dispatch-length-time-modal" id="dispatch-length-time-modal" tabindex="-1" aria-labelledby="dispatch-modal-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-6">
                  <h5 class="modal-title">
                    Маршрут
                  </h5>
                  <div class="modal-date">
                    30 января
                  </div>
                  <div class="dispatch-timeline">
                    <ul class="timeline">
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Ставрополь</h5>
                        <p class="timeline-time">9:30</p>
                        <p class="timeline-place">
                          Агентство “Евротранс” (рядом с железнодорожным вокзалом), проспект Карла Маркса, дом 1А
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Московское</h5>
                        <p class="timeline-time">10:10</p>
                        <p class="timeline-place">
                          Московское (АС)
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Донское</h5>
                        <p class="timeline-time">10:30</p>
                        <p class="timeline-place">
                          Донское (АС)
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Безопасное</h5>
                        <p class="timeline-time">10:50</p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Ставрополь</h5>
                        <p class="timeline-time">9:30</p>
                        <p class="timeline-place">
                          Агентство “Евротранс” (рядом с железнодорожным вокзалом), проспект Карла Маркса, дом 1А
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Московское</h5>
                        <p class="timeline-time">10:10</p>
                        <p class="timeline-place">
                          Московское (АС)
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Донское</h5>
                        <p class="timeline-time">10:30</p>
                        <p class="timeline-place">
                          Донское (АС)
                        </p>
                      </li>
                      <li class="timeline-item mb-5">
                        <h5 class="timeline-city">Безопасное</h5>
                        <p class="timeline-time">10:50</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="dispatch-map h-100">
                    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.ru/maps/?ll=39.794306%2C50.707218&mode=routes&rtext=55.755819%2C37.617644~45.043317%2C41.969110&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.618%252C55.756%26spn%3D0.642%252C0.466%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0~ymapsbm1%3A%2F%2Fgeo%3Fll%3D41.969%252C45.043%26spn%3D0.280%252C0.164%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A1%25D1%2582%25D0%25B0%25D0%25B2%25D1%2580%25D0%25BE%25D0%25BF%25D0%25BE%25D0%25BB%25D1%258C&utm_medium=mapframe&utm_source=maps&z=6.2" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUJ5PX4DA" width="100%" height="800" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
    <div class="modal fade place-left-modal" id="place-left-modal" tabindex="-1" aria-labelledby="place-left-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-12">
                  <h5 class="modal-title text-center">
                    Выберите место на схеме автобуса
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="col-12 d-inline-flex justify-content-center align-content-center">
                  <div class="squares-place-status d-flex flex-wrap align-items-center justify-content-center">
                    <div v-for="(value, key) in seatStates" class="square-place-status-item d-flex">
                      <div v-bind:class="value.class + ' square-place-status'"></div>
                      <div class="square-place-text d-flex align-items-center">
                        {{value.text}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="floor-header d-flex align-items-center">
                    <div class="floor-item">
                      1 этаж
                    </div>
                    <div class="floor-item active">
                      2 этаж
                    </div>
                  </div>
                  <div class="bus-scheme">
                    <div class="bus-scheme-column">
<!--                      bus-scheme-column-item-->
<!--                      TODO ошибка необходимо исправить-->
<!--                      <div-->
<!--                          v-for="{seat, i} in seats"-->
<!--                          :key="seat.type"-->
<!--                          :class=-->
<!--                              "{'free-place' : seat.type === 'free-place',-->
<!--                              'busy-place' : seat.type === 'busy-place'-->
<!--                              }">-->
<!--                        {{seat.name}}}
                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThereTable",
  data() {
    return {
      seatStates: {
        available: {
          class: 'free-place',
          text: 'Свободное место',
        },
        booked: {
          class: 'busy-place',
          text: 'Занятое место',
        }
      },
      seats: [
        {
          name: '1',
          type: 'free-place',
        },
        {
          name: '2',
          type: 'free-place'
        },
        {
          name: '3',
          type: 'free-place'
        },
        {
          name: '4',
          type: 'busy-place'
        },
        {
          name: '5',
          type: 'free-place',
        },
        {
          name: '6',
          type: 'free-place'
        },
        {
          name: '7',
          type: 'free-place'
        },
        {
          name: '8',
          type: 'busy-place'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.thereTable-section {
  margin: 41px 88px;
  @media screen and (max-width: 767px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  .title-table {
    @include font($uni,$bold, 24px, 32.4px, $black);
    &-counter {
      font-size: 18px;
      color: $secondary;
    }
  }
  .table-wrapper {
    background-color: $white;
    border-radius: 16px;
    box-shadow: $regular-shadow;
    padding: 12px 0;
    .table>:not(:first-child) {
      border-top: unset;
    }
    .table {
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
            .dispatch-time, .arrival-time, .dispatch-city, .arrival-city, .places-left {
              margin-bottom: 4px;
            }
            .dispatch-time, .arrival-time, .price {
              @include font($uni, $bold, 20px, 27px, $base);
            }
            .dispatch-date, .arrival-date {
              @include font($uni, $regular, 14px, 18.9px, $secondary)
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
            .dispatch-city, .arrival-city, .places-left, .place-choice-buy {
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
  }
}
</style>