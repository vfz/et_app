<template>
<div class="row europoints-trips-history-section">
  <div class="col-12">
    <h2 class="title-section">
      История заказов
    </h2>
  </div>
  <div class="col-12">
    <div class="table-wrapper table-responsive">
      <table class="table align-middle">
        <thead>
        <tr>
          <th>
            Дата
          </th>
          <th>
            Маршрут
          </th>
          <th>
            Итого
          </th>
          <th>
            Использовано
          </th>
          <th>
            Получено
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
            <div class="amount-sum-trip">
              4 500₽
            </div>
          </td>
          <td>
            <div class="used-europoints-trip used">
              3 000
            </div>
          </td>
          <td>
            <div class="added-europoints-trip">
              +450
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="date-trip">
              25.10.2020
            </div>
          </td>
          <td>
            <div class="path-trip d-flex align-items-center">
              <div class="path-trip-start">
                Ставрополь
              </div>
              <ArrowPathIcon/>
              <div class="path-trip-end">
                Москва
              </div>
            </div>
          </td>
          <td>
            <div class="amount-sum-trip">
              8 500₽
            </div>
          </td>
          <td>
            <div class="used-europoints-trip">
              0
            </div>
          </td>
          <td>
            <div class="added-europoints-trip">
              +150
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="col-12">
    <div class="pagination">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon";
export default {
  name: "EuropointsTripsHistory",
  components: {ArrowPathIcon, CancelIcon, ArrowDownIcon},
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.europoints-trips-history-section {
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
  .table-wrapper {
    background-color: $white;
    border-radius: 0 16px 16px 16px;
    box-shadow: $regular-shadow;
    padding: 12px 0;
    white-space: nowrap;
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
            @media screen and (max-width: 1199px) {
              font-size: 11px;
              line-height: 14.85px;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            .path-trip {
              &-start, &-end {
                @include font($uni,$regular,18px,24.3px,$base);
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
            .used-europoints-trip {
              @include font($uni,$regular,18px,24.3px,$base);
            }
            .used {
              color: #EE5D5D;
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
    .footer-table {
      padding: 1rem 1rem;
      .details {
        button {
          background: none;
          outline: none;
          border: none;
          @include font($uni,$light,18px,24.3px,$blue-color);
          @media screen and (max-width: 1199px) {
            font-size: 13px;
            line-height: 17.55px;
          }
          svg {
            margin-left: 8px;
            @media screen and (max-width: 1199px) {
              width: 9px;
            }
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
  .pagination {
    margin-top: 18px;
    @media screen and (max-width: 991px) {
      margin-top: 16px;
    }
    .page-item {
      @include font($uni,$light,18px,24.3px,$deactivate);
      .page-link:focus {
        color: $secondary;
      }
    }
    .active {
      .page-link {
        background: none;
        box-shadow: none;
        @include font($uni,$regular,18px,24.3px,$secondary);
      }
    }
  }
}
</style>