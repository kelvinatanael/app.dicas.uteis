<template>
  <f7-app :params="f7params">
    <!-- Left panel with reveal effect-->
    <f7-panel left cover>
      <f7-view>
        <f7-page>
          <f7-navbar>
            <a class="link panel-close" href="#">
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
              <p>Menu</p>
            </a>
          </f7-navbar>
          <f7-block class="content-menu">
            <a class="content-menu-links panel-close" data-view=".view-main" href="/profile/">
              <div class="content-menu-links-text">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    class="st0"
                    d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 15.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z"
                  ></path>
                </svg>
                <p> Perfil </p>
              </div>
              <div class="content-links-svg">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
              </div>
            </a>
            <a class="content-menu-links panel-close" data-view=".view-main" href="/wishlist/">
              <div class="content-menu-links-text">
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" class=""></path></svg>
                <p> Favoritos </p>
              </div>
              <div class="content-links-svg">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
              </div>
            </a>
            <a class="content-menu-links panel-close" data-view=".view-main" href="/contact/">
              <div class="content-menu-links-text">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M1010 5110 c-41 -10 -98 -68 -106 -108 -5 -27 -11 -29 -96 -45 -215
                  -41 -375 -117 -504 -239 -192 -183 -285 -429 -301 -798 -9 -229 7 -392 92
                  -900 19 -118 44 -271 56 -340 74 -462 218 -710 454 -784 l58 -19 -7 -101 c-13
                  -198 -68 -467 -172 -827 -3 -10 -24 -22 -51 -28 -121 -31 -231 -122 -286 -238
                  l-32 -68 -3 -281 c-4 -352 -16 -327 157 -333 140 -4 184 2 212 30 25 25 24 69
                  -1 97 -19 20 -31 22 -121 22 l-100 0 3 218 c3 246 8 263 85 339 79 76 43 73
                  893 73 l757 0 62 -31 c33 -17 72 -45 86 -63 20 -27 265 -517 265 -532 0 -2
                  -375 -4 -834 -4 l-835 0 -20 -26 c-27 -35 -26 -57 3 -91 l24 -28 906 0 905 0
                  22 22 c13 13 22 33 21 50 -1 34 -280 619 -326 683 -42 58 -116 114 -188 142
                  -32 13 -58 29 -58 36 0 27 61 265 75 296 9 18 31 47 49 65 l34 33 68 -56 c38
                  -31 105 -74 149 -96 134 -66 172 -73 426 -78 l227 -4 18 -40 c23 -51 101 -121
                  152 -136 23 -7 104 -12 198 -12 180 0 212 9 279 75 53 53 75 107 75 185 0 120
                  -74 223 -184 255 -68 20 -294 20 -362 0 -63 -18 -126 -72 -154 -130 l-22 -45
                  -197 0 c-145 0 -212 4 -256 15 -68 18 -155 56 -202 88 l-31 21 86 18 c245 49
                  437 228 497 463 9 33 20 114 25 180 6 69 15 125 23 132 6 7 72 35 146 62 83
                  31 145 61 164 78 61 57 82 147 52 219 -8 19 -90 146 -183 282 -229 335 -217
                  308 -217 467 0 192 -7 181 122 188 133 8 202 26 318 82 264 128 426 384 427
                  675 0 127 -19 214 -71 324 -86 182 -228 316 -416 391 -134 53 -155 54 -1002
                  55 l-783 0 -6 24 c-9 36 -67 86 -110 97 -48 11 -386 10 -434 -1z m400 -270 c0
                  -87 4 -129 15 -149 23 -46 66 -54 109 -20 24 19 26 26 26 95 l0 75 813 -3
                  c809 -3 812 -3 877 -25 195 -67 350 -226 410 -418 32 -103 30 -243 -4 -350
                  -60 -187 -201 -330 -396 -399 l-85 -31 -742 -3 -742 -3 -43 22 c-28 15 -68 24
                  -115 27 l-73 5 0 192 0 192 40 12 c22 6 44 20 50 31 5 10 10 83 10 162 0 168
                  -7 188 -69 188 -62 0 -75 -24 -79 -141 l-4 -99 -179 0 -179 0 0 380 0 380 180
                  0 180 0 0 -120z m-510 -376 c0 -221 4 -362 10 -374 6 -11 28 -25 50 -31 l40
                  -12 0 -194 0 -193 -38 0 c-93 0 -204 -54 -247 -119 -41 -62 -47 -134 -43 -583
                  3 -456 2 -447 69 -523 39 -44 119 -85 167 -85 l34 0 -4 -98 c-3 -88 -6 -103
                  -31 -141 -41 -62 -118 -96 -198 -87 -125 13 -221 94 -295 250 -56 119 -95 275
                  -134 541 -17 116 -44 284 -61 375 -103 574 -88 955 47 1229 82 166 235 295
                  419 355 54 17 169 43 198 45 16 1 17 -22 17 -355z m410 -609 l0 -195 -80 0
                  -80 0 0 195 0 195 80 0 80 0 0 -195z m283 -365 c15 -12 31 -38 37 -58 13 -50
                  13 -804 0 -854 -12 -42 -52 -78 -86 -78 l-24 0 0 273 c0 263 -1 274 -22 317
                  -42 82 -53 85 -266 85 -181 0 -188 -1 -221 -24 -66 -47 -71 -73 -71 -378 l0
                  -273 -24 0 c-34 0 -74 36 -86 78 -13 48 -14 805 0 852 5 19 22 45 37 57 28 23
                  31 23 364 23 324 0 337 -1 362 -20z m1224 -102 c-14 -118 -4 -253 24 -323 14
                  -34 107 -181 207 -327 100 -146 182 -276 182 -287 0 -28 -27 -43 -160 -91
                  -203 -73 -222 -96 -238 -305 -13 -160 -38 -243 -96 -323 -97 -132 -220 -192
                  -422 -206 l-81 -6 -311 404 c-172 223 -315 411 -318 419 -3 10 5 18 24 25 44
                  15 108 77 134 130 l23 47 0 458 0 457 521 0 520 0 -9 -72z m-1447 -623 l0
                  -265 -140 0 -140 0 0 265 0 265 140 0 140 0 0 -265z m375 -857 c187 -242 341
                  -445 343 -449 2 -5 -16 -28 -40 -52 -68 -69 -95 -130 -137 -309 l-37 -163
                  -617 -3 c-448 -1 -617 1 -617 9 0 6 18 77 40 158 73 268 116 497 127 675 l6
                  102 47 17 c146 52 230 182 230 356 0 48 3 91 7 94 3 4 74 7 157 7 l151 0 340
                  -442z m1825 -633 c42 -21 60 -53 60 -103 0 -37 -6 -50 -34 -78 l-34 -34 -146
                  0 c-145 0 -146 0 -176 28 -60 53 -47 157 23 187 46 20 268 20 307 0z"/>
                  <path d="M2185 2145 c-29 -28 -31 -60 -9 -135 30 -103 149 -190 259 -190 95 0
                  215 75 215 134 0 33 -41 76 -72 76 -13 0 -43 -14 -67 -30 -52 -35 -93 -38
                  -139 -10 -33 21 -62 71 -62 110 0 29 -44 70 -75 70 -14 0 -37 -11 -50 -25z"/>
                  <path d="M3870 3065 c-62 -19 -128 -78 -156 -139 -22 -47 -24 -63 -24 -223 0
                  -160 2 -175 20 -193 25 -25 71 -26 101 -1 23 19 24 26 29 189 5 185 9 197 68
                  221 19 8 171 11 510 9 l482 -3 32 -33 33 -32 3 -435 c2 -377 1 -439 -13 -465
                  -32 -62 -5 -60 -765 -58 l-691 3 160 124 c163 126 187 153 170 198 -11 31 -54
                  56 -81 49 -24 -6 -403 -297 -425 -325 -39 -50 -20 -140 36 -178 l34 -23 752 0
                  c855 0 812 -4 897 81 79 79 79 84 76 605 l-3 449 -31 55 c-33 60 -99 112 -162
                  130 -23 6 -221 10 -522 9 -385 0 -494 -3 -530 -14z"/>
                  <path d="M4107 2620 c-34 -27 -37 -80 -7 -110 19 -19 33 -20 309 -20 l290 0
                  20 26 c26 33 27 65 2 95 l-19 24 -284 3 c-277 3 -285 2 -311 -18z"/>
                  <path d="M4102 2277 c-31 -33 -29 -80 4 -106 26 -20 39 -21 306 -21 l279 0 24
                  25 c14 13 25 36 25 50 0 14 -11 37 -25 50 l-24 25 -284 0 c-283 0 -284 0 -305
                  -23z"/>
                  </g>
                </svg>
                <p> Contatos </p>
              </div>
              <div class="content-links-svg">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
              </div>
            </a>
            <a class="content-menu-links panel-close" data-view=".view-main" @click="signOutUser()" >
              <div class="content-menu-links-text">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="sign-out"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"
                  class=""
                ></path>
                </svg>
                <p> Sair </p>
              </div>
              <div class="content-links-svg">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
              </div>
            </a>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/">
    </f7-view>
    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              :value="username"
              @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button
              title="Sign In"
              @click="alertLoginData"
            ></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br />Click "Sign In" to close
              Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    <!-- COMPONENT LOADING -->
    <loading />
    <!------------------------>
    <!-- MENU FOOTER -->
    <menu-footer v-if="this.f7Start" />
    <!------------------------>
  </f7-app>
