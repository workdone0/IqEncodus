import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ProductCard from '../components/productCard';

const subCategory = ['Mobile', 'Laptops', 'Tablets', 'PC'];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectedCat: '',
    };
  }
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: '#558C8C',
          }}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>
              Albalad Market Logo
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon size={25} name="menu" color="#ffffff" />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: 250,
          }}>
          <View style={{height: 250, width: Dimensions.get('window').width}}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1614110426095-211086d8361a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              style={{
                resizeMode: 'cover',
                flex: 1,
              }}
            />
          </View>
          <View style={{height: 250, width: Dimensions.get('window').width}}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1614110426095-211086d8361a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              style={{
                resizeMode: 'cover',
                flex: 1,
              }}
            />
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#465362',
            paddingHorizontal: 20,
            paddingVertical: 20,
            height: 150,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffffff',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  flex: 1,
                  paddingVertical: 15,
                  paddingHorizontal: 2,
                  alignSelf: 'center',
                }}
                size={20}
                name="list"
                color="#FB5607"
              />
              <Picker style={{flex: 4}}>
                <Picker.Item label="Categories" value="java" />
              </Picker>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  flex: 1,
                  paddingVertical: 15,
                  paddingHorizontal: 2,
                  alignSelf: 'center',
                }}
                size={20}
                name="place"
                color="#FB5607"
              />
              <Picker style={{flex: 4}}>
                <Picker.Item label="Jordan" value="java" />
              </Picker>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 4}}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  paddingHorizontal: 10,
                }}
                placeholder="What are you looking for?"
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#FB5607',
                justifyContent: 'center',
              }}>
              <Icon size={25} name="search" color="#ffffff" />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#558C8C',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 5,
          }}>
          <Text style={{fontSize: 20, color: '#ffffff'}}>
            Display results for : {this.state.selectedCat}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 100, paddingTop: 10}}>
          {subCategory.map((subCat) => {
            return (
              <TouchableOpacity
                style={{
                  width: 100,
                  borderWidth: 1,
                  alignItems: 'center',
                  margin: 5,
                  borderRadius: 5,
                  height: 40,
                  justifyContent: 'center',
                  backgroundColor: '#74c69d',
                }}
                onPress={() =>
                  this.setState({
                    selectedCat: subCat,
                  })
                }>
                <Text style={{fontSize: 15, color: '#ffffff'}}>{subCat}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width,
              height: 50,
              backgroundColor: '#558C8C',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#ffffff',
              }}>
              Apply Filters
            </Text>
          </TouchableOpacity>
        </View>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    );
  }
}

export default Home;
