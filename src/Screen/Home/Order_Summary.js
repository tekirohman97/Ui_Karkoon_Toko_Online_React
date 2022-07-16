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

const OrderSummaryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/Back3.png')}
            style={{width: 37, height: 37}}
          />
        </TouchableOpacity>
        <Text style={styles.textOrderSummary}>Order Summary</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxLokasi}>
          <Image
            source={require('../../Image/lokasi.png')}
            style={{height: 15, width: 15, resizeMode: 'contain'}}
          />
          <Text style={styles.textAlamat}>
            Jl. Gading Kirana Timur IX, RT.9/RW.8, Klp. Gading Barat, Kec.
            Kelapa Gading, DKI Jakarta, Jakarta Uta...
          </Text>
        </View>
        <Image
          source={require('../../Image/line.png')}
          style={{
            resizeMode: 'contain',
            width: 360,
            marginLeft: 20,
            marginTop: -5,
          }}
        />
        <View style={styles.boxProduct}>
          <View style={styles.wrapProduct}>
            <Image
              source={require('../../Image/detail_prod.png')}
              style={{width: 81, height: 81, resizeMode: 'contain'}}
            />
            <View style={styles.boxNamaProd}>
              <Text style={styles.textNamaProd}>
                Sweater Cardigan Korea Wanita Bahan Halus Lembut Tebal Premi...
              </Text>
              <Text style={styles.textColorSize}>Color: Blue, Size: L</Text>
            </View>
            <View style={styles.boxQuantity}>
              <TouchableOpacity>
                <Image
                  source={require('../../Image/Minus.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>1</Text>
              <TouchableOpacity>
                <Image
                  source={require('../../Image/Plus.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxShipping}>
            <Text style={styles.textNamaProd}>Shipping</Text>
            <Text style={styles.textHargaShipping}>
              Rp10.000 by standard shipping
            </Text>
          </View>
          <Image
            source={require('../../Image/line2.png')}
            style={{
              resizeMode: 'contain',
              width: 360,
              marginTop: -5,
            }}
          />
          <TouchableOpacity style={styles.boxAddMessage}>
            <Text style={styles.textAddMessage}>Add Nessage</Text>
            <Text style={styles.textOptional}>Optional</Text>
            <Image
              source={require('../../Image/next2.png')}
              style={{width: 24, height: 24, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPayment}>
          <Text style={styles.textPayment}>Payment Method</Text>
          <View style={styles.boxSelectBank}>
            <Image
              source={require('../../Image/bca.png')}
              style={{width: 50, height: 26, resizeMode: 'contain'}}
            />
            <Text style={styles.textBank}>Bank BCA</Text>
            <Text style={styles.textKetBank}>Baru tersedia ke Bank BCA</Text>
          </View>
          <Image
            source={require('../../Image/line2.png')}
            style={{
              resizeMode: 'contain',
              width: 360,
              marginTop: -5,
            }}
          />
          <View style={styles.boxSelectBank}>
            <Image
              source={require('../../Image/gopay.png')}
              style={{width: 50, height: 26, resizeMode: 'contain'}}
            />
            <Text style={styles.textBank}>GoPay</Text>
          </View>
        </View>
        <View style={styles.boxSummary}>
          <Text style={styles.textSummary}>Order Summary</Text>
          <View style={styles.boxTotal}>
            <Text style={styles.textTotal}>Subtotal</Text>
            <Text style={styles.textTotalHarga}>Rp142.000</Text>
          </View>
          <View style={styles.boxTotal}>
            <Text style={styles.textTotal}>Shipping</Text>
            <Text style={styles.textTotalHarga}>Rp10.000</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.boxTotalOrder}>
        <View style={styles.total}>
          <Text style={styles.textTotal}>Total:</Text>
          <Text style={styles.textMerah}>Rp152.000</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSummaryPage;

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
    marginTop: 2,
    backgroundColor: ColorsStyle.whitee,
  },
  textOrderSummary: {
    fontFamily: 'Poppins-Bold',
    color: ColorsStyle.blackPrimary,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  boxLokasi: {
    height: 56,
    backgroundColor: ColorsStyle.whitee,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 3,
    flexDirection: 'row',
  },
  textAlamat: {
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.black2,
    fontSize: 12,
    marginLeft: 12,
  },
  boxProduct: {
    padding: 20,
    backgroundColor: ColorsStyle.whitee,
    height: 245,
  },
  wrapProduct: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxNamaProd: {
    flex: 1,
    marginLeft: 5,
  },
  textNamaProd: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  textColorSize: {
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.colorText,
    fontSize: 12,
  },
  boxQuantity: {
    position: 'absolute',
    flexDirection: 'row',
    width: 80,
    bottom: 0,
    right: 0,
  },
  textQuantity: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  boxShipping: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 27,
  },
  textHargaShipping: {
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.colorText,
    fontSize: 12,
    flex: 1,
    textAlign: 'right',
  },
  boxAddMessage: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  textAddMessage: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.abu,
  },
  textOptional: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.abu,
    marginRight: 5,
  },

  boxPayment: {
    backgroundColor: ColorsStyle.whitee,
    height: 165,
    padding: 20,
    marginTop: 2,
  },
  boxSelectBank: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBank: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
    marginLeft: 5,
  },
  textKetBank: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.abu,
  },
  textPayment: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
    marginBottom: 10,
  },
  boxSummary: {
    backgroundColor: ColorsStyle.whitee,
    padding: 20,
    marginTop: 2,
    marginBottom: 122,
  },
  textSummary: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
    marginBottom: 19,
  },
  boxTotal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textTotal: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
    marginBottom: 14,
  },
  textTotalHarga: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
    flex: 1,
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  boxTotalOrder: {
    height: 120,
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
  total: {
    flexDirection: 'row',
  },
  textMerah: {
    color: ColorsStyle.redSecondary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
