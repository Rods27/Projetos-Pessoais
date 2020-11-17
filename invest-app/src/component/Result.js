import React from 'react';

class Result extends React.Component {

  render() {
    let { montante } = this.props;
    return (
      <div className="results">
        R$ {montante}
      </div>
    );
  }
}

export default Result;
