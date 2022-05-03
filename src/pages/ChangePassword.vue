<template>
  <f7-page class="change-password" name="change-password">
    <f7-navbar>
      <a class="link" href="/login/" v-if="!user.loggedIn">
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
        <p>Alterar Senha</p>
      </a>
      <a class="link" href="/profile/" v-else>
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
        <p>Alterar Senha</p>
      </a>
    </f7-navbar>
    <section class="content-change-password">
      <div class="content-change-password-header">
        <h2>Alterar Senha</h2>
      </div>
      <form @submit.prevent="changePassword()" class="content-change-password-body">
        <div class="modal-body-inputs">
          <div class="content-inputs">
            <label>E-mail</label>
            <input
              v-model="email"
              type="email"
              name="email"
              value=""
              placeholder="lucas1234@gmail.com"
            />
            <span class="item-input-info">Introduza o e-mail utilizado para efetuar login</span>
          </div>
        </div>
        <div class="modal-body-btns">
          <button class="modal-body-btns-change-password">Alterar</button>
        </div>
        <div class="modal-body-inputs-links" v-if="!user.loggedIn">
          <p>
            Já tem uma conta?
            <a href="/login/">Efetuar Login</a>
          </p>
        </div>
      </form>
    </section>
  </f7-page>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    changePassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.$f7.dialog.alert(`O link de redifinição da senha, foi enviado para o seu email:${this.email}.`);
          this.email = '';
        })
        .catch((error) => {
          this.$f7.dialog.alert("E-mail inválido! &#128533;");
        });
    },
  },
};
</script>

<style lang="scss">
.change-password {
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
.content-change-password {
  padding: 30px 15px 100px 15px;
  &-header {
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
      text-align: center;
      font-family: "Font Medium";
      font-weight: normal;
      margin-bottom: 0;
    }
  }
  &-body {
    .modal-body {
      padding: 0px;
      &-inputs {
        .content-inputs {
          width: 100%;
          margin-bottom: 30px;
          position: relative;
          label {
            display: block;
            font-size: 17px;
            font-family: "Font Medium";
            color: #000;
            font-weight: normal;
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
          &-text {
            font-size: 12px;
            color: rgba(0,0,0,0.45);
          }
        }
      }
      &-btns {
        display: flex;
        align-items: flex-start;
        width: 100%;
        margin-top: 60px;
        &-change-password {
          height: 50px;
          width: 200px;
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
    }
  }
}
</style>