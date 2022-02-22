<template>
    <section class="hero">
    <Header/>
    <div class="hero-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="title-page text-center">
                        {{title}}
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2 class="title-section text-center">
                        Куда поедем?
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form id="hero-form" class="search-form d-flex flex-wrap justify-content-center">
                        <div class="checkbox-form d-block w-100 text-center">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-on:click="oneWay=true" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                                <label class="form-check-label" for="inlineRadio1">В одну сторону</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-on:click="oneWay=false"  name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">Туда-обратно</label>
                            </div>
                        </div>
                        <!--one-way-input-->
                        <div class="one-way-inputs w-100 form-header" v-if="oneWay">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="dataListFrom" class="form-label">Откуда</label>
                                            <input class="form-control one-way-inputs-input shadow-none" 
                                            @focus="fromPlaceV=true" 
                                            v-mmodel="fromPlace"
                                            v-model="fromPlace"
                                            placeholder="Введите название населенного пункта" 
                                            style="padding-left: 7pt;">
                                            <div class="find-place" v-if="fromPlace  && !from || fromPlaceV">
                                                <div class="meta" 
                                                v-for="pointFrom in fromStations" :key="pointFrom.id_from" 
                                                v-show="search(pointFrom.name,fromPlace)"
                                                v-on:click="setFrom(pointFrom.id_from);fromPlaceV=false;fromPlace=pointFrom.name"
                                                >
                                                    <div class="title">{{pointFrom.name}}</div>
                                                    <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointFrom.address}}</div>
                                                </div> 
                                            </div>
                                            <span class="card-example">
                                                Например:
                                                <span id="city-example-from" class="card-example-date city-example-from text-decoration-underline"
                                                v-on:click="setFrom('1');fromPlaceV=false;fromPlace='Ставрополь'"
                                                >Ставрополь</span>
                                            </span>
                                        
                                            <div id="swiper-inputs" class="swiper-inputs" v-on:click="castling();temp = fromPlace;fromPlace = toPlace;toPlace = temp;">
                                                <div class="swiper-inputs-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-md-0 col-md-6 col-lg-6 col-xl min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="datalistTo" class="form-label">Куда</label>
                                            <input class="form-control one-way-inputs-input shadow-none"
                                            @focus="toPlaceV=true" 
                                            v-model="toPlace" 
                                            v-mmodel="toPlace"
                                            placeholder="Введите название населенного пункта" style="padding-left: 7pt;">
                                            <div class="find-place" v-if="toPlace && !to || toPlaceV ">
                                                <div class="meta" 
                                                v-for="pointTo in toStations" :key="pointTo.id_to" 
                                                v-show="search(pointTo.name,toPlace)"
                                                v-on:click="setTo(pointTo.id_to);toPlaceV=false;toPlace=pointTo.name">
                                                    <div class="title">{{pointTo.name}}</div>
                                                    <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointTo.address}}</div>
                                                </div> 
                                            </div>
                                            <span class="card-example">
                                                Например:
                                                <span id="city-example-to" class="card-example-date city-example-to text-decoration-underline"
                                                v-on:click="setTo('190');toPlaceV=false;toPlace='Москва'">Москва</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-xl-0 col-md-6 col-lg-6 col-xl mw-300 min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label class="form-label">Пассажиры</label>
                                                <img class="help-icon" alt="help" src="img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
                                            </div>
                                            <div class="row">
                                                    <div class="col">
                                                        <div class="count-passenger d-flex align-items-center justify-content-between flex-wrap">
                                                            <div id="minus-button-adult" class="minus-button count-button" :class=" { disabled : !mba } " v-on:click="MinusAdult();changeClass()">-</div>
                                                            <input value="1" min="1" max="7" name="adults" v-model="adults" type="number" class="form-control one-way-inputs-input shadow-none"  placeholder="0">
                                                            <div id="plus-button-adult" class="plus-button count-button" :class=" { disabled : !pba } " v-on:click="PlusAdult();changeClass()">+</div>
                                                            <span class="card-desc d-block w-100">Взрослых</span>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="count-passenger d-flex align-items-center justify-content-between flex-wrap">
                                                            <div id="minus-button-childeren" class="minus-button count-button" :class=" { disabled : !mbc } " v-on:click="MinusChild();changeClass()">-</div>
                                                            <input value="0" min="0" max="5" name="childrens" v-model="childrens" type="number" class="form-control one-way-inputs-input shadow-none" placeholder="0">
                                                            <div id="plus-button-childeren" class="plus-button count-button" :class=" { disabled : !pbc } " v-on:click="PlusChild();changeClass()">+</div>
                                                            <span class="card-desc d-block w-100">Детских</span>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-xl-0 col-md-6 col-lg-6 col-xl mw-300 min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="datepickerinputStart" class="form-label">Когда</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату" 
                                                v-model="dateArival"
                                                @focus="UpdateselectDate()" 
                                                >
                                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="img/hero/calendar.svg"></span>
                                            </div>
                                            <div class="select-date" v-if="selectDate">
                                                <DataPicker/>
                                            </div>
                                            <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                v-on:click="UpdateselectDate();SetDate(new Date().toLocaleDateString());UpdateselectDate()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                 v-on:click="UpdateselectDate();SetDate(new Date().toLocaleDateString(), 1);UpdateselectDate()">Завтра</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex justify-content-center align-items-center">
                                    <button id="submit-button" type="button" class="btn" v-on:click="alertPlace()">
                                        Найти билеты
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- two-way-input-->
                        <div class="two-ways-inputs w-100 form-header" v-else>
                            <div class="row flex-wrap">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="dataListFrom" class="form-label">Откуда</label>
                                            <input class="form-control one-way-inputs-input shadow-none" 
                                            @focus="fromPlaceV=true" 
                                            v-mmodel="fromPlace"
                                            v-model="fromPlace"
                                            placeholder="Введите название населенного пункта" 
                                            style="padding-left: 7pt;">
                                            <div class="find-place" v-if="fromPlace  && !from || fromPlaceV">
                                                <div class="meta" 
                                                v-for="pointFrom in fromStations" :key="pointFrom.id_from" 
                                                v-show="search(pointFrom.name,fromPlace)"
                                                v-on:click="setFrom(pointFrom.id_from);fromPlaceV=false;fromPlace=pointFrom.name"
                                                >
                                                    <div class="title">{{pointFrom.name}}</div>
                                                    <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointFrom.address}}</div>
                                                </div> 
                                            </div>
                                            <span class="card-example">
                                                Например:
                                                <span id="city-example-from" class="card-example-date city-example-from text-decoration-underline"
                                                v-on:click="setFrom('1');fromPlaceV=false;fromPlace='Ставрополь'"
                                                >Ставрополь</span>
                                            </span>
                                        
                                            <div id="swiper-inputs" class="swiper-inputs" v-on:click="castling();temp = fromPlace;fromPlace = toPlace;toPlace = temp;">
                                                <div class="swiper-inputs-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-md-0 col-md-6 col-lg-6 col-xl min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="datalistTo" class="form-label">Куда</label>
                                            <input class="form-control one-way-inputs-input shadow-none"
                                            @focus="toPlaceV=true" 
                                            v-model="toPlace" 
                                            v-mmodel="toPlace"
                                            placeholder="Введите название населенного пункта" style="padding-left: 7pt;">
                                            <div class="find-place" v-if="toPlace && !to || toPlaceV ">
                                                <div class="meta" 
                                                v-for="pointTo in toStations" :key="pointTo.id_to" 
                                                v-show="search(pointTo.name,toPlace)"
                                                v-on:click="setTo(pointTo.id_to);toPlaceV=false;toPlace=pointTo.name">
                                                    <div class="title">{{pointTo.name}}</div>
                                                    <div class="description" style="color:#ec0000;font-size:12px;font:bold">{{pointTo.address}}</div>
                                                </div> 
                                            </div>
                                            <span class="card-example">
                                                Например:
                                                <span id="city-example-to" class="card-example-date city-example-to text-decoration-underline"
                                                v-on:click="setTo('190');toPlaceV=false;toPlace='Москва'">Москва</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-md-0 col-md-4 col-lg-4 col-xl mw-300 min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label class="form-label">Пассажиры</label>
                                                <img class="help-icon" alt="help" src="img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
                                            </div>
                                            <div class="row">
                                                    <div class="col">
                                                        <div class="count-passenger d-flex align-items-center justify-content-between flex-wrap">
                                                            <div id="minus-button-adult" class="minus-button count-button" :class=" { disabled : !mba } " v-on:click="MinusAdult();changeClass()">-</div>
                                                            <input value="1" min="1" max="7" name="adults" v-model="adults" type="number" class="form-control one-way-inputs-input shadow-none"  placeholder="0">
                                                            <div id="plus-button-adult" class="plus-button count-button" :class=" { disabled : !pba } " v-on:click="PlusAdult();changeClass()">+</div>
                                                            <span class="card-desc d-block w-100">Взрослых</span>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="count-passenger d-flex align-items-center justify-content-between flex-wrap">
                                                            <div id="minus-button-childeren" class="minus-button count-button" :class=" { disabled : !mbc } " v-on:click="MinusChild();changeClass()">-</div>
                                                            <input value="0" min="0" max="5" name="childrens" v-model="childrens" type="number" class="form-control one-way-inputs-input shadow-none" placeholder="0">
                                                            <div id="plus-button-childeren" class="plus-button count-button" :class=" { disabled : !pbc } " v-on:click="PlusChild();changeClass()">+</div>
                                                            <span class="card-desc d-block w-100">Детских</span>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-xl-0 col-md-6 col-lg-6 col-xl mw-300 min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="datepickerinputStart" class="form-label">Когда</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату" 
                                                v-model="dateArival"
                                                @focus="UpdateselectDate()" 
                                                >
                                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDate()" ><img class="calendar-icon" alt="calendar" src="img/hero/calendar.svg"></span>
                                            </div>
                                            <div class="select-date" v-if="selectDate">
                                                <DataPicker/>
                                            </div>
                                            <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                v-on:click="SetDateArival(new Date().toLocaleDateString());UpdateselectDate()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                 v-on:click="SetDateArival(new Date().toLocaleDateString(), 1);UpdateselectDate()">Завтра</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 mt-4 mt-xl-0 col-md-6 col-lg-6 col-xl mw-300 min-w-300">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <label for="datepickerinputStart" class="form-label">Обратно</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control shadow-none dateStart one-way-inputs-input" placeholder="Выберите дату" 
                                                v-model="dateBack"
                                                @focus="UpdateselectDateBack()" 
                                                >
                                                <span class="input-group-text calendar-span" v-on:click="UpdateselectDateBack()" ><img class="calendar-icon" alt="calendar" src="img/hero/calendar.svg"></span>
                                            </div>
                                            <div class="select-date" v-if="selectDateBack">
                                                <DataPicker/>
                                            </div>
                                            <span class="card-example d-block w-100">
                                                <span id="today-date-toggle" class="card-example-date today-date-toggle text-decoration-underline"
                                                v-on:click="SetDateBack(new Date().toLocaleDateString());UpdateselectDateBack()">Сегодня</span>
                                                /
                                                <span id="tomorrow-date-toggle" class="card-example-date tomorrow-date-toggle text-decoration-underline"
                                                 v-on:click="SetDateBack(new Date().toLocaleDateString(), 1);UpdateselectDateBack()">Завтра</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex justify-content-center align-items-center">
                                    <button id="submit-button-twoWays" type="button" class="btn" v-on:click="alertPlace()">
                                        Найти билеты
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</section>
</template>

<script>
import Header from '@/components/Header'
import DataPicker from '@/components/DataPicker'
//import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default{ 
    name: 'Hero',
    components:{Header,DataPicker,},
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
            margin: 0;
           
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