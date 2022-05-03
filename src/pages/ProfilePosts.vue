<template>
  <f7-page class="profile-posts" name="profile-posts">
    <f7-navbar>
      <a class="link" href="/" v-if="userPost && userPost.userAdmin">
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
        <p>Dicas Úteis</p>
      </a>
      <a class="link" href="/" v-else>
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
        <p>{{ userPost.name }}</p>
      </a>
    </f7-navbar>
    <f7-block class="content-profile-posts">
      <div class="content-profile-posts-header">
        <div class="content-profile-posts-header-div">
          <div class="icon-tips-useful" v-if="userPost && userPost.userAdmin">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M240.06,454.34A32,32,0,0,0,245.42,472l17.1,25.69c5.23,7.91,17.17,14.28,26.64,14.28h61.7c9.47,0,21.41-6.37,26.64-14.28L394.59,472A37.47,37.47,0,0,0,400,454.34L400,416H240ZM319.45,0C217.44.31,144,83,144,176a175,175,0,0,0,43.56,115.78c16.52,18.85,42.36,58.22,52.21,91.44,0,.28.07.53.11.78H400.12c0-.25.07-.5.11-.78,9.85-33.22,35.69-72.59,52.21-91.44A175,175,0,0,0,496,176C496,78.63,416.91-.31,319.45,0ZM320,96a80.09,80.09,0,0,0-80,80,16,16,0,0,1-32,0A112.12,112.12,0,0,1,320,64a16,16,0,0,1,0,32ZM112,192a24,24,0,0,0-24-24H24a24,24,0,0,0,0,48H88A24,24,0,0,0,112,192Zm504-24H552a24,24,0,0,0,0,48h64a24,24,0,0,0,0-48ZM131.08,55.22l-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,1,0,24-41.56Zm457.26,264-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,0,0,24-41.56Zm-481.26-32-55.42,32a24,24,0,1,0,24,41.56l55.42-32a24,24,0,0,0-24-41.56ZM520.94,100a23.8,23.8,0,0,0,12-3.22l55.42-32a24,24,0,0,0-24-41.56l-55.42,32a24,24,0,0,0,12,44.78Z"></path></svg>
          </div>
          <div class="content-profile-posts-header-image" v-else-if="userPost && userPost.picture">
            <img class="img-fluid" :src="userPost.picture" alt="image user" title="image user" />
          </div>
          <div class="content-profile-posts-header-icon" v-else>
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-user-circle fa-w-16 fa-2x"><g class="fa-group"><path fill="#dadee2" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm0,96a88,88,0,1,1-88,88A88,88,0,0,1,248,104Zm0,344a191.61,191.61,0,0,1-146.5-68.2C120.3,344.4,157.1,320,200,320a24.76,24.76,0,0,1,7.1,1.1,124.67,124.67,0,0,0,81.8,0A24.76,24.76,0,0,1,296,320c42.9,0,79.7,24.4,98.5,59.8A191.61,191.61,0,0,1,248,448Z" class="fa-secondary"></path><path fill="#adb5bd" d="M248,280a88,88,0,1,0-88-88A88,88,0,0,0,248,280Zm48,40a24.76,24.76,0,0,0-7.1,1.1,124.67,124.67,0,0,1-81.8,0A24.76,24.76,0,0,0,200,320c-42.9,0-79.7,24.4-98.5,59.8,68.07,80.91,188.84,91.32,269.75,23.25A192,192,0,0,0,394.5,379.8C375.7,344.4,338.9,320,296,320Z"></path></g></svg>
          </div>
          <div class="profile-information">
            <div class="profile-information-description">
              <div class="profile-information-description-publication">
                <template v-if="postUser">
                  <p> {{ quantityPosts }} 
                    <template v-if="quantityPosts > 1">
                      <span>posts</span>
                    </template>
                    <template v-else>
                      <span>post</span>
                    </template>
                  </p>
                </template>
                <template v-else>
                  <p> 0 <span>post</span></p>
                </template>
              </div>
              <div class="profile-information-description-like">
                <template v-if="userPost && userPost.like">
                  <p> {{ Object.keys(userPost.like).length }} 
                  <span>
                    post<span v-if="Object.keys(userPost.like).length > 1">s</span> 
                    curtido<span v-if="Object.keys(userPost.like).length > 1">s</span>
                  </span>
                  </p>
                </template>
                <template v-else>
                  <p>0 <span>curtida</span></p>
                </template>
              </div>
            </div>
            <!-- BTN SHARE PROFILE -->
            <!-- <a class="profile-information-btn-share">
              <p>Compartilhar</p>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" class=""></path></svg>
            </a> -->
          </div>
        </div>
        <div class="content-profile-posts-header-text" v-if="userPost && userPost.userAdmin">
          <div class="content-elements">
            <p>Dicas Úteis</p>
          </div>
          <div class="icon-verified">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class=""></path></svg>
          </div>
        </div>
        <div class="content-profile-posts-header-text" v-else>
          <div class="content-elements">
            <p>{{ userPost.name }}</p>
          </div>
        </div>
      </div>
      <div class="content-profile-posts-body">
        <div class="content-profile-posts-body-div">
          <div class="content-elements-text" v-if="postUser">
            <p class="text-quantity">{{ quantityPosts }}</p>
            <p class="text-publication">
              <template v-if="quantityPosts > 1">
                Publicações
              </template>
              <template v-else>
                Publicação
              </template>
            </p>
          </div>
        </div>
        <template v-for="(tip, indexTip) in postUser" >
          <div class="content-elements" v-if="tip.posts" :key="indexTip">
            <div class="content-elements-header">
              <div class="content-elements-header-title">
                <h2>{{ tip.name }}</h2>
              </div>
            </div>
            <div class="content-elements-body">
              <template v-for="(post, indexPost) in Object.values(tip.posts).reverse()">
                <card-tips :key="indexPost" :tipsProps="post" :tipId="tip.id"/>
              </template>
            </div>
          </div>
        </template>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>

