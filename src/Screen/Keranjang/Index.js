import React, {useEffect, useState} from 'react';

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
import {CheckBox} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const KeranjangPage = () => {
  const [pilihSemua, setPilihSemua] = useState(false);
  const [productSatu, setProductSatu] = useState(false);
  const [productDua, setProductDua] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textWFP}>Keranjang Belanja</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.boxScroll}>
        <View style={styles.rowTextPilihSemua}>
          {/* <Text>
            <Icon name="home" size={50} />
          </Text> */}
          {/* <CheckBox
            title="Pilih Semua"
            checked={pilihSemua}
            checkedIcon="home"
          /> */}
          <Text style={styles.pilihSemua}>Pilih Semua</Text>
          <TouchableOpacity>
            <Text style={styles.textHapus}>Hapus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxKeranjangProduct}>
          <Image
            source={require('../../Image/produk_keranjang.png')}
            style={{width: 65, height: 67, resizeMode: 'contain'}}
          />
          <View style={styles.colNamaProduk}>
            <Text style={styles.textNamaProduk}>
              Sweater Cardigan Korea Wanita Bahan Halus Lembut Tebal Premi...
            </Text>
            <Text style={styles.textWarna}>Warna: Putih, Ukuran: XL</Text>
            <Text style={styles.TextHarga}>Rp142.000</Text>
          </View>

          <View style={styles.boxQuantity}>
            <TouchableOpacity>
              <Image
                source={require('../../Image/Minus2.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text style={styles.textQuantity}>1</Text>
            <TouchableOpacity>
              <Image
                source={require('../../Image/Plus2.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxKeranjangProduct}>
          <Image
            source={require('../../Image/produk_keranjang.png')}
            style={{width: 65, height: 67, resizeMode: 'contain'}}
          />
          <View style={styles.colNamaProduk}>
            <Text style={styles.textNamaProduk}>
              Sweater Cardigan Korea Wanita Bahan Halus Lembut Tebal Premi...
            </Text>
            <Text style={styles.textWarna}>Warna: Putih, Ukuran: XL</Text>
            <Text style={styles.TextHarga}>Rp142.000</Text>
          </View>
          <View style={styles.boxQuantity}>
            <TouchableOpacity>
              <Image
                source={require('../../Image/Minus2.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text style={styles.textQuantity}>1</Text>
            <TouchableOpacity>
              <Image
                source={require('../../Image/Plus2.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.boxBeli}>
        <View style={styles.colHarga}>
          <Text style={styles.textHaga}>Total Harga</Text>
          <Text style={styles.nominal}>Rp. 142.000</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Beli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KeranjangPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },
  header: {
    height: 62,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: ColorsStyle.whitee,
  },
  textWFP: {
    fontFamily: 'Poppins-SemiBold',
    color: ColorsStyle.blackPrimary,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  boxScroll: {
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 20,
    marginTop: 3,
    paddingTop: 16,
  },
  rowTextPilihSemua: {
    flexDirection: 'row',
  },
  pilihSemua: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.black3,
    flex: 1,
  },
  textHapus: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: ColorsStyle.redkPrimary,
  },
  boxKeranjangProduct: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  colNamaProduk: {
    marginHorizontal: 8,
  },
  textNamaProduk: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: ColorsStyle.blackPrimary,
  },
  textWarna: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.abu2,
  },
  TextHarga: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: ColorsStyle.blackPrimary,
  },
  boxQuantity: {
    position: 'absolute',
    flexDirection: 'row',
    width: 80,
    bottom: 15,
    right: 0,
  },
  textQuantity: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '45%',
    borderRadius: 4,
    marginHorizontal: 20,
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  boxBeli: {
    height: 88,
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHaga: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.black2,
  },
  nominal: {
    fontFamily: 'Poppins-Bold',
    color: ColorsStyle.black2,
    fontSize: 16,
  },
});
