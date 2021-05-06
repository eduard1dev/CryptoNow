import React from 'react'
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import MyCryptos from '../pages/MyCryptos'
import TabBarIcon from '../components/TabBarIcon'


import colors from '../constants/colors'

export default function Routes(){
    const Tab = createBottomTabNavigator()
    
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.yellow,
                inactiveTintColor: colors.gray2,
                style: {
                    backgroundColor: colors.gray1,
                    height: 40,
                    paddingVertical: 5,
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen  
                name='Home' 
                component={Home} 
                options={{
                    tabBarButton: (props) => (
                        <TabBarIcon 
                            name='home' 
                            label='Home'
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen  
                name='MyCryptos' 
                component={MyCryptos} 
                options={{
                    tabBarButton: (props) => (
                        <TabBarIcon
                            name='wallet'
                            label='My Cryptos'
                            {...props}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}