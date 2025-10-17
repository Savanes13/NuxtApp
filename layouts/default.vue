<script lang="ts" setup>
import DefaultButton from '~/components/shared/ui/button/DefaultButton.vue';
import { mainIcons } from '~/components/shared/icons/mainIcons';
import { mainLogo } from '~/components/shared/icons/mainLogo';
import { navIcons } from '~/components/shared/icons/navIcons';

const openBurger = ref<boolean>(false);
const toggleBurger = () => {
  openBurger.value = !openBurger.value;
};
</script>

<template>
  <div class="layout">
    <div class="layout__navbar">
      <div class="navbar-contacts">
        <div class="navbar-contacts__item">
          <div>
            <span
              class="svg contacts-svg"
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
              class="svg contacts-svg"
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
              class="svg contacts-svg"
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
              class="svg contacts-svg"
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
              class="svg contacts-svg"
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
          <NuxtLink to="/">
            <span
              class="main-logo main-logo--desktop"
              v-html="mainLogo['logo']"
            ></span>
          </NuxtLink>
          <NuxtLink to="/">
            <span
              class="main-logo main-logo--mobile"
              v-html="mainLogo['smallLogo']"
            ></span>
          </NuxtLink>
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
        <div 
          class="burger__button"
          :class="{ open: openBurger }"
          @click="toggleBurger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <transition :name="'fade-slide'" mode="out-in">
        <div 
          class="navbar-burger"
          v-if="openBurger"
        >
          <div class="navbar-burger__items">
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
            <div class="navbar-burger__consultation">
              <DefaultButton>
                Получить КП
              </DefaultButton>
            </div>
          </div>
          
          <div class="navbar-burger__contacts">
            <div class="navbar-contacts__item navbar-contacts__item--address">
              <div>
                <span
                  class="svg contacts-svg"
                  v-html="navIcons['point']"
                ></span>
              </div>
              <div>
                <p>г. Красноярск</p>
              </div>
            </div>
            <div class="navbar-contacts__item">
              <div>
                <span
                  class="svg contacts-svg"
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
                  class="svg contacts-svg"
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
                  class="svg contacts-svg"
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
                  class="svg contacts-svg"
                  v-html="navIcons['back']"
                ></span>
              </div>
              <div>
                <p>Заказать звонок</p>
              </div>
            </div>
          </div>

        </div>
      </transition>

    </div>

    <div class="layout__slot">
      <slot></slot>
    </div>

    <div class="layout__footer">
      <div class="footer-block footer-block--logo-block">
        <div class="footer-block__logo">
          <NuxtLink to="/">
            <span
              class="main-logo main-logo--desktop"
              v-html="mainLogo['logo']"
            ></span>
          </NuxtLink>
          <NuxtLink to="/">
            <span
              class="main-logo main-logo--mobile"
              v-html="mainLogo['smallLogo']"
            ></span>
          </NuxtLink>
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
        <div class="footer-block__title">
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
        <div class="footer-block__title">
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
        <div class="footer-block__title">
          <p>Контакты</p>
        </div>
        <div class="footer-block__contacts">
          <div class="contacts-item">
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
          <div class="contacts-item">
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
          <div class="contacts-item contacts-item--dash">
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
          <div class="contacts-item contacts-item--dash">
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
        <div class="footer-button">
          <DefaultButton>
            Получить КП
          </DefaultButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;
@use "@/style/variables/transition.scss" as transition;

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
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

.footer-block__title {
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

.footer-block__contacts {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
}

.contacts-item {
  font-size: 14px;
  font-weight: 400;
  line-height: 141%;
  display: flex;
  align-items: center;
  gap: 3px;
  color: color.$main_white;
  cursor: pointer;
}

.contacts-item--dash div:nth-child(2){
  border-bottom: 1px solid color.$main_white;
}

.footer-button .button{
  width: 137px;
  height: 36px;
  border-radius: 4px;
}

.burger__button {
  position: relative;       
  display: none;                  
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #687a8080;
  cursor: pointer;
}

.burger__button span {
  position: absolute;             
  left: 15px;               
  right: 15px;
  height: 2px;
  border-radius: 2px;
  background: color.$main_blue;  
  transition: transform .3s ease, opacity .2s ease, top .3s ease;
}

.burger__button span:nth-child(1) { 
  top: 17px; 
}

.burger__button span:nth-child(2) { 
  top: 23px; 
}

.burger__button span:nth-child(3) { 
  left: 20px;     
  top: 29px; 
}

.burger__button.open span:nth-child(1) {
  top: 22.5px;
  transform: rotate(45deg);
}

.burger__button.open span:nth-child(2) {
  opacity: 0;
}

.burger__button.open span:nth-child(3) {
  left: 15px;
  top: 22.5px;
  transform: rotate(-45deg);
}

.main-logo--mobile {
  display: none;
}

.navbar-burger {
  display: none;
  position: absolute;
  background: linear-gradient(123.79deg, #00011A 22.27%, #0F0F0F 94.29%);
  width: 100%;
  padding: 16px;
  top: 64px;
  left: 0px;
  right: 0px;
  height: 260px;
  z-index: 10;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  -webkit-box-shadow: 1px 8px 16px 7px rgba(34, 60, 80, 0.28);
  -moz-box-shadow: 1px 8px 16px 7px rgba(34, 60, 80, 0.28);
  box-shadow: 1px 8px 16px 7px rgba(34, 60, 80, 0.28);
}

.navbar-burger__items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
}

.navbar-burger__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 30px;
}

