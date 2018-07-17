import React, { Componenet } from 'react';
import { View, Text, Image, Linking, url } from 'react-native';
import { Card, CardSection } from './common';
import { Button, Icon } from 'native-base';

const AlbumDetails = ({album}) => {
    const { thumbnail_image, title, artist, image, url } = album;
        return(
            <Card>
                <CardSection>
                    <View>
                        <Image style={{width: 50, height: 50}} 
                           source= {{uri : thumbnail_image}} > 
                        </Image>
                    </View>

                    <View style={{marginLeft: 5}}>
                        <Text style={{fontWeight: 'bold', fontSize : 18}}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>

                    <View>
                        <Icon  name = "star" size = {20}  />
                    </View>
                </CardSection>

                <CardSection>
                        <Image 
                            source= {{uri: image}}
                            style={{width: null, flex: 1, height:300 }}
                        />
                </CardSection>

                
                        <Button 
                        block
                        style={{backgroundColor: 'white'}}
                        onPress = {() => Linking.openURL(url)}
                        >
                            <Text style={{color:'blue'}}>Buy Now</Text> 
                        </Button>
             
            </Card>
        );
    }

const styles = {
    container : {

    }
}

export default AlbumDetails;