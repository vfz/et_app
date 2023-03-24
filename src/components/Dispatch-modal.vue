<template>
  <div class="modal fade dispatch-modal" id="dispatch-modal" tabindex="-1" aria-labelledby="dispatch-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header justify-content-between">
          <h3 class="modal-title">{{ getModalTitle }}</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div
        v-show="getFlightType === 'there'|| getFlightType === 'back' " 
        class="modal-body">
          <yandex-map
            :coords="getCord"
            :zoom="16"
          >
             <ymap-marker 
              :coords="getCord" 
              marker-id="123"
              :icon="getIcon"
              marker-type="placemark"
              ></ymap-marker>
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import {mapGetters} from 'vuex'
export default {
  name: "Dispatch-modal",
  components: { yandexMap, ymapMarker },
  computed: mapGetters(['getCord','getIcon', 'getModalTitle', 'getFlightType'])
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.modal {
  .modal-body{
  width: 100%;
  height: 50vh;
}

.modal-title {
    @include font($uni,$bold, 24px, 32.4px, $black);
    &-counter {
      font-size: 18px;
      color: $secondary;
    }
  }

  .ymap-container {
  height: 100%;
}
  &-header {
    .btn-close {
      margin: unset;
    }
    .modal-link {
      margin-right: 64px;
      text-decoration: none;
      @include font($uni, $light, 18px, 28.3px, $blue-link);
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 18.9px;
        color: $blue-active;
      }
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