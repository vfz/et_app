<template>
  <div>
  <HeroLight/>
  <Footer/>
  <LoginModal/>
  <RegistrationModal/>
  <ForgotPasswordModal/>
  </div>
</template>

<script>

import HeroLight from '@/components/HeroLight'
import Footer from '@/components/Footer'
import LoginModal from '@/components/LoginModal'
import ForgotPasswordModal from '@/components/ForgotPasswordModal'
import RegistrationModal from '@/components/RegistrationModal'
import Populardirections from '@/components/Populardirections'

export default {
  name: 'Flight-selection',
  components: {
    HeroLight,Footer,LoginModal,RegistrationModal,ForgotPasswordModal
  }
}
</script>
<style scoped>

</style>