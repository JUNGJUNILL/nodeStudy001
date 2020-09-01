import produce from 'immer'
//배열을 직접 건드려서 수정했을 경우 
const array = [1,2,3,4]; 
const sameArray = array; 
sameArray.push(5); 

const baseState = [
    {
        todo: "Learn typescript",
        done: true
    },
    {
        todo: "Try immer",
        done: false
    }
]

const nextState = produce(baseState, draftState => {
    draftState.push({todo: "Tweet about it"})
    draftState[1].done = true
})
