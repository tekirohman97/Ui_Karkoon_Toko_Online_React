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

const Product = () => {
  return (
    <View style={Gstyles.boxProduct}>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
      <View style={Gstyles.cardProduct}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/prod_1.png')}
            style={Gstyles.imageProduct}
          />
        </TouchableOpacity>
        <Text style={Gstyles.textHarga}>IDR. 120.000</Text>
        <Text style={Gstyles.textNamaProduct}>Stylist Bluoush Woman 1</Text>
      </View>
    </View>
  );
};

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxButton}>
        <View style={styles.buttonSearch}>
          <Image
            source={require('../../Image/search.png')}
            style={{width: 20, height: 20, color: ColorsStyle.abu2}}
          />
          <TextInput
            placeholder="Apa yang mau kamu cari?"
            autoFocus={true}
            placeholderTextColor={ColorsStyle.abu}
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
              color: ColorsStyle.black4,
              paddingLeft: 10,
              height: 60,
              flex: 1,
            }}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Product />
      </ScrollView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: ColorsStyle.whitee,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  boxButton: {
    justifyContent: 'center',
    height: 60,
  },
  buttonSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EDEDED',
    paddingHorizontal: 16,
    backgroundColor: ColorsStyle.backgroundSearch,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#404040',
  },
});
