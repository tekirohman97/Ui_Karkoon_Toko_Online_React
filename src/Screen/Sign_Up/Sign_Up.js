import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';
import Vektor from '../../Image/vektor_1.png';
import bendera from '../../Image/bendera.png';
import botArrow from '../../Image/arrow-bot.png';
import google from '../../Image/google.png';

const SignUp = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.textJudul}>{'Selamat datang'}</Text>
        <Text style={styles.textSubJudul}>{'Masukan nomor ponsel kamu'}</Text>
        <View style={styles.boxVektor}>
          <Image source={Vektor} style={styles.vektor}></Image>
        </View>
        <View style={styles.formInput}>
          <View style={styles.boxSb}>
            <Image source={bendera} style={styles.bendera}></Image>
            <Text>+62</Text>
            <Image source={botArrow} style={styles.botArrow}></Image>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="123-4567-8912"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Lanjut</Text>
        </TouchableOpacity>
        <Text style={styles.textBiasa}>atau</Text>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Image source={google} style={styles.iconGoogle}></Image>
          <Text style={styles.textGoogle}>Lanjut dengan Google</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Dengan Melanjutkan, kamu menyetujui syarat & ketentuan dan kebijakan
          privasi Karkoon
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  textJudul: {
    fontSize: 32,
    fontWeight: '600',
    color: '#404040',
    marginTop: 50,
    fontFamily: 'Poppins-Bold',
  },
  textSubJudul: {
    fontSize: 16,
    // fontWeight: '500',
    color: '#616161',
    marginBottom: 12,
    fontFamily: 'Poppins-Medium',
  },
  boxVektor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vektor: {
    height: 244,
    width: 244,
  },
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    marginTop: 30,
    borderRadius: 4,
  },
  boxSb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bendera: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 5,
  },
  botArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  input: {
    height: 45,
    borderWidth: 0,
    padding: 10,
    marginTop: 0,
    flex: 1,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: ColorsStyle.redkPrimary,
    shadowColor: ColorsStyle.black2,
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  textBiasa: {
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: ColorsStyle.colorText,
  },
  buttonGoogle: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: ColorsStyle.whitee,
    shadowColor: ColorsStyle.black2,
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  iconGoogle: {
    marginRight: 8,
    width: 24,
    height: 24,
  },
  textGoogle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: ColorsStyle.black3,
  },
  footerText: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    position: 'absolute',
    bottom: 40,
    color: ColorsStyle.abu,
  },
});
