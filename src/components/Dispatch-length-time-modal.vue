<template>
  <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
  <div class="modal fade dispatch-length-time-modal" id="dispatch-length-time-modal" tabindex="-1" aria-labelledby="dispatch-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header justify-content-end">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6">
                <h5 class="modal-title">
                  Маршрут
                </h5>
                <div class="modal-date">
                  30 января
                </div>
                <div class="dispatch-timeline">
                  <ul class="timeline">
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Ставрополь</h5>
                      <p class="timeline-time">9:30</p>
                      <p class="timeline-place">
                        Агентство “Евротранс” (рядом с железнодорожным вокзалом), проспект Карла Маркса, дом 1А
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Московское</h5>
                      <p class="timeline-time">10:10</p>
                      <p class="timeline-place">
                        Московское (АС)
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Донское</h5>
                      <p class="timeline-time">10:30</p>
                      <p class="timeline-place">
                        Донское (АС)
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Безопасное</h5>
                      <p class="timeline-time">10:50</p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Ставрополь</h5>
                      <p class="timeline-time">9:30</p>
                      <p class="timeline-place">
                        Агентство “Евротранс” (рядом с железнодорожным вокзалом), проспект Карла Маркса, дом 1А
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Московское</h5>
                      <p class="timeline-time">10:10</p>
                      <p class="timeline-place">
                        Московское (АС)
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Донское</h5>
                      <p class="timeline-time">10:30</p>
                      <p class="timeline-place">
                        Донское (АС)
                      </p>
                    </li>
                    <li class="timeline-item mb-5">
                      <h5 class="timeline-city">Безопасное</h5>
                      <p class="timeline-time">10:50</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="dispatch-map h-100">
                  <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.ru/maps/?ll=39.794306%2C50.707218&mode=routes&rtext=55.755819%2C37.617644~45.043317%2C41.969110&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.618%252C55.756%26spn%3D0.642%252C0.466%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0~ymapsbm1%3A%2F%2Fgeo%3Fll%3D41.969%252C45.043%26spn%3D0.280%252C0.164%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A1%25D1%2582%25D0%25B0%25D0%25B2%25D1%2580%25D0%25BE%25D0%25BF%25D0%25BE%25D0%25BB%25D1%258C&utm_medium=mapframe&utm_source=maps&z=6.2" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUJ5PX4DA" width="100%" height="800" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
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
  name: "Dispatch-length-time-modal"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.modal {
  &-header {
    .btn-close {
      margin: unset;
    }
    .modal-link {
      margin-right: 64px;
      text-decoration: none;
      @include font($uni, $light, 18px, 28.3px, $blue-link);
    }
  }
  &-body {
    .square-place-status-item {
      .square-place-text {
        @include font($uni, $regular, 14px, normal, $secondary);
        margin-bottom: 0;
      }
      .square-place-status {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        box-shadow: $regular-shadow;
        margin-right: 12px;
      }
      .free-place {
        background-color: $white;
        border: 1px solid $blue-link;
      }
      .busy-place {
        background-color: $deactivate;
      }
    }
    .square-place-status-item:first-child {
      margin-right: 40px;
    }
    .floor-header {
      margin-top: 24px;
      margin-bottom: 24px;
      .floor-item {
        @include font($uni,$bold,20px,27px,$deactivate);
        cursor: pointer;
      }
      .floor-item:hover {
        @include animation;
        color: $blue-link;
        border-bottom: 2px solid $blue-link;
      }
      .active {
        color: $blue-active;
        border-bottom: 2px solid $blue-active;
      }
      .active:hover {
        color: $blue-active;
        border-bottom: 2px solid $blue-active;
      }
      .floor-item:first-child {
        margin-right: 32px;
      }
    }
    .bus-scheme {
      background-color: $white;
      border: 1px solid #B5BDDB;
      border-radius: 16px;
      padding: 16px;
      &-column {
        display: grid;
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 12px;
        grid-row-gap: 8px;
        &-item {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          box-shadow: $regular-shadow;
          display: flex;
          align-items: center;
          justify-content: center;
          @include font($uni,$regular,14px,18.9px,#B5BDDB);
          cursor: pointer;
        }
        .free-place {
          color: #B5BDDB;
          border: 1px solid $blue-link;
        }
        .free-place:hover {
          @include animation;
          background-color: $blue-link;
          color: $white;
          border: none;
        }
        .selected {
          background-color: $blue-active;
          color: $white;
          border: none;
        }
        .busy-place {
          background-color: $secondary;
          color: $white;
          border: none;
        }
      }
    }
    .modal-title {
      @include font($uni, $bold, 36px, 48.6px, $base);
      margin-bottom: 32px;
    }
    .modal-date {
      @include font($uni, $bold, 20px, 27px, $secondary);
      margin-bottom: 16px;
    }
    .dispatch-map {
      iframe {
        border-radius: 16px;
      }
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .dispatch-timeline::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .dispatch-timeline {
      max-height: 600px;
      overflow-y: auto;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      padding-left: 0.5rem;
      padding-bottom: var(--mask-height);
      /* The CSS mask */

      /* The content mask is a linear gradient from top to bottom */
      --mask-image-content: linear-gradient(
              to bottom,
              transparent,
              black var(--mask-height),
              black calc(100% - var(--mask-height)),
              transparent
      );

      /* Here we scale the content gradient to the width of the container
    minus the scrollbar width. The height is the full container height */
      --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

      /* The scrollbar mask is a black pixel */
      --mask-image-scrollbar: linear-gradient(black, black);

      /* The width of our black pixel is the width of the scrollbar.
    The height is the full container height */
      --mask-size-scrollbar: var(--scrollbar-width) 100%;

      /* Apply the mask image and mask size variables */
      mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
      mask-size: var(--mask-size-content), var(--mask-size-scrollbar);

      /* Position the content gradient in the top left, and the
    scroll gradient in the top right */
      mask-position: 0 0, 100% 0;

      /* We don't repeat our mask images */
      mask-repeat: no-repeat, no-repeat;
      .timeline {
        border-left: 1px dotted $blue-link;
        position: relative;
        list-style: none;
      }

      .timeline-item {
        .timeline-city, .timeline-time {
          @include font($uni, $bold, 20px, 27px, $base);
          margin-bottom: 8px;
        }
        .timeline-place {
          @include font($uni, $regular, 20px, 24.3px, #b5bddb);
        }
      }

      .timeline .timeline-item {
        position: relative;
      }

      .timeline .timeline-item:after {
        position: absolute;
        display: block;
        top: 0;
      }

      .timeline .timeline-item:after {
        background-color: $blue-active;
        left: -38px;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        content: "";
      }
    }
  }
}
</style>