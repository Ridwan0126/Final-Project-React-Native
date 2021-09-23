import {GET_LIST_LOKASI} from '../../actions/PBBAction';

const initialState = {
  getListLokasiLoading: false,
  getListLokasiResult: false,
  getListLokasiError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_LOKASI:
      return {
        ...state,
        getListLokasiLoading: action.payload.loading,
        getListLokasiResult: action.payload.data,
        getListLokasiError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
