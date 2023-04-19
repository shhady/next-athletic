export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = '';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'אימייל לא תקין';
      }
      // password validation

      if(!values.password) {
        errors.password = '';
      } else if (values.password.length < 6 || values.password.length > 20) {
        errors.password = 'סיסמה חייבת להיות יותר מ שש תויות'
      }else if(values.password.includes(" ")){
        errors.password = "אסור להיות מרווחים"
      }
      return errors;
    }

    export function registerValidate(values){
        const errors = {};
        if(!values.name){
            errors.name = '------------'
        } 

        if (!values.email) {
            errors.email = '';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'אימייל לא תקין';
          }
          // password validation
    
          if(!values.password) {
            errors.password = '';
          } else if (values.password.length < 6 || values.password.length > 20) {
            errors.password = 'סיסמה חייבת להיות יותר מ שש תויות'
          }else if(values.password.includes(" ")){
            errors.password = "אסור להיות מרווחים"
          }

          if(!values.confirmPassword){
            errors.confirmPassword = "required"
          }  else if(values.password !== values.confirmPassword){
            errors.confirmPassword = "סיסמאות לא זהות"
          } 
        
          return errors
    }