<template>
  <div class="body-app-white">
    <Header/>
    <Timeline/>
    <FlightForm/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Timeline from "@/components/desktop/Timeline";
import FlightForm from "@/components/Flight-form";
import Footer from "@/components/Footer";
export default {
  name: "Ticket-booking",
  components: {Footer, FlightForm, Timeline, Header}
}
</script>

<style scoped>

</style>