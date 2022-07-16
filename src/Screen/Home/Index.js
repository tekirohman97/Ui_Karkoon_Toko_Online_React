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

const Categori = () => {
  return (
    <ScrollView
      horizontal={true}
      style={Gstyles.boxCategori}
      showsHorizontalScrollIndicator={false}>
      <View style={Gstyles.colCategori}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_women.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_elektronik.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
      </View>
      <View style={Gstyles.colCategori}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_men.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_muslim.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
      </View>
      <View style={Gstyles.colCategori}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_sport.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_health.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
      </View>
      <View style={Gstyles.colCategori}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_baby.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Image/card_travel.png')}
            style={Gstyles.cardCategori}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.buttonSearch}>
          <Image
            source={require('../../Image/search.png')}
            style={{width: 20, height: 20, color: ColorsStyle.abu2}}
          />
          <Text
            style={{
              fontSize: 12,
              color: ColorsStyle.abu2,
              marginLeft: 12,
              fontFamily: 'Poppins-Regular',
            }}>
            Apa yang mau kamu cari?
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textSub}>Kategori</Text>
        <Categori />
        <Text style={styles.textSub2}>Yang baru dan populer</Text>
        <Product />
      </ScrollView>
    </View>
  );
};

export default HomePage;

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
  textSub: {
    color: ColorsStyle.blackPekat,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 28,
  },
  textSub2: {
    color: ColorsStyle.blackPekat,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 20,
    marginBottom: 10,
  },
});
