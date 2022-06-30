<template>
  <section class="contact-map-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="contact-map-wrapper position-relative">
            <div class="contact-map-info position-absolute">
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
            <div id="map" class="map">
<!--              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A925af31f9c09ee53d2bab03772075b968e64b2a235f466ab454485f53832734e&amp;source=constructor" width="100%" height="780" frameborder="0">-->
<!--                -->
<!--              </iframe>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ymaps from 'ymaps';
export default {
  name: "ContactMap",
  mounted() {
    ymaps
        .load()
        .then(maps => {
          const map = new maps.Map('map', {
            center: [45.05461442599661,42.007275479328975],
            zoom: 15
          });
          const placemark1 = new maps.Placemark([45.05449907459323,42.03901749999995], {
            balloonContentHeader: 'Главный офис',
            balloonContentBody: '355035, г. Ставрополь, ул. Старомарьевское шоссе, 32ж',
            balloonContentFooter: ''
          }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/pin.svg',
            iconImageSize: [64,64],
            iconImageOffcet: [-30,0]
          });
          const placemark2 = new maps.Placemark([45.05553107459586,41.998844499999954], {
            balloonContentHeader: 'Касса',
            balloonContentBody: '355008, г. Ставрополь, ул. проспект Карла Маркса, 1а',
            balloonContentFooter: ''
          }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/pin.svg',
            iconImageSize: [64,64],
            iconImageOffcet: [-30,0]
          });
          map.geoObjects.add(placemark1);
          map.geoObjects.add(placemark2);
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";
@import "../../../assets/font";
.contact-map-section {
  margin-bottom: 72px;
  .contact-map-wrapper {
    .contact-map-info {
      background-color: $white;
      box-shadow: $regular-shadow;
      border-top-right-radius: 88px;
      border-bottom-right-radius: 88px;
      height: 100%;
      padding: 50px 88px;
      z-index: 2;
      .title-section {
        @include font($uni,$bold,36px,48.6px,$base);
        margin-bottom: 40px;
      }
      &-block {
        margin-bottom: 32px;
        .title-info {
          @include font($uni,$bold,24px,48.6px,$base);
          margin-bottom: 16px;
        }
        .address-info {
          margin-bottom: 12px;
        }
        .address-info:last-child {
          margin-bottom: 0;
        }
        .title-address {
          @include font($uni,$regular,18px,24.3px,$secondary);
          margin-bottom: 8px;
        }
        .description-address, .description {
          @include font($uni,$light,18px,24.3px,$base);
          margin-bottom: 0;
        }
      }
    }
    .map {
      height: 780px;
      z-index: 1;
    }
  }
}
</style>