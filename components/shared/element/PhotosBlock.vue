<script lang="ts" setup>
import DefaultButton from '../ui/button/DefaultButton.vue'
import { computed, ref } from 'vue'

interface IPhoto {
  id: number
  catalog: string
  name: string
  project_files?: Record<string, any>
}

const props = defineProps<{
  photos: IPhoto[];
}>();
const current = ref(0)
const photos = computed(() => props.photos || [])
const fileUrl = (p: IPhoto) => `https://api.los-bio.ru/files/${p.catalog}/${p.name}`
const mainPhoto = computed(() => photos.value[current.value])
const nextImage = () => {
  if (!photos.value.length) return
  current.value = (current.value + 1) % photos.value.length
}
</script>

<template>
  <div class="gallery">
    <div class="gallery__main">
      <img
        v-if="mainPhoto"
        :src="fileUrl(mainPhoto)"
        :alt="mainPhoto?.name || 'photo'"
        class="gallery__img"
        loading="lazy"
      />
      <div class="button-next" @click="nextImage">
        <DefaultButton>Следующее фото</DefaultButton>
      </div>
    </div>
    <div class="gallery__thumbs">
      <div
        v-for="(p, i) in photos"
        :key="p.id"
        class="thumb"
        :class="{ 'thumb--active': i === current }"
        @click="current = i"
      >
        <img :src="fileUrl(p)" :alt="p.name" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.gallery {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.gallery__main {
  position: relative;
  display: flex;
  justify-content: center;
}

.gallery__img {
  width: 100%;
  max-width: 900px;
  height: 480px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.button-next {
  position: absolute;
  bottom: 5px;
  right: 2px;
  z-index: 2;
}

.button-next .button {
  width: 156px;
  height: 36px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 141%;
}

.gallery__thumbs {
  display: flex;
  overflow-x: auto;
  padding-bottom: 6px;
}

.thumb {
  flex: 0 0 auto;
  width: 88px;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid black;
  border-top: 1px solid black;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb--active {
  border-color: color.$main_blue;
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
}

.thumb:active {
  transform: scale(0.98);
}
</style>
