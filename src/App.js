import React, { Component } from 'react';
import Tiles from './utils/gameTiles';

const initialState = {
  tiles: [
    {
      imgUrl: `batman.jpg`,
      clicked: false,
      id: 0,
    }
  ],
  score: 0,
  topScore: 0,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount() {
    this.resetTiles();
  }

  resetGame = () => {
    const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false }))
    console.log('TILES', tiles)
    this.setState({ score: 0, tiles })
    this.shuffleTiles();
    console.log('NEW STATE', this.state)
  }

  resetTiles = () => {
    this.setState({ tiles: Tiles.gameTiles });
  }

  handleClick = id => {
    let clickedTile = this.state.tiles.find(tile => tile.id === id)

    if (clickedTile.clicked) {
      this.resetGame()
    } else {
      clickedTile.clicked = true
      let newTiles = this.state.tiles.filter(tile => tile.id !== id)
      newTiles.push(clickedTile)

      //Shuffle Tiles here
      this.shuffleTiles()

      this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore,
      })
    }
  }

  shuffleTiles = () => {
    let currTiles = this.state.tiles,
      currIdx = currTiles.length,
      randIdx, 
      tempTile;

    while ( currIdx !== 0 )
    {
      randIdx = Math.floor(Math.random() * currIdx);
      currIdx -= 1;

      // console.log("Swapping",currTiles[currIdx]);
      // console.log("with",currTiles[randIdx]);

      tempTile = currTiles[currIdx];
      currTiles[currIdx] = currTiles[randIdx];
      currTiles[randIdx] = tempTile;
    }
  }

  render() {
    return (
      <div className="root">
        <h1>Score: { this.state.score }</h1>
        <h1>Top Score: { this.state.topScore }</h1>
        {
          this.state.tiles.map(tile => ( // TODO: Shuffle these around! Hint: .sort()
            <div
              key={ tile.id }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
                margin: '1em',
                backgroundColor: tile.color,
                color: '#fff',
              }}
              onClick={ () => this.handleClick(tile.id) }
            >
              <img src={ tile.imgUrl } alt={"GameImage" + tile.id}/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
