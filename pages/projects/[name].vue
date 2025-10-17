<script lang="ts" setup>
import BreadCrumbs from '~/components/shared/element/BreadCrumbs.vue';
import PhotosBlock from '~/components/shared/element/PhotosBlock.vue';
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
  <div
    class="project-page"
    v-if="dataProjectArray"
  >
    <BreadCrumbs
      class="bread-crumbs"
      :data="breadCrumb"
    />
    <div class="project-page__content">
      <div class="info-block">
        <div class="info-block__title"> 
          <p>{{ dataProjectArray.title }}</p>
        </div>

        <div class="info-block__descripton">
          <p>{{ dataProjectArray.equipment }}</p>
        </div>

        <div class="info-block__customer-selection">
          <div class="selection-title">
            <p>Почему клиенты выбирают ЛОС:</p>
          </div>
          <div class="selection-items">
            <div 
              class="selection-items__item"
              v-if="dataProjectArray?.short_description?.blocks?.length"
              v-for="item in dataProjectArray.short_description.blocks"
              :key="item.id"
            >
              <div class="circle"></div>
              <div>
                <p>{{ item.data.text }}</p>
              </div>
            </div>
          </div>
        </div>


        <div class="info-block__customer-selection">
          <div class="selection-title">
            <p>Также лос выбирают за:</p>
          </div>

          <div class="selection-items selection-items--advanced">
            <div class="selection-items__item-advanced">
              <div class="circle circle-number">1</div>
              <div class="advantages-сompany">
                <div class="advantages-сompany__title">
                  <p>ЭКОНОМИЧНОСТЬ</p>
                </div>
                <div class="advantages-сompany__text">
                  <p>Приобретая станцию у производителя, вы добьетесь максимальной экономии</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="image-block">
        <PhotosBlock
          :photos="dataProjectArray.photos"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped> 
@use "@/style/variables/color.scss" as color;

.bread-crumbs {
  margin-top: 13px;
  margin-bottom: 37px;
}

.project-page__content {
  display: flex;
  gap: 41px;
}

.info-block {
  flex: 60;
  background: #1215237D;
  border-radius: 19px;
  padding: 30px 40px 52px 40px;
  border: 1px solid #494b57;
}

.image-block {
  flex: 40;
}

.info-block__title {
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  color: color.$main_white;
  margin-bottom: 12px;
}

.info-block__descripton {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFFCC;
  margin-bottom: 24px
}

.info-block__customer-selection {
  margin-bottom: 24px;
}

.selection-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFFCC;
  margin-bottom: 19px;
  text-transform: uppercase;
}

.selection-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.selection-items__item {
  display: flex;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: color.$main_white;
}

.selection-items__item span{
  font-weight: 700;
}

.selection-items__item-advanced {
  display: flex;
  gap: 10px;
}

.advantages-сompany__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: color.$main_white;
}

.advantages-сompany__text {
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: color.$main_white;
}

.circle {
  flex: 0 0 12px;     
  width: 12px;
  height: 12px;
  border: 2px solid color.$main_blue;
  border-radius: 50%;  
  background: transparent;
  margin-top: 6px;
}

.circle-number {
  flex: 0 0 24px;     
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: color.$main_blue;
}
</style>