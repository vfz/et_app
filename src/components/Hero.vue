<template>
    <section class="hero">
    <Header/>
      <FlightForm v-if="!isMobile()"/>
</section>
</template>

<script>
import Header from '@/components/Header'
import DataPicker from '@/components/DataPicker'
import FlightForm from "@/components/Flight-form"
//import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'


export default{ 
    name: 'Hero',
    components:{FlightForm, Header, DataPicker,},
    computed: mapGetters(['fromStations','toStations','from','to','childrens','adults','dateArival','dateBack','selectDate','selectDateBack']),
    data(){
        return{
            title: 'Доступные билеты на автобус от перевозчика',
            oneWay: true,
            pba: true,
            pbc: true,
            mba: false,
            mbc: false,
            toPlace:'',
            fromPlace:'',
            fromPlaceV:false,
            toPlaceV:false,
            temp:'',
            tomorrow: new Date(new Date())
           
        }

    },
    //Директива для того чтобы при работе в мобильной версии отрабатывался поиск остановочных пунктов, 
    // сразу после ввода символа а не после нажатия на Enter
    directives: {
        mmodel: {
        bind: function(el, binding, vnode) {
            el.oninput = () => (vnode.context[binding.expression] = el.value)
        }
    }
    },
    methods: {
        ...mapActions([
            'getFromStations',
            'getToStations',
            'UpdateselectDate',
            'UpdateselectDateBack',
            'selectDateFalse',
            'SetDate',
            'SetDateBack',
            'SetDateArival',
            'setFrom',
            'setTo',
            'castling',
            'PlusAdult',
            'MinusAdult',
            'PlusChild',
            'MinusChild'
            ]),
            
        search(str,target){
            //Вариант поиска ЗАВИСИМЫЙ от регистра
            //return str.indexOf(target)+1
            //Вариант поиска НЕзависимый от регистра
            return str.toLowerCase().indexOf(target.toLowerCase())+1
        },
        alertPlace(){
            alert('Едем в '+this.toPlace+' Едем из '+this.fromPlace)
        },
        //Переключение кнопок в полях кол-ва пассажиров в Desabled Enabled
        changeClass() {
            if (this.adults >= 7) {
                this.pba = false;
            } else {
                this.pba = true;
            }
            if (this.childrens >= 5) {
                this.pbc = false;
            } else {
                this.pbc = true;
            }

            if (this.adults > 1) {
                this.mba = true;
            } else {
                this.mba = false;
            }
            if (this.childrens > 0) {
                this.mbc = true;
            } else {
                this.mbc = false;
            }
        },
        isMobile() {
          return screen.width <= 768;
        }

    },
    mounted(){
        this.getFromStations();
        this.getToStations();
        
    },
    

    // created(){
    //     document.addEventListener('click', this.selectDateFalse.bind(this));
    // }
}
//console.log(this.fromStations);
</script>


<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.hero {
  background: url("/img/header/bg.jpg") no-repeat center center ;
  background-size: cover;
  padding-bottom: 99px;
  &-content {
    
    .form-header {
      margin-left: 88px;
      margin-right: 88px;
      @media screen and (max-width: 767px) {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
    .search-form {
      .checkbox-form {
        margin-bottom: 33px;
        .form-check-label {
          font-family: $uni;
          font-weight: $bold;
          font-size: 18px;
          margin-left: 24px;
          color: $white;
        }
      }
      .card:first-child {
        &-body {
          position: relative;
        }
      }
      .card:nth-child(2) {
        &-body {
          position: relative;
          z-index: 9998;
        }
      }
      .card {
        border-radius: .85rem;  
        &-body {
          .form-label {
            font-family: $uni;
            font-weight: $regular;
            font-size: 18px;
            color: $black;
          }
          .form-control {
            padding-left: 0;
            padding-right: 0;
            font-family: $uni;
            font-weight: $bold;
            font-size: 18px;
            color: $base;
            border: none;
            outline: none !important;
            
          }
           input:-ms-input-placeholder{
                font-weight: normal;
                font-style: normal;
                font-family: $uniBook;
            }
            input::-webkit-input-placeholder{
                font-weight: normal;
                font-style: normal;
                font-family: $uniBook;
            }
            input::-moz-placeholder{
                font-weight: normal;
                font-style: normal;
                font-family: $uniBook;
            }
            input:-moz-placeholder{
                font-weight: normal;
                font-style: normal;
                font-family: $uniBook;
            }
          .count-passenger {
            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
            input[type=number] {
              -moz-appearance: textfield;
            }
            
            .form-control {
              width: 20px;
            }
            .count-button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 5px;
              background-color: $blue-active;
              color: $white;
              border: 1px solid $blue-active;
              cursor: pointer;
            }
            .disabled {
              background-color: #F8FAFC;
              border: 1px solid #F8FAFC;
              color: #c0c0c0;
              cursor: auto;
            }
            
          }
          .card-example-date {
            cursor: pointer;
          }
        }
        .swiper-inputs {
          background-color: $blue-active;
          width: 64px;
          height: 64px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 30px;
          right: -46px;
          z-index: 999;
          cursor: pointer;
          @media screen and (max-width: 767px) {
            right: 0;
            bottom: -40px;
            transform: rotate(90deg);
          }
          &-icon {
            background: url("/img/hero/arrows.svg") no-repeat;
            width: 33px;
            height: 24px;
            
          }
        }
        .find-place{
            position: absolute;
            display: block;
            z-index: 998;
            left:0;
            width:100%;
            max-height: 100%;
            margin: 0;
            overflow-y: auto;
            //overflow-y: hidden;
            background: #F3F7FF;
            cursor: pointer;
            
            /* Shadow / Hover */
            :hover{
                background: #1399FF;
            }
            box-shadow: 0px 2px 4px rgba(161, 159, 255, 0.1);
            border-radius: 0px 0px 16px 16px;
            .meta{
                padding: 0 .7rem .4rem .7rem ;
            }
            .meta-end{
                padding: 0 .7rem .4rem .7rem ;
                border-radius: 0px 0px 16px 16px;
            }
            @media screen and (max-width: 767px) {
                z-index: 9999;
            }

        }
        
        .calendar-span{
            background: #FFF;
            border: 0px;
        }
        .select-date{
            position: absolute;
            display: block;
            z-index: 1051;
            right:0;
            width: 507px;
            //max-height: 364px;
            padding: .7rem;
            background: #FAFCFF;
            /* Shadow / Normal */
            box-shadow: 0px 8px 12px rgba(161, 159, 255, 0.2);
            border-radius: 16px;
            @media screen and (max-width: 767px) {
            width: 100%;
           
            }
            
        }
      }
      .btn {
        font-family: $uni;
        font-weight: $regular;
        font-size: 24px;
        padding: 23px 65px;
        border-radius: 15px;
        border: none;
        margin-top: 40px;
        color: $white;
        background-color: $blue-active;
      }
      .btn-disabled {
        background-color: #A3D7FF;
      }
      .mw-300{
        max-width: 300px;
        @media screen and (max-width: 1290px){
        max-width: 1200px;
        }
        @media screen and (max-width: 767px) {
        max-width: 767px;
        }
      }
       .min-w-300{
        min-width: 300px;
        
      }
    }
    
  }
}


</style>