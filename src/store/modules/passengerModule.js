import {Modal} from 'bootstrap/dist/js/bootstrap.esm.min'
export const passengerModule = {
    state: () => ({
        passengers: [
            {
                id: 0,
                secondName: '',
                firstName: '',
                middleName: '',
                birthday: '',
                gender: '',
                citizenship: '',
                document: '',
                documentInfo: '',
                error: '',
                isAdult: true,
            }
        ],
        documentTypes: [],
        tripId: 0,
        flightId: 0,
        placeNumber: [],
        isLogin: false,
        buyerInfo: {
            firstName: '',
            secondName: '',
            email: '',
            number: '',
        },
        promoCode: '',
    }),
    mutations: {
        addPassenger(state, passenger) {
            state.passengers.push(passenger)
        },
        removePassenger(state, passenger) {
            state.passengers.splice(passenger, 1)
        },
        changePassengerId(state) {
            state.passengers.forEach(function (passenger, index){
                passenger.id = index
            })
        },
        setDocumentTypes(state, documentTypes) {
            state.documentTypes = documentTypes
        },
        updateSecondName(state, [value, id]) {
            state.passengers[id].secondName = value;
        },
        updateFirstName(state, [value, id]) {
            state.passengers[id].firstName = value
        },
        updateMiddleName(state, [value, id]) {
            state.passengers[id].middleName = value
        },
        updateBirthday(state, [value, id]) {
            state.passengers[id].birthday = value
        },
        updateGender(state, [value, id]) {
            state.passengers[id].gender = value
        },
        updateCitizenship(state, [value, id]) {
            state.passengers[id].citizenship = value
        },
        updateDocument(state, [value, id]) {
            state.passengers[id].document = value
        },
        updateDocumentInfo(state, [value, id]) {
            state.passengers[id].documentInfo = value;
        },
        updateError(state, [error, id]) {
            state.passengers[id].error = error
        }
    },
    actions: {
        addPassenger(ctx, isAdult) {
            const adultCount = ctx.getters.adults;
            const childrenCount = ctx.getters.childrens;
            //прибавляется единица, так как по умолчанию выбран один человек
            const id = adultCount+childrenCount-1
            const passenger = {id: id, isAdult: isAdult}
            ctx.commit('addPassenger', passenger)
            ctx.commit('changePassengerId', passenger)
        },
        removePassenger(ctx, isAdult) {
            //getIndex() выбирает
            function getIndex(passenger) {
                if (passenger.isAdult === isAdult) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            ctx.commit('removePassenger', passenger)
        },
        removePassengerById(ctx, id) {
            function getIndex(passenger) {
                if (passenger.id === id) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            // TODO закрыть модальное окно
            const modal = new Modal(document.getElementById('removeModal'+id));
            ctx.commit('removePassenger', passenger)
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', [value, id]);
        },
        updateFirstName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateFirstName', [value, id]);
        },
        updateMiddleName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateMiddleName', [value, id]);
        },
        updateBirthday(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateBirthday', [value, id]);
        },
        updateGender(ctx,event) {
            //установка мужского пола для 1-го пассажира по умолчанию
            if (event === undefined) {
                const value = 'Мужской';
                const id = 0
                ctx.commit('updateGender', [value, id]);
            }
            else {
                const value = event.target.value;
                //исключить наименование и оставить только цифры в id при помощи replace
                const id = event.target.id.replace(/[^0-9]/g,"");
                ctx.commit('updateGender', [value, id]);
            }
        },
        updateCitizenship(ctx,event) {
            //установка Российской федерации для 1-го пассажира по умолчанию
            if (event === undefined) {
                const value = 'Российская федерация';
                const id = 0
                ctx.commit('updateCitizenship', [value, id]);
            }
            else {
                const value = event.target.value;
                //исключить наименование и оставить только цифры в id при помощи replace
                const id = event.target.id.replace(/[^0-9]/g,"");
                ctx.commit('updateCitizenship', [value, id]);
            }
        },
        updateDocument(ctx,event) {
            //установка паспорта для 1-го пассажира по умолчанию
            if (event === undefined) {
                const value = 'Паспорт РФ';
                const id = 0
                ctx.commit('updateDocument', [value, id]);
            }
            else {
                const value = event.target.value;
                //исключить наименование и оставить только цифры в id при помощи replace
                const id = event.target.id.replace(/[^0-9]/g,"");
                ctx.commit('updateDocument', [value, id]);
            }
        },
        updateDocumentInfo(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateDocumentInfo', [value, id]);
        },
        async fetchDocumentType(ctx) {
            try {
                const response = await fetch(ctx.rootState.API_URL+ '?command=type_doc')
                const documentTypes = await response.json();
                //Очистить строку от &nbsp;
                documentTypes.result.forEach(function (documentType, index) {
                    documentType.name = documentType.name.replaceAll('&nbsp;', ' ')
                });
                ctx.commit('setDocumentTypes', documentTypes.result)
            }
            catch (error) {
                console.log(error, 'ошибка')
            }
        },
        validateNameField(ctx, event) {
            const value = event.target.value;
            //получение названия поля
            const field = event.target.id.replace(/[0-9]/g, '')
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            if (field === 'secondName' && value === '') {
                console.log('заполните фамилию')
                ctx.commit('updateError', ['заполните фамилию', id]);
            }
            if (field === 'secondName' && value !== '') {
                console.log('все корректно')
                ctx.commit('updateError', ['', id])
            }
        }
    },
    getters: {
        getPassengers(state) {
            return state.passengers;
        },
        adults(getters) {
            return getters.adults
        },
        childrens(getters) {
          return getters.childrens
        },
        getDocumentsTypes(state) {
          return state.documentTypes
        }
    },
}