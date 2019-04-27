import { INPUT_ANSWER } from './constants';



//initialize scantron with empty values { [sectionNum, questionNum]: answer }
let answers = new Map();

for (let i = 1; i <= 52; i++) {
  answers.set([1, i], '');
}
for (let i = 1; i <= 44; i++) {
  answers.set([2, i], '');
}
for (let i = 1; i <= 20; i++) {
  answers.set([3, i], '');
}
for (let i = 1; i <= 38; i++) {
  answers.set([4, i], '');
}

const initialState = { 
  answers: answers,
  currentSection: 1
};

const reducer = (state=initialState, action) => {
  //freeze state to avoid accidental mutation
  Object.freeze(state);

  switch(action.type) {
    case INPUT_ANSWER:
      let answers = new Map(state);
      answers.set([action.sectionNum, action.questionNum], action.answer);
      return {
        answers
      };
    
    default:
      return state;
  }
};

export default reducer;