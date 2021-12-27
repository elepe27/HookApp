
import { shallow } from 'enzyme'
import { HooksApp } from '../HooksApp'


describe('Pruebas en nuestro <HookApp/>', () => {

    test('Se debe ver el componente', () => {
        
        
        const wrapper = shallow(<HooksApp/>)
        expect(wrapper).toMatchSnapshot();



    })
    
    
})
