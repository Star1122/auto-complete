import React from 'react';

import { getFilteredData, staticData } from "./utils";
import AutoComplete from './components/AutoComplete';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: staticData,
    }
  }

  onChangeKey = (key) => {
    getFilteredData(key.toLowerCase())
      .then((data) => {
        this.setState({ data });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ data: [] });
      });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <AutoComplete onChangeKey={this.onChangeKey} data={data} />
      </div>
    );
  }
}
