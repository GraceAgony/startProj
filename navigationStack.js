import { StackNavigator } from "react-navigation";
import Screen2 from "./components/Screen2";
import MainContainer from "./MainContainer";
import Step1 from "./components/flightChooserForm/Step1";
import Step2 from "./components/flightChooserForm/Step2";
import Step3 from "./components/flightChooserForm/Step3";
import Step4 from "./components/flightChooserForm/Step4";
import Step5 from "./components/flightChooserForm/Step5";
import Step6 from "./components/flightChooserForm/Step6";
import Step7 from "./components/flightChooserForm/Step7";
import Step8 from "./components/flightChooserForm/Step8";
import Step9 from "./components/flightChooserForm/Step9";
import Step10 from "./components/flightChooserForm/Step10";
import Step11 from "./components/flightChooserForm/Step11";
import Step12 from "./components/flightChooserForm/Step12";

const navigator = StackNavigator({
    MainContainer: {
        screen: MainContainer
    },
    screen2: {
        screen: Screen2
    },
    Step1: {
        screen: Step1
    },
    Step2: {
        screen: Step2
    },
    Step3: {
        screen: Step3
    },
    Step4: {
        screen: Step4
    },
    Step5: {
        screen: Step5
    },
    Step6: {
        screen: Step6
    },
    Step7: {
        screen: Step7
    },
    Step8: {
        screen: Step8
    },
    Step9: {
        screen: Step9
    },
    Step10: {
        screen: Step10
    },
    Step11: {
        screen: Step11
    },
    Step12: {
        screen: Step12
    },

});

export default navigator;