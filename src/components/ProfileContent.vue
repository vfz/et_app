<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
    <form>
      <section class="profile-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10">
              <ProfileData/>
              <ProfileAutocomplete/>
            </div>
            <div class="col-2">
              <ProfileAvatar/>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import ProfileData from "@/components/ProfileData";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileAutocomplete from "@/components/ProfileAutocomplete";
export default {
  name: "ProfileContent",
  components: {ProfileAutocomplete, ProfileAvatar, ProfileData, SectionTitle}
}
</script>

<style lang="scss" scoped>
.profile-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>