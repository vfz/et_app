export default {
    state: {

        coords: [
            45.055522,
            41.998846
        ],
        icon: {
            content: 'Данные загружаются',
            color: 'red'
        },
        modalTitle: '',
        flightType: '',
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
        },
        newModalTitle(state, modalTitle) {
            state.modalTitle = modalTitle
        },
        newFlightType(state, flightType) {
            state.flightType = flightType
        }
    },
    actions: {
        updateCords(ctx, coords) {
            setTimeout(() => {
                ctx.commit('newCords', coords)
            }, 500)

        },

        updateIcon(ctx, icon) {

            ctx.commit('newIcon', icon)
        },
        updateMap(ctx, coords, icon) {
            ctx.commit('newCords', coords)
            ctx.commit('newIcon', icon)
        },

        updateModalTitle(ctx, modalTitle) {
            ctx.commit('newModalTitle', modalTitle )
        },

        updateFlightType(ctx, flightType) {
            ctx.commit('newFlightType', flightType)
        }

    },
    modules: {},
    getters: {
        getCord(state) {
            return state.coords
        },
        getIcon(state) {
            return state.icon
        },
        getModalTitle(state) {
            return state.modalTitle
        },
        getFlightType(state) {
            return state.flightType
        }
    }

}