<template>
  <div>
  <Hero/>
  <Populardirections/>
  <Registrationhero/>
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
import Populardirections from '@/components/Populardirections'
import Registrationhero from '@/components/Registrationhero'

export default {
  name: 'Home',
  components: {
    Hero,Footer,Populardirections,Registrationhero,LoginModal,RegistrationModal,ForgotPasswordModal
  }
}
</script>
