import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = () => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => {
        this.setState({
          albums: response.data,
        });
        console.log(response);
      },
      error => {
        console.log(error);
        throw error;
      },
    );
  };

  render() {
    let albums = [];
    let stateAlbums = this.state.albums;
    stateAlbums.forEach((album, i) => {
      albums.push(<AlbumDetail key={i} album={album} />);
    });
    return <ScrollView>{albums}</ScrollView>;
  }
}

export default AlbumList;
