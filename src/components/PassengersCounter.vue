<template>
    <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <label class="form-label">Пассажиры</label>
                <div class="d-none d-lg-block help-icon-block-desktop">
                    <img class="help-icon" alt="help" src="../../public/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
                </div>
            </div>
            <div class="d-flex justify-content-between">
            <div class="count-passenger d-flex align-items-center flex-wrap">
                <div 
                    id="minus-button-adult" 
                    class="minus-button count-button" 
                    :class=" { disabled : !mba } " 
                    v-on:click="removePassenger(true);changeClass();">-</div>
                <input 
                    v-model="getAdultsCount" 
                    min="1" 
                    max="7" 
                                     
                    type="number" 
                    class="form-control text-center one-way-inputs-input shadow-none"  
                    placeholder="0">
                <div 
                    id="plus-button-adult" 
                    class="plus-button count-button" 
                    :class=" { disabled : !pba } " 
                    v-on:click="addPassenger(true);changeClass();">+</div>
                <span class="card-desc d-block w-100">Взрослых</span>
            </div>
            <div class="count-passenger d-flex align-items-center flex-wrap">
                <div 
                    id="minus-button-childeren" 
                    class="minus-button count-button" 
                    :class=" { disabled : !mbc } " 
                    v-on:click="removePassenger(false);changeClass();">-</div>
                <input 
                    v-model="getChildrensCount"  
                    min="0" 
                    max="5"                  
                    
                    type="number" 
                    class="form-control text-center one-way-inputs-input shadow-none" 
                    placeholder="0">
                <div id="plus-button-childeren" class="plus-button count-button" :class=" { disabled : !pbc } " v-on:click="addPassenger(false);changeClass();">+</div>
                <span class="card-desc d-block w-100">Детских</span>
            </div>
            <div class="d-block d-lg-none help-icon-block-mobile">
                <img class="help-icon" alt="help" src="../../public/img/hero/help.svg" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" >
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    name: "PassengersCounter",
    computed: mapGetters(
        [
        'getPassengers',
        'getAdultsCount',
        'getChildrensCount'

        ]),
    data(){
        return{
            pba: true,
            pbc: true,
            mba: false,
            mbc: false,
        }
    },
    methods: {
        ...mapActions([
        'addPassenger',
        'removePassenger'
        ]),
    
        //Переключение кнопок в полях кол-ва пассажиров в Desabled Enabled
        changeClass() {
            if (this.getAdultsCount >= 7) {
                this.pba = false;
            } else {
                this.pba = true;
            }
            // дети
            if (this.getChildrensCount >= 5) {
                this.pbc = false;
            } else {
                this.pbc = true;
            }

            if (this.getAdultsCount > 1) {
                this.mba = true;
            } else {
                this.mba = false;
            }
            // Дети
            if (this.getChildrensCount > 0) {
                this.mbc = true;
            } else {
                this.mbc = false;
            }
        }
  }
}
</script>

<style lang="scss" scoped>

</style>