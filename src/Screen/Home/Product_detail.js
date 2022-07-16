import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';

import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const NamaProduct = () => {
  return (
    <View style={styles.boxNamaProduct}>
      <Text style={styles.hargaProduct}>Rp142.000</Text>
      <Text style={styles.namaProduct}>
        Sweater Cardigan Korea Wanita Bahan Halus Lembut Tebal Premium Import
      </Text>
    </View>
  );
};

const ButtonVariant = () => {
  return (
    <TouchableOpacity style={Gstyles.boxButtonVariant}>
      <Text style={Gstyles.textVariant}>Pilih Variant</Text>
      <Image
        source={require('../../Image/next.png')}
        style={{resizeMode: 'contain', width: 44, height: 44}}
      />
    </TouchableOpacity>
  );
};
const ButtonPengiriman = () => {
  return (
    <TouchableOpacity style={Gstyles.boxButtonPengiriman}>
      <View style={Gstyles.boxTextPengiriman}>
        <Text style={Gstyles.textPengiriman}>Pengiriman</Text>
        <Text style={Gstyles.textDikirm}>Dikirim dari: Jakarta Barat</Text>
      </View>
      <Image
        source={require('../../Image/next.png')}
        style={{resizeMode: 'contain', width: 44, height: 44}}
      />
    </TouchableOpacity>
  );
};

const Deskripsi = () => {
  return (
    <View style={Gstyles.boxDeskripsi}>
      <Text style={Gstyles.textDeskripsi}>Deskripsi Produk</Text>
      <Text>
        SWEATER INI RESTOCK LAGI YA (UPDATE 26-03-2021)! {'\n'} {'\n'}Sweater
        Cardigan Korea Wanita Bahan Halus Lembut Tebal Premium Import - Jaket
        Sweater Wanita Lucu Ori {'\n'}
        {'\n'}Ukuran: One size {'\n'}Lingkar Dada: fit to 100 cm {'\n'}Panjang:
        56 cm{'\n'}
        Panjang Lengan: 42 cm {'\n'}Lebar Bahu: 49 cm {'\n'}Cocok untuk BB: fit
        to 58 Kg{'\n'}
        BAHAN DIJAMIN HALUS, TEBAL, & ADEM
      </Text>
    </View>
  );
};
const DetailProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttomBar}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/button_keranjang.png')}
            style={{resizeMode: 'contain', width: 50, height: 44}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxImage}>
          <Image
            source={require('../../Image/detail_prod.png')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: 426,
              zIndex: 1,
              // opacity: 0,
            }}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 20, left: 20, zIndex: 2}}>
            <Image
              source={require('../../Image/back2.png')}
              style={{
                height: 44,
                width: 44,
              }}
            />
          </TouchableOpacity>
        </View>
        <NamaProduct />
        <ButtonVariant />
        <ButtonPengiriman />
        <Deskripsi />
      </ScrollView>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },
  boxImage: {
    // position: 'relative',
  },
  boxNamaProduct: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: ColorsStyle.whitee,
  },
  hargaProduct: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: ColorsStyle.redSecondary,
  },
  namaProduct: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorsStyle.blackPrimary,
  },
  buttomBar: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 20,
    paddingTop: 9,
    paddingBottom: 12,
    zIndex: 2,
  },
  button: {
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 44,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    backgroundColor: ColorsStyle.redSecondary,
    marginLeft: 8,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
});
