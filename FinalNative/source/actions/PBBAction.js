import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
export const GET_LIST_PRODUCT_BY_FITUR = 'GET_LIST_PRODUCT_BY_FITUR';
export const DELETE_PARAMETER_PRODUCT = 'DELETE_PARAMETER_PRODUCT';
export const SAVE_KEYWORD_PRODUCT = 'SAVE_KEYWORD_PRODUCT';
export const GET_LIST_LOKASI = 'GET_LIST_LOKASI';

export const GetLokasi = (idLokasi, keyword) => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_LOKASI);

    if (idLokasi) {
      FIREBASE.database()
        .ref('lokasi')
        .orderByChild('provinsi')
        .equalTo(idLokasi)
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_LOKASI, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_LOKASI, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('lokasi')
        .orderByChild('kota')
        .equalTo(keyword.toUpperCase())
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();
          console.log('keyword', data);

          dispatchSuccess(dispatch, GET_LIST_LOKASI, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_LOKASI, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('lokasi')
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();
          console.log('lokasi', data);

          dispatchSuccess(dispatch, GET_LIST_LOKASI, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_LOKASI, error);
          alert(error);
        });
    }
  };
};

export const getListProduct = (idFitur, keyword) => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    if (idFitur) {
      FIREBASE.database()
        .ref('products')
        .orderByChild('fitur')
        .equalTo(idFitur)
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('products')
        .orderByChild('nop')
        .equalTo(keyword.toUpperCase())
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();
          console.log('keyword', data);

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('products')
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    }
  };
};

export const limitProduct = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    FIREBASE.database()
      .ref('products')
      .limitToLast(6)
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_PRODUCT, error);
        alert(error);
      });
  };
};

export const getProductByFitur = (id, namaFitur) => ({
  type: GET_LIST_PRODUCT_BY_FITUR,
  payload: {
    idFitur: id,
    namaFitur: namaFitur,
  },
});

export const deleteParameterProduct = () => ({
  type: DELETE_PARAMETER_PRODUCT,
});

export const saveKeywordProduct = search => ({
  type: SAVE_KEYWORD_PRODUCT,
  payload: {
    data: search,
  },
});
