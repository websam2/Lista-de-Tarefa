import React from 'react';
import moment from 'moment';

class DateHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: moment().format('DD/MM/YYYY HH:mm:ss') };
  }

  render() {
    return (
      <div className='text-white right-5 absolute'>
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default DateHours;