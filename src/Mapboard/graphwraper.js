import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';

export default class Graphwraper extends Component {
 
  render() {
    return (
      
        <View style={styles.container2}>
          <LineChart style={styles.chart}
            data={{ dataSets: [
              { 
              label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] 
            },
            { 
              label: "demo", values:[{ y: 1 }, { y: 5 }, { y: 1 }] 
            }
            ]}}
                 drawBorders={false}
            drawGridBackground={false}
          />
        </View>
        
    );
  }
}
const styles = StyleSheet.create({
  container2: {
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});