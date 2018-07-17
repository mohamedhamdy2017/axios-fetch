import React from 'react';
import { Text } from 'react-native';
import {TabNavigator} from 'react-navigation';
import { Footer, FooterTab, Button } from 'native-base';
import SearchTab from './SearchTab';
import FavoriteTab from './FavoriteTab';
import Icon  from 'react-native-vector-icons/FontAwesome';



const SearchScreen = TabNavigator({
    SearchTab: { screen: SearchTab},
    FavoriteTab: { screen: FavoriteTab}
},{
    navigationOptions:{
        header: null
    },
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        vertical
                        active = { props.navigationState.index === 0}
                        onPress = {() => props.navigation.navigate('SearchTab')}
                        
                    >
                    <Icon name={"coffee"} size= {20} color= 'white'/>
                    <Text style={{color: 'white'}}>Search</Text>
                    

                    </Button>

                    <Button
                        vertical
                        active = { props.navigationState.index === 1}
                        onPress = { () => props.navigation.navigate('FavoriteTab')}
                    >
                    <Icon name={"star"} size= {20} color= 'white' />
                    <Text style={{color: 'white'}}>Favorite</Text>

                    </Button>

                </FooterTab>
            </Footer>
        )
    }

})

export default SearchScreen;