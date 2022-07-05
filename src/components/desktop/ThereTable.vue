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
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
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
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
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
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
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
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
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
                      <img class="help-icon" alt="help" src="/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
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
  </section>
</template>

<script>
export default {
  name: "ThereTable",
  // data() {
  //   return {
  //     seatStates: {
  //       available: {
  //         class: 'free-place',
  //         text: 'Свободное место',
  //       },
  //       booked: {
  //         class: 'busy-place',
  //         text: 'Занятое место',
  //       }
  //     },
  //     seats: [
  //       {
  //         name: '1',
  //         type: 'free-place',
  //       },
  //       {
  //         name: '2',
  //         type: 'free-place'
  //       },
  //       {
  //         name: '3',
  //         type: 'free-place'
  //       },
  //       {
  //         name: '4',
  //         type: 'busy-place'
  //       },
  //       {
  //         name: '5',
  //         type: 'free-place',
  //       },
  //       {
  //         name: '6',
  //         type: 'free-place'
  //       },
  //       {
  //         name: '7',
  //         type: 'free-place'
  //       },
  //       {
  //         name: '8',
  //         type: 'busy-place'
  //       }
  //     ]
  //   }
  // }
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