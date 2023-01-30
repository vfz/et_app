<template>
  <div
      class="col-12 col-sm-6">
    <div v-if="$route.name !== 'Ticket-booking'" class="table-item">
      <div class="table-item-content-wrapper">
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
<!--              <h3 class="table-item-part-right-title">-->
<!--                Отправление-->
<!--              </h3>-->
              <div class="table-item-part-left-city">
                Ставрополь
              </div>
              <div
                  class="table-item-part-left-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal">
                Проспект карла маркса
              </div>
              <div class="table-item-part-left-date d-flex">
                <div class="dispatch-time">
                  19:00
                </div>
                <div class="dispatch-date">
                  <span class="dispatch-date-day">29</span>
                  <span class="dispatch-date-month">Янв</span>
                  <span class="dispatch-date-year">23</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
<!--              <h3 class="table-item-part-right-title">-->
<!--                Прибытие-->
<!--              </h3>-->
              <div class="table-item-part-right-city">
                Москва
              </div>
              <div
                  class="table-item-part-right-place table-link"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatch-modal">
                Москва Киевское
              </div>
              <div class="table-item-part-right-date d-flex">
                <div class="arrival-time">
                  15:30
                </div>
                <div class="arrival-date">
                  <span class="arrival-date-day">30</span>
                  <span class="arrival-date-month">янв</span>
                  <span class="arrival-date-year">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="cross-line first-line">
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left time-length-trip-block d-flex justify-content-center align-content-center">
              <h3 class="table-item-part-left-title">
                Время в пути
              </h3>
              <div class="time-lenght-trip">
                <span>20 часов</span>
                <span>30 минут</span>
              </div>
            </div>
          </div>
        </div>
        <hr class="cross-line second-line">
        <div class="row">
          <div class="col-6">
            <div class="table-item-part-left">
              <button class="btn btn-primary btn-price">2000₽</button>
              <button class="btn btn-primary price disabled d-none">недостаточно мест :(</button>
            </div>
          </div>
          <div class="col-6">
            <div class="table-item-part-right">
              <h3 class="table-item-part-right-title">
                Осталось мест 20
              </h3>
              <div class="table-item-part-right-date">
                <div class="arrival-time table-link"
                     data-bs-toggle="modal"
                     data-bs-target="#place-left-modal"
                >
                  <span>место</span>
                  <span class="d-none">места</span>
                  <span>
                    1234
                  </span>
                </div>
                <div
                    class="table-link change-place">
                  изменить
                </div>
                <div class="place-left-count table-link d-none">
                  недостаточно мест :(
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightTableAnotherItemMobile"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.table-item {
  max-width: unset;
  box-shadow: $regular-shadow;
  border-radius: 8px;
  .first-line {
    margin-bottom: 0.3rem;
  }
  .second-line {
    margin-top: 0.3rem;
  }
  &-content-wrapper {
    padding: 16px;
  }
  &-part {
    .table-link {
      cursor: pointer;
    }
    &-left {
      .time-length-trip {
        @include font($uni,$bold,13px,17.55px,$base);
      }
      .time-length-trip:hover {
        @include animation;
        color: $blue-active;
      }
      &-title {
        @include font($uni,$regular,11px,14.85px,$base);
        margin-bottom: 0;
        margin-right: 20px;
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
            @include font($uni,$regular,12px,21.94px,$secondary)
          }
          &-month {
            font-size: 12px;
            line-height: 16.2px;
          }
          &-month, &-year {
            font-size: 10px;
            line-height: 13.5px;
          }
        }
      }
      &-city {
        @include font($uni,$bold,14px,18.9px,$base);
        margin-bottom: 3px;
      }
      &-place {
        @include font($uni, $light, 11px, 14.85px, $blue-active);
      }
    }
    &-right {
      &-title {
        @include font($uni,$regular,11px,14.85px,$base);
        margin-bottom: 4px;
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
            @include font($uni,$regular,12px,21.94px,$secondary)
          }
          &-month {
            font-size: 12px;
            line-height: 16.2px;
          }
          &-month, &-year {
            font-size: 10px;
            line-height: 13.5px;
          }
        }
        .place-left-count {
          @include font($uni,$bold,13px,17.55px,$base);
        }
      }
      &-city {
        @include font($uni,$bold,14px,18.9px,$base);
        margin-bottom: 3px;
      }
      &-place {
        @include font($uni, $light, 11px, 14.85px, $blue-active);
      }
    }
  }
  .btn {
    @include font($uni,$bold,16px,21.6px,$white);
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 0 0 8px 8px;
  }
  .disabled {
    background-color: $disabled;
    box-shadow: none;
  }
  .change-place {
    @include font($uni, $light, 11px, 14.85px, $blue-active);
  }
}
</style>