<template>
  <f7-page class="register-tips" name="register-tips">
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
        <p>Adicionar Contéudo</p>
      </a>
    </f7-navbar>
    <f7-block class="content-register-tips">
      <div class="content-form">
        <div class="content-form-header">
          <h2>Nova Dica</h2>
          <img class="img-fluid" src="static/icons/plus-tip.png" alt="image new tip" title="image new tip" />
        </div>
        <div class="content-form-body list">
          <form @submit.prevent="registerTip()" class="list no-hairlines-md">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Nome do conteúdo</div>
                  <div class="item-input-wrap">
                    <input type="text" name="name-tip" v-model="tip.name" value="" placeholder="Descreva o nome do conteúdo" required/>
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Imagem de capa do contéudo</div>
                  <div class="item-input-wrap">
                    <input type="file" @change="previewImage($event)" accept="image/*" required/>
                  </div>
                </div>
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

export default {
  data() {
    return {
      tip: {
        id: "",
        name: "",
        picture: {},
      },
      imageData: null,
    };
  },
  computed: {
    ...mapGetters(['uuidv4',])
  },
  methods: {
    registerTip() {
      this.$store.commit('SET_IS_LOADING', true);

      var tipsRef = firebase.database().ref('/tips');
      var keyTip = tipsRef.push();
      this.tip.id = keyTip.key;

      //UPLOAD IMAGE TIP
      if (this.imageData){
        const promises = [];
        //Get files
        for (var i = 0; i < this.imageData.length; i++) {
          var imageFile = this.imageData[i];
          promises.push(this.uploadImageAsPromise(imageFile));
        }
        Promise.all(promises).then((fileURLS)=>{
          //Once all the promises are resolved, you will get the urls in a array.
          for (var i = 0; i < fileURLS.length; i++){
            this.tip.picture[i] = fileURLS[i];
          }
          this.registerTipFunction(keyTip);
        })
      }
    },
    registerTipFunction(keyTip) {
      keyTip.set(this.tip).then( resp => {

        // RESET VALUES
        this.tip.id = "";
        this.tip.name = "";
        this.tip.picture = {};
        this.imageData = null;

        this.$store.commit('SET_IS_LOADING', false);
        this.$f7.dialog.alert('Cadastro de Conteúdo Realizado com Sucesso! &#128516;');
      }).catch((error) => {
        this.$store.commit('SET_IS_LOADING', false);
        console.error('Failed to create user', error);
        this.$f7.dialog.alert(error.message + ' Please try again.', '');
      });
    },
    previewImage($event) {
      this.imageData = $event.target.files;
    },
    async uploadImageAsPromise(imageFile) {
      // GENERATE NAME IMAGE RANDOM
      this.$store.commit('SET_UUIDV4','');
      var self = this;
      return new Promise(function (resolve, reject) {
        // REGISTER IMAGE STORAGE
        const storageRef = firebase.storage().ref(`/imagens/tips/${self.tip.id}/${self.uuidv4}`).put(imageFile);
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
  },
};
</script>
<style lang="scss">
.register-tips {
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
.content-register-tips {
  padding-bottom: 100px;
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
        max-width: 30px;
        max-height: 40px;
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
          margin: 30px auto 0px auto;
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
</style>