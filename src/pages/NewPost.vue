<template>
  <f7-page class="new-post" name="new-post">
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
        <p>Adicionar Post</p>
      </a>
    </f7-navbar>
    <f7-block class="content-new-post">
      <div class="content-form">
        <div class="content-form-header">
          <h2>Novo Post</h2>
          <img class="img-fluid" src="static/icons/new-post.png" alt="image new post" title="image new post" />
        </div>
        <div class="content-form-body list">
          <form @submit.prevent="registerPost()" class="list no-hairlines-md">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Título de capa da publicação</div>
                  <div class="item-input-wrap textarea-default">
                    <textarea v-model="post.title" placeholder="Descreva um pequeno título de capa sobre a publicação (Máximo 3 linhas)..." required validate></textarea>
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Texto de capa da publicação</div>
                  <div class="item-input-wrap textarea-default">
                    <textarea v-model="post.text" placeholder="Descreva um pequeno texto de capa sobre a publicação (Máximo 3 linhas)..." required validate></textarea>
                  </div>
                </div>
              </li>
              <!-- INPUT RADIO -->
              <li class="item-content item-input pb-0">
                <div class="item-inner">
                  <div class="item-title item-label">Mídia para ficar de capa da publicação (Selecione)</div>
                  <div class="content-inputs-radio">
                    <label class="content-inputs-radio-element">
                      <label class="radio">
                        <input type="radio" name="demo-radio-inline" v-model="inputRadio" value="image" checked />
                        <i class="icon-radio"></i>
                      </label>
                      <p>Imagem</p>
                    </label>
                    <label class="content-inputs-radio-element">
                      <label class="radio">
                        <input type="radio" name="demo-radio-inline" v-model="inputRadio" value="video" />
                        <i class="icon-radio"></i>
                      </label>
                      <p>Vídeo</p>
                    </label>
                    <label class="content-inputs-radio-element">
                      <label class="radio">
                        <input type="radio" name="demo-radio-inline" v-model="inputRadio" value="id-youtube" />
                        <i class="icon-radio"></i>
                      </label>
                      <p>URL do youtube</p>
                    </label>
                  </div>
                </div>
              </li>
              <!-- DIV THE INPUT RADIO -->
              <li class="item-content item-input disabled-div" :class="{'active-div': this.inputRadio === 'image'}">
                <div class="item-inner">
                  <div class="item-title item-label">Imagem de capa</div>
                  <div class="item-input-wrap">
                    <input type="file" @change="previewImage($event)" accept="image/*" :required="this.inputRadio === 'image'" :validate="this.inputRadio === 'image'"/>
                  </div>
                </div>
              </li>
              <li class="item-content item-input disabled-div" :class="{'active-div': this.inputRadio === 'video'}">
                <div class="item-inner">
                  <div class="item-title item-label">Vídeo de capa</div>
                  <div class="item-input-wrap">
                    <input type="file" @change="previewVideo($event)" accept="video/*" :required="this.inputRadio === 'video'" :validate="this.inputRadio === 'video'"/>
                  </div>
                </div>
              </li>
              <li class="item-content item-input disabled-div" :class="{'active-div': this.inputRadio === 'id-youtube'}">
                <div class="item-inner">
                  <div class="item-title item-label">URL do video do youtube para a capa</div>
                  <div class="item-input-wrap input-default-video">
                    <input type="text" placeholder="https://www.youtube.com/watch?v=zCoiOgxCc8M" @change="urlVideoYoutube($event)" :required="this.inputRadio === 'id-youtube'" :validate="this.inputRadio === 'id-youtube'"/>
                  </div>
                </div>
              </li>
              <!------------------------->
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Publicação completa</div>
                  <quill-editor v-model="post.contentHtml" ref="refQuillEditor" :options="quillOptions"></quill-editor>
                </div>
              </li>
              <!-- <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Upload de Vídeos</div>
                  <div class="item-input-wrap">
                    <input type="file" @change="previewVideo($event)" accept="video/*" multiple/>
                  </div>
                </div>
              </li> -->
              <li class="list-select m-0">
                <a class="item-link smart-select smart-select-init" data-open-in="popup" data-searchbar="true"
                  data-searchbar-placeholder="Busque pelo o conteúdo...">
                  <select id="form_entry_item" name="tips" v-model="selectedTip">
                    <option :value="tip.id" v-for="(tip, index) in tips" :key="index">
                      {{ tip.name }}
                    </option>
                    <option value="new-content" data-option-image="static/icons/plus-green.png">
                      Criar novo conteúdo
                    </option>
                  </select>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title">Selecione o conteúdo</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div class="content-send">
              <button class="content-send-btn"> Cadastrar </button>
            </div>
          </form>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>

