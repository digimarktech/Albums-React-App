//Demo App

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
//This component is the App Component
//flex style is used to ensure all of the content fits on the screen
const App = () => (
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

//Render the component to our device
AppRegistry.registerComponent('albums', () => App);
