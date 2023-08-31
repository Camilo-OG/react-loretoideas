import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../controllers/Atentificacion/context/AuthContext";
import "../login/stylesLogin.css";
import { useNavigate } from "react-router-dom";
import { AppLogin } from "./AppLogin";

function AppRegister() {
  const [view, setView] = useState("login");

  const handleSignup = () => {
    view=== "login" ? setView ("signup") : setView("login")
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });


 
 

  return (
    //  SECCION DE LOGIN
    <div className="superContainer">
      <AppLogin handleSignup= {handleSignup} view={view}/>
      
         {/* SECCION DE REGISTRO NUEVO USUARIO */}
        <div className="sideB">
          {view === "login" ? (
            <div>
              <p className="parrafos-login">Crear cuenta</p>
              <p className="parrafos-login">
                Crea una cuenta para que puedas guardar tus pedidos y disfrutar.
              </p>
              <button
                className="input-buton button-login"
                onClick={handleSignup}
              >
                Registrarse
              </button>
            </div>
          ) : (
            <div className="sideB--header">
              {registerErrors.map((error, i) => (
                <div className="error_bg" key={i}>
                  {error}
                </div>
              ))}
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="input-buton input-login"
                  {...register("username", { require: true })}
                />
                {errors.username && (
                  <p className="text-requerido"> El nombre es requerido</p>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="input-buton input-login"
                  {...register("email", { require: true })}
                />
                {errors.email && (
                  <p className="text-requerido"> El email es requerido</p>
                )}

                <input
                  type="password"
                  placeholder="Contraseña"
                  className="input-buton input-login"
                  {...register("password", { require: true })}
                />
                {errors.password && (
                  <p className="text-requerido"> La contraseña es requerida</p>
                )}

                <button type="submit" className="input-buton button-login">
                  {" "}
                  Registrar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
   
  );
}

export default AppRegister;
