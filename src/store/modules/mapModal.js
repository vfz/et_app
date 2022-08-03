export default {
    state: {

        coords: [
            45.055522,
            41.998846
        ],
        icon: {
            content: '',
        }
    },
    mutations: {
        newCords(state, coords) {
            state.coords = [
                coords.split(',')[0],
                coords.split(',')[1]
            ]
        },
        newIcon(state, icon) {
            state.icon = {
                'content': icon,
                color: 'red'
            }
        }
    },
    actions: {
        updateCords(ctx, coords) {

            ctx.commit('newCords', coords)
        },

        updateIcon(ctx, icon) {

            ctx.commit('newIcon', icon)
        },

    },
    modules: {},
    getters: {
        getCord(state) {
            return state.coords
        },
        getIcon(state) {
            return state.icon
        }
    }

}