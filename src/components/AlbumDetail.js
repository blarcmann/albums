import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Bttn from './Bttn';

const AlbumDetail = ({album}) => {
  const {thumbnail_image, title, artist, image, url} = album;
  const {img, cardHeader, img_container, albumName, artwork} = styles;
  return (
    <Card>
      <CardSection>
        <View style={img_container}>
          <Image style={img} source={{uri: thumbnail_image}} />
        </View>
        <View style={cardHeader}>
          <Text style={albumName}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={artwork} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Bttn pressEvent={() => Linking.openURL(url)}>Buy now</Bttn>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  img: {
    width: 50,
    height: 50,
  },
  img_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 10,
  },
  albumName: {
    fontSize: 18,
  },
  artwork: {
    flex: 1,
    width: null,
    height: 300,
  },
};

export default AlbumDetail;
