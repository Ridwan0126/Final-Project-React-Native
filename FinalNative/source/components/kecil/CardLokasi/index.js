import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardLokasi = ({lokasi, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/* <Image source={{uri: lokasi.gambar[0]}} style={styles.gambar} /> */}
        <Text style={styles.title}>{lokasi.provinsi} </Text>
        <Text style={styles.kota2}>{lokasi.kota}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardLokasi;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    paddingVertical: 15,
    paddingLeft: 10,
    backgroundColor: '#E9E9E9',
    width: responsiveWidth(415),
  },
  kota1: {
    paddingVertical: 6,
  },
  kota2: {
    paddingVertical: 12,
    backgroundColor: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
});
