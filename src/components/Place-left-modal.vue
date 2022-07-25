<template>
  <!--    для вызова модального окна нужно создать индивидуальный id, таким образом будет открываться свое окно-->
  <div class="modal fade place-left-modal" id="place-left-modal" tabindex="-1" aria-labelledby="place-left-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
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
              <div class="col-12 d-inline-flex justify-content-center align-content-center">

<!--                <div class="squares-place-status d-flex flex-wrap align-items-center justify-content-center">-->
<!--                  <div v-for="(value, key) in seatStates" class="square-place-status-item d-flex">-->
<!--                    <div v-bind:class="value.class + ' square-place-status'"></div>-->
<!--                    <div class="square-place-text d-flex align-items-center">-->
<!--                      {{value.text}}-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

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
                  v-on:click="floor=2" v-if="Object.keys(mergeFlights.find(trip => trip.id_trip===busTriptId).bus_config).length===2"
                  >
                    2 этаж
                  </div>
                 <div class="floor-item" v-on:click="busMobile()">busMobile</div>
                </div>
                <div :class="!mobileButoon ? 'bus-scheme' :  'bus-scheme-mobile'">
                  <table v-if="!mobileButoon">
                    <!--TODO подсветка выбранных мест-->
                    <tr v-for="(stroka,indexstr) in mergeFlights.find(trip => trip.id_trip===busTriptId).bus_config[floor]" :key="indexstr">
                      <td v-for="(seat,index) in stroka" :key="index"
                        :rowspan="seat.split('+')[1]" 
                        :colspan="seat.split('+')[2]" 
                        align="center">
                        <div :class="seat.split('+')[0]" :id="'seat_'+seat.split('+')[3].replace('_', '')">{{seat.split('+')[3].replace('_', '')}}</div>

                      </td>
                    </tr>
                  </table>
                  <table v-else>
                    <!--TODO подсветка выбранных мест-->
                    <tr v-for="(stroka,indexstrm) in shemeMobile[floor]" :key="indexstrm">
                      <td v-for="(seat,indexm) in stroka" :key="indexm"
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
import {mapGetters,mapActions} from 'vuex'
export default {
   name: "Place-left-modal",
  props: ['flightType'],
  data(){
    return{
      floor:1,
      shemeMobile:{},
      mobileButoon:false
    }
  },
  computed: mapGetters(['busTriptId','mergeFlights',]),
  mounted(){
    
  },
    methods: {
    ...mapActions([
      'updatebBusTriptId',
    ]),
    busMobile(){

        const floors=this.mergeFlights.find(trip => trip.id_trip===this.busTriptId).bus_config

        let  strMObile={...floors}
        Object.keys(floors).map(fl =>{
          
          let floorObject={
                ...floors[fl][1].reverse()
              }
          //console.log(strMObile)
          for (let i=2; i<=5; i++)
          {
            let floorObject1={
                ...floors[fl][i].reverse()
              }
            
            for(var key in floorObject1){
                // console.log(floorObject1[key].split('+')[1]+' это ')
                // console.log(typeof floorObject1[key].split('+')[1])
                // if(floorObject1[key].split('+')[1]==+2){
                //   floorObject1.unshift('prohod+1+1+_')
                //   console.log('Добавили проход')
                // }
                if(floorObject.hasOwnProperty(key)===true){ 
                    
                    floorObject[key]=[].concat(floorObject[key],floorObject1[key]);
                } 
            }
            
              // console.log(floorObject)
          }

          strMObile[fl]=floorObject
             
          this.shemeMobile=strMObile
          
        })
        this.mobileButoon=!this.mobileButoon
    }
  }
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
    margin: auto;
    width: fit-content;
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
          /* identical to box height */
          /* Text / Инпут */
          color: #B5BDDB;
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .seat:hover {
          background: #A3D7FF;
          color: #ffffff;
          cursor: pointer;
      }
      .tualet {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .lest {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
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
          transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .stol {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .exit {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .prohod {
          margin-right: 10px;
          margin-bottom: 6px;
          width: 32px;
          height: 32px;
      }
      .voditel {
          margin-right: 10px;
          margin-bottom: 6px;
          width: 32px;
          height: 32px;
          background: url("/img/modal/driver.png") repeat-y;
          background-size: contain;
          transform: rotate(90deg);
      }
      .text_floor_activ {
          font-family: $uni;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 27px;
          /*cursor: pointer;
            identical to box height */
          /* Text / Неактивный */
          color: #196EFF;
      }
      .busy-seat {
          background-color: $secondary;
          color: $white;
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
      .text_floor {
          font-family: $uni;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 27px;
          cursor: pointer;
          /* identical to box height */
          /* Text / Неактивный */
          color: #AFB7CD;
      }
    }
   .bus-scheme-mobile {
    background-color: $white;
    border: 1px solid #B5BDDB;
    border-radius: 16px;
    padding: 16px;
    margin: auto;
    width: fit-content;
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
          /* identical to box height */
          /* Text / Инпут */
          color: #B5BDDB;
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .seat:hover {
          background: #A3D7FF;
          color: #ffffff;
          cursor: pointer;
      }
      .tualet {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          // transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .lest {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          // transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
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
          // transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .stol {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          // transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .exit {
          height: 32px;
          width: 72px;
          margin-right: -10px;
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
          // transform: rotate(-90deg);
          text-align: center;
          color: #FFFFFF;
          /* identical to box height */
          /* Text / Инпут 
            color: #B5BDDB;*/
          /* text-align: center;
            white-space: nowrap;
            vertical-align: middle;*/
      }
      .prohod {
          margin-right: 10px;
          margin-bottom: 6px;
          width: 32px;
          height: 32px;
      }
      .voditel {
          margin-right: 10px;
          margin-bottom: 6px;
          width: 32px;
          height: 32px;
          background: url("/img/modal/driver.png") repeat-y;
          background-size: contain;
          // transform: rotate(90deg);
      }
      .text_floor_activ {
          font-family: $uni;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 27px;
          /*cursor: pointer;
            identical to box height */
          /* Text / Неактивный */
          color: #196EFF;
      }
      .busy-seat {
          background-color: $secondary;
          color: $white;
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
      .text_floor {
          font-family: $uni;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 27px;
          cursor: pointer;
          /* identical to box height */
          /* Text / Неактивный */
          color: #AFB7CD;
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