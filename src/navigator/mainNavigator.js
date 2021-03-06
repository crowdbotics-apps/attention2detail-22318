import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168027Navigator from '../features/UserProfile168027/navigator';
import Maps168008Navigator from '../features/Maps168008/navigator';
import Settings167986Navigator from '../features/Settings167986/navigator';
import Settings167971Navigator from '../features/Settings167971/navigator';
import NotificationList167970Navigator from '../features/NotificationList167970/navigator';
import Maps167969Navigator from '../features/Maps167969/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168027: { screen: UserProfile168027Navigator },
Maps168008: { screen: Maps168008Navigator },
Settings167986: { screen: Settings167986Navigator },
Settings167971: { screen: Settings167971Navigator },
NotificationList167970: { screen: NotificationList167970Navigator },
Maps167969: { screen: Maps167969Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