</template>
<script>
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import cordovaApp from "../js/cordova-app.js";
import routes from "@/router/routes.js";
import loading from "@/components/loading.vue";
import menuFooter from "@/components/menu-footer.vue";
import firebase from "firebase";


export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        id: "com.app.dicas.uteis", // App bundle ID
        name: "Dicas Úteis", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes,
        // view:{
        //   pushState: true,
        //   pushStateSeparator: '#',
        //   pushStateOnLoad: false
        // }, 

        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen data
      username: "",
      password: "",
      f7Start: false,
    };
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert(
        "Username: " + this.username + "<br>Password: " + this.password,
        () => {
          this.$f7.loginScreen.close();
        }
      );
    },
    // LOGOUT USER FIREBASE
    signOutUser() {
      this.$store.commit('SET_IS_LOADING', true);
      firebase.auth().signOut()
        .then(() => {
          this.$store.commit('SET_IS_LOADING', false);
          this.$f7ready(($f7) => {$f7.views.main.router.navigate({
            name: 'login',
          })});
        }).catch((error) => {
          this.$store.commit('SET_IS_LOADING', false);
          console.error("Failed to login user", error);
        });
    },
    ////////////////////////

    // contentScrolled(position) {
    //   var menuFooter = document.getElementById("menu-footer");
    //   if (position > 100) {
    //     menuFooter.classList.add("menu-footer-scrolled");
    //   } else {
    //     menuFooter.classList.remove("menu-footer-scrolled");
    //   }
    // },
  },
  components: {
    loading,
    menuFooter
  },
  computed: {
    f7Ready() {
      return this.$f7;
    }
  },
  mounted() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
      // VISIBLE FOOTER MENU
      this.f7Start = true;
    });
    // this.$f7.$(document).on("scroll", ".page-content", target => {
    //   this.contentScrolled(target.srcElement.scrollTop);
    //   console.log('teste');
    // });
  },
};
</script>
<style lang="scss">
button {
  position: relative;
  outline: none;
}
.vld-overlay.is-full-page {
  z-index: 999999;
  .vld-icon svg{
    stroke: #4169E1;
  }
}
@media (max-width: 576px){
  #onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right {
    right: 5px !important;
  }
  #onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-button {
    width: 26px !important;
    height: 26px !important;
  }
}
.panel {
  width: 100%;
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
  .page-content {
    background: #F0F8FF;
  }
}
.content-menu {
  padding: 0;
  margin: 20px 15px;
  &-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid rgba(209, 209, 209, 0.8);
    background: #fff;
    margin-bottom: 10px;
    &-text {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #000;
      font-family: 'Font Regular';
      margin-bottom: 0;
      svg {
        width: 25px;
        height: 25px;
        fill: #3f9bdd;
        margin-right: 10px;
      }
    }
    .content-links-svg {
      width: 30px;
      height: 30px;
      background: linear-gradient(to bottom, #509ee0, #4169E1);
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        fill: #fff;
        width: 15px;
        height: 15px;
      }
    }
  }
}
.m-0 {
  margin: 0 !important;
}
.pb-0 {
  padding-bottom: 0px !important;
}
.content-not-default {
  text-align: center;
  padding: 50px 0px;
  h2 {
    font-size: 24px;
    font-family: 'Font Light';
    color: #000;
    margin-bottom: 0;
  }
  img {
    margin-top: 30px;
    max-width: 120px;
  }
}
</style>