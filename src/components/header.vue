<template>
  <div>
    <!-- Top Navbar -->
    <f7-navbar class="content-header" :sliding="false">
      <f7-nav-left v-if="user.loggedIn">
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          panel-open="left"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Dicas Úteis
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M240.06,454.34A32,32,0,0,0,245.42,472l17.1,25.69c5.23,7.91,17.17,14.28,26.64,14.28h61.7c9.47,0,21.41-6.37,26.64-14.28L394.59,472A37.47,37.47,0,0,0,400,454.34L400,416H240ZM319.45,0C217.44.31,144,83,144,176a175,175,0,0,0,43.56,115.78c16.52,18.85,42.36,58.22,52.21,91.44,0,.28.07.53.11.78H400.12c0-.25.07-.5.11-.78,9.85-33.22,35.69-72.59,52.21-91.44A175,175,0,0,0,496,176C496,78.63,416.91-.31,319.45,0ZM320,96a80.09,80.09,0,0,0-80,80,16,16,0,0,1-32,0A112.12,112.12,0,0,1,320,64a16,16,0,0,1,0,32ZM112,192a24,24,0,0,0-24-24H24a24,24,0,0,0,0,48H88A24,24,0,0,0,112,192Zm504-24H552a24,24,0,0,0,0,48h64a24,24,0,0,0,0-48ZM131.08,55.22l-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,1,0,24-41.56Zm457.26,264-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,0,0,24-41.56Zm-481.26-32-55.42,32a24,24,0,1,0,24,41.56l55.42-32a24,24,0,0,0-24-41.56ZM520.94,100a23.8,23.8,0,0,0,12-3.22l55.42-32a24,24,0,0,0-24-41.56l-55.42,32a24,24,0,0,0,12,44.78Z" class=""></path></svg>
      </f7-nav-title>
    </f7-navbar>
    <!------------------>
    <!---------------->
    <search />
    <!-- INPUT SEARCH -->
  </div>
</template>

<script>
import search from "./search.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    search,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>

<style lang="scss">
.content-header {
  position: fixed;
  top: 0;
  height: 56px;
  .navbar-bg {
    // background: #104069;
    background: #4169E1;
    &::before, &::after {
      content: none !important;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-left {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .icon-right {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
      margin-left: 10px;
    }
    svg {
      width: 28px;
      height: 28px;
      fill: #fff;
      margin-left: 10px;
    }
  }
  .material-icons {
    color: #fff;
  }
}
</style>