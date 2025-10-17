<script lang="ts" setup>
interface IProjectitemProps {
  slug: string;
  index: number;
  customer: string;
  worksType: string;
  image: string;
  catalog: string
  title: string
};

const {
  slug,
  index,
  customer,
  worksType,
  image,
  catalog,
  title
} = defineProps<IProjectitemProps>();
</script>

<template>
  <NuxtLink :to="`projects/${slug}`">
    <div class="project-item">
      <div class="project-item__image">
        <img :src="`https://api.los-bio.ru/files/${catalog}/${image}`" alt="">
      </div>
      <div class="project-item__number">
        <p>Проект {{ index }}</p>
      </div>
      <div class="project-item__title">
        <p>{{ title }}</p>
      </div>
      <div class="works-type info-block">
        <p class="info-block__text-field"><span class="info-block__name-field">Тип работы: </span>{{ worksType }}</p>
      </div>
      <div class="customer info-block">
        <p class="info-block__text-field"><span class="info-block__name-field">Заказчик: </span>{{ customer }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;
@use "@/style/variables/transition.scss" as transition;

.project-item {
  width: 100%;
  height: 100%;
  padding: 38px;
  background: #1215237D;
  border: 1px solid;
  border-image-source: linear-gradient(171.41deg, rgba(255, 255, 255, 0.3) -0.7%, rgba(255, 255, 255, 0) 93.44%);
  border-radius: 19px;
  transition: background-color transition.$medium;
}

.project-item:hover {
  background: #21343a80;
} 

.project-item__image img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 37px;
}

.project-item__number {
  font-weight: 600;
  font-size: 24px;
  line-height: 117%;
  color: color.$main_white;
  margin-bottom: 28px;
}

.project-item__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 148%;
  color: #FFFFFFCC;
  margin-bottom: 17px;
}

.info-block {
  padding: 17px 0px;
  border-top: 1px solid #FFFFFF17
}

.info-block__name-field {
  font-weight: 500;
  font-size: 16px;
  line-height: 148%;
  color: #FFFFFF4A;
}

.info-block__text-field {
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  color: #FFFFFFCC;
}

@media (max-width: 991px) {
  .project-item {
    padding: 24px;
  }
}
</style>