<template>
  <f7-page class="tips-intern" name="tips-intern">
    <f7-navbar>
      <a class="link" @click="routerPage()">
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
    <f7-block class="content-tips-intern">
      <div class="content-tips-intern-div">
        <div class="content-tips-intern-author">
          <template v-if="post.userAdmin">
            <div class="icon-tips-useful">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M240.06,454.34A32,32,0,0,0,245.42,472l17.1,25.69c5.23,7.91,17.17,14.28,26.64,14.28h61.7c9.47,0,21.41-6.37,26.64-14.28L394.59,472A37.47,37.47,0,0,0,400,454.34L400,416H240ZM319.45,0C217.44.31,144,83,144,176a175,175,0,0,0,43.56,115.78c16.52,18.85,42.36,58.22,52.21,91.44,0,.28.07.53.11.78H400.12c0-.25.07-.5.11-.78,9.85-33.22,35.69-72.59,52.21-91.44A175,175,0,0,0,496,176C496,78.63,416.91-.31,319.45,0ZM320,96a80.09,80.09,0,0,0-80,80,16,16,0,0,1-32,0A112.12,112.12,0,0,1,320,64a16,16,0,0,1,0,32ZM112,192a24,24,0,0,0-24-24H24a24,24,0,0,0,0,48H88A24,24,0,0,0,112,192Zm504-24H552a24,24,0,0,0,0,48h64a24,24,0,0,0,0-48ZM131.08,55.22l-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,1,0,24-41.56Zm457.26,264-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,0,0,24-41.56Zm-481.26-32-55.42,32a24,24,0,1,0,24,41.56l55.42-32a24,24,0,0,0-24-41.56ZM520.94,100a23.8,23.8,0,0,0,12-3.22l55.42-32a24,24,0,0,0-24-41.56l-55.42,32a24,24,0,0,0,12,44.78Z"></path></svg>
            </div>
            <div class="text">
              <h3 class="text-name">Por Dicas Úteis</h3>
              <h4 class="text-date">{{ post.datePublication }}</h4>
            </div>
            <div class="icon-verified">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class=""></path></svg>
            </div>
          </template>
          <template v-else>
            <div class="image" v-if="post.userPhotoURL">
              <img class="img-fluid" :src="post.userPhotoURL" alt="user photo" title="user photo" />
            </div>
            <div class="icon" v-else>
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-user-circle fa-w-16 fa-2x"><g class="fa-group"><path fill="#dadee2" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm0,96a88,88,0,1,1-88,88A88,88,0,0,1,248,104Zm0,344a191.61,191.61,0,0,1-146.5-68.2C120.3,344.4,157.1,320,200,320a24.76,24.76,0,0,1,7.1,1.1,124.67,124.67,0,0,0,81.8,0A24.76,24.76,0,0,1,296,320c42.9,0,79.7,24.4,98.5,59.8A191.61,191.61,0,0,1,248,448Z" class="fa-secondary"></path><path fill="#adb5bd" d="M248,280a88,88,0,1,0-88-88A88,88,0,0,0,248,280Zm48,40a24.76,24.76,0,0,0-7.1,1.1,124.67,124.67,0,0,1-81.8,0A24.76,24.76,0,0,0,200,320c-42.9,0-79.7,24.4-98.5,59.8,68.07,80.91,188.84,91.32,269.75,23.25A192,192,0,0,0,394.5,379.8C375.7,344.4,338.9,320,296,320Z"></path></g></svg>
            </div>
            <div class="text">
              <h3 class="text-name">{{ post.author }}</h3>
              <h4 class="text-date">{{ post.datePublication }}</h4>
            </div>
          </template>
        </div>
        <div class="content-tips-intern-itens">
          <div class="content-tips-intern-itens-header" v-if="post.title && !post.contentHtml">
            <h2>{{ post.title }}</h2>
          </div>
          <div class="content-tips-intern-itens-body">
            <p v-if="post.text && !post.contentHtml" v-html="post.text"></p>
            <div class="content-tips-intern-itens-body-text" v-if="post.contentHtml" v-html="post.contentHtml">
            </div>
            <div class="content-tips-intern-itens-body-image" v-if="post.picture && !post.contentHtml">
              <img class="img-fluid" v-for="(picture, index) in post.picture" :key="index" :src="picture" alt="image tip" title="image tip" />
            </div>
            <div class="content-tips-intern-itens-body-video" v-if="post.video">
              <video controls>
                <source :src="post.video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="content-tips-intern-itens-body-video" v-if="post.videoId && !post.contentHtml">
              <iframe :src="`https://www.youtube.com/embed/${post.videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <!--- SHARE BUTTONS -->
        <!-- <div class="content-tips-intern-share">
          <div class="content-tips-intern-share-header">
            <h2>Compartilhar em:</h2>
          </div>
          <div class="content-tips-intern-share-body">
            <a class="link-whatsapp">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" class=""></path></svg>
            </a>
            <a class="link-facebook">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" class=""></path></svg>
            </a>
            <a class="link-twitter">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" class=""></path></svg>
            </a>
            <a class="link-plus">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" class=""></path></svg>
            </a>
          </div>
        </div> -->
      </div>
      <div class="content-tips-intern-interest" v-if="filterPost.length > 0">
        <div class="content-tips-intern-interest-header">
          <h2>Você pode se interessar</h2>
        </div>
        <div class="content-tips-intern-interest-body">
          <swiper :options="swiperTips">
            <swiper-slide v-for="(tipsData, indexData) in filterPost" :key="indexData">
              <card-tips :tipsProps="tipsData" :tipId="tip.id"/>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-tips" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>

