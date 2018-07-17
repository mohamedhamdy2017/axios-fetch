import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Button } from 'native-base';

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return(
    <View style={styles.container}>
    <StatusBar hidden/>
      <View >
      <Image
        source={require ('../imgs/taylor.jpg')}
        style={{width: '100%', height: '100%'}}
      />
      </View>
      <Button 
        block
        onPress= {() => this.props.navigation.navigate('SearchScreen')}
        >
      
      <Text style={{color:'white'}} >Search</Text>
      </Button>
    
    </View>
        )
    }
}
const styles ={
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
}
export default HomeScreen;