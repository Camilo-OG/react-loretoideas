import { useForm } from "react-hook-form";
import { useAuth } from "../../controllers/Atentificacion/context/AuthContext";
import "../login/stylesLogin.css";

export const AppLogin = ({view, handleSignup}) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const { signin, errors: SigninErrors, } = useAuth();

      const onSubmit = handleSubmit(async (data) => {
        signin(data);
      });
    

  return (
    
    <div className="container containerLogin">
                {view === "login" ? (
          <div className="sideA">
           {SigninErrors.map((error, i) => (
                <div className="error_bg" key={i}>
                  {error}
                </div>
              ))}
            <h3 className="titulo-sideA titulos-login">Inicio de Sesión</h3>
            <form onSubmit={onSubmit}>
            <input
              className="input-buton input-login"
              type="email"
              placeholder="Email"
              {...register("email", { require: true })}
            />
              {errors.username && (
                  <p className="text-requerido"> El email es requerido</p>
                )}
            <input
              className="input-buton input-login"
              type="password"
              placeholder="Contraseña"
              {...register("password", { require: true })}
            />
              {errors.password && (
                  <p className="text-requerido"> La contraseña es requerida</p>
                )}
            {/* <a className="link-login" href="#forgot-password">
              Recupera tu contraseña
            </a> */}
            <button className="input-buton button-login">Entrar</button>
            </form>
          </div>
        ) : (
          <div className="sideA">
            <h3 className="titulos-login titulo-sideA">Nos alegra verte</h3>
            <p className="parrafos-login">
              Inicia Sesión para que puedas ver tus productos favoritos.
            </p>
            <button className="input-buton button-login" onClick={handleSignup}>
              Entrar
            </button>
          </div>
        )};
 </div>
    
  )
}
