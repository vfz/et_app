<template>
  <div>
  <Hero/>
  <!-- TODO добавить популярные рейсы -->
  <!-- <Populardirections/> -->
<!--    TODO добавить регистрацию-->
  <Registrationhero class="d-none"/>
  <Footer/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
  </div>
</template>

<script>

import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import LoginModal from '@/components/LoginModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'
import RegistrationModal from '@/components/RegistrationModal'
//TODO раскоментировать популярные рейсы
// import Populardirections from '@/components/Populardirections'
import Registrationhero from '@/components/Registrationhero'

export default {
  name: 'Home',
  components: {
    //TODO добавить популярные рейсы компонент
    Hero,Footer,Registrationhero,LoginModal,RegistrationModal,ForgotPasswordModal
  }
}
</script>
