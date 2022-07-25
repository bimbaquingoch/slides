// librerias de react
import { useEffect, useState } from "react";
// llamamos los estilos de CSS
import "./App.css";

const App = () => {
  // creamos un estado para cada etnia
  // primer valor es la variable
  // segundo valor es un funcion con la que se altera la variable
  // y el 0 es el valor inicial de la variable

  // ejemplo:
  // variable: negro
  // funcion que altera la variable negro: setnegro (puede tener cualquier nombre)
  // valor inicial: 0 (se lo coloca en el useState)

  // todos los estados (variables)
  const [negro, setnegro] = useState(0);
  const [mestizo, setmestizo] = useState(0);
  const [europeo, seteuropeo] = useState(0);
  const [indigena, setindigena] = useState(0);
  const [total, settotal] = useState(0);

  // es una funcion de react que provoca un efecto al cargar la pagina,
  // cambia las variables con las que se relaciona el contenido de esta
  // funcion
  useEffect(() => {
    // creamos una funcion para sumar los valores
    // obtenemos todos los valores, los sumamos y los guardamos
    // en el estado de total
    const sumar = () => {
      settotal(negro + mestizo + europeo + indigena);
    };
    // llamamos esta funcion
    sumar();
    // estas son las variables con las que se relaciona
    // son las variables de las que depende el useEffect
    // al cambiar una de las variables, se vuelve a llamar
    // el useEffect
  }, [settotal, negro, mestizo, indigena, europeo]);

  // funcion que imprime los valores de los estados
  const handleSubmit = (e) => {
    // esta linea previene que al dar click en el boton
    // enviar, se recargue la página, previene el efecto por defecto
    // que es recargar la página
    e.preventDefault();
    // solo imprime en consola los estados
    console.log(`${negro}\n${mestizo}\n${indigena}\n${europeo}`);
  };

  return (
    <div className='App'>
      {/* es html mezclado con JS */}
      {/* se utilizan las {} para mostrar las variables de JS */}
      <h1>Total: {total}%</h1>
      {/* el formulario tiene el evento onSubmit
      (al enviar), entonces llamanos la funcion que creamos handleSubmit
       */}
      <form action='' onSubmit={handleSubmit}>
        <div className='contenedor-slide'>
          <div className='content-slide'>
            <p>Afro-descendiente</p>
            <span>0</span>
            {/* si el valor de negro es mayor a 0 */}
            {negro > 0 && (
              // va a mostrar este boton de html
              // solo se muestra cuando sea mayor a 0

              // al dar click llamamos a la funcion que altea el estado de
              // negro y le restamos 1 al valor que tenga negro

              // TIP
              // por defecto los botones al estar dentro de un formulario
              // son de tipo submit, osea al dar click, se envía el formulario
              // eso se evita colocando type='button', y ya no son de tipo submit
              <button type='button' onClick={() => setnegro(negro - 1)}>
                -
              </button>
            )}
            <input
              // si el total es >=100 entonces le indicamos que desabilite
              // el slide

              // total >=100 && true
              /* es igual a escribir 
              if(total>=100){
                return true
              }
               */
              disabled={total >= 100 && true}
              value={negro}
              id=''
              type='range'
              min='0'
              max='100'
              step='1'
              // el input tiene un evento onChange
              // osea al cambiar el estado del slide
              // le decios que escuche el evento (e)
              // ese evento trae muchas cosas pero lo que
              //  se necesita es el e.target.value,
              // para capturar el valor del slide
              // y se lo pone dentro de un Number() al e.target.value
              // porque por defecto el evento lo envía como
              // string, al meterlo en Number(), lo convertimos a número
              // como hacer un parse Int
              onChange={(e) => setnegro(Number(e.target.value))}
            />

            {negro < 100 && (
              <button
                type='button'
                // total <100 && setnegro(negro + 1)
                // es equivalente a escribit
                /*
                if (total<100) {
                  setnegro(negro + 1)
                }
                */
                onClick={() => total < 100 && setnegro(negro + 1)}>
                +
              </button>
            )}
            <span>100</span>
          </div>
          <p className='value-etnia'>{`${negro}%`}</p>
        </div>

        <div className='contenedor-slide'>
          <div className='content-slide'>
            <p>Mestizo</p>
            <span>0</span>
            {mestizo > 0 && (
              <button type='button' onClick={() => setmestizo(mestizo - 1)}>
                -
              </button>
            )}
            <input
              disabled={total >= 100 && true}
              id=''
              type='range'
              min='0'
              max='100'
              value={mestizo}
              step='1'
              onChange={(e) => setmestizo(Number(e.target.value))}
            />
            {mestizo < 100 && (
              <button
                type='button'
                onClick={() => total < 100 && setmestizo(mestizo + 1)}>
                +
              </button>
            )}
            <span>100</span>
          </div>
          <p className='value-etnia'>{`${mestizo}%`}</p>
        </div>

        <div className='contenedor-slide'>
          <div className='content-slide'>
            <p>Europeo</p>
            <span>0</span>
            {europeo > 0 && (
              <button type='button' onClick={() => seteuropeo(europeo - 1)}>
                -
              </button>
            )}
            <input
              disabled={total >= 100 && true}
              id=''
              type='range'
              min='0'
              max='100'
              value={europeo}
              step='1'
              onChange={(e) => seteuropeo(Number(e.target.value))}
            />
            {europeo < 100 && (
              <button
                type='button'
                onClick={() => total < 100 && seteuropeo(europeo + 1)}>
                +
              </button>
            )}
            <span>100</span>
          </div>
          <p className='value-etnia'>{`${europeo}%`}</p>
        </div>

        <div className='contenedor-slide'>
          <div className='content-slide'>
            <p>Indigena</p>
            <span>0</span>
            {indigena > 0 && (
              <button type='button' onClick={() => setindigena(indigena - 1)}>
                -
              </button>
            )}
            <input
              disabled={total >= 100 && true}
              id=''
              type='range'
              min='0'
              max='100'
              value={indigena}
              step='1'
              onChange={(e) => setindigena(Number(e.target.value))}
            />
            {indigena < 100 && (
              <button
                type='button'
                onClick={() => total < 100 && setindigena(indigena + 1)}>
                +
              </button>
            )}
            <span>100</span>
          </div>
          <p className='value-etnia'>{`${indigena}%`}</p>
        </div>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

export default App;
