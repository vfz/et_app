<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <DataProfile/>
        </div>
        <div class="col-2">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import DataProfile from "@/components/DataProfile";
export default {
  name: "ProfileContent",
  components: {DataProfile, SectionTitle}
}
</script>

<style lang="scss" scoped>
.description-section {

}
</style>