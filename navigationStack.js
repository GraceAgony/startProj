
import { StackNavigator } from "react-navigation";
import Screen2 from "./components/Screen2";
import MainContainer from "./MainContainer"

const navigator = StackNavigator({
    MainContainer: {
        screen: MainContainer
    },
    screen2: {
        screen: Screen2
    }
});

export default navigator;