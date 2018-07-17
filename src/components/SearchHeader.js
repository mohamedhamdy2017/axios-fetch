import React, { Component } from 'react';
import { Header, Item, Icon, Input } from 'native-base'; 

class SearchHeader extends Component {
    render(){
        return(
            <Header
                rounded
                searchBar
            >
                <Item>
                    <Icon name ="search" />
                    <Input 
                        returnKeyType="search"
                        placeholder={this.props.placeholder}
                        onChangeText={this.props.onChangeText}
                        onSubmitEditing = {this.props.albumSearch}
                    />
                </Item>
            </Header>
        )
    }
}
export default SearchHeader;