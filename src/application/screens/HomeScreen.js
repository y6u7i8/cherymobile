import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import * as appActions from '../../reducers/app/actions';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    performBack() {
        this.props.dispatch(appActions.changeLoginStatus('start', 'initial'));
    }
    navigateTo(type) {
        this.props.navigator.push({
            screen: 'application.CluesScreen',
            title: type === "month" ? '本月线索' : '新增线索',
            navigatorStyle: {
                navBarTitleTextCentered: true
            },
            passProps: {
                type: type
            }
        });
    }
    render() {
        return (
            <View style={ styles.container }>
              <Text>
                首页
              </Text>
              <Button
                      isLoading={ false }
                      style={ styles.buttonContainer }
                      textStyle={ styles.textStyle6 }
                      onPress={ this.performBack.bind(this) }>
                返回
              </Button>
              <Button
                      isLoading={ false }
                      style={ styles.buttonContainer }
                      textStyle={ styles.textStyle6 }
                      onPress={ this.navigateTo.bind(this, "month") }>
                本月线索
              </Button>
              <Button
                      isLoading={ false }
                      style={ styles.buttonContainer }
                      textStyle={ styles.textStyle6 }
                      onPress={ this.navigateTo.bind(this, "new") }>
                新增线索
              </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        marginTop: 20,
        height: 40,
        width: 300,
        backgroundColor: '#227622',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#227622',
        borderRadius: 5,
        borderWidth: 1
    },
    textStyle6: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default connect()(HomeScreen);
