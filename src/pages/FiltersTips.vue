<template>
  <f7-page class="filter-tips" name="filter-tips">
    <f7-navbar>
      <a class="link" href="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
            class=""
          ></path>
        </svg>
        <p>Categorias</p>
      </a>
    </f7-navbar>
    <f7-block class="content-filter-tips">
      <div class="content-filter-tips-itens">
        <div class="content-input">
          <input type="search" name="input-search" v-on:input="updateFilter" value="" placeholder="Busque a categoria que deseja..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.004"
            height="26.079"
            viewBox="0 0 26.004 26.079"
          >
            <g transform="translate(-0.49 -0.001)">
              <path
                d="M26.166,22.409l-6.244-6.45c-.448-.463-1.007-.648-1.25-.411s-.8.05-1.251-.413l-.089-.093A9.352,9.352,0,1,0,15.719,16.7l.039.041c.447.463.613,1.028.369,1.264s-.078.8.371,1.263l6.241,6.453a1.167,1.167,0,0,0,1.649.027l1.751-1.695A1.168,1.168,0,0,0,26.166,22.409ZM14.439,13.949a6.464,6.464,0,1,1,0-9.141A6.472,6.472,0,0,1,14.439,13.949Z"
                fill="#4169E1"
              ></path>
            </g>
          </svg>
        </div>
        <div class="content-elements">
          <template v-for="(tip, index) in tips">
            <template v-if="!searchCategories || tip.name.toLowerCase().indexOf(searchCategories) !== -1">
              <a class="content-elements-links" :key="index" @click="routerPage(tip.id)">
                <div class="content-elements-links-banner" :style="{'background': 'url('+ tip.picture +')'}"></div>
                <div class="content-elements-links-text">
                  <p>{{ tip.name }}</p>
                </div>
              </a>
            </template>
          </template>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchCategories: null,
    };
  },
  computed: {
    ...mapGetters({
      tips: 'Tips/tips',
    }),
  },
  methods: {
    routerPage(tipId){
      this.$f7router.navigate({
        name: 'tips',
        params: { tipId: tipId },
      });
    },
    updateFilter(event) {
      this.searchCategories = event.target.value.toLowerCase();
    },
    contentScrolled(position) {
      var menuFooter = document.getElementById("menu-footer");
      if (position > 100) {
        menuFooter.classList.add("menu-footer-scrolled");
      } else {
        menuFooter.classList.remove("menu-footer-scrolled");
      }
    },
  },
  mounted() {
    this.$store.dispatch('Tips/consultTips');
    this.$f7.$(".page-content").on("scroll", target => {
      this.contentScrolled(target.srcElement.scrollTop);
    });
  }
};
</script>
<style lang="scss">
.filter-tips {
  background: #f8f8f8;
  .navbar {
    &-bg {
      // background: #104069;
      background: #4169E1;
    }
    a {
      padding-left: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 18px;
        font-family: "Font Medium";
        color: #fff;
        margin-bottom: 0;
        padding-left: 5px;
        padding-top: 5px;
      }
      svg {
        width: 25px;
        height: 25px;
        fill: #fff;
      }
    }
  }
}
.content-filter-tips {
  padding: 0;
  margin: 0;
  &-itens {
    .content-input {
      position: relative;
      background: #fff;
      margin-bottom: 30px;
      input {
        height: 50px;
        width: 100%;
        border: 1px solid hsla(0, 0%, 82%, 0.3);
        padding: 0px 50px 0px 20px;
        outline: none;
        font-size: 14px;
        font-family: 'Font Regular';
        color: #000;
      }
      svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .content-elements {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 20px;
      &-links {
        display: block;
        position: relative;
        height: 150px;
        width: calc(50% - 7.5px);
        margin-bottom: 15px;
        // transition: 500ms;
        &:hover,&:focus {
          cursor: pointer;
          opacity: 0.8;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: rgba(0,0,0,0.3);
          border-radius: 5px;
        }
        &:nth-child(odd){
          margin-right: 7.5px;
        }
        &:nth-child(even){
          margin-left: 7.5px;
        }
        @media (min-width: 768px){
          width: calc(25% - 11.5px);
          &:nth-child(2n){
            margin-right: 7.5px;
          }
          &:nth-child(3n){
            margin-left: 7.5px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        &-banner {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
          border-radius: 5px;
        }
        &-text {
          display: flex;
          align-items: center;
          text-align: center;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 2;
          p {
            position: relative;
            width: 100%;
            font-size: 20px;
            font-family: 'Font Light';
            color: #fff;
            padding: 7px 10px;
            text-shadow: 1px 1px 1px black;
            z-index: 1;
            line-height: 1.2;
            font-weight: normal;
            text-align: center;
            margin: 0px 10px;
            text-overflow: ellipsis;
            overflow: hidden;
            &::after {
              content: '';
              display: block;
              background: rgba(0, 0, 0, 0.3);
              height: 100%;
              width: 100%;
              position: absolute;
              left: 0;
              bottom: 0;
              border-radius: 10px;
              z-index: -1;
            }
          }
        }
      }
    }
  }
}
</style>