import { mapGetters } from 'vuex';
import firebase from "firebase";
import Dom7 from "dom7";

export default {
  data() {
    return {
      post: {
        tipId: "",
        postId: "",
        author: "",
        datePublication: "",
        userPhotoURL: "",
        picture: {},
        video: {},
        videoId: "",
        text: "",
        title: "",
        contentHtml: "",
      },
      selectedTip: null,
      imageData: null,
      videoData: null,
      quillOptions: {
        placeholder: 'Descreva as informações completa sobre a publicação. A publicação pode ter textos, imagens e urls de vídeos do youtube.',
        readonly: false,
      },
      inputRadio: 'image',
    };
  },
  computed: {
    ...mapGetters({
      tips: 'Tips/tips',
      user: 'user',
    }),
    ...mapGetters(['uuidv4',])
  },
  methods: {
    // formatDate(event) {
    //   event = new Date(event).toISOString().slice(0, 10);
    //   var date = event.split('-').reverse().join('/');
    //   this.post.datePublication = date;
    // },
    registerPost() {
      this.$store.commit('SET_IS_LOADING', true);

      if (this.post.contentHtml === ""){
        this.$f7.dialog.confirm('Você deve descrever a publicação completa.');
        this.$store.commit('SET_IS_LOADING', false);
        return false;
      }

      if (this.selectedTip === 'new-content' || this.selectedTip === null){
        this.$f7.dialog.confirm('Você deve selecionar um conteúdo ou criar um novo.');
        this.$store.commit('SET_IS_LOADING', false);
        return false;
      }

      var postRef = firebase.database().ref(`/tips/${this.selectedTip}/posts`);
      var keyPost = postRef.push();
      this.post.postId = keyPost.key;

      // SET NAME, ID USER, PHOTO URL (GOOGLE) AND USER ADMIN (TRUE OR FALSE)
      this.post.tipId = this.selectedTip;
      this.post.author = this.user.data.name;
      this.post.userId = this.user.data.id;
      this.post.userPhotoURL = this.user.data.photoURL;
      if (this.user.information[this.user.data.id].userAdmin){
        this.post.userAdmin = this.user.information[this.user.data.id].userAdmin;
      }

      //GET DATE NOW AND SET IN POST
      var date = new Date().toISOString().slice(0, 10);
      var dateFormated = date.split('-').reverse().join('/');
      this.post.datePublication = dateFormated;

      //UPLOAD IMAGE OR VIDEO 
      if (this.imageData && this.inputRadio === 'image'){
        const promises = [];
        //Get files
        for (var i = 0; i < this.imageData.length; i++) {
          var imageFile = this.imageData[i];
          promises.push(this.uploadImageAsPromise(imageFile));
        }
        Promise.all(promises).then((fileURLS)=>{
          //Once all the promises are resolved, you will get the urls in a array.
          for (var i = 0; i < fileURLS.length; i++){
            this.post.picture[i] = fileURLS[i];
          }
          this.registerPostFunction(keyPost);
        })
      }
      if (this.videoData && this.inputRadio === 'video'){
        const promises = [];
        //Get files
        for (var i = 0; i < this.videoData.length; i++) {
          var videoFile = this.videoData[i];
          promises.push(this.uploadVideoAsPromise(videoFile));
        }
        Promise.all(promises).then((fileURLS)=>{
          //Once all the promises are resolved, you will get the urls in a array.
          for (var i = 0; i < fileURLS.length; i++){
            this.post.video[i] = fileURLS[i];
          }
          this.registerPostFunction(keyPost);
        })
      } 
      else if (!this.imageData && !this.videoData ) {
        this.registerPostFunction(keyPost);
      }
      // if (this.imageData && this.videoData){
      //   const promises = [];
      //   const promisesVideo = [];
      //   //Get files
      //   for (var i = 0; i < this.imageData.length; i++) {
      //     var imageFile = this.imageData[i];
      //     promises.push(this.uploadImageAsPromise(imageFile));
      //   }
      //   Promise.all(promises).then((fileURLS)=>{
      //     //Once all the promises are resolved, you will get the urls in a array.
      //     for (let i = 0; i < fileURLS.length; i++){
      //       this.post.picture[i] = fileURLS[i];
      //     }
      //     for (let i = 0; i < this.videoData.length; i++) {
      //       var videoFile = this.videoData[i];
      //       promisesVideo.push(this.uploadVideoAsPromise(videoFile));
      //     }
      //     Promise.all(promisesVideo).then((fileURLS2)=>{
      //       //Once all the promises are resolved, you will get the urls in a array.
      //       for (var i = 0; i < fileURLS2.length; i++){
      //         this.post.video[i] = fileURLS2[i];
      //       }
      //       this.registerPostFunction(keyPost);
      //     })
      //   })
      // }
    },
    registerPostFunction(keyPost) {
      keyPost.set(this.post).then( resp => {
        // RESET VALUES OBJECT POST
        for (var postItens in this.post){
          if (postItens === 'picture' || postItens === 'video'){
            this.post[postItens] = {};
          } else {
            this.post[postItens] = '';
          }
        }
        // RESET VALUES VARIABLES
        this.imageData, this.videoData = null;

        this.$store.commit('SET_IS_LOADING', false);
        this.$f7.dialog.alert('Cadastro Realizado com Sucesso! &#128516;');
      }).catch((error) => {
        this.$store.commit('SET_IS_LOADING', false);
        console.error('Failed to create user', error);
        this.$f7.dialog.alert(error.message + ' Please try again.', '');
      });
    },
    previewImage($event) {
      this.imageData = $event.target.files;
    },
    previewVideo($event) {
      this.videoData = $event.target.files;
    },
    urlVideoYoutube(event) {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = event.target.value.match(regExp);
      if (match && match[2].length == 11) {
        console.log(match[2]);
        this.post.videoId = match[2];
      } else {
        console.log('URL DO YOUTUBE INVÁLIDA!');
        this.$f7.dialog.alert("URL DO YOUTUBE INVÁLIDA! &#128533;");
      }
    },
    contentScrolled(position) {
      var menuFooter = document.getElementById("menu-footer");
      if (position > 100) {
        menuFooter.classList.add("menu-footer-scrolled");
      } else {
        menuFooter.classList.remove("menu-footer-scrolled");
      }
    },
    async uploadImageAsPromise(imageFile) {
      // GENERATE NAME IMAGE RANDOM
      this.$store.commit('SET_UUIDV4','');
      var self = this;
      return new Promise(function (resolve, reject) {
        // REGISTER IMAGE STORAGE
        const storageRef = firebase.storage().ref(`/imagens/posts/${self.post.postId}/${self.uuidv4}`).put(imageFile);
        storageRef.on(
          "state_changed",
          function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          
          function error(err) {
            reject(err);
          },

          async function complete() {
            //The getDownloadURL returns a promise and it is resolved to get the image url.
            const imageURL = await storageRef.snapshot.ref.getDownloadURL();
            resolve(imageURL);
          }
        );
      })
    },
    async uploadVideoAsPromise(videoFile) {
      // GENERATE NAME IMAGE RANDOM
      this.$store.commit('SET_UUIDV4','');
      var self = this;
      return new Promise(function (resolve, reject) {
        // REGISTER IMAGE STORAGE
        const storageRef = firebase.storage().ref(`/videos/posts/${self.post.postId}/${self.uuidv4}`).put(videoFile);
        storageRef.on(
          "state_changed",
          function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          
          function error(err) {
            reject(err);
          },

          async function complete() {
            //The getDownloadURL returns a promise and it is resolved to get the image url.
            const videoURL = await storageRef.snapshot.ref.getDownloadURL();
            resolve(videoURL);
          }
        );
      })
    },
  },
  mounted() {
    var $$ = Dom7;
    var self = this;
    $$('#form_entry_item').on('change', function() {
      if (self.selectedTip === 'new-content'){
        self.selectedTip = null;
        self.$f7.dialog.confirm('Você será redirecionado para a página de "<b>Adicionar conteúdo</b>". <b>Para prosseguir clique em "OK"</b>.', function () {
          self.$f7router.navigate({
            name: 'register-tip',
          });
        });
      }     
    });
    this.$f7.$(".page-content").on("scroll", target => {
      this.contentScrolled(target.srcElement.scrollTop);
    });
  }
};
</script>
<style lang="scss">
.new-post {
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
.content-new-post {
  // padding-bottom: 100px;
  .content-form {
    // background: #fff;
    padding: 0px 0px 10px 0px;
    // box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    &-header {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 24px;
        text-align: center;
        font-family: "Font Medium";
        margin-bottom: 0;
        font-weight: normal;
      }
      img {
        max-width: 40px;
        margin-left: 15px;
      }
    }
    &-body {
      .list {
        margin-top: 0;
      }
      .item-input {
        padding-bottom: 20px;
      }
      .content-send {
        padding: 0px 15px;
        &-btn {
          height: 50px;
          width: 100%;
          max-width: 330px;
          font-size: 20px;
          font-family: 'Font Light';
          color: #fff !important;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom, #509ee0, #4169E1);
          border: 0;
          border-radius: 30px;
          margin: 50px auto 0px auto;
          transition: 500ms;
          &:hover,&:focus {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
      input[type="file"]{
        width: 250px;
        @media (max-width: 359px){
          width: 220px;
        }
      }
      .ql-toolbar {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }
      .ql-container {
        height: 250px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }
  }
}
.smart-select-page {
  .navbar {
    &-bg {
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
    &-inner {
      padding-left: 20px;
      .title {
        font-size: 18px;
        font-family: "Font Regular";
        color: #fff;
        margin: 0;
      }
      .icon-back {
        color: #fff;
      }
      .popup-close {
        margin: 0;
        padding: 0px !important;
        &::before {
          z-index: 2;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          background: url('../static/icons/close.svg');
          background-color: #4169E1;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 100%;
        }
      }
    }
    .subnavbar::before {
      height: 1px;
      background: rgba(209, 209, 209, 0.3);
    }
    .searchbar {
      &-input-wrap {
        input {
          height: 50px;
          width: 100%;
          border: 1px solid hsla(0, 0%, 82%, 0.3);
          outline: none;
          font-size: 16px;
          font-family: 'Font Regular';
          color: rgba(6, 13, 26, 0.4);
        }
      }
    }
  }
  .page-content {
    background: #F8F8F8;
    .item-title {
      font-family: 'Font Regular';
    }
  }
  .list li:last-child {
    .item-inner {
      margin-left: 0px !important;
    }
  }
  .item-media {
    min-width: initial !important;
    position: absolute;
    right: 15px;
  }
}
.list-select {
  &::after {
    content: '';
    position: absolute;
    background-color: var(--f7-list-item-border-color);
    display: block;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    height: 1px;
    width: calc(100% - 30px);
    margin-left: calc(var(--f7-list-item-padding-horizontal) + var(--f7-safe-area-left));
  }
  .item-title {
    font-family: 'Font Light';
  }
  .item-after {
    font-family: 'Font Medium';
    font-style: italic;
  }
}
.unique-element {
  outline: none;
  height: 150px;
  overflow-y: scroll;
}
.quill-editor {
  width: 100%;
}
.textarea-default {
  min-height: 70px !important;
  textarea {
    height: 100%;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    font-style: italic;
  }
}
.input-default-video {
  input {
    font-size: 13px !important;
    font-family: Helvetica, Arial, sans-serif;
    font-style: italic;
  }
}
.content-inputs-radio {
  margin: 15px 0px;
  display: flex;
  &-element {
    display: flex;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    p {
      font-size: 13px;
      font-family: Helvetica, Arial, sans-serif;
      font-style: italic;
      margin-left: 10px;
    }
  }
}
.disabled-div {
  display: none !important;
}
.active-div {
  display: block !important;
}
</style>