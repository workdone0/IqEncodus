import React, {Component} from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ProductCard extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2, height: 200}}>
            <ImageBackground
              source={{
                uri:
                  'https://images.unsplash.com/photo-1614110426095-211086d8361a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              style={{
                resizeMode: 'cover',
                flex: 1,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 4,
                  left: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#74c69d',
                  borderWidth: 1,
                  borderBottomEndRadius: 15,
                  borderTopEndRadius: 15,
                  paddingHorizontal: 10,
                }}>
                <Text>$50</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 4,
                  left: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#558C8C',
                  borderWidth: 1,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: '#ffffff'}}>VIP</Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 3,
              borderWidth: 1,
              height: 200,
              padding: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#558C8C'}}>
              Product Name
            </Text>
            <Text style={{fontSize: 15}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#FB5607',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>See Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProductCard;
