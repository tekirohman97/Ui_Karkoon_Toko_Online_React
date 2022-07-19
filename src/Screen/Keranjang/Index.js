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
        <View>
          <Text>
            <Icon name="home" size={50} />
          </Text>
          {/* <CheckBox
            title="Pilih Semua"
            checked={pilihSemua}
            checkedIcon="home"
          /> */}
          <Text style={styles.pilihSemua}>Pilih Semua</Text>
        </View>
      </ScrollView>
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
  pilihSemua: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.black3,
  },
});
