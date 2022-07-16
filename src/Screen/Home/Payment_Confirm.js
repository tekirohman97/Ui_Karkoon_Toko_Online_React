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
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const PaymentConfirmPage = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../../Image/x.png')}
          style={{
            width: 44,
            height: 44,
            resizeMode: 'contain',
            position: 'absolute',
            top: 24,
            left: 10,
          }}
        />
      </TouchableOpacity>
      <View style={styles.conten}>
        <Image
          source={require('../../Image/payment_confirm.png')}
          style={{
            width: 300,
            height: 250,
            resizeMode: 'contain',
            marginBottom: -70,
          }}
        />
        <Text style={styles.textPayment}>Payment Confirmed</Text>
        <Text style={styles.textOderNumber}>Order Number #6279870</Text>
        <Text style={styles.textYourOrder}>
          Your order will now be proceeded to seller
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Check Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentConfirmPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsStyle.whitee,
    position: 'relative',
  },
  conten: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  textPayment: {
    color: ColorsStyle.green,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 15,
  },
  textOderNumber: {
    color: ColorsStyle.blackPrimary,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
  },
  textYourOrder: {
    color: ColorsStyle.blackPrimary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});
