import { createStore } from 'vuex'

const state = {
  comments: []
}

const mutations = {
  addComment(state, payload) {
    state.comments.push(payload)
  }
}

export default createStore({ mutations, state, strict: true })
