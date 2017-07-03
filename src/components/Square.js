import React, { PropTypes } from 'react';

const Square = (props) => {
  const { handleClick, letter, row, square } = props;

  return (
    <div className="square" onClick={() => {handleClick(row, square)}}>{letter}</div>
  );
};

Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  letter: PropTypes.string,
  row: PropTypes.number.isRequired,
  square: PropTypes.number.isRequired
};

/*
>>:o: square
>>: const wrapper = shallow(<Square row={0} square={1} letter="O" className="square" handleClick={() => {}} />);
>>:p: 4
>>:a: wrapper.type() equal 'div' | Check if div
>>:a: wrapper.text() equal 'O' | Is there an O
>>:a: wrapper.props().className equal 'square' | className should be square
>>:a: wrapper.length equal 1
*/

export default Square;
