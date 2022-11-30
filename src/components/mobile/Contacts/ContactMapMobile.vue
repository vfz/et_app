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
              <h2 class="title-info">ИП ЯЦУНОВ МАКСИМ СЕРГЕЕВИЧ</h2>
              <div class="address-info d-flex">
                <h3 class="title-address">
                  ИНН:
                </h3>
                <p class="description-address">
                  263410654670
                </p>
              </div>
              <div class="address-info d-flex">
                <h3 class="title-address">
                  ОГРН ИП:
                </h3>
                <p class="description-address">
                  316265100163732
                </p>
              </div>
            </div>
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
  <div id="mapMobile" class="mapMobile">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A925af31f9c09ee53d2bab03772075b968e64b2a235f466ab454485f53832734e&amp;source=constructor" width="100%" height="319" frameborder="0"></iframe>
  </div>
</section>
</template>

<script>
// import ymaps from 'ymaps';
export default {
  name: "ContactMapMobile",
  // mounted() {
  //   ymaps
  //       .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  //       .then(maps => {
  //         const map = new maps.Map('mapMobile', {
  //           center: [45.053047838422984,42.02102984715734],
  //           zoom: 13
  //         });
  //         const placemark1 = new maps.Placemark([45.05449907459323,42.03901749999995], {
  //           balloonContentHeader: 'Главный офис',
  //           balloonContentBody: '355035, г. Ставрополь, ул. Старомарьевское шоссе, 32ж',
  //           balloonContentFooter: ''
  //         }, {
  //           iconLayout: 'default#image',
  //           iconImageHref: '/img/icons/pin.svg',
  //           iconImageSize: [64,64],
  //           iconImageOffcet: [-30,0]
  //         });
  //         const placemark2 = new maps.Placemark([45.05553107459586,41.998844499999954], {
  //           balloonContentHeader: 'Касса',
  //           balloonContentBody: '355008, г. Ставрополь, ул. проспект Карла Маркса, 1а',
  //           balloonContentFooter: ''
  //         }, {
  //           iconLayout: 'default#image',
  //           iconImageHref: '/img/icons/pin.svg',
  //           iconImageSize: [64,64],
  //           iconImageOffcet: [-30,0]
  //         });
  //         map.geoObjects.add(placemark1);
  //         map.geoObjects.add(placemark2);
  //       })
  //       .catch(error => console.log('Failed to load Yandex Maps', error));
  // },
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
  .mapMobile {
    width: 100%;
    //height: 319px;
    margin-bottom: 40px;
  }
}
</style>