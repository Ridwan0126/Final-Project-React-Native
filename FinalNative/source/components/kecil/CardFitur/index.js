import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getProductByFitur} from '../../../actions/PBBAction';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFitur = ({fitur, navigation, id, dispatch}) => {
  console.log('fitur', fitur);
  const toProductByFitur = (id, namaFitur) => {
    // ke Product Action
    dispatch(getProductByFitur(id, namaFitur));
    console.log('get produtc by fitur', getProductByFitur);

    // navigate ke ListProduct
    navigation.navigate('ListProduct');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toProductByFitur(id, fitur.namaFitur)}>
      {/* <Image source={{uri: fitur.image}} style={styles.logo} /> */}
    </TouchableOpacity>
  );
};

export default connect()(CardFitur);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 15,
  },
  logo: {
    width: responsiveWidth(57),
    height: responsiveHeight(70),
  },
});
