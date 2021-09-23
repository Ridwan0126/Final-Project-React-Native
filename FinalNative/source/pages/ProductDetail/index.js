import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  heightMobileUI,
  responsiveWidth,
  getData,
} from '../../utils';
import {
  CardLiga,
  Inputan,
  Jarak,
  ProductSlider,
  Pilihan,
  Tombol,
  CardFitur,
} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getDetailFitur} from '../../actions/FiturAction';
import {masukKeranjang} from '../../actions/KeranjangAction';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.route.params.product,
      images: this.props.route.params.product.gambar,
      jumlah: '',
      ukuran: '',
      keterangan: '',
      uid: '',
    };
  }

  componentDidMount() {
    const {product} = this.state;
    this.props.dispatch(getDetailFitur(product.fitur));
  }

  componentDidUpdate(prevProps) {
    const {saveKeranjangResult} = this.props;

    if (
      saveKeranjangResult &&
      prevProps.saveKeranjangResult !== saveKeranjangResult
    ) {
      this.props.navigation.navigate('Keranjang');
    }
  }

  masukKeranjang = () => {
    const {jumlah, keterangan, ukuran} = this.state;
    getData('user').then(res => {
      if (res) {
        //ambil user uid simpan di state
        this.setState({
          uid: res.uid,
        });

        //validasi form
        // if (jumlah && ukuran && keterangan) {
        //   //dispatch ke action masukKeranjang
        this.props.dispatch(masukKeranjang(this.state));
        // } else {
        //   Alert.alert('Error', 'Jumlah, Ukuran & Keterangan harus diisi');
        // }
      } else {
        Alert.alert('Info', 'Silahkan Login Terlebih Dahulu');
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {navigation, getDetailLigaResult, saveKeranjangLoading} = this.props;
    const {product, images, jumlah, keterangan, ukuran} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol
            icon="arrow-left"
            padding={7}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text>{product.nama}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.liga}></View>
          <View style={styles.desc}>
            <Text style={styles.nama}>{product.nama}</Text>
            <View style={styles.garis} />
            <Text style={styles.title}>Nomor NOP</Text>
            <Text style={styles.subTitle}>{product.nop}</Text>
            <Text style={styles.title}>Jenis Pajak</Text>
            <Text style={styles.subTitle}>{product.jenis}</Text>
            <Text style={styles.title}>Alamat Tinggal</Text>
            <Text style={styles.subTitle}>{product.alamat}</Text>
            <Text style={styles.title}>Alamat Objek Pajak</Text>
            <Text style={styles.subTitle}>{product.objek}</Text>
            <Text style={styles.title}>Tahun Pembayaran</Text>
            <Text style={styles.subTitle}>{product.tahun}</Text>
            <Text style={styles.title}>Estimasi Pembayaran</Text>
            <Text style={styles.subTitle}>{product.estimasi}</Text>
            <Text style={styles.title}>Jatuh Tempo</Text>
            <Text style={styles.subTitle}>{product.tempo}</Text>
            <Jarak height={15} />
            <Tombol
              title="Masuk Keranjang"
              type="textIcon"
              icon="keranjang-putih"
              padding={responsiveHeight(17)}
              fontSize={18}
              onPress={() => this.masukKeranjang()}
              loading={saveKeranjangLoading}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getDetailFiturResult: state.FiturReducer.getDetailFiturResult,

  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
});

export default connect(mapStateToProps, null)(ProductDetail);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(765),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
    zIndex: 1,
    flexDirection: 'row',
    color: 'white',
  },
  desc: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
  nama: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.light,
  },
  liga: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  garis: {
    borderWidth: 0.5,
    marginVertical: 5,
  },
  wrapperJenisBerat: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  jenisBerat: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
    marginRight: 30,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontFamily: fonts.primary.regular,
    textAlign: 'right',
    margin: 5,
  },
  title: {
    margin: 5,
    backgroundColor: '#E9E9E9',
    // fontFamily: fonts.primary.semibold,
    padding: 5,
  },
});
