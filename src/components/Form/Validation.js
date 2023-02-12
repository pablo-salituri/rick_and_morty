//import Form from './Form.jsx'

export default function Validation(props) {
    const {username} = props;
    const {password} = props;
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.{6,10}$)\D*\d/;
    var errors = {};
    
    switch(true) {
        case (!username):
            errors.username = 'Debe ingresar un Username';
            break;
        case (username.length > 35):
            errors.username = 'El Username excede los 35 caracteres';
            break;
        case (!regexEmail.test(username)):
            errors.username = 'Username inválido';
            break;
        default:
            break;
    }

    if (!regexPassword.test(password))
        errors.password = 'Contraseña inválida'; 
    
    return errors;
}