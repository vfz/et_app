<template>
<div class="body-app-white">
  <Header/>
  <ProfileContent/>
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileContent from "@/components/ProfileContent";
export default {
  name: "Profile",
  components: {Footer, Header, ProfileContent}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.body-app-white {
  background-color: $bg-app-light;
}
.footer {
  margin-top: 72px;
}
</style>