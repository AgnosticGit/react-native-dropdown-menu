
## **Install**

> ```npm i react-native-drop-menu```



## **Example**

![Alt Text](https://media.giphy.com/media/kIQviwTXaZYndm6pyT/giphy.gif)



## **Usage**

```
import React from 'react';
import DropMenu from 'react-native-drop-menu'


export default class DropMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: ['a', 'b', 'c']
        };
    }

    render() {
        return (
            <DropMenu arrElements={this.state.elements}
                      getElement={(item) => console.log(item)}
                      mainElement={'a'}
                      iconSource={require('app/assets/arrowbot.png')}
            />
        )
    }
}

```



## **Properties**

| Prop  | Default | Type | Description|
| ------------- | ------------- | ------------- | ------------- |
| arrElements | []  | array  | Array of all elements of drop down menu  |
| getElements  |  | function  | The function is running when you select an item  |
| mainElement  | 'Все'(rus)  | string  | Initial element  |
| iconSource  | require('./arrowbot.png')  |  | Path to the picture |
| customStyles  | {}  | object  | Styles |


