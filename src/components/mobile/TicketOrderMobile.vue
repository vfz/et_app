<template>
  <div class="there-back-tabs-mobile-section">
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
export default {
  name: "TicketOrderMobile"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.there-back-tabs-mobile-section {
  margin-bottom: 40px;
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
          .amount {
            @include font($uni,$regular,18px,24.3px,$base);
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
          .europoints {
            @include font($uni,$light,13px,24.3px,$blue-color);
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