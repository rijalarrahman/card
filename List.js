import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';

export default class List extends Component {
	constructor(props) {
		super(props);

	  }
	render() {
		return (

			<View style={localStyles.container}>
			<Text>{'\n'}</Text>
				<FlatList
					data={this.props.items}
  					renderItem={({item}) => <Text>{item}</Text>}
  					/>
			</View>
		)
	}
}

const localStyles = StyleSheet.create({
	container: {
		width: 400,
		height: 250,
		marginLeft:20
	},
	baseText: {
		fontFamily: 'Cochin',
		color: 'black'
	},
	titleText: {
		fontSize: 45,
		fontWeight: 'bold',
	}
});
