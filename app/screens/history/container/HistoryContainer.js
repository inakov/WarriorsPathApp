'use strict';

import React from 'react';
import { ScrollView, Alert } from 'react-native';
import TextInput from '../../../common/components/input/TextInput'
import Colors from '../../../common/Colors';
import List from '../../../common/components/list/List';
import ListItem from '../../../common/components/list/ListItem';
import NewItem from '../../../common/components/list/items/ListItem';

export class HistoryContainer extends React.Component {
    render() {
        return (
            <ScrollView style={{ flex: 1}}>
                <List addSeparator={true}>
                    <ListItem
                        content={{
                            title: "Equipment",
                            rightTitle: "Barbell",
                            hideIcon: true,
                        }}
                    />
                    <ListItem
                        onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                        onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                        content={{
                            title: "Muscle Group",
                            rightTitle: "Chest"
                        }}
                    />
                    <ListItem
                        onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                        onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                        content={{
                            title: "Looooong Titleeeee",
                            rightTitle: "Long Secondary Title",
                            hideIcon: true,
                        }}
                    />
                    <ListItem
                        onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                        onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                        content={{
                            title: "Looooong Titleeeee",
                            rightTitle: "Long Secondary Title"
                        }}
                    />
                    <ListItem
                        onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                        onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                        leftIcon={{name: 'plus-circle',color: Colors.green,}}
                        content={{
                            title: "Looooong Titleeeeeeeeeeeeeeeeee",
                            icon: {
                                name: 'check',
                                feedback: false,
                                onPress: ()=> Alert.alert("No feedback?", "Icon pressed!")
                            }
                        }}
                    />
                    <ListItem
                        content={{
                            title: "Picked Item",
                        }}
                    />
                    <ListItem
                        onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                        onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                        leftIcon={{name: 'scale'}}
                        content={{
                            title: "Units",
                            rightTitle: "Kg"
                        }}
                    />
                    <ListItem leftIcon={{name: 'star'}}>
                        <TextInput
                            placeholder={"Name"}
                        />
                    </ListItem>
                    <ListItem leftIcon={{name: 'alarm-plus'}}>
                        <TextInput
                            placeholder={"Tip #2"}
                        />
                    </ListItem>
                </List>
                <NewItem
                    onPress={()=> Alert.alert("You sure?", "Item pressed!")}
                    onLongPress={()=> Alert.alert("You sick son of a ...", "(╯°□°）╯︵ ┻━┻")}
                    leftIcon={{name:'star'}} title={'Main Titledawlda dwalkdjawlkdj'} subtitle={'Subtitlldlwajdklawjdwajkldawje'} rightTitle={'Test Title'} rightIcon={{name:'chevron-right', type:'octicon'}} />
                <NewItem title={'Main Title'} />
                <NewItem title={'Varyyyyy longgggg Main Title'} subtitle={'Subtitle'} />
            </ScrollView>
        );
    }
}
