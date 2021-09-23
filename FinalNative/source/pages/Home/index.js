import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListProduct,
  ListFitur,
  Tombol,
  ListLokasi,
} from '../../components';
import {colors, fonts} from '../../utils';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListFitur} from '../../actions/FiturAction';
import {GetLokasi, limitProduct} from '../../actions/PBBAction';

class Home extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListFitur());
      this.props.dispatch(limitProduct());
      this.props.dispatch(GetLokasi());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} page="Home" />
          {/* <BannerSlider /> */}
          {/* <View style={styles.pilihFitur}>
            <Text style={styles.label}>Pilih Fitur</Text>
            <ListFitur navigation={navigation} />
          </View> */}
          <ListLokasi navigation={navigation} />

          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihFitur: {
    marginHorizontal: 30,
    marginTop: 10,
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
