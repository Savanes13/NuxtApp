<script lang="ts" setup>
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
          <div>
            <p>О компании</p>
          </div>
          <div>
            <p>Проекты</p>
          </div>
          <div>
            <div>
              <p>Каталог</p>
            </div>
            <span

            ></span>
          </div>
          <div>
            <p>Контакты</p>
          </div>
        </div>
        <div class="navbar-body__consultation">

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
  display: flex;
  padding: 0px 135px;
  justify-content: space-between;
  border: 1px solid #FFFFFF26;
  height: 42px;
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