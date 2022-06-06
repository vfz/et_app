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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
<!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно. Предпологаю что
окна будут рендериться через цикл
-->
    <div class="modal fade" id="dispatch-modal" tabindex="-1" aria-labelledby="dispatch-modal-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header justify-content-end">
            <a class="modal-link" href="#">Проложить маршрут</a>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/tsentralny_avtovokzal/1078537708/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Центральный Автовокзал</a><a href="https://yandex.ru/maps/36/stavropol/category/bus_station/184108121/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Автовокзал, автостанция в Ставрополе</a><a href="https://yandex.ru/maps/36/stavropol/category/bus_tickets/184108281/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Автобусные билеты в Ставрополе</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUJ5LQHwC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
          </div>
        </div>
      </div>
    </div>
    <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
    <div class="modal fade" id="dispatch-length-time-modal" tabindex="-1" aria-labelledby="dispatch-modal-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
</template>

<script>
export default {
  name: "ThereTable"
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

  .modal {
    .modal-header {
      .btn-close {
        margin: unset;
      }
      .modal-link {
        margin-right: 64px;
        text-decoration: none;
        @include font($uni, $light, 18px, 28.3px, $blue-link);
      }
    }
  }
}
</style>