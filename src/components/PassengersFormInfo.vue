<template>
<section class="passengers-form-info-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="title-section">
          Данные пассажиров
        </h2>
        <p class="title-section-description">
          Заполните ниже данные, для оформления билета
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <form>
          <div class="row">
            <div class="col-12">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="passenger-1-tab" data-bs-toggle="tab" data-bs-target="#passenger-1" type="button" role="tab" aria-controls="passenger-1" aria-selected="true">Туда</button>
                  <button class="nav-link" id="passenger-2-tab" data-bs-toggle="tab" data-bs-target="#passenger-2" type="button" role="tab" aria-controls="passenger-2" aria-selected="false">Обратно</button>
                </div>
              </nav>
              <div class="tab-content position-relative" id="nav-tabContent">
                <div class="tab-pane fade show active" id="passenger-1" role="tabpanel" aria-labelledby="passenger-1-tab">
                  <div class="form-wrapper">
                    <div class="row">
                      <div class="col-12">
                        <div class="checkbox-form d-block w-100">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                          </div>
                          <div class="d-inline-block">
                            <button type="button" class="cancel-button">
                              Убрать
                              <CancelIcon/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="passenger-2" role="tabpanel" aria-labelledby="passenger-2-tab">
                  <div class="form-wrapper">
                    хай
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6"></div>
            <div class="col-6"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import CancelIcon from "@/components/icons/CancelIcon";
export default {
  name: "PassengersFormInfo",
  components: {CancelIcon}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
  }
  .nav-tabs {
    position: relative;
    z-index: 1;
    .nav-link {
      @include font($uni,$bold,24px,32.4px,$base);
      text-transform: unset;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
    }
    .active {
      border-color: unset;
      border-bottom: none;
      box-shadow: $regular-shadow;
    }
  }
  .tab-content {
    position: relative;
    z-index: 2;
    .cancel-button {
      background: none;
      border: none;
      @include font($uni,$light,18px,24.3px,$blue-link);
      &-icon {

      }
    }
  }
  .form-wrapper {
    background-color: $white;
    border-radius: 0 16px 16px 16px;
    box-shadow: $regular-shadow;
    padding: 35px 29px;
  }
}
</style>