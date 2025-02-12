import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const promos = [
  {
    id: '1',
    title: 'Diskon 50% California Roll',
    description: 'Nikmati diskon 50% untuk semua makanan di Restoran A.',
    image: 'https://www.allrecipes.com/thmb/TCBGwq8AUKpZyjGZtS_dyYfsAL4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM-169856-CreamCheeseandCrabSushiRolls-ddmfs-3x4-6421-8d233e210db3458f8574bafad1c69e70.jpg',
   
  },
  {
    id: '2',
    title: 'Nikmati diskonnya sekarang',
    description: 'Beli 2 gratis 1',
    image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/08/COVER.jpg',
  },
  {
    id: '3',
    title: 'Beli 1 Gratis 1',
    description: 'Beli pizza 1 paket Rp.100.000 lengkap dengan minumannya',
    image: 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg',
  },
  // Tambahkan lebih banyak promo sesuai kebutuhan
];

const Promo = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.promoItem}>
      <Image source={{ uri: item.image }} style={styles.promoImage} />
      <View style={styles.promoText}>
        <Text style={styles.promoTitle}>{item.title}</Text>
        <Text style={styles.promoDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={promos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.promoList}
      />
    </View>
  );
};

export default Promo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 16,
  },
  promoList: {
    paddingBottom: 16,
  },
  promoItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  promoImage: {
    width: 100,
    height: 100,
  },
  promoText: {
    flex: 1,
    padding: 16,
  },
  promoTitle: {
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promoDescription: {
    fontSize: 14,
    color: '#666',
  },
});
