import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
	
		ratings: number;
	
};


const Rating = ({ratings}:Props) => {


    // Recieve the ratings object from the props
		//let ratingObj = ratingObj;

		// This array will contain our star tags. We will include this
		// array between the view tag.
		let stars = [];
		// Loop 5 times
		for (var i = 1; i <= 5; i++) {
			// set the path to filled stars
			let path = require('../../assets/img/star-filled.png');
			// If ratings is lower, set the path to unfilled stars
			if (i > ratings/2) {
				path = require('../../assets/img/star-unfilled.png');
			}

			stars.push((<Image key={i} style={styles.image} source={path} />));
		}

		return (
			<View style={ styles.container }>
				{ stars }
			</View>
		);
	
}


export default Rating

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 25,
		height: 25
	},
	text: {
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10
	}
});