import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss';
import CardTips from "@/components/card.vue";

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
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 800,
        watchOverflow: true,
        clickable: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination-tips",
          type: 'bullets',
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
    ...mapGetters({post: 'Tips/post', tip: 'Tips/tipFilter'}),
    filterPost() {
      var arrayPosts = this.tip.posts ? Object.values(this.tip.posts).filter(element => element.postId !== this.post.postId).reverse() : [],
      resultPosts = [],
      i = arrayPosts.length,
      j = 0;

      // RANDOM POSTS
      while (i--) {
        j = Math.floor(Math.random() * (i+1));
        resultPosts.push(arrayPosts[j]);
        arrayPosts.splice(j,1);
      }

      return resultPosts.slice(0,5);
    }
  },
  methods: {
    routerPage(){
      this.$f7router.back();
    },
    previewPage(tipId, postId) {
      this.$f7router.navigate({
        name: this.$f7router.previousRoute.name,
        params: { tipId: tipId, postId: postId },
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
    this.$store.dispatch('Tips/consultTipId', this.$f7route.params.tipId);
    this.$store.dispatch('Tips/consultPost', [this.$f7route.params.tipId, this.$f7route.params.postId])
    this.$f7.$(".page-content").on("scroll", target => {
      this.contentScrolled(target.srcElement.scrollTop);
    });
  }
};
</script>
<style lang="scss">
.tips-intern {
  background: #f9f9f9;
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
.content-tips-intern {
  padding: 0;
  &-div {
    padding: 0px 15px;
  }
  &-author {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(209, 209, 209, 0.3);
    padding-bottom: 10px;
    .icon-tips-useful {
      height: 35px;
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4169E1;
      border-radius: 100%;
      margin-right: 10px;
      svg {
        fill: #fff;
        width: 22px;
        height: 20px;
      }
    }
    .icon-verified {
      margin-left: 6px;
      padding-bottom: 12px;
      svg {
        height: 16px;
        width: 16px;
        fill: #62c162;
      }
    }
    .image {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 10px;
      img {
        height: 35px;
        width: 35px;
        border-radius: 100%;
      }
    }
    .icon {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 10px;
      svg {
        height: 35px;
        width: 35px;
      }
    }
    .text {
      &-name {
        font-size: 14px;
        font-family: 'Font Light';
        color: #717171;
        margin-bottom: 0;
        line-height: 1.2;
      }
      &-date {
        font-size: 14px;
        font-family: 'Font Light';
        color: #3b5998;
        margin-bottom: 0;
        line-height: 1.2;
      }
    }
  }
  &-itens {
    &-header {
      margin-bottom: 20px;
      h2 {
        font-size: 20px;
        font-family: 'Font Light';
        color: #000;
        margin-bottom: 0;
        line-height: 1.2;
      }
    }
    &-body {
      // p {
      //   font-size: 16px;
      //   font-family: 'Font Regular';
      //   color: #000;
      //   margin-bottom: 20px;
      // }
      // ul, ol {
      //   margin-bottom: 20px;
      //   li {
      //     font-size: 16px;
      //     font-family: 'Font Light';
      //     color: #000;
      //     &::marker {
      //       font-family: 'Font Semibold';
      //     }
      //   }
      // }
      &-image {
        text-align: center;
        img {
          border-radius: 5px;
          // max-width: 500px;
          margin: 0 auto 20px auto;
        }
      }
      &-video {
        margin-bottom: 20px;
        video {
          width: 100%;
          height: 100%;
        }
        iframe {
          width: 100%;
          height: 200px;
        }
      }
      &-text {
        // h1, h2, h3, h4, h5, h6 {
        //   font-size: 20px;
        //   font-family: 'Font Light';
        //   color: #000;
        //   margin-bottom: 0;
        //   line-height: 1.2;
        // }
        // p {
        //   margin: initial;
        // }
        img {
          height: auto;
          max-width: 100%;
        }
        iframe {
          width: 100%;
          height: 200px;
        }
      }
    }
  }
  &-share {
    padding: 20px 0px;
    border-top: 1px solid rgba(209, 209, 209, 0.3);
    &-header {
      margin-bottom: 10px;
      h2 {
        font-size: 14px;
        font-family: 'Font Light';
        color: #000;
        line-height: 1.2;
      }
    }
    &-body {
      display: flex;
      align-items: center;
      .link-whatsapp {
        margin-right: 15px;
        svg {
          fill: #34af23;
          height: 40px;
          width: 40px;
        }
      }
      .link-facebook {
        margin-right: 15px;
        svg {
          fill: #3b5998;
          height: 40px;
          width: 40px;
        }
      }
      .link-twitter {
        margin-right: 10px;
        svg {
          fill: #00aced;
          height: 40px;
          width: 40px;
        }
      }
      .link-plus {
        svg {
          fill: #adb5bd;
          height: 35px;
          width: 35px;
        }
      }
    }
  }
  &-interest {
    padding-top: 20px;
    border-top: 1px solid rgba(209, 209, 209, 0.3);
    &-header {
      padding: 0px 15px;
      margin-bottom: 20px;
      h2 {
        font-size: 20px;
        font-family: 'Font Light';
        color: #000;
        margin-bottom: 0;
        line-height: 1.2;
      }
    }
    &-body {
      .swiper-container {
        padding: 10px 15px;
      }
      .swiper-slide {
        width: 90%;
        max-width: 350px;
      }
    }
  }
}
.swiper-pagination-tips {
  bottom: 0px !important;
}
</style>