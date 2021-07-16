export default function blogs(state=[], action) {
  switch (action.type){
    case 'SET_BLOGS':
      return action.payload;
  
    case 'NEW_BLOG':
      return [...state, action.payload];
  
    default:
      return state;  
  }
}