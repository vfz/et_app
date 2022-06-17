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
        <div class="col-12 col-lg-8 col-xl-9">
          <form>
            <PassengersInfo/>
            <BuyerInfo/>
            <BaggageRules/>
            <TicketInfo/>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PassengersFormInfoMobile"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.passengers-form-info-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 16px;
  }
  .title-section-description {
    @include font($uni,$light,18px,24.3px,$base);
    margin-bottom: 40px;
  }
}
</style>