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
      <div class="footer-block">
        <div class="footer-block__logo">
          <span
            v-html="mainLogo['logo']"
          ></span>
        </div>
        <div class="name-company">
          <p>ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</p>
        </div>
        <div class="company-details">
          <div>
            <div class="company-details__item">
              <p><span>ИНН: </span>2463123719</p>
            </div>
            <div class="company-details__item">
              <p><span>КПП: </span>246301001</p>
            </div>
          </div>
          <div class="company-details__item">
            <p><span>ОГРН: </span>1212400008688</p>
          </div>
        </div>
      </div>
      <div class="footer-block">
        <div class="footer-block__company-title">
          <p>Компания</p>
        </div>
        <div class="footer-block__pages-items">
          <div>
            <p>О компании</p>
          </div>
          <div>
            <p>Проекты</p>
          </div>
          <div>
            <p>Каталог</p>
          </div>
          <div>
            <p>Контакты</p>
          </div>
        </div>
      </div>
      <div class="footer-block">
        <div class="footer-block__company-title">
          <p>Каталог</p>
        </div>
        <div class="footer-block__pages-items">
          <div>
            <p>КНС</p>
          </div>
          <div>
            <p>Ёмкости</p>
          </div>
          <div>
            <p>Ливневые очистные-сооружения</p>
          </div>
          <div>
            <p>Хозяйственно-бытовые очистные сооружения</p>
          </div>
          <div>
            <p>Комплектующие</p>
          </div>
        </div>
      </div>
      <div class="footer-block">
        
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.layout {
  display: flex;
  flex-direction: column;
min-height: 100dvh;
position: relative;
}

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
  flex: 0 0 auto;
  margin-top: auto;
  padding: 89px 135px;
  display: flex;
  justify-content: space-between;
}

.footer-block__logo {
  margin-bottom: 30px;
}

.name-company {
  color: color.$main_white;
  font-weight: 600;
  font-size: 14px;
  line-height: 141%;
  margin-bottom: 12px;
}

.company-details > div:first-child {
  display: flex;
  gap: 12px;
}

.company-details__item {
  color: color.$main_white;
  font-weight: 400;
  font-size: 14px;
  line-height: 164%;
}

.company-details__item span {
  font-weight: 500;
  font-size: 14px;
  line-height: 164%;
  color: #FFFFFF54;
}

.footer-block__company-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 141%;
  color: color.$main_white;
  margin-bottom: 20px;
}

.footer-block__pages-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 179px;
}

.footer-block__pages-items div {
  font-weight: 400;
  font-size: 16px;
  line-height: 141%;
  color: color.$main_white;
  cursor: pointer;
}


.svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>