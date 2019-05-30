import {StyleSheet} from "react-native";

let styles = StyleSheet.create(
    {
        main:
            {
                flexDirection: 'row',
                height: 30,
                marginLeft: 15,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 12,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            },

        text:
            {
                color: '#ff7f02',
            },

        icon:
            {
                marginTop: 5,
                marginLeft: 5,
                tintColor: '#ff7f02'
            },

        scroll:
            {
                zIndex: 1,
                position: 'absolute',
                width: 180,
                height: 140,
                backgroundColor: 'white',
                marginTop: 35,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 10,
            },

        flatList:
            {},

        elements:
            {
                marginLeft: 10,
                marginRight: 10,
                height: 25,
                justifyContent: 'center',
            },

        elementsText:
            {
                color: '#ff7f02',
            }
    }
);

export default styles