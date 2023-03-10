import "./App.css";
import Card from "./component/card/Card";
import CardList from "./component/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

function App() {
    return (
        <div>
            <GlobalStyles></GlobalStyles>
            {/* <YoutubeList></YoutubeList> */}
            {/* <Toggle></Toggle>
            <Counter></Counter> */}
            {/* <Game></Game> */}
            {/* <Button>Primary</Button>
            <Button secondary>Secondary</Button> */}
            <CardList>
                <Card primary={true}></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardList>
        </div>
    );
}

export default App;
