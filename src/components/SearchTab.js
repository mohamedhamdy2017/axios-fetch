import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {

    state = {
        albums: []
    }

    static navigationOptions = {
        title: 'A L B U M S     L I S T'
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}))
    }

    renderAlbums() {
        return this.state.albums.map(album =>
             <AlbumDetails key = {album.title} album = {album} />
        )
    }
   
    render(){
        return(
            <Container>
                <Content>
                    {this.renderAlbums()}
                </Content>
            </Container>
        )
    }
}
export default AlbumList;
