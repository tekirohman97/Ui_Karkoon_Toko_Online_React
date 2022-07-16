import {StyleSheet} from 'react-native';
import {ColorsStyle} from '../Styles/Colors';

const styles = StyleSheet.create({
  // Const Category
  boxCategori: {
    height: 100,
    flexDirection: 'row',
  },
  colCategori: {
    flexDirection: 'column',
    marginRight: 10,
  },

  cardCategori: {
    resizeMode: 'contain',
    width: 90,
    height: 41,
    marginVertical: 5,
  },

  //   Const Product

  boxProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  cardProduct: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },

  imageProduct: {
    width: 156,
    height: 180,
    resizeMode: 'contain',
  },

  textHarga: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 8,
    marginBottom: 2,
    fontSize: 14,
    color: ColorsStyle.black4,
  },
  textNamaProduct: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: ColorsStyle.black2,
  },

  //   Button Di halaman Detail Product

  boxButtonVariant: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 52,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 2,
  },
  textVariant: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorsStyle.blackPrimary,
    flex: 1,
  },
  boxButtonPengiriman: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 75,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 2,
  },
  boxTextPengiriman: {
    flex: 1,
  },
  textPengiriman: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorsStyle.blackPrimary,
  },
  textDikirm: {
    fontFamily: 'Poppins-regular',
    fontSize: 14,
    color: ColorsStyle.colorText,
  },

  boxDeskripsi: {
    marginTop: 2,
    paddingHorizontal: 20,
    backgroundColor: ColorsStyle.whitee,
    paddingVertical: 20,
    marginBottom: 66,
  },
  textDeskripsi: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorsStyle.blackPrimary,
  },
});

export default styles;
