import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview'



const domain = Platform.select({
  ios: 'https://twitter.com/search?q=#아침식사&src=typed_query',
  android: 'https://twitter.com/search?q=%23아침식사&src=typed_query'
});


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexPage: { uri: domain + '?ver=1' }
        };
    }

    render() {
        return (
          <SafeAreaView style={styles.container}>
                <WebView
                    style={styles.webview}
                    source={this.state.indexPage}
                    originWhitelist={['*']}
                    ref={webview => this.appWebview = webview}
                    javaScriptEnabled={true}
                    useWebKit={true}
                />
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0
    },
    webview: {
        flex: 1
    }
});