.navbar-burger__consultation .button {
  margin-top: 14px;
  width: 160px;
  height: 40px;
  border-radius: 8px;
}

.svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity transition.$medium, transform transition.$medium, max-height transition.$medium;
  overflow: hidden;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-14px);
  max-height: 0;
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;        
}

@media (max-width: 1200px) {
  .layout__slot {
    margin: 0px 50px;
  }

  .navbar-body {
    padding: 0px 50px;
  }

  .navbar-contacts {
    padding: 0px 50px;
  }

  .layout__footer {
    padding: 89px 50px;
  }
  
  .navbar-body__items {
    gap: 24px;
  }
  
  .navbar-contacts__item {
    font-size: 11px;
  }
}

@media (max-width: 991px) {
  .page-item {
    font-size: 15px;
  }

  .navbar-body__consultation .button {
    width: 100px;
    height: 30px;
  }

  .navbar-contacts__item {
    font-size: 9px;
  }

  .contacts-svg ::v-deep svg {
    width: 16px;
    height: 16px;
  }

  .navbar-body {
    height: 76px;
  }

  .main-logo--desktop {
    display: none;
  }

  .main-logo--mobile {
    display: block;
  }
}

@media (max-width: 768px) {
  .layout__slot {
    margin: 0px 30px;
  }

  .navbar-body {
    padding: 0px 30px;
    border: 1px solid #FFFFFF26;
  }

  .navbar-contacts {
    padding: 0px 30px;
  }

  .layout__footer {
    padding: 70px 30px;
  }

  .navbar-contacts {
    display: none;
  }

  .navbar-body__consultation {
    display: none;
  }

  .navbar-body__items {
    display: none;
  }

  .burger__button  {
    display: block;
  }

  .navbar-burger {
    display: flex;
    justify-content: space-between;
  }

  .navbar-contacts__item {
    font-size: 16px;
  }

  .page-item {
    width: 120px;
    align-items: center;
    font-size: 20px;
  }

  .layout__footer {
    flex-direction: column;
  }

  .footer-block--logo-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .main-logo--mobile {
    margin-top: 24px;
  }

  .footer-block {
    margin-bottom: 12px;
  }

  .footer-block__title {
    margin-bottom: 8px
  }

  .footer-block__pages-items {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }

  .footer-block__contacts {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }
}

@media (max-width: 550px) {
  .footer-block--logo-block {
    flex-direction: column;
    align-items: start;
  }

  .footer-block__pages-items {
    flex-direction: column;
    gap: 4px;
  }

  .footer-block__contacts {
     flex-direction: column;
     gap: 6px;
  }

  .footer-block {
    margin-bottom: 20px;
  }
}

@media (max-width: 450px) {
  .page-item {
    font-size: 16px;
  }

  .navbar-burger__consultation .button {
    width: 120px;
    height: 30px;
  }

  .navbar-burger__items {
    padding-left: 10px;
  }

  .navbar-burger__contacts {
    padding-right: 10px;
  }

  .navbar-contacts__item {
    font-size: 14px;
  }

  .navbar-burger {
    height: 220px;
  }

  .navbar-body {
    padding: 0px 15px
  }
}

@media (max-width: 375px) {
  .layout__slot {
    margin: 0px 16px;
  }

  .navbar-body {
    padding: 0px 16px;
  }

  .navbar-contacts {
    padding: 0px 16px;
  }

  .layout__footer {
    padding: 30px 16px;
  }
}
</style>