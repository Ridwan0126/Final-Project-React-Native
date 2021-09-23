import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardProduct = ({product, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.text}>{product.nama} </Text>
        <Text style={styles.text}>{product.nop} </Text>
        <Text style={styles.text}>{product.alamat} </Text>
      </TouchableOpacity>

      <Tombol
        type="text"
        title="Detail"
        padding={7}
        onPress={() => navigation.navigate('ProductDetail', {product})}
      />
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(180),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  gambar: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
