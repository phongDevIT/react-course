import "./App.css";
import Card from "./component/card/Card";
import Card2 from "./component/card/Card2";
import CardList from "./component/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
const ThemeStyle = {
    colors: {
        blue: "#2979ff",
        red: "#d42222",
    },
    orange: "#ffa400",
};
function App() {
    return (
        <ThemeProvider theme={ThemeStyle}>
            <GlobalStyles></GlobalStyles>
            <CardList>
                <Card2></Card2>
            </CardList>
        </ThemeProvider>
    );
}

export default App;
