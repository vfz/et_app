<template>
<div class="faq-content-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="europoints-tab" data-bs-toggle="tab" data-bs-target="#europoints" type="button" role="tab" aria-controls="europoints" aria-selected="true">Евробаллы</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="ticket-refund-tab" data-bs-toggle="tab" data-bs-target="#ticket-refund" type="button" role="tab" aria-controls="ticket-refund" aria-selected="false">Возврат билета</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="path-schedule-tab" data-bs-toggle="tab" data-bs-target="#path-schedule" type="button" role="tab" aria-controls="path-schedule" aria-selected="false">Маршруты и расписание</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="bagage-tab" data-bs-toggle="tab" data-bs-target="#bagage" type="button" role="tab" aria-controls="bagage" aria-selected="false">Багаж</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="europoints" role="tabpanel" aria-labelledby="europoints-tab">
            <ul class="list-group">
              <li class="list-group-item">
                <button type="button">
                  Вопрос
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FAQContent"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.faq-content-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .nav {
    &-item {
      .nav-link {
        @include font($uni,$bold,24px,32.4px,$deactivate);
        padding-left: 10px;
        padding-right: 10px;
      }
      .active {
        color: $blue-active;
        border-bottom: 1px solid $blue-active;
      }
    }
  }
  .tab-content {
    margin-top: 38px;
    .tab-pane {
      .list-group {
        &-item {
          @include font($uni,$bold,20px,27px,$base);
          background: none;
          border: none;
          padding-left: 0;
          padding-bottom: 16px;
          border-radius: 0;
          border-bottom: 1px solid #E1EEF6;
          button {
            @include font($uni,$bold,20px,27px,$base);
            border: none;
            background: none;
            padding: 0;
          }
          button:hover {
            @include animation;
            color: $blue-active;
          }
        }
      }
    }
  }
}

</style>