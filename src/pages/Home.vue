<template>
  <f7-page class="home" name="home">
    <header-default />
    <f7-block class="content-home">
      <div class="content-home-body" v-if="tips">
        <template v-for="(tipsCollection, index) in tips">
          <template v-if="!searchTips || tipsCollection.name.toLowerCase().indexOf(searchTips) !== -1">
            <div class="content-elements" :key="index" v-if="tipsCollection.posts">
              <div class="content-elements-header">
                <div class="content-elements-header-title">
                  <!-- <h2> Dicas de <span>Limpeza</span> </h2> -->
                  <h2>{{ tipsCollection.name }}</h2>
                </div>
                <a class="link-all" @click="routerPage(tipsCollection.id)">
                  Ver <span>todos</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg>
                </a>
              </div>
              <div class="content-elements-body">
                <swiper :options="swiperTips">
                  <template>
                    <swiper-slide v-for="(tipsData, indexData) in Object.values(tipsCollection.posts).reverse().slice(0,10)" :key="indexData">
                      <card-tips :tipsProps="tipsData" :tipId="tipsCollection.id"/>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="content-card-view-all">
                        <a class="content-card-view-all-btn" @click="routerPage(tipsCollection.id)">
                          <img class="img-fluid" src="static/icons/plus-circle.png" alt="icon plus circle" title="icon plus circle"/>
                          <p> Ver todos </p>
                        </a>
                      </div>
                    </swiper-slide>
                  </template>
                </swiper>
              </div>
            </div>
          </template>
        </template>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import headerDefault from "@/components/header.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import CardTips from "@/components/card.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide,
    headerDefault,
    CardTips
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperTips: {
        slidesPerView: 'auto',
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
    };
  },
  computed: {
    ...mapGetters({
      tips: 'Tips/tips',
      searchTips: 'searchTips'
    }),
  },
  methods: {
    routerPage(tipId){
      this.$f7router.navigate({
        name: 'tips',
        params: { tipId: tipId },
      });
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
  },
};
</script>
<style lang="scss">
.content-home {
  margin: 0;
  padding: 106px 0px 0px 0px;
  &-body {
    .swiper-container {
      padding: 10px 15px;
    }
    .content-elements {
      padding: 30px 0px;
      border-bottom: 1px solid #f2f2f2;
      &:last-child {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      &:nth-child(5n){
        background: #F0F8FF;
      }
      &:nth-child(5n+1){
        background: #F8F8FF;
      }
      &:nth-child(5n+2) {
        background: #fff0fe;
      }
      &:nth-child(5n+3){
        background: #FFFAFA;
      }
      &:nth-child(5n+4){
        background: #FFF5EE;
      }
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0px 15px;
        &-title {
          h2 {
            font-size: 20px;
            font-family: 'Font Light';
            line-height: 1.2;
            color: #000;
            // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            span {
              // display: block;
              font-family: 'Font Regular';
              text-transform: uppercase;
            }
          }
        }
        .link-all {
          display: flex;
          align-items: center;
          font-size: 12px;
          font-family: 'Font Light';
          color: #3f9bdd;
          line-height: 1.2;
          span {
            margin-left: 3px;
          }
          svg {
            margin-left: 5px;
            height: 20px;
            fill: #3f9bdd;
          }
        }
      }
      &-body {
        .content-card-tips {
          border: 1px solid #f2f2f2;
          border-radius: 5px;
        }
        .swiper-slide {
          width: 90%;
          max-width: 350px;
        }
        .content-card-view-all {
          display: flex;
          justify-content: center;
          &-btn {
            height: 170px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background: #3f9bdd;
            // background: #2CD5C4;
            border-radius: 5px;
            box-shadow: 0px 3px 12px rgba(84,183,173,0.15);
            transition: 500ms;
            &:hover,&:focus {
              opacity: 0.8;
            }
            p {
              font-size: 16px;
              color: #fff;
              font-family: 'Font Light';
              text-transform: uppercase;
              margin-top: 10px;
              margin-bottom: 0;
            }
          }
				}
      }
    }
  }
}
</style>