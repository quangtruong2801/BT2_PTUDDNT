import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './Screen/Contacts';
import Profile from './Screen/Profile';
import colors from './utility/colors';
import Favorites from './Screen/Favorites';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import User from './Screen/User';
import Options from './Screen/Options';
import 'react-native-gesture-handler';

const getTabBarIcon = icon => ({tintColor }) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}} />
)

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: colors.blue },
            headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="Contacts" component={Contacts} options={{title: 'Contacts',}}/>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={({route}) => 
                {
                    const {contact} = route.params;
                    const {name} = contact;
                    return {
                        title: name.split(' ')[0],
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.blue,
                        }
                    };
                    }
                }
            />
        </Stack.Navigator>
    );
}

const FavoritesScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
            screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            headerTitleAlign: 'center',
            }}
        >

            <Stack.Screen name="Favorites" component={Favorites} options={{title: 'Favorites',}}/>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={({route}) => 
                {
                    const {contact} = route.params;
                    const {name} = contact;
                    return {
                        title: name.split(' ')[0],
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.blue,
                        }
                    };
                    }
                }
            />
        </Stack.Navigator>
    );
}


const UsersScreens = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Users"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'red' },
                headerTitleAlign: 'center',
            }}
        >

            <Stack.Screen name="Users" 
            component={User} 
            options={{
                headerTitle: "Me",
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                },
                headerRight: () => (
                    <MaterialIcons 
                        name="settings"
                        size={24}
                        style={{color: 'white', marginRight: 10}}
                        onPress={() => navigation.navigate("Options")}
                    />
                )
                
            }}/>
        
        <Stack.Screen name = "Options" component={Options} options={{title: "Options"}}/>
        
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Contacts"
            barStyle = {{backgroundColor: colors.blue}}
            activeColor = {colors.greyLight}
            inactiveColor = {colors.greyDark}
        >
      <Tab.Screen
        name="Contacts Screen"
        component={ContactsScreens}
        options={{
          tabBarIcon: getTabBarIcon('list'),
        }}
      />
      <Tab.Screen
        name="Favorites Screen"
        component={FavoritesScreens}
        options={{
            tabBarIcon: getTabBarIcon('star'),
          }}
      />
      
      <Tab.Screen
        name="Users Screen"
        component={UsersScreens}
        options={{
            tabBarIcon: getTabBarIcon('person'),
          }}
      />
    </Tab.Navigator>
    );
}


export default TabNavigator;