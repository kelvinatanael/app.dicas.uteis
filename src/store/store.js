import Vue from 'vue'
import Vuex from 'vuex'
import Tips from './modules/Tips'
import firebase from 'firebase/app'


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Tips
  },
	state: {
    isLoading: false,
		user: {
			loggedIn: false,
      data: null,
      typeUser: null,
      information: null,
    },
    wishlistUser: [],
    editUser: null,
    searchTips: null,
    uuidv4: null,
    adminUser: {},
	},
	getters: {
    isLoading(state) {
      return state.isLoading;
    },
		user(state){
			return state.user
    },
    wishlistUser(state){
      return state.wishlistUser
    },
    editUser(state){
      return state.editUser
    },
    searchTips(state){
      return state.searchTips
    },
    uuidv4(state){
      return state.uuidv4
    },
    adminUser(state){
      return state.adminUser
    },
	},
	mutations: {
    SET_IS_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_USER_DATA(state, data) {
      state.user.information = data;
    },
    SET_WISHLIST_USER(state, data) {
      state.wishlistUser = data;
    },
    SET_EDIT_USER(state, editUser){
      state.editUser = editUser;
    },
    SET_SEARCH_TIPS(state, searchTips){
      state.searchTips = searchTips;
    },
    SET_UUIDV4(state, uuidv4) {
      uuidv4 = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
      state.uuidv4 = uuidv4;
    },
    SET_ADMIN_USER(state, adminUser) {
     state.adminUser = adminUser;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          name: user.displayName,
          email: user.email,
          id: user.uid,
          providerId: user.providerData[0].providerId,
          photoURL: user.providerData[0].photoURL,
        });
      } else {
        commit("SET_USER", null);
      }
    },
    fetchUserData({ commit }, data) {
      commit("SET_USER_DATA", data);
    },
    fecthEditUser({ commit }, editUser){
      if (editUser !== null){
        commit("SET_EDIT_USER", editUser);
      }
    },
    async consultUser({ commit, dispatch }, userId) {
      commit('SET_IS_LOADING', true);
			// CONSULT TABLE USER
      const tableUser = firebase.database().ref("/user");
      const getDataUser = (tableUser) => {
        return new Promise((resolve, reject) => {
          const onError = (error) => reject(error);
          const onData = (snap) => resolve(snap.val());
  
          tableUser.on("value", onData, onError);
        });
      }
			getDataUser(tableUser)
				.then((response) => {
					console.log('SUCESS:', response);
          var data = {};
          if (response !== null) {
            var keys = [];
            Object.keys(response).forEach(function (item) {
              keys.push(item);
            });
            for (let i = 0; i < Object.keys(response).length; i++) {
              if (userId == response[keys[i]].idUser) {
                data[keys[i]] = response[keys[i]];
              }
            }
          }
          dispatch('fetchUserData', data);
          dispatch('consultWishlistUser', data[userId].wishlist);
          commit('SET_IS_LOADING', false);
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false);
				});
			///////////////////////////////
    },
    async deleteUserTable({ commit, dispatch }, idTableUser) {
     	// DELETE USER CHILD KEY
       await firebase.database().ref("/userClient").child(idTableUser).remove();
      ///////////////////////////////
    },
    async deleteUserLogin({ commit, dispatch }, password) {
      // DELETE USER LOGIN
      var user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email, 
        password
      );
      user.reauthenticateWithCredential(credential).then(function() {
        console.log('Usuário credenciado com sucesso!');
        user.delete();
      }).catch(function(error) {
        console.log(error);
      });
     ///////////////////////////////
    },
    async addWishlist({ commit, dispatch }, [userId, arrayWishlist]) {
      // commit("SET_IS_LOADING", true, { root: true });

      // CONSULT DATABASE USER WISHLIST
      const tableWishlist = firebase.database().ref(`/user/${userId}/wishlist`);

      tableWishlist.set(arrayWishlist).then( resp => {
        // commit("SET_IS_LOADING", false, { root: true });

        //REFRESH USER
        dispatch("consultUser", userId);
      }).catch((error) => {
        // commit("SET_IS_LOADING", false, { root: true });
        console.error('Failed to create user', error);
      });
      ///////////////////////////////
    },
    async removeWishlist({ commit, dispatch }, [userId, postId]) {
      // commit("SET_IS_LOADING", true, { root: true });

      // CONSULT DATABASE USER WISHLIST
      const tableWishlist = firebase.database().ref(`/user/${userId}/wishlist`);

      tableWishlist.once("value").then(function(snapshot) {
        snapshot.forEach(function(child) {
          if (child.val().postId === postId) {
            child.ref.remove().then( resp => {

              // commit("SET_IS_LOADING", false, { root: true });
              console.log('Remove sucess');

              //REFRESH USER
              dispatch("consultUser", userId);
            }).catch((error) => {
              // commit("SET_IS_LOADING", false, { root: true });
              console.error('Failed to remove', error);
            });
          }
        });
      });
      ///////////////////////////////
    },
    async consultWishlistUser({ commit, dispatch }, arrayWishlistUser) {
      commit('SET_IS_LOADING', true);
			// CONSULT TABLE TIPS
      const tableTips = firebase.database().ref("/tips");
      const getDataTips = (tableTips) => {
        return new Promise((resolve, reject) => {
          const onError = (error) => reject(error);
          const onData = (snap) => resolve(snap.val());
  
          tableTips.on("value", onData, onError);
        });
      }
			getDataTips(tableTips)
				.then((response) => {
					console.log('SUCESS:', response);
          var data = [];
          for (var tip in response){
            for (var post in response[tip].posts){
              if (arrayWishlistUser){
                arrayWishlistUser.find(element => { 
                  if (element === response[tip].posts[post].postId) {
                    response[tip].posts[post].tipId = response[tip].id;
                    data.push(response[tip].posts[post]);
                  }
                });
              }
            }
          }
          commit('SET_WISHLIST_USER', data);
          commit('SET_IS_LOADING', false);
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false);
				});
			///////////////////////////////
    },
    async consultAdminUser({ commit, dispatch }, user) {
      commit('SET_IS_LOADING', true);

      // CONSULT USER UID
      const userRef = firebase.database().ref(`/user/${user.uid}`);

			// CONSULT TABLE ADMIN USER
      const tableAdminUser = firebase.database().ref("/adminUser");
      const getDataAdminUser = (tableAdminUser) => {
        return new Promise((resolve, reject) => {
          const onError = (error) => reject(error);
          const onData = (snap) => resolve(snap.val());
  
          tableAdminUser.on("value", onData, onError);
        });
      }
			getDataAdminUser(tableAdminUser)
				.then((response) => {
          var userData = {};

          // DEFINE USER ADMIN PROJECT
          for (let admin in response){
            if (user.email === response[admin]){
              userData.userAdmin = true;
            } else {
              userData.userAdmin = false;
            }
          }
          
          // UPDATE TABLE USER
          userRef.update(userData).then( resp => {
            commit('SET_IS_LOADING', false);
          }).catch((error) => {
            console.error('Failed to create user', error);
          });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false);
				});
			///////////////////////////////
    },
  }
})