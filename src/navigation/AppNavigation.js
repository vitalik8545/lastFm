import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack";
import {MainScreen} from "../screens/MainScreen";
import {SearchTrackScreen} from "../screens/SearchTrackScreen";
import {TrackScreen} from "../screens/TrackScreen";

const Stack = createStackNavigator({
    Main:MainScreen,
    Search:SearchTrackScreen,
    Track:TrackScreen
})

export const AppNavigation = createAppContainer(Stack)
