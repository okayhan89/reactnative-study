import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardCompnent extends Component{
    render(){
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
              <Body>
                <Text>Anpigo n1</Text>
                <Text note>Jan 21, 2019</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image 
              source={{ uri: 'https://photos.google.com/share/AF1QipPVlg8t02GGf3XcM8op9An4JpWpN3NHWPn3iukOZPU0EPErPujDCxVpjMVAzQvlkg/photo/AF1QipOy8wSDEL7fKhUS3smi0RxRAAgT4ps6D7DP67LQ?key=b29GOUdFWnFIVDhPeXQ2eW84OVBzNG5MMkxPRjBn/KakaoTalk_20191019_172138260.jpg' }} 
              style={{ height:200, width:null, flex: 1 }} />
          </CardItem>
          <CardItem style={{ height:45 }}>
            <Left>
              <Button transparent>
                <Icon name='ios-heart' style={{ color:'black' }}/>
              </Button>
              <Button transparent>
                <Icon name='ios-chatbubbles' style={{ color:'black' }}/>
              </Button>
              <Button transparent>
                <Icon name='ios-send' style={{ color:'black' }}/>
              </Button>
            </Left>
          </CardItem>
          <CardItem style={{ height: 20 }}>
            <Text>101 likes</Text>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{ fontWeight:'900'}}>Anpigon</Text>
                이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다.
              </Text>
            </CardItem>
          </Card>
      );
    }
  }

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});