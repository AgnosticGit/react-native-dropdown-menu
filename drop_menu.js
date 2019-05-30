import React from 'react';
import styles from './styles'
import {View, TouchableOpacity, ScrollView, FlatList,  Text, Image} from 'react-native';

export default class DropMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mainElement: this.props.mainElement
        };
    }

    Open() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true})
    }

    onSelect(item) {
        this.setState({mainElement: item});
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.main, this.props.customStyles.main]}
                    onPress={() => this.Open()}>
                    <Text style={[styles.text, this.props.customStyles.text]}>{this.state.mainElement}</Text>
                    <Image source={this.props.iconSource} style={[styles.icon, this.props.customStyles.icon]}/>
                </TouchableOpacity>

                {this.state.open ? <ScrollView style={[styles.scroll, this.props.customStyles.scroll]}>
                    <FlatList
                        styles={[this.props.customStyles.flatList]}
                        data={this.props.arrElements}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem=
                            {
                                ({item}) =>
                                    <View>
                                        <TouchableOpacity
                                            style={[styles.elements, this.props.customStyles.elements]}
                                            onPress={() => {
                                                this.onSelect(item);
                                                this.setState({open: false})
                                                this.props.getElement(item)
                                            }}>
                                            <Text
                                                style={[styles.elementsText, this.props.customStyles.elementsText]}>{item}</Text>
                                        </TouchableOpacity>
                                    </View>
                            }/>
                </ScrollView> : null}
            </View>
        )
    }
}

DropMenu.defaultProps = {
    arrElements: [],
    mainElement:'Все',
    iconSource: require('./arrowbot.png'),
    customStyles: {},
};


