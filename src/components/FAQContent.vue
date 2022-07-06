<template>
<div class="faq-content-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-9 col-xl-9 col-xxl-7">
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
            <ul v-bind:class="{'d-none': isShowDetails}" class="list-group">
              <li class="list-group-item">
                <button v-on:click="showCollapse()" type="button">
                  Вопрос
                </button>
              </li>
            </ul>
            <div v-bind:class="{'d-none': isHideDetails}" class="faq-details">
              <div class="faq-details-header">
                <h3 class="faq-title">Вопрос</h3>
                <button v-on:click="showCollapse()" class="faq-back">Вернуться</button>
              </div>
              <div class="faq-details-body">
                <p class="faq-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 col-xl-3 col-xxl-5">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FAQContent",
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
  }
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
        text-transform: unset;
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