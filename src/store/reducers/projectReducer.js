const initState = {
  projects: [
    {id: '1', title: '리액트 스테이트 공부하기', content: 'blah blah blah'},
    {id: '2', title: '프랍스는 또 뭐임?', content: 'blah blah blah'},
    {id: '3', title: '허걱 리덕스 나오니 거의 지지 분위기', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;