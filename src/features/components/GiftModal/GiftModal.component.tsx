import React, { Component } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from 'src/features/components/GiftModal/GiftModal.style';
import _ from 'lodash';
import Modal from 'react-native-modal';
import Gift from 'src/core/models/Gift.model';

type Props = {
    gift: Gift,
    displayModal: (display: boolean) => void,
    display: boolean,
}

class GiftModalComponent extends Component<Props, any> {

    render() {
        const { gift } = this.props;

        return (
            <Modal isVisible={this.props.display}
                   onDismiss={() => this.props.displayModal(false)}
            >
                <View style={styles.container}>
                    <View style={styles.btnClose}>
                        <Icon
                            name="close"
                            color="white"
                            size={30}
                            onPress={() => this.props.displayModal(false)}
                        />
                    </View>

                    {
                        _.isNil(gift) &&
                        <View style={{ justifyContent: 'center' }}>
                          <ActivityIndicator
                            size="large"
                          />
                        </View>
                    }

                    {
                        !_.isNil(gift) &&
                        <View style={{ alignItems: 'center' }}>
                          <Image source={gift.image} />
                          <Text style={styles.message}>You got a {gift.name}!</Text>

                          <Text style={[styles.point, {color: gift.point > 0 ? 'green' : 'red'}]}>{gift.point} points</Text>
                        </View>
                    }
                </View>
            </Modal>
        );
    }
}

export default GiftModalComponent;
