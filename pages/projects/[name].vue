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

        <div class="info-block__customer-selection">
          <div class="selection-title">
            <p>Почему клиенты выбирают ЛОС:</p>
          </div>
          <div class="selection-items">
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p>Срок службы <span>50 лет</span></p>
              </div>
            </div>
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p>Монтаж <span>за 1 день</span></p>
              </div>
            </div>
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p>Производительность <span>до 15 человек</span></p>
              </div>
            </div>
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p>Устойчивость <span>к залповым сбросам</span></p>
              </div>
            </div>
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p><span>Отказ </span>от ассенизационной машины</p>
              </div>
            </div>
            <div class="selection-items__item">
              <div class="circle"></div>
              <div>
                <p>Работает <span>при отключенной электроэнергии</span></p>
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

.selection-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFFCC;
  margin-bottom: 19px;
}

.selection-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.selection-items__item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: color.$main_white;
}

.selection-items__item span{
  font-weight: 700;
}

.circle {
  width: 12px;
  height: 12px;
  border: 2px solid color.$main_blue;
  border-radius: 50%;  
  background: transparent;
}
</style>