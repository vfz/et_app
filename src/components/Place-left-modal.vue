<template>
  <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
  <div class="modal fade place-left-modal" id="place-left-modal" tabindex="-1" aria-labelledby="place-left-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header justify-content-end">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-12">
                <h5 class="modal-title text-center">
                  Выберите место на схеме автобуса
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex flex-column flex-lg-row d-lg-inline-flex justify-content-center align-content-center">
                <div class="place-left-scheme d-flex align-items-center">
                  <div class="place-left-square active"></div>
                  <p class="place-left-description">Свободное место</p>
                </div>
                <div class="place-left-scheme d-flex align-items-center">
                  <div class="place-left-square deactivate"></div>
                  <p class="place-left-description">Занятое место</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="floor-header d-flex align-items-center">
                  <!-- TODO Проверить работу  Object.keys(myObject).length в старых браузерах -->
                  <div class="floor-item" 
                  :class="{ active : floor===1}"
                  v-on:click="floor=1"
                  >
                    1 этаж
                  </div>
                  <div class="floor-item" :class="{ active : floor===2}"
                  v-on:click="floor=2" v-if="floorsQ()"
                  >
                    2 этаж
                  </div>
                 <!-- <div class="floor-item" v-on:click="busMobile()">busMobile</div> -->
                </div>
                <div :class="!mobile ? 'bus-scheme' :  'bus-scheme-mobile'">
                  <table v-if="!mobile">
                    <!--TODO: подсветка выбранных мест-->
                    <tr v-for="(stroka,indexstr) in shemeDesktop[floor]" :key="indexstr">
                      <td v-for="(seat,index) in stroka.filter(seatt=> seatt.length >7)" :key="index"
                        :rowspan="seat.split('+')[1]" 
                        :colspan="seat.split('+')[2]"
                        align="center">
                        <div @click="getSelectedPlace(seat.split('+')[0],seat.split('+')[3].replace('_', ''))" :class="seat.split('+')[0]" :id="'seat_'+seat.split('+')[3].replace('_', '')">{{seat.split('+')[3].replace('_', '')}}</div>
                      </td>
                    </tr>
                  </table>
                  <!-- Таблица с автобусом для мобильных -->
                  <table v-else>
                    <!--TODO: подсветка выбранных мест-->
                    <tr v-for="(stroka,indexstrm) in shemeMobile[floor]" :key="indexstrm">
                      <td v-for="(seat,indexm) in stroka.filter(seatt=> seatt.length >7)" :key="indexm"
                        :colspan="seat.split('+')[1]" 
                        :rowspan="seat.split('+')[2]"
                        align="center">
                        <div :class="seat.split('+')[0]" :id="'seat_'+seat.split('+')[3].replace('_', '')">{{seat.split('+')[3].replace('_', '')}}</div>

                      </td>
                    </tr>
                  </table>
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
import {mapGetters,mapActions, mapState} from 'vuex'
import {flightsSelectedSeats} from "@/store/modules/flightsSelectedSeats";
export default {
  name: "Place-left-modal",
  props: ['mobile'],
  data(){
    return{
      floor:1,
      testFl:[],
      isSelected: false,
    }
  },
  computed: mapGetters(['busTriptId','shemeMobile','shemeDesktop']),
  ...mapState({
    peopleCount : state => state.flightsSelectedSeats.peopleCount,
    selectedCountPlace : state => state.flightsSelectedSeats.selectedCountPlace
  }),
  watch: {
    shemeDesktop() {

    }
  },
  mounted(){

  },
    methods: {
    ...mapActions([
      'updatebBusTriptId',
    ]),
    floorsQ(){
      if(this.mobile){
        //TODO: Добавить проверку есть ли второй этаж в текущем автобусе
      }
      
      return true
    },
    getSelectedPlace(classPlace,numberPlace) {
      if (classPlace === 'seat') {
        this.$store.commit('flightsSelectedSeats/setSelectedPlace',  numberPlace, )
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.modal {
  .modal-dialog {
    max-width: 1000px;
  }
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
    .place-left-scheme {
      @media screen and (max-width: 992px) {
        display: block;
        width: 100%;
      }
      .place-left-square {
        width: 32px;
        height: 32px;
        border-radius: 4px;
      }
      .active {
        background-color: $white;
        box-shadow: $regular-shadow;
        border: 1px solid #A3D7FF;
      }
      .deactivate {
        background-color: $deactivate;
        border: 1px solid $deactivate
      }
      .place-left-description {
        @include font($uni,$regular,14px,18.9px,$secondary);
        margin-left: 12px;
        margin-bottom: 0;
      }
    }
    .place-left-scheme:first-child {
      margin-right: 40px;
      @media screen and (max-width: 992px) {
        margin-bottom: 16px;
        margin-right: 0;
      }
    }

    .seat {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          margin-bottom: 6px;
          padding-top: 6px;
          background: #FFFFFF;
          /* Button / Inactive */
          border: 1px solid #A3D7FF;
          box-sizing: border-box;
          /* Shadow / Normal */
          box-shadow: 0 8px 12px rgba(161, 159, 255, 0.2);
          border-radius: 4px;
          font-family: $uni;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 19px;
          color: $black;//#B5BDDB;

    }
    .seat:hover {
        background: #A3D7FF;
        color: #ffffff;
        cursor: pointer;
    }
    .prohod {
          margin-right: 0;//10px;
          margin-bottom: 0;//6px;
          width: 0;//32px;
          height: 0;//32px;
    }
    .breakeseat {
          margin-right: 0;//10px;
          margin-bottom: 0;//6px;
          width: 0;//32px;
          height: 0;//32px;
    }
    .voditel {
        margin-right: 10px;
        margin-bottom: 6px;
        width: 32px;
        height: 32px;
        background: url("../../public/img/modal/driver.png") repeat-y;
        background-size: contain;
        
    }
    .text_floor_activ {
        font-family: $uni;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: #196EFF;
    }
    .busy-seat {
        background-color: #D8DADE;
        color: #B5BDDB;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        margin-bottom: 6px;
        padding-top: 6px;
        /* Button / Inactive */
        border: 1px solid #A3D7FF;
        box-sizing: border-box;
        /* Shadow / Normal */
        box-shadow: 0 8px 12px rgba(161, 159, 255, 0.2);
        border-radius: 4px;
        font-family: $uni;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
    }
    .active_seat {
      width: 32px;
      height: 32px;
      margin-right: 10px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #196EFF ;
      /* Button / Inactive */
      border: 1px solid #196EFF;
      box-sizing: border-box;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: $white;
    }
    .text_floor {
        font-family: $uni;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        cursor: pointer;
        color: #AFB7CD;
    }
    .tualet {
      height: 32px;
      width: 72px;
      margin-right: -5px;
      margin-left: -16px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #B5BDDB;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;

    }
    .lest {
      height: 32px;
      width: 72px;
      margin-right: -5px;
      margin-left: -16px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #B5BDDB;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
    }
    .lest_b {
      width: 76px;
      height: 72px;
      margin-right: 10px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #B5BDDB;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
    }
    .stol {
      height: 32px;
      width: 72px;
      margin-right: -5px;
      margin-left: -16px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #B5BDDB;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
    }
    .exit {
      height: 32px;
      width: 72px;
      margin-right: -5px;
      margin-left: -16px;
      margin-bottom: 6px;
      padding-top: 6px;
      background: #B5BDDB;
      border-radius: 4px;
      font-family: $uni;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
    }

   .bus-scheme {
    background-color: $white;
    border: 1px solid #B5BDDB;
    border-radius: 16px;
    padding: 16px;
    margin: auto;
    width: fit-content;
      
      .voditel{
        transform: rotate(90deg);
      }
      .tualet {
          transform: rotate(-90deg);
          margin-right: -10px;

          // margin-bottom: -32px;
      }
      .lest {
          transform: rotate(-90deg);
          // margin-bottom: -32px;
          margin-right: -10px;

      }
      .lest_b {
          transform: rotate(-90deg);
          // margin-bottom: -32px;
      }
      .stol {
          transform: rotate(-90deg);
          // margin-bottom: -32px;
          margin-right: -10px;
      }
      .exit {
          transform: rotate(-90deg);
          // margin-bottom: -32px;
          margin-right: -10px;
      }
      
    }
   .bus-scheme-mobile {
      background-color: $white;
      border: 1px solid #B5BDDB;
      border-radius: 16px;
      padding: 16px;
      margin: auto;
      width: fit-content;
    }
    .modal-title {
      @include font($uni, $bold, 36px, 48.6px, $base);
      margin-bottom: 32px;
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24.3px;
        margin-bottom: 24px;
      }
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