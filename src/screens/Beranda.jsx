import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const categories = [
  { id: '1', name: 'Pizza'},
  { id: '2', name: 'Burgers' },
  { id: '3', name: 'Sushi' },
  { id: '4', name: 'Desserts' },
  { id: '5', name: 'jusbuah' },
  
];

const featuredDishes = [
  {
    id: '1',
    name: 'Margherita Pizza',
    image: 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg',
    description: 'Classic pizza with fresh tomatoes and basil',
    harga:'Rp 10,000',
    beli:'Beli Sekarang',
  },
  {
    id: '2',
    name: 'Cheeseburger',
    image: 'https://cdn.healthyrecipes101.com/recipes/images/juices/orange-juice-apple-cider-vinegar-honey-recipe-clavzzdsq002f551b43hs7iz6.webp?w=750&q=80',
    description: 'Juicy beef patty with cheese and fresh veggies',
    harga:'Rp 10,000',
    beli:'Beli Sekarang',
  },
  {
    id: '3',
    name: 'California Roll',
    image: 'https://www.allrecipes.com/thmb/TCBGwq8AUKpZyjGZtS_dyYfsAL4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM-169856-CreamCheeseandCrabSushiRolls-ddmfs-3x4-6421-8d233e210db3458f8574bafad1c69e70.jpg',
    description: 'Sushi roll with crab, avocado, and cucumber',
    harga:'Rp 10,000',
    beli:'Beli Sekarang',
  },
  {
    id: '4',
    name: 'Seblak Kuah Pedas',
    image: 'https://images.tokopedia.net/img/KRMmCm/2022/10/6/2cb23dcb-a38a-47af-a5d5-4b3a9ab60ac9.jpg',
    description: 'Seblak Prasmanan',
    harga:'Rp 15.000',
    beli:'Beli Sekarang',
  },
  {
    id: '5',
    name: 'California Roll',
    image: 'https://www.allrecipes.com/thmb/TCBGwq8AUKpZyjGZtS_dyYfsAL4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM-169856-CreamCheeseandCrabSushiRolls-ddmfs-3x4-6421-8d233e210db3458f8574bafad1c69e70.jpg',
    description: 'Sushi roll with crab, avocado, and cucumber',
    harga:'Rp 10,000',
    beli:'Beli Sekarang',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.conImage} > 
      <Image
            source={{ uri: 'https://juragankreatif.com/wp-content/uploads/2020/01/Penyampaian-Pesan-Branding-1024x683.webp' }}
            style={styles.profileImage}
          />
      </View>
    
      
      
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      
      <Text style={styles.sectionTitle}>Featured Dishes</Text>
      <FlatList
        data={featuredDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Image source={{ uri: item.image }} style={styles.dishImage} />
            <View style={styles.dishInfo}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishDescription}>{item.description}</Text>
              <View style={styles.conBeli}>

              <Text style={styles.harga}>{item.harga}</Text>
              <TouchableOpacity>

              <Text style={styles.beli}>{item.beli}</Text>
              </TouchableOpacity>
              </View>
          
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  conImage:{
    width:'100%',
    height:100,
  },
  profileImage:{
    width:'100%',
    height:150
  },
  conBeli:{
  paddingTop:20,
  flexDirection:'row',
  alignContent:'center',
  justifyContent:'space-between',
  },
  beli:{
    color:'green',

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  categoryItem: {
    marginRight: 16,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    color:'green'
  },
  dishItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    overflow: 'hidden',
  },
  dishImage: {
    width: 100,
    height: 100,
  },
  dishInfo: {
    flex: 1,
    padding: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red'
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  harga:{
    color:'black'
  }
});
