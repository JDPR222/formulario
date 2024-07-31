import { useForm } from "../hooks/useForm";

export const Formulario = () => {

    const initialForm = {
        userName: "",
        email:"",
        contraseña: "",
        recordar: true
    }

    const {formState,onInputChange} =  useForm(initialForm)
    const { userName,email,contraseña,recordar} = formState
    
        const onSubmit = (event) => {
            event.preventDefault()
            console.log(formState)
        }

    return (
        <form onSubmit={onSubmit}>
        <h2>
            ¡Bienvenido! <br></br> Empecemos la aventura.
        </h2>

        <div className="mb-3">
            <label htmlFor="userName" className="form-label">
            Nombre de Usuario
            </label>
            <input
                type="text"
                className="form-control"
                name="userName"
                placeholder="Nombre de Usuario"
                value={userName}
                onChange = {onInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Correo electrónico
            </label>
            <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange = {onInputChange}
            />
            <div id="emailHelp" className="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">
            Contraseña
            </label>
            <input
                type="password"
                className="form-control"
                name="contraseña"
                placeholder="Introduce tu contraseña"
                value={contraseña}
                onChange = {onInputChange}
            />
        </div>
        <div className="mb-3 form-check">
            <input 
                type="checkbox" 
                className="form-check-input" 
                name="recordar"
                value={recordar}
                onChange = {onInputChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
            Recordarme
            </label>
        </div>
        <div>
            <a>¿Olvidaste tu contraseña?</a>
        </div>

        <div>
            <a>¿Necesitas una cuenta? REGISTRATE</a>
        </div>

            <button type="submit" className="btn btn-primary">
                INICIAR SESIÓN
            </button>
        </form>
     );
  }

