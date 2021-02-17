import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from 'App.style';
import RNShake from 'react-native-shake';
import Icon from 'react-native-vector-icons/AntDesign';
import GiftModalComponent from 'src/features/components/GiftModal/GiftModal.component';
import Gift from 'src/core/models/Gift.model';
import _ from 'lodash';

class App extends Component<any> {
    state = {
        displayGiftModal: false,
        gift: null,
        score: 0,
    };

    componentDidMount() {
        const gifts: Gift[] = [
            { id: 1, name: 'flower', image: require('src/shared/assets/images/flower.png'), point: 10 },
            { id: 2, name: 'heart', image: require('src/shared/assets/images/heart.png'), point: 50 },
            { id: 3, name: 'poo', image: require('src/shared/assets/images/poo.png'), point: -20 },
        ];

        RNShake.addEventListener('ShakeEvent', () => {
            if (this.state.displayGiftModal) {
                return;
            }

            const gift = _.sample(gifts);
            this.displayGiftModal(true, gift);
        });
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    displayGiftModal = (display: boolean, gift: Gift = null) => {
        if (gift) {
            this.setState({ displayGiftModal: display, gift, score: this.state.score + gift.point });
            return;
        }
        this.setState({ displayGiftModal: display, gift });
    };


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.body}>
                    <Text style={styles.sectionDescription}>
                        Shake your phone to receive a gift.
                    </Text>
                    <Icon
                        style={{ marginTop: 20 }}
                        name="shake" size={30} color="dimgray" />
                    <Text style={styles.score}>
                        Score: {this.state.score}
                    </Text>
                </View>
                <GiftModalComponent
                    gift={this.state.gift}
                    displayModal={this.displayGiftModal}
                    display={this.state.displayGiftModal}
                />
            </SafeAreaView>
        );
    }
}

export default App;
