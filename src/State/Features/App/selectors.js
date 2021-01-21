import * as R from 'ramda';

const listInfo = (state) => {  return R.pathOr([],['App','listInfo'], state);}
const operation = (state) => { return R.pathOr({insertStatus:false},['App','operation'], state);}

const selectors = { 
    listInfo,
    operation
}

export default selectors;