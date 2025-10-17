<script lang="ts" setup>
import AdvantagesBlock from '~/components/shared/element/AdvantagesBlock.vue';
import MainSlider from '~/components/shared/element/MainSlider.vue';
import Projectitem from '~/components/shared/element/Projectitem.vue';
import { getAdvantageData, getProjectsData, getSliderData } from '~/api/pages/index/apiIndex';
import type { TAdvantagesArray } from '~/types/pages/index/typesIndex';
import type { TSlidesArray } from '~/types/pages/index/typesIndex';

const dataSliderArray = ref<TSlidesArray | null>(null);
const dataAdvantagesArray = ref<TAdvantagesArray | null>(null);
// Типизировать
const dataProjectsArray = ref<any | null>(null);

const getAdvantages = async () => {
  try {
    const response = await getAdvantageData();
    const advantages = response.map((item: any) => ({
      id: item.id,
      name: item.name,
      ...JSON.parse(item.value)
    }));
    dataAdvantagesArray.value = advantages;
    console.log(advantages)
  } catch (error) {
    console.log("ошибка при получении преимуществ", error);
  };
};
getAdvantages();

const getSlider = async () => {
  try {
     const response = await getSliderData();
    const slides = response.map((item: any) => ({
      id: item.id,
      name: item.name,
      ...JSON.parse(item.value)
    }));
    dataSliderArray.value = slides;
    console.log(slides)
  } catch (error) {
    console.log("ошибка при получении слайдера", error);
  };
};
getSlider();

const getProject = async () => {
  try {
    const response = await getProjectsData();
    dataProjectsArray.value = response;
  } catch (error) {
    console.log("ошибка при получении проектов", error);
  };
};
getProject();
</script>

<template>
  <div 
    class="index-page"
    v-if="dataAdvantagesArray && dataSliderArray && dataProjectsArray"
  >
    <div class="index-page__slider-block">
      <MainSlider
        :data="dataSliderArray"
      />
    </div>
    <div class="index-page__advantages-block">
      <div class="title-advantages">
        <p>Наши преимущества</p>
      </div>
      <div class="items-advantages">
        <AdvantagesBlock
          v-for="item in dataAdvantagesArray"
          :key="item.id"
          :image="item.icon"
          :title="item.title"
          :text="item.description"
        />
      </div>
    </div>
    <div class="index-page__projects-block">
      <div class="title-projects">
        <p>Проекты</p>
      </div>
      <div class="items-projects">
        <Projectitem
          v-for="project in dataProjectsArray"
          :key="project.id"
          :index="project.id"
          :image="project.photos[0].name"
          :catalog="project.photos[0].catalog"
          :customer="project.customer"
          :title="project.title"
          :works-type="project.works"
          :slug="project.slug"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.index-page__slider-block {
  margin-top: 80px;
  margin-bottom: 147px;
}

.index-page__advantages-block {
  margin-bottom: 147px;
}

.title-advantages {
  font-weight: 700;
  font-size: 42px;
  line-height: 97%;
  color: color.$main_white;
  margin-bottom: 80px;
}

.items-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.items-projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.title-projects {
  font-weight: 700;
  font-size: 42px;
  line-height: 97%;
  margin-bottom: 90px;
  color: color.$main_white;
}

:global(.swiper-pagination-bullet) {
  width: 18px;
  height: 18px;
  background: #FFFFFF0D;
}

:global(.swiper-pagination-bullet-active) {
  width: 18px;
  height: 18px;
  background: color.$main_blue;
}

@media (max-width: 1200px) {
  .items-projects {
    grid-template-columns: repeat(2, 1fr);
  }

  .index-page__advantages-block {
    margin-bottom: 80px;
  }

  .index-page__slider-block {
    margin-top: 50px;
    margin-bottom: 80px;
  }
}

@media (max-width: 991px) {
  .title-advantages {
    margin-bottom: 40px;
    font-size: 34px;
  }

  .title-projects {
    margin-bottom: 40px;
    font-size: 34px;
  }

  .items-advantages {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
}

@media (max-width: 550px) {
  .items-projects[data-v-02281a80] {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 375px) {
  .index-page__advantages-block {
    margin-bottom: 40px;
  }

  .index-page__slider-block {
    margin-top: 24px;
    margin-bottom: 40px;
  }

  .title-advantages {
    margin-bottom: 24px;
    font-size: 22px;
  }

  .title-projects {
    margin-bottom: 24px;
    font-size: 22px;
  }
}
</style>