import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Buttons from './Buttons';

const AlbumDetail = ({ albumprop }) => {
const { title, artist, thumbnail_image, image, url } = albumprop;
const { headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
      } = styles;

  return (
  <Card>

    <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
      </View>

      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>

    </CardSection>

    <CardSection>
      <Image source={{ uri: image }} style={imageStyle} />
    </CardSection>

    <CardSection>
        <Buttons onPress={() => Linking.openURL(url)}>
        Buy Now
        </Buttons>
    </CardSection>

  </Card>
);
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
