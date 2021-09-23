import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '../../../utils';
import {CardProduct} from '../../kecil';

const ListProducts = ({
  getListProductLoading,
  getListProductResult,
  getListProductError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListProductResult ? (
        Object.keys(getListProductResult).map(key => {
          return (
            <CardProduct
              key={key}
              product={getListProductResult[key]}
              navigation={navigation}
            />
          );
        })
      ) : getListProductLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListProductError ? (
        <Text>{getListProductError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  getListProductLoading: state.ProductReducer.getListProductLoading,
  getListProductResult: state.ProductReducer.getListProductResult,
  getListProductError: state.ProductReducer.getListProductError,
});

export default connect(mapStateToProps, null)(ListProducts);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
