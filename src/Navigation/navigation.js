import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Dashboard from '../Dashboard/Dashboard';
import Startfile from '../Mapboard/mapboard';
export default class Navigationfile extends Component {
    render() {
        return (
            <Router>
                <Scene>
                <Scene
                        title="Subspecialty interests"
                        key="Dashboard"
                        initial
                        header={null}
                        component={Dashboard}
                        navBarButtonColor='white'
                        navigationBarStyle={{ backgroundColor: '#00005D' }}
                    /> 
                    <Scene
                    title="Running"
                    header={null}
                    animationEnabled
                    key="startfile"
                    component={Startfile}
                />

                </Scene>
            </Router>

        );
    }
}
