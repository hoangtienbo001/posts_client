import {createAction} from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
  };

export const getPosts= createAction({
    getPostRequest : undefined,
    getPostSucces: (payload)=>payload,
    getPostFailure:(err)=>err
});