import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters : [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(e => e.json())
            .then(data => {
                    this.setState(() => {
                        return {monsters : data};
                    })
                })
    }

    filterMonsters = (event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
                return {searchField}
            })
        };

    render() {
        const { monsters, searchField } = this.state
        const {filterMonsters} = this;
        const filteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField))

        return (
            <div className="App">
                <h1 className={'app-title'}>Monsters Rolodex</h1>
                <SearchBox className={'monsters-search-box'} placeholder={'search monsters'} onChangeHandler={filterMonsters} />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }


}

export default App;
