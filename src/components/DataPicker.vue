<template>
    <div class="container p-1">
        <div class="row ">
            <div class="col-4 col-sm-4 text-end arrow-datapicker" v-on:click="decrease">
                <span>&LT;</span>
            </div>
            <div class="col-4 col-sm-4 text-center">
                <nobr>{{ monthes[month]}}</nobr> <br> {{ year }}
            </div>
            <div class="col-4 col-sm-4 text-start arrow-datapicker" v-on:click="increase">
                <span>&GT;</span>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col datapicker text-center" v-for="d in day" :key="d.key">
                {{ d }}
            </div>
        </div>
        <div class="row justify-content-end" v-for="week in calendar()" :key="week.key">

            <div class="col datapicker day text-center" v-for="day in week" :key="day.key">
                <div class="datapicker-cell"
                    v-on:click="changeUrlByDate(day.index + '.' + day.month + '.' + day.year); SetDate(day.index + '.' + day.month + '.' + day.year);"
                    :class="{
                        current: day.current,
                        selected: day.selected,
                        'not-active': filterPastDays(getToday(), day.index + '-' + day.month + '-' + day.year),
                        min: getMinimalPrice(day.price)
                    }">
                    <div>
                    </div>
                    <div class="fix"></div>
                    <div class="date">{{ day.indexm }}</div>
                    <div class="price" v-if="day.index">{{ day.price ? day.price + "₽" : '-' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment, { min } from 'moment'
export default {
    name: 'DataPicker',
    computed: mapGetters(['selectDate', 'selectDateBack', 'dateArival', 'dateBack', 'from', 'to', 'dateArivalPrices', 'dateBackPrices', 'oneWay']),
    data() {
        return {

            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            dFirstMonth: '1',
            day: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            monthes: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            date: new Date(),
        }
    },
    props: {
        whichWay: {
            type: String
        }
    },
    methods: {
        ...mapActions(['SetDate']),
        getMinimalPrice(dayPrice) {
            let allPricesCalendar = this.calendar().map(week => week.filter(day => day.price !== undefined))
            let arraysWeeksPrices = allPricesCalendar.map(week => week.map(day => day.price))
            let prices = [...new Set([].concat(...arraysWeeksPrices))]
            let numericPrices = prices.map(price => parseFloat(price))
            let minPrice = Math.min(...numericPrices)
            if (numericPrices.length !== 1 && parseFloat(dayPrice) === minPrice) {
                return true
            }
        },
        filterPastDays(today, dayForCheck) {
            if (!dayForCheck) {
                return false
            }
            else {
                return moment(dayForCheck, 'DD-MM-YYYY').isBefore(moment(today, 'DD-MM-YYYY'))
            }
        },
        getToday() {
            const today = new Date();
            const day = today.getDate().toString().padStart(2, "0");
            const month = (today.getMonth() + 1).toString().padStart(2, "0");
            const year = today.getFullYear().toString()
            const formattedDate = `${day}-${month}-${year}`;
            return formattedDate
        },
        changeUrlByDate(date) {
            if (this.oneWay) {
                this.$router.push('/flight-selection/search/' + this.from + '/' + this.to + '/' + date + '/' + this.oneWay)
            }
            if (this.whichWay === 'from') {
                this.$router.push('/flight-selection/search/' + this.from + '/' + this.to + '/' + date + '/' + this.dateBack + '/' + this.oneWay)
            }
            if (this.whichWay === 'to') {
                this.$router.push('/flight-selection/search/' + this.from + '/' + this.to + '/' + this.dateArival + '/' + date + '/' + this.oneWay)
            }
        },
        calendar: function () {
            var a = {};
            var days = [];
            var week = 0;
            days[week] = [];
            var dlast = new Date(this.year, this.month + 1, 0).getDate();

            const { 0: selectDay, 1: selectMonth, 2: selectYear } = this.dateArival.split('.');

            const { 0: selectDayBack, 1: selectMonthBack, 2: selectYearBack } = this.dateBack.split('.');


            for (let i = 1; i <= dlast; i++) {
                if (new Date(this.year, this.month, i).getDay() != 1) {
                    let printmonth = this.month + 1;

                    a = {
                        index: (i.toString().length === 1) ? '0' + i : i,
                        indexm: i,
                        month: (printmonth.toString().length === 1) ? '0' + printmonth : printmonth,
                        year: this.year
                    };
                    if (this.selectDate) {

                        let searchDate = a.year + '-' + a.month + '-' + a.index;
                        a.price = this.dateArivalPrices[searchDate];
                    } else {
                        let searchDate = a.year + '-' + a.month + '-' + a.index;
                        a.price = this.dateBackPrices[searchDate];
                    }

                    days[week].push(a);
                    if (i == new Date().getDate() && this.year == new Date().getFullYear() && this.month == new Date().getMonth()) {
                        a.current = '1';
                        if (this.selectDate) {
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateArivalPrices[searchDate];
                        } else {
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateBackPrices[searchDate];
                        }
                        a.selected = false;
                    };
                    if (new Date(this.year, this.month, i).getDay() == 6 || new Date(this.year, this.month, i).getDay() == 0) {
                        a.weekend = '1';
                        if (this.selectDate) {
                            // 2022-12-25
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateArivalPrices[searchDate];
                            //'≈ 1700';
                        } else {
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateBackPrices[searchDate];
                        }
                        a.selected = false;
                    };

                    if ((i == selectDay
                        && this.year == selectYear
                        && printmonth == +selectMonth
                        && this.selectDate) || (i == selectDayBack
                            && this.year == selectYearBack
                            && printmonth == +selectMonthBack
                            && this.selectDateBack)) {
                        a.selected = true;
                    };


                } else {
                    week++;
                    let printmonth = this.month + 1;
                    days[week] = [];
                    a = {
                        index: (i.toString().length === 1) ? '0' + i : i,
                        indexm: i,
                        month: (printmonth.toString().length === 1) ? '0' + printmonth : printmonth,
                        year: this.year
                    };
                    if (this.selectDate) {
                        // 2022-12-25
                        let searchDate = a.year + '-' + a.month + '-' + a.index;
                        a.price = this.dateArivalPrices[searchDate];
                        //'≈ 1700';
                    } else {
                        let searchDate = a.year + '-' + a.month + '-' + a.index;
                        a.price = this.dateBackPrices[searchDate];
                    }
                    days[week].push(a);
                    if ((i == new Date().getDate()) && (this.year == new Date().getFullYear()) && (this.month == new Date().getMonth())) {
                        a.current = '1';
                        if (this.selectDate) {
                            // 2022-12-25
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateArivalPrices[searchDate];
                            //'≈ 1700';
                        } else {
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateBackPrices[searchDate];
                        }
                        a.selected = false;
                    };
                    if (new Date(this.year, this.month, i).getDay() == 6 || new Date(this.year, this.month, i).getDay() == 0) {
                        a.weekend = '1';
                        if (this.selectDate) {
                            // 2022-12-25
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateArivalPrices[searchDate];
                            //'≈ 1700';
                        } else {
                            let searchDate = a.year + '-' + a.month + '-' + a.index;
                            a.price = this.dateBackPrices[searchDate];
                        }
                        a.selected = false;
                    };
                    if ((i == selectDay
                        && this.year == selectYear
                        && printmonth == +selectMonth
                        && this.selectDate) || (i == selectDayBack
                            && this.year == selectYearBack
                            && printmonth == +selectMonthBack
                            && this.selectDateBack)) {
                        a.selected = true;
                    };
                }

            }

            if (days[0].length > 0) {
                for (let i = days[0].length; i < 7; i++) {
                    days[0].unshift('');
                }
            }
            if (days[days.length - 1].length > 0) {
                for (let i = days[days.length - 1].length; i < 7; i++) {
                    days[days.length - 1].push('');
                }
            }
            this.dayChange;
            //console.log(days);
            return days;
        },
        decrease: function () {
            this.month--;
            if (this.month < 0) {
                this.month = 12;
                this.month--;
                this.year--;
            }

        },
        increase: function () {

            this.month++;
            if (this.month > 11) {
                this.month = -1;
                this.month++;
                this.year++;
            }
        },
    }
}

</script>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";


.arrow-datapicker {
    cursor: pointer;
}

.arrow-datapicker:hover {
    @include animation;
    color: $blue-active;
}


.datapicker {
    width: 61px !important;
    position: relative;
    font-family: $uni;
    font-style: normal;
    font-weight: normal;
    background: #FAFCFF;
    margin: .1em;
    padding: .1em;
    /* identical to box height */
    /* Text / Базовый */
    color: $base;

    :hover {
        background: #A3D7FF;
        box-sizing: border-box;
        font-weight: bold;
        color: #FFFFFF;
        border-radius: 4px;
    }
}

.datapicker-cell {
    cursor: pointer;
}

.day {
    .price {
        font-family: $uni;
        font-style: normal;
        font-weight: $light;
        font-size: 12px;
        line-height: 16px;
        margin: 0;
        padding: 0;

        @media screen and (max-width: 767px) {
            font-size: 10px;
            line-height: 14px;

        }
    }

    .date {
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 22px;

        @media screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 20px;

        }

    }
}

.current {

    background: #1399FF;
    border-radius: 4px;
    color: #FFFFFF;
}


.min {
    // background-color: $green;
    // TODO если что фон поменять
    //#00ea7a21
    border-radius: 4px;


    .fix {
        color: $white;
        position: absolute;
        left: 0;
        width: 7px !important;
        height: 7px !important;
        border-top: 1px solid #196EFF;
        border-left: 1px solid #196EFF;
        box-sizing: border-box;
        border-radius: 4px 0 0 0;
    }

    .price {

        color: $blue-active;
    }
}

.selected {
    // Уголок в вехней части ячейки
    background-color: #196EFF;
    border-radius: 4px;

    .date {
        color: $white;
    }

    .price {
        color: $white;
    }
}

.not-active {
    cursor: default !important;
    pointer-events: none;


    .date {
        color: $deactivate;
    }



    .price {
        color: $deactivate;
    }
}
</style>