import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginPage() {
  // Funktionen wichtig für das Formular
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  async function onLogin(data: any) {
    // Formular Daten in der Konsole ausgeben
    console.log("Login-Daten:", data);

    // Axios POST Anfrage zum Login Endpoint
    const response = await axios.post(
      "https://react-vid-app.vercel.app/api/auth/login",
      JSON.stringify(data)
    );

    // Antwort enhält viele Metadaten, wir brauchen nur die Daten, in diesem Fall Token
    const resultData = await response.data;

    // Speichere den Token im localStorage
    localStorage.setItem("token", resultData.token);
    navigate("/feed");
  }

  // Formmular mit onSubmit Handler
  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <div className='flex flex-col gap-6 justify-start items-start'>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Username</legend>
          <input
            {...register("username", { required: true })}
            className='input'
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Passwort</legend>
          <input
            {...register("password", { required: true })}
            className='input'
            type='password'
          />
        </fieldset>

        <input type='submit' className='btn' />
      </div>
    </form>
  );
}
export default LoginPage;
