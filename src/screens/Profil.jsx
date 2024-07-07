import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../assets/saya.jpeg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Meifinatul Mardiyah</Text>
            <Text style={styles.profileStatus}>meifinatulm@gmail.com</Text>
            <Text style={styles.profileStatus}>085945430927</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.verificationText}>
          <Text style={styles.linkText}> Retailer </Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Jumlah Pemesanan</Text>
        <View style={styles.orderStatus}>
          <TouchableOpacity style={styles.orderStatusItem}>
            <Text>Pesanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderStatusItem}>
            <Text>Dikemas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderStatusItem}>
            <Text>Dikirim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderStatusItem}>
            <Text>Beri Penilaian</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dompet Saya</Text>
        <View style={styles.wallet}>
          <TouchableOpacity style={styles.walletItem}>
            <Text style={styles.textwallet}>Shopee Food</Text>
            <Text style={styles.textwallet}>Shopee Food</Text>
            <Text>Pakai ShopeePay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletItem}>
            <Text style={styles.textwallet}>Koin Shopee</Text>
            <Text style={styles.textwallet}>Koin Gratis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletItem}>
            <Text style={styles.textwallet}>SPayLater</Text>
            <Text style={styles.textwallet}>Diskon s/d 30RB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletItem}>
            <Text style={styles.textwallet}>SPinjam</Text>
            <Text style={styles.textwallet}>Limit s/d 50JT & Voucher</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.textwallet}>Download Shopee Food</Text>
          <Text style={styles.textwallet}>Saldo Gratis 77RB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.textwallet}>SeaBank</Text>
          <Text style={styles.textwallet}>Transfer Gratis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Asuransi Saya</Text>
          <Text>Lihat Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconText: {
    color: '#fff',
    marginLeft: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileStatus: {
    color: '#fff',
    marginVertical: 5,
  },
  followInfo: {
    flexDirection: 'row',
  },
  followText: {
    color: '#fff',
    marginRight: 10,
  },
  section: {
    padding: 16,
  },
  verificationText: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
  },
  textwallet: {
    color: 'black',
  },
  linkText: {
    color: '#FF5722',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderStatusItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  wallet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  walletItem: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});