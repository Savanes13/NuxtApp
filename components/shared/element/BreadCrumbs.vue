<script lang="ts" setup> 
interface IBreadCrumbItem {
  name: string
  path: string;
};

interface IBreadCrumbsProps {
  data: IBreadCrumbItem[];
};

const {
  data
} = defineProps<IBreadCrumbsProps>();
</script>

<template>
  <div class="bread-crumbs">
    <div 
      class="bread-crumbs__item"
      :class="{
        'bread-crumbs__item--last' : index === data.length - 1,
      }"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="name">
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        <div v-if="index !== data.length - 1" class="dot"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.bread-crumbs {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bread-crumbs__item {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 117%;
  a {
    color: color.$main_white;
    text-decoration: none;
  }
}

.bread-crumbs__item--last {
  a {
    color: #FFFFFF21 !important;
  }
}

.name {
  display: flex;
  align-items: center;
  gap: 8px; 
}

.dot {
  width: 3px;
  height: 3px;
  border-radius: 50px;
  background: color.$main_blue;
  margin: 0 10px;
}
</style>