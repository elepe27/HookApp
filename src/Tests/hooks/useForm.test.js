import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('pruebas en nuestro custom hook <useForm/>', () => {
    
    const initialForm = {
        name:'Esteban',
        email: 'esteban.lepe1c@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        
        const {result} = renderHook(()=> useForm(initialForm));
        expect(result.current[0]).toEqual(initialForm);


    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
    });

    test('debe de re-establecer el formulario con RESET', () => {
        
    })
    
    
    

})
