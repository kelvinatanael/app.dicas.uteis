<template>
  <div v-if="tipsProps">
    <div class="content-card-tips">
      <a class="content-card-tips-author" @click="routerPageProfilePosts(tipsProps.userId)">
        <template v-if="tipsProps.userAdmin">
          <div class="icon-tips-useful">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M240.06,454.34A32,32,0,0,0,245.42,472l17.1,25.69c5.23,7.91,17.17,14.28,26.64,14.28h61.7c9.47,0,21.41-6.37,26.64-14.28L394.59,472A37.47,37.47,0,0,0,400,454.34L400,416H240ZM319.45,0C217.44.31,144,83,144,176a175,175,0,0,0,43.56,115.78c16.52,18.85,42.36,58.22,52.21,91.44,0,.28.07.53.11.78H400.12c0-.25.07-.5.11-.78,9.85-33.22,35.69-72.59,52.21-91.44A175,175,0,0,0,496,176C496,78.63,416.91-.31,319.45,0ZM320,96a80.09,80.09,0,0,0-80,80,16,16,0,0,1-32,0A112.12,112.12,0,0,1,320,64a16,16,0,0,1,0,32ZM112,192a24,24,0,0,0-24-24H24a24,24,0,0,0,0,48H88A24,24,0,0,0,112,192Zm504-24H552a24,24,0,0,0,0,48h64a24,24,0,0,0,0-48ZM131.08,55.22l-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,1,0,24-41.56Zm457.26,264-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,0,0,24-41.56Zm-481.26-32-55.42,32a24,24,0,1,0,24,41.56l55.42-32a24,24,0,0,0-24-41.56ZM520.94,100a23.8,23.8,0,0,0,12-3.22l55.42-32a24,24,0,0,0-24-41.56l-55.42,32a24,24,0,0,0,12,44.78Z"></path></svg>
          </div>
          <div class="text">
            <h3 class="text-name">Por Dicas Úteis</h3>
            <h4 class="text-date">{{ tipsProps.datePublication }}</h4>
          </div>
          <div class="icon-verified">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class=""></path></svg>
          </div>
        </template>
        <template v-else>
          <div class="image" v-if="tipsProps.userPhotoURL">
            <img class="img-fluid" :src="tipsProps.userPhotoURL" alt="user photo" title="user photo" />
          </div>
          <div class="icon" v-else>
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-user-circle fa-w-16 fa-2x"><g class="fa-group"><path fill="#dadee2" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm0,96a88,88,0,1,1-88,88A88,88,0,0,1,248,104Zm0,344a191.61,191.61,0,0,1-146.5-68.2C120.3,344.4,157.1,320,200,320a24.76,24.76,0,0,1,7.1,1.1,124.67,124.67,0,0,0,81.8,0A24.76,24.76,0,0,1,296,320c42.9,0,79.7,24.4,98.5,59.8A191.61,191.61,0,0,1,248,448Z" class="fa-secondary"></path><path fill="#adb5bd" d="M248,280a88,88,0,1,0-88-88A88,88,0,0,0,248,280Zm48,40a24.76,24.76,0,0,0-7.1,1.1,124.67,124.67,0,0,1-81.8,0A24.76,24.76,0,0,0,200,320c-42.9,0-79.7,24.4-98.5,59.8,68.07,80.91,188.84,91.32,269.75,23.25A192,192,0,0,0,394.5,379.8C375.7,344.4,338.9,320,296,320Z"></path></g></svg>
          </div>
          <div class="text">
            <h3 class="text-name">{{ tipsProps.author }}</h3>
            <h4 class="text-date">{{ tipsProps.datePublication }}</h4>
          </div>
        </template>
      </a>
      <div @click="routerPage(tipId, tipsProps.postId)">
        <div class="content-card-tips-text">
          <h2 class="content-card-tips-text-title" v-if="tipsProps.title">{{ tipsProps.title }}</h2>
          <p class="content-card-tips-text-description" v-if="tipsProps.text" v-html="tipsProps.text"></p>
        </div>
        <div v-if="tipsProps.video" class="content-card-tips-video">
          <video controls>
            <source :src="tipsProps.video[0]" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div v-else-if="tipsProps.videoId" class="content-card-tips-video">
          <iframe :src="`https://www.youtube.com/embed/${tipsProps.videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div v-else-if="tipsProps.picture" class="content-card-tips-image" :style="{'background': 'url('+ tipsProps.picture[0] +')'}">
        </div>
      </div>
      <div class="content-card-tips-share">
        <template v-if="!user.loggedIn">
          <a class="btn-enjoy" href="/login/">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" class=""></path></svg>
            <span class="btn-enjoy-text" v-if="tipsProps.like">
              {{ Object.keys(tipsProps.like).length }}
            </span>
          </a>
          <a class="btn-wishlist" href="/login/">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path></svg>
          </a>
        </template>
        <template v-else>
          <a class="btn-enjoy" :class="{'active-pulse': toggleClassLike, active: tipsProps.like && Object.values(tipsProps.like).find(element => element === this.user.data.id)}" @click="changeLike()">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" class=""></path></svg>
            <span class="btn-enjoy-text" v-if="tipsProps.like">
              {{ Object.keys(tipsProps.like).length }}
            </span>
          </a>
          <a class="btn-wishlist" :class="{'active-pulse': toggleClassWishlist, 'active-heart': this.user.information && user.information[this.user.data.id].wishlist && this.user.information[this.user.data.id].wishlist.find(element => element === tipsProps.postId)}" @click="changeWishlist()">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path></svg>
          </a>
        </template>
        <!-- BTN SHARE PUBLICATION -->
        <!-- <a class="btn-share">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" class=""></path></svg>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      toggleClassLike: false,
      toggleClassWishlist: false,
      contentHtml: this.tipsProps.contentHtml,
    }
  },
  props: {
    tipsProps: Object,
    tipId: String
  },
  computed: {
    ...mapGetters({
      user: 'user',
    })
  },
  methods: {
    routerPage(tipId, postId){
      this.$f7router.navigate({
        name: 'tips-intern',
        params: { tipId: tipId, postId: postId },
      });
    },
    routerPageProfilePosts(userId) {
      this.$f7router.navigate({
        name: 'profilePosts',
        params: { userId: userId },
      });
    },
    changeLike() {
      var resultPost, resultUser;
      var arrayLikePost = [], arrayLikeUser = [];

      // VERIFY ARRAY LIKE POST EXIST
      if (this.tipsProps.like){
        resultPost = this.tipsProps.like.find(element => element === this.user.data.id);
        arrayLikePost = this.tipsProps.like;
      }else {
        resultPost = null;
      }
      ///////////////////////////////      

      // VERIFY ARRAY LIKE USER EXIST
      if (this.user.information[this.user.data.id].like){
        resultUser = Object.values(this.user.information[this.user.data.id].like).find(element => element === this.tipsProps.postId);
        arrayLikeUser = Object.values(this.user.information[this.user.data.id].like);
      }else {
        resultUser = null;
      }
      ///////////////////////////////  

      if (resultPost && resultUser){
        console.log('achou');
        this.toggleClassLike = false;

        this.$store.dispatch('Tips/removeLike', [this.tipId, this.tipsProps.postId, this.user.data.id, this.tipsProps.userId])
      } else {
        console.log('não achou');
        this.toggleClassLike = true;
        
        arrayLikePost.push(this.user.data.id);
        arrayLikeUser.push(this.tipsProps.postId);
        
        this.$store.dispatch('Tips/addLike', [this.tipId, this.tipsProps.postId, arrayLikePost, this.user.data.id, arrayLikeUser, this.tipsProps.userId]);
      }
    },
    changeWishlist() {
      var idUser = this.user.data.id;
      var arrayWishlist = this.user.information[idUser].wishlist ? this.user.information[idUser].wishlist : [];
      var result;
      var index;

      if (arrayWishlist.length > 0){
        result = arrayWishlist.find(element => element === this.tipsProps.postId);
        index = arrayWishlist.indexOf(result);
      }

      if (index > -1){
        console.log('achou');
        this.toggleClassWishlist = false;

        // REMOVE ITENS ARRAY
        arrayWishlist.splice(index, 1);

        // ADD NEW ARRAY TO THE DATABASE
        this.$store.dispatch('addWishlist', [this.user.data.id, arrayWishlist])
      } else {
        console.log('não achou');
        this.toggleClassWishlist = true;
        this.tipsProps.tipId = this.tipId;

        // ADD NEW ARRAY LAST POSITION
        arrayWishlist.push(this.tipsProps.postId);

        // ADD NEW ARRAY TO THE DATABASE
        this.$store.dispatch('addWishlist', [this.user.data.id, arrayWishlist])
      }
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.content-card-tips {
  display: block;
  background: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 10px;
  margin-bottom: 20px;
  transition: 500ms;
  &:hover,&:focus {
    cursor: pointer;
    opacity: 0.8;
  }
  &-text {
    padding: 0px 15px;
    margin-bottom: 15px;
    &-title {
      font-size: 16px;
      font-family: 'Font Light';
      line-height: 1.2;
      color: #000;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      height: 38px;
      margin-bottom: 10px;
    }
    &-description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      height: 48px;
      font-size: 14px;
      font-family: 'Font Light';
      line-height: 1.2;
      color: #707070;
    }
    &-contentHtml {
      height: 86px;
      overflow: hidden;
      h1,h2,h3,h4,h5,h6 {
        font-size: 16px;
        font-family: 'Font Light';
        line-height: 1.2;
        color: #000;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        height: 38px;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        font-family: 'Font Light';
        line-height: 1.2;
        color: #000;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        height: 38px;
        margin-bottom: 10px;
      }
      img {
        height: auto;
        max-width: 100%;
      }
      iframe {
        width: 100%;
      }
    }
  }
  &-author {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(209, 209, 209, 0.3);
    padding: 10px 15px;
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
        height: 13px;
        width: 13px;
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
        font-size: 12px;
        font-family: 'Font Light';
        color: #717171;
        margin-bottom: 0;
        line-height: 1.2;
      }
      &-date {
        font-size: 12px;
        font-family: 'Font Light';
        color: #000;
        margin-bottom: 0;
        line-height: 1.2;
      }
    }
  }
  &-share {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 15px;
    margin-top: 20px;
    .btn-wishlist {
      display: flex;
      align-items: center;
      width: initial;
      background: 0;
      border: 0;
      padding: 0;
      margin-right: 10px;
      svg {
        fill: #adb5bd;
        height: 20px;
        width: 20px;
      }
    }
    .btn-enjoy {
      display: flex;
      align-items: flex-end;
      background: 0;
      border: 0;
      padding: 0;
      margin-right: 10px;
      svg {
        fill: #adb5bd;
        height: 20px;
        width: 20px;
        transition: 500ms;
      }
      &-text {
        font-size: 12px;
        font-family: 'Font Medium';
        color: #adb5bd;
        margin-left: 7px;
        height: 15px;
        transition: 500ms;
      }
    }
    .btn-share {
      display: flex;
      align-items: center;
      width: initial;
      background: 0;
      border: 0;
      padding: 0;
      svg {
        fill: #62c162;
        height: 20px;
        width: 20px;
      }
    }
    .active-pulse {
      animation: pulse 500ms;
    }
    .active {
      svg {
        fill: #3f9bdd;
      }
      .btn-enjoy-text {
        color: #3f9bdd;
      }
    }
    .active-heart {
      svg {
        fill: #f55151;
      }
    }
  }
  &-image {
    height: 150px;
    margin: 0px 5px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    border-radius: 5px;
  }
  &-video {
    margin: 0px 10px;
    video {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
    iframe {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(0.80);
      // box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      transform: scale(1);
      // box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(0.80);
      // box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
}
</style>