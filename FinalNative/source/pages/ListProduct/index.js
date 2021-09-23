import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderComponent, ListProducts, ListFitur} from '../../components';
import {colors, fonts} from '../../utils';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListProduct} from '../../actions/PBBAction';
import {getListFitur} from '../../actions/FiturAction';

class ListProduct extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFitur, keyword} = this.props;
      this.props.dispatch(getListFitur());
      this.props.dispatch(getListProduct(idFitur, keyword));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const {idFitur, keyword} = this.props;

    if (idFitur && prevProps.idFitur !== idFitur) {
      this.props.dispatch(getListProduct(idFitur, keyword));
    }

    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListProduct(idFitur, keyword));
      console.log(
        'kunci',
        this.props.dispatch(getListProduct(idFitur, keyword)),
      );
    }
  }

  render() {
    const {navigation, namaFitur, keyword} = this.props;
    console.log('word', keyword);

    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="ListProduct" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihFitur}>
            {/* <ListFitur navigation={navigation} /> */}
          </View>

          <View style={styles.pilihProduct}>
            {keyword ? (
              <Text style={styles.label}>
                Cari : <Text style={styles.boldLabel}>{keyword}</Text>
              </Text>
            ) : (
              <Text style={styles.label}>
                Pilih <Text style={styles.boldLabel}>Product </Text>
                {namaFitur ? namaFitur : 'Yang Anda Inginkan'}
              </Text>
            )}

            <ListProducts navigation={navigation} />
          </View>

          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  idFitur: state.ProductReducer.idFitur,
  namaFitur: state.ProductReducer.namaFitur,
  keyword: state.ProductReducer.keyword,
});

export default connect(mapStateToProps, null)(ListProduct);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {
    marginTop: -30,
  },
  pilihLiga: {
    marginHorizontal: 30,
  },
  pilihProduct: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
