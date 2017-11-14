import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Text from '../../components/text/Text';
import styles from './styles';
import Button from '../../components/button/Button';
import { updateLuckyNumber } from './actions';

class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
    })
    state = {
        loading: false
    }

    generateLuckyNumber = () => {
        this.setState({loading: true});
        let newnum = Math.floor(Math.random() * 10);
        this.props.dispatch(updateLuckyNumber(newnum));
        this.setState({loading: false});
    }

    render(){
        const { homeState: { luckyNumber } } = this.props;
        return(
            <View style={styles.container}>
                <Text h1> Heading 1 </Text>
                <Text h2> Heading 2 </Text>
                <Text h3> Heading 3 </Text>
                <Text h4> Heading 4 </Text>

                <Text style={{marginTop: 20}}>Simple logic showing implementation of Redux, and redux persist. View code to learn more.</Text>
                <Text style={{marginTop: 20}} h4>Lucky number</Text>
                <Text h1>{luckyNumber}</Text>
                <Button loading={this.state.loading} onPress={this.generateLuckyNumber} accent title="Test My Luck" />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
      homeState: state.homeState
});

export default connect(mapStateToProps)(HomeScreen);