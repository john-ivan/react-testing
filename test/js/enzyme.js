const test = require('tape')
const React = require('react');
import ReactTestUtils from 'react-dom/test-utils';
import Square from '../../src/components/Square';
import App from '../../src/components/App';
import Row from '../../src/components/Row';
import GameList from '../../src/components/GameList';
import { shallow } from 'enzyme';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.

test.skip('Square', (t) => {
  const wrapper = shallow(<Square row={0} square={1} letter="X" className="square" handleClick={() => {}} />);
  t.equal(wrapper.type(), 'div', 'Check if div'); 
  t.equal(wrapper.text(), 'X', 'Is there an "X"');
  t.equal(wrapper.props().className, 'square', 'classname square')
  t.equal(wrapper.length, 1, 'wrapper has length')
  t.end()
});

test('Row', (t) =>{
  const wrapper = shallow(<App />);
  t.equal(wrapper.find('Row').length === 3, true, 'row length')
  t.end(); 
})

// test('GameList', (t) => {
//   const wrapper = shallow(<GameList />)
//   t.end()
// });


// describe('React unit tests', () => {
//   describe('<Square />', () => {
//     let wrapper;

//     before(() => {
//       wrapper = shallow(<Square row={0} square={1} letter="X" handleClick={() => {}} />);
//     });

//     it('Renders a <div> with class "square"', () => {
//       expect(wrapper.text()).toEqual('X');
//       expect(wrapper.type()).toEqual('div');
//       expect(wrapper.props().className).toEqual('square');
//     });

//     xit('Clicking on the square passes row and square props to handleClick', () => {

//     });
//   });

//   describe('<Row />', () => {
//     // TODO: Write a test to make sure a Row renders 3 Squares

//   });

//   describe('GameList', () => {
//     // TODO: Write a test to make sure a GameList renders a <ul> with an <li>
//     // for every item in its gameList array prop

//   });
// });
