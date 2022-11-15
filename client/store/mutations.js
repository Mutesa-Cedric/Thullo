export default {
    setAddBoardModalOpen: (state, payload) => {
        state.addBoardModalOpen = payload
    },
    setSelectedBoard:(state,payload)=>{
        state.selectedBoard=payload
    },
    setUser:(state,payload)=>{
        state.user=payload
    }
}