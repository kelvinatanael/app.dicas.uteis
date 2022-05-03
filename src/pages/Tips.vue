<template>
  <f7-page class="tips" name="tips" infinite :infinite-distance="50" :infinite-preloader="showPreloader" @infinite="loadMore">
    <f7-navbar id="navbar-tips">
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
        <p>{{ tip.name }}</p>
      </a>
    </f7-navbar>
    <f7-block class="content-tips">
      <div class="content-tips-itens">
        <div class="content-tips-itens-banner" :style="{'background': 'url('+ tip.picture +')'}">
          <div class="content-tips-itens-banner-text">
            <h1 class="title">{{ tip.name }}</h1>
          </div>
        </div>
        <div class="content-tips-itens-body">
          <div class="content-input">
            <input type="search" name="input-search" v-on:input="updateFilter" value="" placeholder="Busque pelo o título do conteúdo..." />
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
          <div class="content-elements infinite-scroll-content" v-if="tip.posts">
            <div class="row">
              <template v-for="(post, index) in items">
                <template v-if="!searchPosts || post.title.toLowerCase().indexOf(searchPosts) !== -1">
                  <div class="col-100 small-50 large-33 xlarge-25" :key="index">
                    <card-tips :tipsProps="post" :tipId="tip.id"/>
                  </div>
                </template>
              </template>
            </div>
          </div>
          <div class="content-not-default" v-else>
            <h2>Nenhuma postagem relacionada &#128543;</h2>
          </div>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss';
import CardTips from "@/components/card.vue";
import { mapGetters } from 'vuex';


export default {
  components: {
    Swiper,
    SwiperSlide,
    CardTips
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperTips: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        speed: 800,
        watchOverflow: true,
        clickable: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
			},
      searchPosts: null,
      items: {},
      allowInfinite: true,
      lastItem: 10,
      showPreloader: true,
    };
  },
  computed: {
    ...mapGetters({ tip: 'Tips/tipFilter'}),
  },
  methods: {
    contentScrolled(position) {
      var navbarTips = document.getElementById("navbar-tips");
      var menuFooter = document.getElementById("menu-footer");
      if (position > 190) {
        navbarTips.classList.add("navbar-scrolled");
        menuFooter.classList.add("menu-footer-scrolled");
      } else {
        navbarTips.classList.remove("navbar-scrolled");
        menuFooter.classList.remove("menu-footer-scrolled");
      }
    },
    updateFilter(event) {
      this.searchPosts = event.target.value.toLowerCase();
    },
    loadMore() {
      const self = this;
      if (!self.allowInfinite) return;
      self.allowInfinite = false;
      setTimeout(() => {
        if (self.items.length === Object.keys(self.tip.posts).length) {
          self.showPreloader = false;
          return;
        }
        const itemsLength = self.items.length;
        var numberPost = itemsLength + 10;
        // for (let i = 1; i <= 10; i += 1) {
        //   self.items.push(itemsLength + i);
        // }
        self.items = Object.values(self.tip.posts).reverse().slice(0, numberPost);
        self.allowInfinite = true;
      }, 1000);
    },
  },
  async mounted() {
    this.$f7.$(".page-content").on("scroll", target => {
      this.contentScrolled(target.srcElement.scrollTop);
    });
    await this.$store.dispatch('Tips/consultTipId', this.$f7route.params.tipId);
    this.items = Object.values(this.tip.posts).reverse().slice(0, 10);
  }
};
</script>
<style lang="scss">
.tips {
  background: #f8f8f8;
  .navbar {
    &-bg {
      background: 0;
      border: 0;
      transition: 500ms;
      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
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
        // text-shadow: 1px 1px 1px black;
        margin-bottom: 0;
        padding-left: 5px;
        padding-top: 5px;
        line-height: 1;
        opacity: 0;
        transition: 500ms;
      }
      svg {
        width: 25px;
        height: 25px;
        fill: #fff;
      }
    }
    &-scrolled {
      .navbar-bg {
        // background: #104069;
        background: #4169E1;
        box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
      }
      a p {
        opacity: 1;
      }
    }
  }
  .page-content {
    padding: 0;
  }
}
.content-tips {
  padding: 0;
  margin: 0;
  padding-bottom: 100px;
  &-itens {
    &-banner {
      position: relative;
      height: 250px;
      width: 100%;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.2);
      }
      &-text {
        position: absolute;
        bottom: 20px;
        left: 20px;
        .title {
          position: relative;
          font-size: 20px;
          font-family: 'Font Light';
          color: #fff;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
          z-index: 1;
          line-height: 1.2;
          font-weight: normal;
          padding: 7px 10px;
          &::after {
            content: '';
            display: block;
            background: rgba(0,0,0,0.3);
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 5px;
            z-index: -1;
          }
        }
      }
    }
    &-body {
      .content-input {
        position: relative;
        background: #fff;
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
        padding: 20px;
      }
    }
  }
}
</style>