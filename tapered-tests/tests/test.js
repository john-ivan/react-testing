const test = require('tape')
const App = require('/Users/john-ivan/Documents/Codesmith/Production-Project-dAB.js/playground/react-testing/src/components/App.js');


const React = require('react');
import ReactTestUtils from 'react-dom/test-utils';
import Square from '../../src/components/Square';
import Row from '../../src/components/Row';
import GameList from '../../src/components/GameList';
import { shallow } from 'enzyme';


test.skip('row', function (t) {
	const wrapper = shallow(<App />);

	t.equal(wrapper.find('Row').length === 3,  true , 'row length');
	t.end();
});

test.only('square', function (t) {
	const wrapper = shallow(<Square row={0} square={1} letter="O" className="square" handleClick={() => {}} />);

	t.plan(4);
	t.equal(wrapper.type(),  'div' , 'Check if div');
	t.equal(wrapper.text(),  'O' , 'Is there an O');
	t.equal(wrapper.props().className,  'square' , 'className should be square');
	t.equal(wrapper.length,  1, 'Error: square');
});
