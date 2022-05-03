<template>
  <f7-page name="register-client" class="register-client">
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
        <p>Registro</p>
      </a>
    </f7-navbar>
    <section class="content-registration-client">
      <div class="content-form-client">
        <div class="content-form-client-header">
          <h2>Cadastre-se</h2>
        </div>
        <div class="content-form-client-body list">
          <form @submit.prevent="registerUser()" class="list no-hairlines-md">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-floating-label">Nome</div>
                  <div class="item-input-wrap">
                    <input type="text" v-model="user.name" placeholder="Seu nome" required validate/>
                    <span class="input-clear-button"></span>
                    <div class="item-input-info">Nome completo por favor</div>
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-floating-label">E-mail</div>
                  <div class="item-input-wrap">
                    <input type="email" v-model="user.email" placeholder="Seu e-mail" required validate/>
                    <span class="input-clear-button"></span>
                    <div class="item-input-info">Seu e-mail pessoal</div>
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Senha</div>
                  <div class="item-input-wrap">
                    <vue-password name="password" @input="updateStrength" v-model="user.password" :strength="strength" minlength="8" placeholder="Sua senha" required validate />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Confirmar Senha</div>
                  <div class="item-input-wrap">
                    <vue-password :disableStrength="true" name="confirm_password" v-model="user.confirmPassword" minlength="8" placeholder="Confirmar sua senha" required validate />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-floating-label">Telefone</div>
                  <div class="item-input-wrap">
                    <the-mask 
                        name="mobile"
                        v-model="user.telphone"
                        :mask="['(##)#-####-####']" 
                        placeholder="Seu número de telefone"
                        type="text" :required="true" :masked="true"
                    />  
                    <span class="input-clear-button"></span>
                    <div class="item-input-info">Número do telefone celular com ddd + dígito(9) </div>
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
    </section>
  </f7-page>
</template>

<script>
import {TheMask} from 'vue-the-mask';
import firebase from "firebase";
import VuePassword from 'vue-password';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        telphone: '',
        idUser: '',
      },
      strength: 0,
      rulesPassword: [],
    }
  },
  components: {
    TheMask,
    VuePassword
  },
  methods: {
    registerUser() {
      this.$store.commit('SET_IS_LOADING', true);
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((res) =>{
        this.user.idUser = firebase.auth().currentUser.uid;
        var userRef = firebase.database().ref(`/user/${this.user.idUser}`);
        res.user.updateProfile({
          displayName: this.user.name
        })
        
        // NOT SAVE PASSWORD BD
        this.user.password = '',
        this.user.confirmPassword = '',

        userRef.set(this.user).then( resp => {
          // RESET VALUES OBJECT USER
          this.user.name = '',
          this.user.email = '',
          this.user.telphone = ''
          this.user.idUser = ''

          firebase.auth().signOut();

          this.$store.commit('SET_IS_LOADING', false);
          
          this.$f7.dialog.alert('Cadastro Realizado com Sucesso! &#128516;');

          this.$f7router.navigate('/login/');
        }).catch((error) => {
          console.error('Failed to create user', error);
          this.$f7.dialog.alert(error.message + ' Please try again.', '');
        });
      }).catch((error) => {
        console.error('Failed to create user', error);
        this.$f7.dialog.alert(error.message + ' Please try again.', '');
      });
    },
    updateStrength(password) {
      if (password.length > 3) {
        if (
          password.match(/[a-z]+/) &&
          this.rulesPassword.indexOf("letter_lower") < 0
        ) {
          this.strength += 1;
          this.rulesPassword.push("letter_lower");
        }
        if (
          password.match(/[A-Z]+/) &&
          this.rulesPassword.indexOf("letter_upper") < 0
        ) {
          this.strength += 1;
          this.rulesPassword.push("letter_upper");
        }
        if (
          password.match(/[0-9]+/) &&
          this.rulesPassword.indexOf("number") < 0
        ) {
          this.strength += 1;
          this.rulesPassword.push("number");
        }
        if (
          password.match(/[$@#&!]+/) &&
          this.rulesPassword.indexOf("special") < 0
        ) {
          this.strength += 1;
          this.rulesPassword.push("special");
        }
      }

      if (this.user.password == '') {
        this.strength = 0;
        this.rulesPassword = [];
      }
    },
  }
};
</script>

<style lang="scss">
.register-client {
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
.content-registration-client {
  padding: 30px 15px 100px 15px;
  .content-form-client {
    background: #fff;
    padding: 30px 15px 10px 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    &-header {
      text-align: center;
      h2 {
        font-size: 24px;
        text-align: center;
        font-family: "Font Medium";
        margin-bottom: 0;
        font-weight: normal;
      }
    }
    &-body {
      .item-input {
        padding-bottom: 20px;
      }
      .content-send {
        padding: 0px 15px;
        &-btn {
          height: 50px;
          width: 100%;
          font-size: 20px;
          font-family: 'Font Light';
          color: #fff !important;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom, #509ee0, #4169E1);
          border: 0;
          border-radius: 30px;
          transition: 500ms;
          margin-top: 50px;
          &:hover,&:focus {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
.md .item-input:not(.item-input-outline) .item-input-wrap:after,
.md .input:not(.input-outline):after {
  content: "";
  transform: initial;
}
.VuePassword__Toggle {
  margin-right: 0px;
  width: initial;
}
.VuePassword__Container {
  text-align: left;
}
</style>