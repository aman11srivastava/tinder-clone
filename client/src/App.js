import './App.css';
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

export const App = () => (
    <div className="app">
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
    </div>
);

export default App;