import CardTips from "@/components/card.vue";
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
    }
  },
  components: {
    CardTips
  },
  computed: {
    ...mapGetters({ postUser: 'Tips/postUser', userPost: 'Tips/userPost'}),
    quantityPosts() {
      var quantity = 0;
      for (var tip in this.postUser) {
        if (this.postUser[tip].posts){
          quantity += Object.keys(this.postUser[tip].posts).length;
        }
      }
      return quantity;
    }
  },
  methods: {
    contentScrolled(position) {
      var menuFooter = document.getElementById("menu-footer");
      if (position > 100) {
        menuFooter.classList.add("menu-footer-scrolled");
      } else {
        menuFooter.classList.remove("menu-footer-scrolled");
      }
    },
  },
  async mounted() {
    await this.$store.dispatch('Tips/consultPostsUser', this.$f7route.params.userId);
    await this.$store.dispatch('Tips/consultUserPost', this.$f7route.params.userId);
    this.$f7.$(".page-content").on("scroll", target => {
      this.contentScrolled(target.srcElement.scrollTop);
    });
  }
};
</script>
<style lang="scss">
.profile-posts {
  background: #f6f6f6;
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
.content-profile-posts {
  margin: 0;
  padding: 0;
  &-header {
    padding: 15px;
    background: #fff;
    border: 1px solid #f2f2f2;
    &-div {
      display: flex;
      align-items: center;
      .icon-tips-useful {
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4169E1;
        border-radius: 100%;
        margin-right: 15px;
        svg {
          fill: #fff;
          height: 40px;
          width: 35px;
        }
      }
      .profile-information {
        width: calc(100% - 75px);
        max-width: 210px;
        &-description {
          display: flex;
          justify-content: space-between;
          padding-left: 10px;
          &-publication {
            margin-right: 20px;
            p {
              font-size: 18px;
              font-family: 'Font Medium';
              color: #000;
              margin-bottom: 0;
              font-style: italic;
              span {
                font-family: 'Font Regular';
                font-size: 12px;
                color: #717171;
              }
            }
          }
          &-like {
            p {
              font-size: 18px;
              font-family: 'Font Medium';
              color: #000;
              margin-bottom: 0;
              font-style: italic;
              span {
                font-family: 'Font Regular';
                font-size: 12px;
                color: #717171;
              }
            }
          }
        }
        &-btn-share {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          height: 30px;
          width: 100%;
          background: linear-gradient(to bottom, #62c162, #4da709);
          max-width: 180px;
          margin-top: 5px;
          transition: 500ms;
          &:hover,&:focus {
            cursor: pointer;
            opacity: 0.8;
          }
          p {
            font-size: 14px;
            font-family: 'Font Light';
            color: #fff;
            margin-bottom: 0;
          }
          svg {
            height: 15px;
            width: 15px;
            fill: #fff;
            margin-left: 10px;
          }
        }
      }
    }
    &-image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
      }
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      svg {
        height: 60px;
        width: 60px;
      }
    }
    &-text {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .content-elements {
        p {
          font-size: 16px;
          font-family: 'Font Medium';
          color: #000;
          margin-bottom: 0;
          line-height: 1.2;
        }
      }
      .icon-verified {
        display: flex;
        margin-left: 6px;
        svg {
          height: 13px;
          width: 13px;
          fill: #62c162;
        }
      }
    }
  }
  &-body {
    padding: 30px 0px;
    &-div {
      text-align: center;
      padding: 0px 20px;
      .content-elements-text {
        position: relative;
        display: inline-flex;
        padding: 5px 30px;
        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: rgba(0,0,0,0.7);
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .text-quantity {
          font-size: 14px;
          font-family: 'Font Bold';
          color: #000;
          line-height: 1;
          margin-right: 5px;
          margin-bottom: 0;
        }
        .text-publication {
          font-size: 14px;
          font-family: 'Font Light';
          color: #000;
          line-height: 1;
          margin-bottom: 0;
        }
      }
    }
    .content-elements {
      padding: 30px 20px;
      border-bottom: 1px solid rgba(65, 105, 225, 0.1);
      &:last-child {
        border-bottom: 0;
      }
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        &-title {
          h2 {
            font-size: 20px;
            font-family: 'Font Light';
            line-height: 1.2;
            color: #000;
            span {
              font-family: 'Font Regular';
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
}
</style>