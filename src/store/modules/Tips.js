// Import Firebase
import firebase from "firebase/app";

export default {
    namespaced: true,
    state: {
      tips: {},
			tipFilter: {},
			post: {},
			postLike: {},
			postUser: {},
			userPost: {}
    },
    getters: {
      tips(state) {
				return state.tips;
			},
			tipFilter(state) {
				return state.tipFilter;
			},
			post(state) {
				return state.post;
			},
			postLike(state) {
				return state.postLike;
			},
			postUser(state) {
				return state.postUser;
			},
			userPost(state) {
				return state.userPost;
			},
    },
    mutations: {
      setTips(state, tips) {
				state.tips = tips;
			},
			setTipFilter(state, tipFilter) {
				state.tipFilter = tipFilter;
			},
			setPost(state, post) {
				state.post = post;
			},
			setPostLike(state, postLike) {
				state.postLike = postLike;
			},
			setPostUser(state, postUser){
				state.postUser = postUser;
			},
			setPostUserData(state, userData){
				state.userPost = userData;
			}
    },
    actions: {
			async consultTips({ commit, dispatch }) {
				commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE TIPS DATA
				const tableTips = firebase.database().ref("/tips");
				const getDataTips = (tableTips) => {
					return new Promise((resolve, reject) => {
						const onError = (error) => reject(error);
						const onData = (snap) => resolve(snap.val());
		
						tableTips.on("value", onData, onError);
					});
				};

				getDataTips(tableTips)
				.then((value) => {
					commit("setTips", value);
					commit("SET_IS_LOADING", false, { root: true });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false, { root: true });
				});
				///////////////////////////////
			},
			async consultTipId({ commit, dispatch }, tipId) {
				commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE TIPS DATA
				const tableTip = firebase.database().ref(`/tips/${tipId}`);
				const getDataTip = (tableTip) => {
					return new Promise((resolve, reject) => {
						const onError = (error) => reject(error);
						const onData = (snap) => resolve(snap.val());
		
						tableTip.on("value", onData, onError);
					});
				};

				getDataTip(tableTip)
				.then((value) => {
					commit("setTipFilter", value);
					commit("SET_IS_LOADING", false, { root: true });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false, { root: true });
				});
				///////////////////////////////
			},
			async consultPost({ commit, dispatch }, [tipId, postId]) {
				commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE POST DATA
				const tablePost = firebase.database().ref(`/tips/${tipId}/posts/${postId}`);
				const getDataPost = (tablePost) => {
					return new Promise((resolve, reject) => {
						const onError = (error) => reject(error);
						const onData = (snap) => resolve(snap.val());
		
						tablePost.on("value", onData, onError);
					});
				};

				getDataPost(tablePost)
				.then((value) => {
					commit("setPost", value);
					commit("SET_IS_LOADING", false, { root: true });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false, { root: true });
				});
				///////////////////////////////
			},
			async consultPostsUser({ commit, dispatch }, userId) {
				commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE
				const tableTips = firebase.database().ref('tips');
				const getDataTips = (tableTips) => {
					return new Promise((resolve, reject) => {
						const onError = (error) => reject(error);
						const onData = (snap) => resolve(snap.val());
		
						tableTips.on("value", onData, onError);
					});
				};
				getDataTips(tableTips)
				.then((value) => {
          if (value !== null) {
						for (var tip in value){
							for (var post in value[tip].posts){
								if (value[tip].posts[post].userId !== userId){
									delete value[tip].posts[post];
								}
							}
						}
					}
					commit('setPostUser', value);
					commit("SET_IS_LOADING", false, { root: true });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false, { root: true });
				});
				///////////////////////////////
			},
			async consultUserPost({ commit, dispatch }, userId) {
				commit("SET_IS_LOADING", true, { root: true });

				// CONSULT USER POST //////////////////////////////////////
				const tableUser = firebase.database().ref(`user/${userId}`);
				const getDataUser = (tableUser) => {
					return new Promise((resolve, reject) => {
						const onError = (error) => reject(error);
						const onData = (snap) => resolve(snap.val());
		
						tableUser.on("value", onData, onError);
					});
				};
				getDataUser(tableUser)
				.then((valueUser) => {
					commit('setPostUserData', valueUser);
					commit("SET_IS_LOADING", false, { root: true });
				})
				.catch((error) => {
					console.log(error.message);
					commit('SET_IS_LOADING', false, { root: true });
				});
				////////////////////////////////////////////////////////////
			},
			async addLike({ commit, dispatch }, [tipId, postId, arrayLikePost, userId, arrayLikeUser, postUserId]) {
				// commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE LIKE DATA
				const tableLikePost = firebase.database().ref(`/tips/${tipId}/posts/${postId}/like`);
				const tableLikeUser = firebase.database().ref(`/user/${userId}/like`)

				tableLikePost.set(arrayLikePost).then( resp => {
					// commit("SET_IS_LOADING", false, { root: true });
					tableLikeUser.set(arrayLikeUser).then( resp => {
						//REFRESH TIPS AND USER
						dispatch("consultUser", userId, {root: true})
						dispatch("consultTips");
						dispatch("consultTipId", tipId);

						// REFRESH POST USER
						dispatch("consultPostsUser", postUserId);
						dispatch("consultUserPost", postUserId);
					}).catch((error) => {
						// commit("SET_IS_LOADING", false, { root: true });
						console.error('Failed to create user', error);
					});
				}).catch((error) => {
					// commit("SET_IS_LOADING", false, { root: true });
					console.error('Failed to create user', error);
				});
				///////////////////////////////
			},
			async removeLike({ commit, dispatch }, [tipId, postId, userId, postUserId]) {
				// commit("SET_IS_LOADING", true, { root: true });

				// CONSULT DATABASE LIKE DATA
				const tableLikePost = firebase.database().ref(`/tips/${tipId}/posts/${postId}/like`);
				const tableLikeUser = firebase.database().ref(`/user/${userId}/like`);

				tableLikePost.once("value").then(function(snapshot) {
					snapshot.forEach(function(child) {
						if (child.val() === userId) {
							child.ref.remove().then( resp => {
								tableLikeUser.once("value").then(function(snapshot) {
									snapshot.forEach(function(child) {
										if (child.val() === postId) {
											child.ref.remove().then( resp => {
												console.log('Remove sucess');
												//REFRESH TIPS AND USER
												dispatch("consultUser", userId, {root: true})
												dispatch("consultTips");
												dispatch("consultTipId", tipId);

												// REFRESH POST USER
												dispatch("consultPostsUser", postUserId);
												dispatch("consultUserPost", postUserId);
											}).catch((error) => {
												// commit("SET_IS_LOADING", false, { root: true });
												console.error('Failed to remove', error);
											});
										}
									});
								});
							}).catch((error) => {
								// commit("SET_IS_LOADING", false, { root: true });
								console.error('Failed to remove', error);
							});
						}
					});
				});
				///////////////////////////////
			},
    }
}