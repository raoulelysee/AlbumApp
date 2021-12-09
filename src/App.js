/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerTextprop={'Albums'} />
        <AlbumList />
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1
  }
  });
