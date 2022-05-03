<template>
  <f7-page class="edit-user" name="edit-user">
    <f7-navbar>
      <a class="link" href="/profile/">
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
        <p>Editar dados do usuário</p>
      </a>
    </f7-navbar>
    <f7-block class="content-edit-user">
      <form @submit.prevent="updateUser()" class="list no-hairlines-md">
        <ul>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">Nome</div>
              <div class="item-input-wrap">
                <input type="text" v-model="userClient.name" placeholder="Seu nome" required validate/>
                <span class="input-clear-button"></span>
                <div class="item-input-info">Nome completo por favor</div>
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">E-mail</div>
              <div class="item-input-wrap">
                <input type="email" v-model="userClient.email" placeholder="Seu e-mail" required validate/>
                <span class="input-clear-button"></span>
                <div class="item-input-info">Seu e-mail pessoal</div>
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">Telefone</div>
              <div class="item-input-wrap">
                <the-mask 
                    name="mobile"
                    v-model="userClient.telphone"
                    :mask="['(##)#-####-####']" 
                    placeholder="Seu número de telefone"
                    type="text" :required="true" 
                />  
                <span class="input-clear-button"></span>
                <div class="item-input-info">Número do telefone celular com ddd</div>
              </div>
            </div>
          </li>
        </ul>
        <div class="content-send">
          <button class="content-send-btn"> Editar </button>
        </div>
      </form>
    </f7-block>
  </f7-page>
</template>
<script>
import { TheMask } from "vue-the-mask";
import firebase from "firebase";
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      userClient: this.$store.state.user.information[this.$store.getters.editUser],
    };
  },
  computed: {
    ...mapGetters(['user', 'editUser']),
  },
  components: {
    TheMask,
  },
  methods: {
    updateUser() {
      var self = this;
      this.$f7.dialog.password('Digite a sua senha para confirmar as alterações.', function (password) {
        self.$store.commit('SET_IS_LOADING', true);

        var user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email, 
          password,
        );

        user.reauthenticateWithCredential(credential).then(function() {
          console.log('Usuário credenciado com sucesso!')
        }).catch(function(error) {
          console.log(error);
          self.$store.commit('SET_IS_LOADING', false);
        });
        
        user.updateEmail(self.userClient.email).then(function() {
          console.log('Sucess: Email atualizado com sucesso!');
        }).catch(function(error) {
          console.log('Error:', error);
          self.$store.commit('SET_IS_LOADING', false);
        });

        user.updateProfile({
          displayName: self.userClient.name,
        }).then(function() {
          console.log('Sucess: Nome atualizado com sucesso!');
          self.$store.dispatch("fetchUser", user);
        }).catch(function(error) {
          console.log('Error:', error);
          self.$store.commit('SET_IS_LOADING', false);
        });

        self.$store.commit('SET_IS_LOADING', false);
        self.updateUserTable() 
      });
    },
    updateUserTable() {
      this.$store.commit('SET_IS_LOADING', true);

      var userRef = firebase.database().ref('/user');
      this.userClient.idUser = this.user.data.id;

      // UPDATE REALTIME DATABASE USER CLIENT
      userRef.child(this.editUser).update(this.userClient).then(() => {

        // REINIT VALUES
        for (var key in this.userClient){
          if (this.userClient[key] != this.userClient['idUser']){
            this.userClient[key] = '';
          }
        }

        this.$store.commit('SET_IS_LOADING', false);
        this.$f7.dialog.alert("Seus dados foram atualizados com Sucesso! &#128516;");
        this.$f7router.navigate("/profile/");
      }).catch((error) =>{
        console.log('ERROR:', error);
        this.$store.commit('SET_IS_LOADING', false);
      });
    }
  },
};
</script>
<style lang="scss">
.edit-user {
  padding: 0px 0px 66px 0px;
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
.content-edit-user {
  .item-input {
    padding-bottom: 20px;
  }
  .content-send {
    padding: 0px 15px;
    &-btn {
      height: 50px;
      width: 100%;
      font-size: 20px;
      font-family: 'Font Bold';
      color: #fff !important;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to right, #99d281, #50a773);
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
</style>