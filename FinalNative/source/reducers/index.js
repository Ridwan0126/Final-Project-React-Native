import {combineReducers} from 'redux';
import UserReducer from './user';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import FiturReducer from './fitur';
import ProductReducer from './product';
import KeranjangReducer from './keranjang';
import PaymentReducer from './payment';
import PesananReducer from './pesanan';
import HistoryReducer from './history';
import LokasiReducer from './lokasi';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  FiturReducer,
  ProductReducer,
  KeranjangReducer,
  PaymentReducer,
  PesananReducer,
  HistoryReducer,
  LokasiReducer,
});

export default rootReducer;
