import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RightArrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Icon.Button
                             style={ { flexDirection: "row-reverse" } }
                             iconStyle={ { marginLeft: 10, marginRight: 0 } }
                             name="angle-right"
                             backgroundColor="transparent"
                             color="gray"
                             onPress={ this.props.onPressEvent }>
                  <Text style={ { fontFamily: 'Arial', fontSize: 15 } }>
                    请选择
                  </Text>
                </Icon.Button>);
    }
}
export default RightArrow;