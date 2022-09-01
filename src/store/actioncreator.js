import {
  SET_MAIN_STREAM,
  ADD_PARTICIPANT,
  SET_USER,
  REMOVE_PARTICIPANT,
  UPDATE_USER,
  UPDATE_PARTICIPANT,
} from "./actiontypes";

export const setMainStream = (stream) => {
  return {
    type: SET_MAIN_STREAM,
    payload: {
      mainStream: stream,
    },
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const addParticipant = (user) => {
  return {
    type: ADD_PARTICIPANT,
    payload: {
      newUser: user,
    },
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const updateParticipant = (user) => {
  return {
    type: UPDATE_PARTICIPANT,
    payload: {
      newUser: user,
    },
  };
};

export const removeParticipant = (userId) => {
  return {
    type: REMOVE_PARTICIPANT,
    payload: {
      id: userId,
    },
  };
};
