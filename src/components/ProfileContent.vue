<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
    <DataProfile/>
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