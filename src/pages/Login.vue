<template>
  <f7-page class="login" name="login">
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
        <p>Login</p>
      </a>
    </f7-navbar>
    <section class="content-login">
      <div class="content-login-header">
        <h2>Realizar Login</h2>
      </div>
      <form @submit.prevent="loginUser()" class="content-login-body">
        <div class="modal-body-inputs">
          <div class="content-inputs">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              v-model="email"
              value=""
              placeholder="lucas1234@gmail.com"
              required
            />
          </div>
          <div class="content-inputs">
            <label>Senha</label>
            <vue-password
              :disableStrength="true"
              v-model="password"
              name="password"
              value=""
              placeholder="********"
              required
            />
            <a class="modal-body-btns-password link" href="/change-password/">
              Esqueceu-se da senha?
            </a>
          </div>
        </div>
        <div class="modal-body-btns">
          <button class="modal-body-btns-login">Login</button>
        </div>
        <div class="modal-body-sociais">
          <p>Entrar com</p>
          <div class="modal-body-sociais-links">
            <a class="btn-google" @click="loginGoogle()">
              <img
                class="img-fluid"
                src="static/icons/logo-google.png"
                alt="logo google"
                title="logo google"
              />
              <p>Google</p>
            </a>
            <!-- <a class="link">
              <img
                class="img-fluid"
                src="static/icons/logo-facebook.png"
                alt="logo facebook"
                title="logo facebook"
              />
            </a> -->
          </div>
        </div>
        <div class="modal-body-inputs-links">
          <p>
            Não tem conta?
            <a href="/register/">Crie o seu registro</a>
          </p>
        </div>
      </form>
    </section>
  </f7-page>
</template>

<script>
import firebase from "firebase";
import VuePassword from 'vue-password';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: "",
      password: "",
      user: {
        name: '',
        email: '',
        telphone: '',
        idUser: '',
      },
    };
  },
  components: {
    VuePassword
  },
  computed: {
    ...mapGetters({
      adminUser: 'adminUser'
    }),
  },
  methods: {
    // LOGIN USER FIREBASE
    loginUser() {
      this.$store.commit('SET_IS_LOADING', true);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          this.$store.commit('SET_IS_LOADING', false);
          this.$f7router.navigate("/");
        })
        .catch((error) => {
          this.$store.commit('SET_IS_LOADING', false);
          console.error("Failed to login user", error);
          this.$f7.dialog.alert(
            "E-mail ou Senha do usuário inválida! &#128533;"
          );
        });
    },
    //LOGIN GOOGLE
    loginGoogle(){
      this.$store.commit('SET_IS_LOADING', true);

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(() => {
        return firebase.auth().getRedirectResult();
      }).then((result) => {

        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;


        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.telphone = user.phoneNumber;
        this.user.idUser = user.uid;
        this.user.picture = user.photoURL;

        var userRef = firebase.database().ref(`/user/${this.user.idUser}`);

        userRef.update(this.user).then( resp => {
          this.$store.commit('SET_IS_LOADING', false);
          this.$f7router.navigate("/");
        }).catch((error) => {
          console.error('Failed to create user', error);
          this.$f7.dialog.alert(error.message + ' Please try again.', '');
        });

        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        this.$store.commit('SET_IS_LOADING', false);
        console.error("Failed to login user", error);
        // ...
      });
    }
  },
};
</script>

<style lang="scss">
.login {
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
.content-login {
  padding: 30px 15px 100px 15px;
  &-header {
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
      text-align: center;
      font-family: "Font Regular";
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }
  &-body {
    .modal-body {
      padding: 0px;
      &-inputs {
        .content-inputs {
          width: 100%;
          &:first-of-type {
            margin-right: 0;
            margin-bottom: 30px;
          }
          label {
            display: block;
            font-size: 17px;
            font-family: "Font Medium";
            color: #000;
            margin-bottom: 10px;
            line-height: 1;
          }
          input {
            background: 0;
            border: 0;
            border-bottom: 1px solid #104069;
            padding-bottom: 5px;
            font-size: 16px;
            font-family: "Font Light";
            color: #000;
            width: 100%;
            &::-webkit-input-placeholder {
              /* Chrome/Opera/Safari */
              font-size: 16px;
              font-family: "Font Light";
              color: var(--f7-input-info-text-color);
            }
            &::-moz-placeholder {
              /* Firefox 19+ */
              font-size: 16px;
              font-family: "Font Light";
              color: var(--f7-input-info-text-color);
            }
            &:-ms-input-placeholder {
              /* IE 10+ */
              font-size: 16px;
              font-family: "Font Light";
              color: var(--f7-input-info-text-color);
            }
            &:-moz-placeholder {
              /* Firefox 18- */
              font-size: 16px;
              font-family: "Font Light";
              color: var(--f7-input-info-text-color);
            }
          }
        }
        .VuePassword__Toggle {
          align-items: flex-start;
        }
      }
      &-btns {
        display: flex;
        align-items: flex-start;
        width: 100%;
        padding-top: 30px;
        margin-top: 0px;
        &-login {
          height: 50px;
          width: 170px;
          margin: 0 auto;
          border-radius: 30px;
          border: 0;
          background: linear-gradient(to bottom, #509ee0, #4169E1);
          font-size: 20px;
          font-family: "Font Light";
          color: #fff !important;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 500ms;
          outline: none;
          &:hover,
          &:focus {
            cursor: pointer;
            opacity: 0.8;
          }
        }
        &-password {
          font-size: 13px;
          font-family: "Font Light";
          color: green;
          display: flex;
          justify-content: flex-end;
          transition: 500ms;
          width: 100%;
          margin-top: 12px;
          &:hover,
          &:focus {
            cursor: pointer;
            opacity: 0.6;
          }
        }
      }
      &-inputs-links {
        margin-top: 50px;
        text-align: center;
        p {
          font-size: 13px;
          font-family: "Font Light";
          color: #000;
          margin-bottom: 0px;
          a {
            font-size: 13px;
            font-family: "Font Bold";
            color: #000 !important;
            transition: 500ms;
            text-decoration: none !important;
            &:hover,
            &:focus {
              cursor: pointer;
              color: #000 !important;
              text-decoration: none !important;
              opacity: 0.8;
            }
          }
        }
      }
      &-sociais {
        text-align: center;
        padding-top: 40px;
        p {
          font-size: 14px;
          font-family: "Font Bold";
          color: #104069;
          margin-bottom: 0;
          text-transform: uppercase;
        }
        &-links {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 13px;
          .btn-google {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 110px;
            background: #fff;
            border-radius: 30px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            padding: 0px 30px;
            p {
              font-size: 16px;
              font-family: 'Font Medium';
              color: #707070;
              margin-left: 10px;
              text-transform: initial;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>