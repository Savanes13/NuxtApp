<script lang="ts" setup>
import BreadCrumbs from '~/components/shared/element/BreadCrumbs.vue';
import { getProjectData } from '~/api/pages/project/apiProject';

const route = useRoute();
const slug = route.params.name as string;
//типизировать
const dataProjectArray = ref<any | null>(null);

const breadCrumb = computed(() => [
  {
    name: 'Главная',
    path: '/'
  },
  {
    name: 'Проекты',
    path: '/'
  },
  {
    name: dataProjectArray.value?.customer || 'Загрузка...',
    path: `/projects/${slug}`
  }
]);

const getProjectDataArr = async () => {
  try {
    if(!slug) return;
    const response = await getProjectData(slug);
    dataProjectArray.value = response;
  } catch (error) {
    console.log('ошибка при получении данных продукта', error);
  };
};
getProjectDataArr();

</script>

<template>
  <div class="project-page">
    <BreadCrumbs
      class="bread-crumbs"
      :data="breadCrumb"
    />
    <div class="project-page__content">
      <div lang="info-block">

      </div>

      <div class="image-block">
        
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped> 
.bread-crumbs {
  margin-top: 13px;
  margin-bottom: 37px;
}
</style>