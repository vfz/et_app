<template>
<section class="payment-success-layout">
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h1 v-if="error===0" class="title-section text-center">
        Оплата успешно завершена
      </h1>
      <h1 v-else class="title-section text-center">
        {{ errorDescriptions }}
      </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <p v-if="error===0"  class="description-section text-center">
        Чек за покупку и билет, будут отправлены на указанную вами почту. Желаем Вам счастливого пути!
      </p>
      
    </div>
    <div class="col-lg-7" v-if="+orderId > 0">
                        <h1 class="title-h1">Заказ №{{orderId}}</h1>
                        <div class="return-tickets__info lost-found__info">
                            <p >
                              <span v-if="tickets.length===1" >Ссылка на ваш билет:</span>
                              <span v-else >Ссылки на ваши билеты:</span>
                              <br>
                              <span v-for="(tic, index) in tickets"  :key="index"><a target="_blank" :href="tic.url">Билет {{tic.ticket}}</a><br></span></p>

                        </div>           
                        
    </div>
    <div class="col-lg-7" v-else>
                        <h1 class="title-h1"></h1>
                        <div class="return-tickets__info lost-found__info">
                            <p >
                              <br>
                              <span v-for="(tic, index) in tickets"  :key="index"><a target="_blank" :href="tic.url">{{tic.ticket}}</a><br></span></p>

                        </div>           
                        
    </div>


  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <img class="image-section" alt="успешная оплата" src="/img/payment-success/payment-success.svg">
    </div>
  </div>
</div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Payment-success-layout",
  data() {
    return {
      orderId: 0,
      tickets:[],
      error:1,
      errorDescriptions:''
    };
  },
  async mounted() {
    let order = this.$route.query.orderId
    const config = {
        method: 'post',
        url : 'https://api.evrotrans.net/APIet/check_transaction.php',
        url_payment:'https://securepayments.sberbank.ru/payment/merchants/sbersafe_sberid/payment_ru.html?mdOrder=',
        data : {
          'orderId': order
      }
      }
      await axios.request(config)
          .then((response) =>{
           
            const mydata= response.data
            this.tickets=mydata.passengers
            this.orderId=mydata.orderId
            this.error=+mydata.Erorr
            this.errorDescriptions=mydata.Error_description
            console.log(mydata.orderId)
          })
          .catch((error) =>{
            
           //console.log(error)
          })

  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.payment-success-layout {
  .title-section {
    @include font($uni,$bold,20px,27px,$base);
    margin-bottom: 16px;
    @media (min-width: 992px) {
      font-size: 36px;
    }
  }
  .description-section {
    @include font($uni,$light,14px,18.9px,$base);
    margin-bottom: 40px;
    @media (min-width: 992px) {
      font-size: 18px;
    }
  }
  .image-section {
    @media (min-width: 992px) {
      width: 285px;
    }
  }
}
</style>