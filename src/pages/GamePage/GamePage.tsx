import NavigationBar from "../../components/NavigationBar/NavigationBar";

const GamePage = () => {
  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className={`grid grid-cols-6 h-[calc(100vh-4.5rem)] p-12`}>
        <div>
          <div className="bg-yellowSpace rounded-2xl h-44 w-24 -translate-y-16 flex items-end p-3">
            <span className="text-2xl">Start typing</span>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">48 wpm</p>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">
              98% accur.
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <p className="text-lg">
            Fox Broadcasting Company1​ (comúnmente conocida como Fox; estilizada
            como FOX)2​3​ es una cadena estadounidense de televisión abierta que
            es propiedad emblemática de Fox Corporation. La cadena tiene su sede
            en Avenida de las Americas 1211 en la ciudad de Nueva York, con
            oficinas adicionales en el Fox Broadcasting Center (también en Nueva
            York) y en el Fox Television Center en Los Ángeles. Fue lanzado el 9
            de octubre de 1986, como un competidor de las tres grandes cadenas
            de televisión (ABC, CBS y NBC). Fox se convirtió en el intento más
            exitoso de una cuarta cadena de televisión. Fue la cadena de
            transmisión gratuita mejor calificada en el grupo demográfico entre
            los 18-49 de 2004 a 2012, y se ganó el puesto como la cadena de
            televisión estadounidense más vista en audiencia total durante la
            temporada 2007-08.4​5​
          </p>
        </div>
      </div>
    </>
  );
};

export default GamePage;
