<template>
  <section class="thereTable-section-mobile">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="title-table">
            Туда <span class="title-table-counter">(3)</span>
          </h2>
        </div>
      </div>
      <div class="row gy-4">
        <div class="col-12 col-sm-6">
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
                      Осталось мест
                    </h3>
                    <div class="table-item-part-right-date">
                      <div class="arrival-time table-link" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                        24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary price" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                7 000₽
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="table-item active">
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
                      Осталось мест
                    </h3>
                    <div class="table-item-part-right-date">
                      <div class="arrival-time table-link" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                        24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid">
              <button class="btn btn-success price" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                Убрать
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
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
                      Осталось мест
                    </h3>
                    <div class="table-item-part-right-date">
                      <div class="arrival-time table-link" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                        24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary price" data-bs-toggle="modal" data-bs-target="#place-left-modal">
                7 000₽
              </button>
            </div>
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
  name: "ThereTableMobile",
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
.thereTable-section-mobile {
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
        &-date {
          .dispatch-time {
            @include font($uni,$bold,18px,24.3px,$base);
            margin-right: 8px;
          }
          .dispatch-time:hover {
            @include animation;
            color: $blue-link;
          }
          .dispatch-date {
            &-day, &-month, &-year {
              @include font($uni,$regular,12px,24.3px,$secondary)
            }
            &-day {
              margin-right: 4px;
            }
            &-month, &-year {
              font-size: 10px;
            }
          }
        }
        &-city {
          @include font($uni,$bold,14px,18.9px,$base);
        }
        &-place {
          @include font($uni, $light, 14px, 18.9px, $blue-link);
        }
      }
      &-right {
        &-title {
          @include font($uni,$regular,11px,14.85px,$base);
          margin-bottom: 10px;
        }
        &-date {
          .arrival-time {
            @include font($uni,$bold,18px,24.3px,$base);
            margin-right: 8px;
          }
          .arrival-time:hover {
            @include animation;
            color: $blue-link;
          }
          .arrival-date {
            &-day, &-month, &-year {
              @include font($uni,$regular,12px,24.3px,$secondary)
            }
            &-day {
              margin-right: 4px;
            }
            &-month, &-year {
              font-size: 10px;
            }
          }
        }
        &-city {
          @include font($uni,$bold,14px,18.9px,$base);
        }
        &-place {
          @include font($uni, $light, 14px, 18.9px, $blue-link);
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
}
</style>