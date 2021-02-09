import React from 'react';

import { ArrowDownIcon, ArrowUpIcon } from '../Icons';
import './style.scss';

export default class AutoComplete extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      value: '',
      search: '',
    };

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.state.isOpened && this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.toggleDropdown();
    }
  };

  onFocus = () => {
    this.setState({
      isOpened: true,
    });
  };

  onChangeInput = (e) => {
    this.setState({
      search: e.target.value,
      value: '',
    });

    this.props.onChangeKey(e.target.value);
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened,
    }));
  };

  onSelectValue = (value) => {
    this.setState({
      isOpened: false,
      search: value,
      value,
    });

    this.props.onChangeKey(value);
  };

  render() {
    const { isOpened, search, value } = this.state;
    const { data } = this.props;

    return (
      <div ref={this.wrapperRef} className="auto-complete">
        <input
          className="auto-complete-input"
          value={value || search}
          onFocus={this.onFocus}
          onChange={this.onChangeInput}
        />

        <div className="auto-complete-arrow" onClick={this.toggleDropdown}>
          {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>

        {isOpened && (
          <ul className="auto-complete-options">
            {data.length > 0 ? (
              data.map((opt) => (
                <li
                  key={opt.id}
                  className="auto-complete-option"
                  onClick={() => this.onSelectValue(opt.name)}
                >
                  {opt.name}
                </li>
              ))
            ) : (
              'No options'
            )}
          </ul>
        )}
      </div>
    );
  }
}
