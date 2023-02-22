import {ActionTypes} from "../constant/ConstTypes";

export const addmovies = (movies) => {
    return {
      type: ActionTypes.ADD_MOVIES,
      payload: movies,
    };
  };
