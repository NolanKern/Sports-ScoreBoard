export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';
// Added functionality for socket.io management
export const CREATE_ROOM = 'create_room';
export const CHANGE_ROOM = 'change_room';
export const ALTER_DATA = 'alter_data';
export const ROOM_ERROR = 'room_error';
export const UPDATE_HOME = 'update_home';
export const UPDATE_AWAY = 'update_away';
export const UPDATE_MINUTES = 'update_minutes';
export const UPDATE_SECONDS = 'update_seconds';
export const CREATE_TIME = 'create_time';
export const FETCH_TIME = 'fetch_time';
export const PAUSE_TIME = 'pause_time';
export const UNPAUSE_TIME = 'unpause_time';

// Room Reducers
export const JOIN_ROOM_REQUEST = 'JOIN_ROOM_REQUEST';
export const JOIN_ROOM_SUCCESS = 'JOIN_ROOM_SUCCESS';

export const LEAVE_ROOM_REQUEST = 'LEAVE_ROOM_REQUEST';
export const LEAVE_ROOM_SUCCESS = 'LEAVE_ROOM_SUCCESS';

export const LIST_ROOMS_REQUEST = 'LIST_ROOMS_REQUEST';
export const LIST_ROOMS_SUCCESS = 'LIST_ROOMS_SUCCESS';

export const SET_ATTEMPTED_ROOM = 'SET_ATTEMPTED_ROOM';
export const CLEAR_ATTEMPTED_ROOM = 'CLEAR_ATTEMPTED_ROOM';

export const WS_ERROR = 'WS_ERROR';
export const UPDATE_USERS = 'UPDATE_USERS';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_TOAST = 'CLEAR_TOAST';
export const CONNECTION_OPENED = 'CONNECTION_OPENED';
