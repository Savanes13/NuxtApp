<script lang="ts" setup>
import { navIcons } from '~/components/shared/icons/navIcons';


</script>

<template>
  <div class="layout">


    <div class="layout__navbar">

    <div class="navbar-contacts">
      <div class="navbar-contacts__item">
        <div>
          <span
            class="svg"
            v-html="navIcons['point']"
          ></span>
        </div>
        <div>
          <p>г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204</p>
        </div>
      </div>
    </div>

    <div class="navbar-body">

    </div>

    </div>



    <div class="layout__slot">
      <slot></slot>
    </div>

    <div class="layout__footer">
      fdfdfd
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.layout__navbar {

}

.navbar-contacts {

}

.navbar-contacts__item {
  display: flex;
  align-items: center;
  gap: 3px;
  color: color.$main_white;
}


.layout__slot {
  margin: 0px 135px;
}




.layout__footer {
  background: linear-gradient(187.91deg, #090B1A 10.06%, #060B17 90.18%);
}


.svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>