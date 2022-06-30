<template>
<section class="contact-map-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="contact-map-wrapper">
          <div class="contact-map-info">
            <h1 class="title-section">
              Контакты
            </h1>
            <div class="contact-map-info-block">
              <h2 class="title-info">
                Адрес:
              </h2>
              <div class="address-info">
                <h3 class="title-address">
                  Главный офис:
                </h3>
                <p class="description-address">
                  355035, г. Ставрополь, ул. Старомарьевское шоссе, 32ж
                </p>
              </div>
              <div class="address-info">
                <h3 class="title-address">
                  Касса:
                </h3>
                <p class="description-address">
                  355008, г. Ставрополь, ул. проспект Карла Маркса, 1а
                </p>
              </div>
            </div>
            <div class="contact-map-info-block">
              <h2 class="title-info">
                Почта:
              </h2>
              <p class="description">
                info@evrotrans.net
              </p>
            </div>
            <div class="contact-map-info-block">
              <h2 class="title-info">
                Телефон:
              </h2>
              <a href="tel:88007002099">
                <p class="description">
                  8 (800) 700 – 20 – 99
                </p>
              </a>
            </div>
            <div class="contact-map-info-block">
              <h2 class="title-info">
                Время работы:
              </h2>
              <p class="description">
                Ежедневно, с 8:00 до 19:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="map" class="map"></div>
</section>
</template>

<script>
export default {
  name: "ContactMapMobile"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";
@import "../../../assets/font";

.contact-map-section {
  .contact-map-wrapper {
    margin-left: 88px;
    margin-right: 88px;
    @media screen and (max-width: 991px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    .contact-map-info {
      .title-section {
        @include font($uni,$bold,20px,27px,$base);
        margin-bottom: 24px;
      }
      &-block {
        margin-bottom: 32px;
        .title-info {
          @include font($uni,$bold,18px,24.3px,$base);
          margin-bottom: 12px;
        }
        .address-info {
          margin-bottom: 12px;
        }
        .address-info:last-child {
          margin-bottom: 0;
        }
        .title-address {
          @include font($uni,$regular,14px,18.9px,$secondary);
          margin-bottom: 8px;
        }
        .description-address, .description {
          @include font($uni,$light,14px,18.9px,$base);
          margin-bottom: 0;
        }
      }
    }
  }
  .map {
    margin-bottom: 40px;
  }
}
</style>