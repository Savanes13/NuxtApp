<script lang="ts" setup>
import DefaultButton from '~/components/shared/ui/button/DefaultButton.vue';

import { mainIcons } from '~/components/shared/icons/mainIcons';
import { mainLogo } from '~/components/shared/icons/mainLogo';
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
        <div class="navbar-contacts__item">
          <div>
            <span
              class="svg"
              v-html="navIcons['phone']"
            ></span>
          </div>
          <div>
            <p>+7 (391) 209 57-57</p>
          </div>
        </div>
        <div class="navbar-contacts__item">
          <div>
            <span
              class="svg"
              v-html="navIcons['phone']"
            ></span>
          </div>
          <div>
            <p>+7 (391) 215 54-33</p>
          </div>
        </div>
        <div class="navbar-contacts__item">
          <div>
            <span
              class="svg"
              v-html="navIcons['email']"
            ></span>
          </div>
          <div>
            <p>los-bio@mail.ru</p>
          </div>
        </div>
        <div class="navbar-contacts__item">
          <div>
            <span
              class="svg"
              v-html="navIcons['back']"
            ></span>
          </div>
          <div>
            <p>Заказать звонок</p>
          </div>
        </div>
      </div>

      <div class="navbar-body">
        <div class="navbar-body__logo">
          <span
            v-html="mainLogo['logo']"
          ></span>
        </div>
        <div class="navbar-body__items">
          <div class="page-item">
            <p>О компании</p>
          </div>
          <div class="page-item">
            <p>Проекты</p>
          </div>
          <div class="page-item">
            <div>
              <p>Каталог</p>
            </div>
            <span
              class="svg"
              v-html="mainIcons['arrowBottom']"
            ></span>
          </div>
          <div class="page-item">
            <p>Контакты</p>
          </div>
        </div>
        <div class="navbar-body__consultation">
          <DefaultButton>
            Получить КП
          </DefaultButton>
        </div>
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
  opacity: 50%;
  display: flex;
  padding: 0px 135px;
  justify-content: space-between;
  border: 1px solid #FFFFFF26;
  height: 42px;
}

.navbar-contacts__item {
  font-size: 13px;
  font-weight: 400;
  line-height: 141%;
  display: flex;
  align-items: center;
  gap: 3px;
  color: color.$main_white;
  cursor: pointer;
}

.navbar-body {
  display: flex;
  justify-content: space-between;
  padding: 0px 135px;
  align-items: center;
  height: 96px;
}

.navbar-body__items {
  display: flex;
  gap: 56px;
}

.navbar-body__consultation .button{
  width: 122px;
  height: 36px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 141%;
}

.page-item {
  display: flex;
  gap: 6px;
  font-weight: 400px;
  color: color.$main_white;

  font-size: 16px;
  line-height: 141%;
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