import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'
import { Container, Button, Header, Content, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Dashboard extends Component {

movestart(){
    Actions.startfile();
}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#cececd' }}>

                <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 25, fontWeight: 'bold', fontSize: 15, marginTop: 25, color: 'black', }}>sumsung</Text>
                    <Text style={{ marginLeft: 0, fontSize: 35, marginTop: 10, color: 'black', }}>Health</Text>
                    <Icon ios='ios-bulb-outline' android="ios-bulb-outline" style={{ fontSize: 25, marginLeft: 55, marginTop: 15, color: 'black' }} />
                    <Icon ios='ios-person-outline' android="ios-person-outline" style={{ fontSize: 25, color: 'black', marginLeft: 20, marginTop: 15 }} />
                    <Icon ios='md-more' android="md-more" style={{ fontSize: 25, color: 'black', marginLeft: 20, marginTop: 15 }} />

                </View>
                <ScrollView>
                    <Card
                        containerStyle={{ height: 220, borderRadius: 10 }}
                    // title='HELLO WORLD'
                    // image={require('../Images/be.jpg')}
                    >
                        <View style={{ marginLeft: 80, width: '100%', height: 100 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 80 }}>
                                <Icon ios='ios-timer-outline' android="ios-timer-outline" style={{ fontSize: 15, color: 'green' }} />
                                <Text style={{ marginLeft: 5, fontSize: 10, color: '#cececd' }}>Galaxy Watch  30min ago</Text>
                            </View>
                            <ProgressCircle

                                percent={80}
                                radius={50}
                                borderWidth={8}
                                color="green"
                                shadowColor="#cececd"
                                bgColor="#fff"
                            >
                                <Text style={{ fontSize: 22 }}>{'5426'}</Text>
                                <Text style={{ fontSize: 8, color: '#cececd' }}>{'/6000 steps'}</Text>
                            </ProgressCircle>

                        </View>
                    </Card>
                    <Card
                        containerStyle={{ height: 100, borderRadius: 10 }}
                    // title='HELLO WORLD'
                    // image={require('../Images/be.jpg')}
                    >
                        <View>
                            <View style={{ width: '100%', height: 20, flexDirection: 'row' }}>

                                <Icon ios='ios-timer-outline' android="ios-timer-outline" style={{ fontSize: 20, marginLeft: 10, color: 'green' }} />
                                <Text style={{ fontSize: 12, color: '#cececd', marginLeft: 5, marginTop: 2 }}>Active time</Text>
                            </View>
                            <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 35, color: 'black', marginLeft: 10 }}>56 </Text>
                                <Text style={{ fontSize: 12, marginLeft: 0, color: '#cececd', marginTop: 22 }}>/60 mins </Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 60, color: 'black', marginTop: 20 }}>1712 </Text>
                                <Text style={{ fontSize: 12, marginLeft: 1, color: '#cececd', marginTop: 22 }}>cal </Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: 'black', marginTop: 20 }}>1.26 </Text>
                                <Text style={{ fontSize: 12, marginLeft: 1, color: '#cececd', marginTop: 22 }}>mins </Text>

                            </View>
                        </View>
                    </Card>
                    <Card
                        containerStyle={{ height: 100, borderRadius: 10 }}
                    // title='HELLO WORLD'
                    // image={require('../Images/be.jpg')}
                    >
                        <View>

                            <View style={{ width: '100%', height: 20, flexDirection: 'row' }}>

                                <Icon ios='ios-walk' android="ios-walk" style={{ fontSize: 20, marginLeft: 10, color: 'green' }} />
                                <Text style={{ fontSize: 12, color: '#cececd', marginLeft: 5, marginTop: 2 }}>Exercise</Text>
                                <Button rounded iconLeft light style={{ borderWidth: 2, height: 25, width: 100, borderColor: '#cececd', backgroundColor: 'white', marginLeft: 90 }} onPress={this.movestart}>
                                    <Text style={{ padding: 5, marginLeft: 15, color: 'black', fontWeight: 'bold', fontSize: 12 }} >START</Text>
                                    <Icon name='md-arrow-dropright' />
                                </Button>
                            </View>
                            <View style={{ width: '80%', height: 30,marginTop:20,marginLeft:20, borderRadius:10, backgroundColor:'#E0E0E0', flexDirection: 'row' }}>
                        
                            <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 15, marginTop: 5 }}>Running</Text>
                            <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 15, marginTop: 5 }}>00:31:01</Text>
                            <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 15, marginTop: 5 }}>4.73</Text>
                            <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 5, marginTop: 5 ,color:'#C0C0C0'}}>km</Text>
                            </View>
                        </View>
                    </Card>
                    <Card
                        containerStyle={{ height: 100, borderRadius: 10 }}
                    // title='HELLO WORLD'
                    // image={require('../Images/be.jpg')}
                    >
                        <View>
                            <View style={{ width: '100%', height: 20, flexDirection: 'row' }}>

                                <Icon ios='ios-timer-outline' android="ios-bicycle-outline" style={{ fontSize: 20, marginLeft: 10, color: 'green' }} />
                                <Text style={{ fontSize: 12, color: '#cececd', marginLeft: 5, marginTop: 2 }}>Floor</Text>
                            </View>
                            <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 35, color: 'black', marginLeft: 10 }}>3 </Text>
                                <Text style={{ fontSize: 12, marginLeft: 0, color: '#cececd', marginTop: 22 }}>/10 floor </Text>

                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}