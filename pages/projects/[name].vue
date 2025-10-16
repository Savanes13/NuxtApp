<script lang="ts" setup>
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
</script>

<template>
  <div class="project-page">
    
  </div>
</template>

<style lang="scss" scoped> 

</style>