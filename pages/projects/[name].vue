<script lang="ts" setup>
import BreadCrumbs from '~/components/shared/element/BreadCrumbs.vue';
import { getProjectData } from '~/api/pages/project/apiProject';

const route = useRoute();
const slug = route.params.name as string;

const getProjectDataArr = async () => {
  try {
    if(!slug) return;
    const response = await getProjectData(slug);
  } catch (error) {
    console.log('ошибка при получении данных продукта', error);
  };
};
getProjectDataArr();

const breadCrumb = [
  {
    name: "Главная",
    path: "/"
  },
  {
    name: "Проекты",
    path: "/"
  },
  {
    name: "Проекты",
    path: "/"
  },
];
</script>

<template>
  <div class="project-page">
    <BreadCrumbs
      :data="breadCrumb"
    />
  </div>
</template>

<style lang="scss" scoped> 

</style>