<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
    <form>
      <section class="profile-section">
        <div class="container-fluid">
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-12 col-lg-9">
              <ProfileData/>
              <ProfileAutocomplete/>
              <button class="btn btn-primary" type="button">
                Сохранить
              </button>
            </div>
            <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start align-items-center">
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
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.profile-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
.btn {
  @include font($uni,$regular,24px,32.4px,$white);
  padding: 23px 84px;
  border-radius: 16px;
  margin-top: 40px;
}
</style>