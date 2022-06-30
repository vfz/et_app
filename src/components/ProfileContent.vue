<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <ProfileData/>
        </div>
        <div class="col-2">
          <ProfileAvatar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import ProfileData from "@/components/ProfileData";
import ProfileAvatar from "@/components/ProfileAvatar";
export default {
  name: "ProfileContent",
  components: {ProfileAvatar, ProfileData, SectionTitle}
}
</script>

<style lang="scss" scoped>
.description-section {

}
</style>