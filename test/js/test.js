const test = require('tape')
// const App = require('/Users/jordan/Documents/codesmith-master/senior-project/react-testing/unit-12-testing/src/components/App.js');


const React = require('react');
import ReactTestUtils from 'react-dom/test-utils';
import Square from '../../src/components/Square';
import App from '../../src/components/App';
import Row from '../../src/components/Row';
import GameList from '../../src/components/GameList';
import { shallow } from 'enzyme';


test('Row Test', function (t) {
	const wrapper = shallow(<App />); 
	t.equal(wrapper.find('Row').length===3,   false , 'row length');
	t.end();
});
