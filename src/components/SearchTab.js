import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Keyboard , ListView} from 'react-native';
import { Container, Content } from 'native-base';
import SearchHeader from './SearchHeader';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class SearchTab extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        searchAlbum : '',
        albums: []
    }

    

    albumSearch () {
        Keyboard.dismiss()
        
        let albumsArr = this.state.albums;
        let searchAlbum = this.state.searchAlbum;

        for(var i =0; i < albumsArr.length; i++) {
            if(searchAlbum === albumsArr [i].title){
                this.setState({searchAlbum :  [albumsArr[i]] })
            }
        }
    }

    componentDidMount(){
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

                <SearchHeader
                    value = {this.state.searchCoffee}
                    placeholder = "Search Here..."
                    onChangeText = {(searchAlbum) => this.setState({searchAlbum})}
                    albumSearch = {this.albumSearch.bind(this)}
                />

                <Content>
                    {this.renderAlbums()}
                </Content>
            </Container>
        )
    }
}
export default SearchTab;