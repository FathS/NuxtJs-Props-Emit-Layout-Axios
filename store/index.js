import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            accountList: []
        },
        mutations: {
            setPosts(state, posts) {
                state.accountList = posts
            }
        },
        actions: {
            setPosts(vuexContext) {
                // vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            postLoad(state) {
                return state.accountList
            }
        }
    })
}

export default createStore