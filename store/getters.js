export default {
    getBoardSelected: state => state.boardSelected,
    getMemberById: state => id => state.members.find(member => member.id === id),
}