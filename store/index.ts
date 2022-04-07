export const state = () => ({
  sample: null
})

export const mutations = {
  setSample(state, sample = state.sample) {
    state.sample = sample
  }
}

export const actions = {}
export const getters = {}
