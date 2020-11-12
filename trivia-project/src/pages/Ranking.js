import React from 'react';
import { Link } from 'react-router-dom';
import trashcan from '../img/trashcan.png'

class Ranking extends React.Component {
  constructor() {
    super();
    this.handleRanking = this.handleRanking.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.handleRanking();
    // localStorage.setItem('ranking', JSON.stringify(
    //   [
    //     {name: 'Rodrigão', score: '119', assertions: 3},
    //     {name: 'Luiz', score: '80', assertions: 2},
    //     {name: 'Pikachu', score: '40', assertions: 1},
    //     {name: 'Um cara ai', score: '0', assertions: 0},
    //   ]
    // ));
  }

  handleRanking() {
    if (localStorage.ranking) {
      const ranking = JSON.parse(localStorage.getItem('ranking'));
      const one = 1;
      if (ranking) {
        const sortedRanking = ranking.sort((a, b) => (
          (a.score > b.score || b.score === a.score) ? -one : 0
        ));
        this.setState({
          ranking: [...sortedRanking],
        });
      }
    }
  }

  deleteOne(index) {
    const ranking = this.state.ranking
    const newRank = [...ranking.slice(0, index), ...ranking.slice(index + 1, ranking.length)]
    this.setState({
      ranking:[
        ...ranking.slice(0, index),
        ...ranking.slice(index + 1, ranking.length),
      ],
    })
    localStorage.setItem('ranking', JSON.stringify(
      newRank
    ));
  }

  deleteAll() {
    const ranking = this.state.ranking
    this.setState({
      ranking:[
        ...ranking.slice(ranking.length, ranking.length),
      ]
    })
    localStorage.setItem('ranking', JSON.stringify(
      ''
    ));
  }

  render() {
    const { ranking } = this.state;
    return (
      <div className="ranking-container ">
        <header className="profile-header ranking-header">
          <h1 data-testid="ranking-title">Ranking</h1>
        </header>
        <section className="table-container">
          <table cellSpacing="0" cellPadding="0">
            <thead className="thead">
              <tr>
                <th scope="col">Avatar</th>
                <th>Nome</th>
                <th>Pontuação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { ranking ?
                ranking.map((player, index) => (
                  <tr key={ index } className="bla">
                    <td datatestid="header-profile-picture" className="avatar-div">
                      <img
                        src={ ranking ? `https://www.gravatar.com/avatar/${player.hash}` : '' }
                        alt="avatar"
                        width="120px"
                        className="avatar"
                      />
                    </td>
                    {/* <hr className="hr-table" /> */}
                    <td>
                      <span data-testid={ ranking ? `player-name-${index}` : ''}>{ player.name }</span>
                    </td>
                    {/* <hr className="hr-table" /> */}
                    <td>
                      <div className="trash-div">
                        <span
                          data-testid={ ranking ? `player-score-${index}` : '' }
                        >
                          { ranking ? player.score : ''}
                        </span>

                      </div>
                    </td>
                    <td>
                      <img
                      src={trashcan}
                      alt="a trashcan"
                      className="trashcan"
                      width="40px"
                      onClick={() => this.deleteOne(index)
                      }/>
                    </td>
                  </tr>
                ))
                : ''
              }
            </tbody>
          </table>
        </section>
        <footer className="feedback-footer ranking-footer">
          <Link to="/">
            <button type="button" className="next home-button" data-testid="btn-go-home">
              <span>Inicio</span>
            </button>
          </Link>
          <button type="button" className="next delete-button" onClick={() => this.deleteAll()}>
              <span>Apagar Ranking</span>
          </button>
        </footer>
      </div>
    );
  }
}

export default Ranking;
