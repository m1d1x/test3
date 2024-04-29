import cl from './CloseButton.module.scss'

export const CloseButton = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <svg
          width={55}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
          viewBox="0 0 60 58"
        >
          <path fill="rgba(0,0,0,138)" d="M11 0v1h1V0zm30 57v1h1v-1z" />
          <path d="M12 0v1h1V0zm2 0v1h1V0zm30 0v1h1V0zm2 0v1h1V0zM12 1v1h3V1zm32 0v1h3V1zM10 2v1h7V2zm32 0v1h7V2zM10 3v1h1V3zm6 0v1h1V3zm26 0v1h1V3zm6 0v1h1V3zM8 4v1h3V4zm8 0v1h3V4zm24 0v1h3V4zm8 0v1h3V4zM8 5v1h3V5zm8 0v1h3V5zm24 0v1h3V5zm8 0v1h3V5zM8 6v1h1V6zm10 0v1h1V6zm22 0v1h1V6zm10 0v1h1V6zM6 7v1h3V7zm12 0v1h3V7zm20 0v1h3V7zm12 0v1h3V7zM4 8v1h1V8zm2 0v1h1V8zm14 0v1h1V8zm18 0v1h1V8zm14 0v1h1V8zm2 0v1h1V8zM4 9v1h1V9zm2 0v1h1V9zm14 0v1h1V9zm2 0v1h1V9zm14 0v1h1V9zm2 0v1h1V9zm14 0v1h1V9zm2 0v1h1V9zM2 10v1h1v-1zm2 0v1h1v-1zm18 0v1h1v-1zm2 0v1h1v-1zm10 0v1h1v-1zm2 0v1h1v-1zm18 0v1h1v-1zm2 0v1h1v-1zM2 11v1h3v-1zm20 0v1h1v-1zm2 0v1h1v-1zm10 0v1h1v-1zm20 0v1h3v-1zM2 12v1h3v-1zm22 0v1h3v-1zm8 0v1h3v-1zm22 0v1h3v-1zM2 13v1h3v-1zm22 0v1h3v-1zm8 0v1h3v-1zm22 0v1h3v-1zM2 14v1h3v-1zm24 0v1h1v-1zm6 0v1h1v-1zm22 0v1h3v-1zM2 15v1h5v-1zm24 0v1h7v-1zm26 0v1h5v-1zM2 16v1h5v-1zm26 0v1h3v-1zm24 0v1h5v-1zM2 17v1h1v-1zm2 0v1h5v-1zm24 0v1h3v-1zm22 0v1h5v-1zm6 0v1h1v-1zM4 18v1h5v-1zm6 0v1h1v-1zm38 0v1h1v-1zm2 0v1h5v-1zM4 19v1h1v-1zm2 0v1h5v-1zm42 0v1h5v-1zm6 0v1h1v-1zM6 20v1h7v-1zm40 0v1h7v-1zM8 21v1h5v-1zm38 0v1h5v-1zM8 22v1h7v-1zm36 0v1h7v-1zM8 23v1h7v-1zm36 0v1h7v-1zm-34 1v1h5v-1zm34 0v1h5v-1zm-34 1v1h7v-1zm32 0v1h7v-1zm-30 1v1h5v-1zm30 0v1h5v-1zm-30 1v1h5v-1zm30 0v1h5v-1zm-30 1v1h3v-1zm32 0v1h3v-1zm-32 1v1h1v-1zm2 0v1h1v-1zm32 0v1h1v-1zm-36 1v1h1v-1zm2 0v1h1v-1zm34 0v1h1v-1zm2 0v1h1v-1zm-38 1v1h3v-1zm36 0v1h3v-1zm-36 1v1h1v-1zm38 0v1h1v-1zM8 33v1h3v-1zm40 0v1h3v-1zM8 34v1h1v-1zm42 0v1h1v-1zM6 35v1h3v-1zm44 0v1h3v-1zM6 36v1h1v-1zm46 0v1h1v-1zM4 37v1h1v-1zm2 0v1h1v-1zm46 0v1h1v-1zm2 0v1h1v-1zM2 38v1h1v-1zm2 0v1h1v-1zm24 0v1h1v-1zm2 0v1h1v-1zm24 0v1h1v-1zm2 0v1h1v-1zM2 39v1h1v-1zm26 0v1h3v-1zm28 0v1h1v-1zM1 40v1h2v-1zm25 0v1h7v-1zm30 0v1h1v-1zm2 0v1h1v-1zM1 41v1h2v-1zm25 0v1h7v-1zm30 0v1h3v-1zM1 42v1h2v-1zm25 0v1h7v-1zm30 0v1h3v-1zM1 43v1h4v-1zm23 0v1h11v-1zm30 0v1h5v-1zM1 44v1h4v-1zm23 0v1h11v-1zm30 0v1h5v-1zM1 45v1h6v-1zm21 0v1h15v-1zm30 0v1h7v-1zM1 46v1h6v-1zm7 0v1h1v-1zm12 0v1h1v-1zm2 0v1h5v-1zm10 0v1h5v-1zm6 0v1h1v-1zm12 0v1h1v-1zm2 0v1h7v-1zM1 47v1h1v-1zm3 0v1h5v-1zm16 0v1h5v-1zm6 0v1h1v-1zm6 0v1h1v-1zm2 0v1h5v-1zm16 0v1h5v-1zm8 0v1h1v-1zM4 48v1h5v-1zm8 0v1h1v-1zm6 0v1h1v-1zm2 0v1h5v-1zm14 0v1h5v-1zm6 0v1h1v-1zm6 0v1h1v-1zm4 0v1h5v-1zM4 49v1h9v-1zm14 0v1h7v-1zm16 0v1h7v-1zm12 0v1h9v-1zM6 50v1h7v-1zm12 0v1h5v-1zm18 0v1h5v-1zm10 0v1h7v-1zM6 51v1h17v-1zm30 0v1h17v-1zM8 52v1h13v-1zm30 0v1h13v-1zM8 53v1h13v-1zm30 0v1h13v-1zm-26 1v1h7v-1zm28 0v1h7v-1zm-28 1v1h7v-1zm28 0v1h7v-1zm-26 1v1h3v-1zm28 0v1h3v-1zm-28 1v1h1v-1zm2 0v1h1v-1zm26 0v1h1v-1zm2 0v1h1v-1z" />
          <path
            fill="rgba(0,0,0,243)"
            d="M13 0v1h1V0zm2 57v1h1v-1zm28 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,171)"
            d="M15 0v1h1V0zM3 37v1h1v-1zm24 9v1h1v-1zm18 11v1h1v-1z"
          />
          <path fill="rgba(0,0,0,52)" d="M43 0v1h1V0zM33 10v1h1v-1z" />
          <path
            fill="rgba(0,0,0,248)"
            d="M45 0v1h1V0zM5 8v1h1V8zm28 39v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,149)"
            d="M47 0v1h1V0zM3 8v1h1V8zm14 49v1h1v-1z"
          />
          <path fill="rgba(0,0,0,16)" d="M9 1v1h1V1zm30 55v1h1v-1z" />
          <path
            fill="rgba(0,0,0,2)"
            d="M10 1v1h1V1zM3 20v1h1v-1zm37 36v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,159)"
            d="M11 1v1h1V1zm38 2v1h1V3zm6 5v1h1V8zM19 54v1h1v-1zm22 2v1h1v-1z"
          />
          <path fill="rgba(0,0,0,189)" d="M15 1v1h1V1zm30 55v1h1v-1z" />
          <path
            fill="rgba(0,0,0,15)"
            d="M16 1v1h1V1zM0 48v1h1v-1zm57 0v1h1v-1zm2 0v1h1v-1zm-13 8v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,19)"
            d="M17 1v1h1V1zm24 0v1h1V1zM26 11v1h1v-1zM11 56v1h1v-1zm36 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,13)" d="M42 1v1h1V1z" />
          <path fill="rgba(0,0,0,80)" d="M43 1v1h1V1z" />
          <path fill="rgba(0,0,0,170)" d="M47 1v1h1V1zM17 56v1h1v-1z" />
          <path
            fill="rgba(0,0,0,5)"
            d="M48 1v1h1V1zm8 17v1h1v-1zM18 56v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,17)"
            d="M49 1v1h1V1zM32 11v1h1v-1zM10 26v1h1v-1zM1 48v1h1v-1zm57 0v1h1v-1zm-39 8v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,122)"
            d="M9 2v1h1V2zm30 2v1h1V4zm0 1v1h1V5zM9 25v1h1v-1zm0 6v1h1v-1zm30 24v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,157)"
            d="M17 2v1h1V2zm40 9v1h1v-1zm-30 1v1h1v-1zm30 0v1h1v-1zm-30 1v1h1v-1zm30 0v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zM9 24v1h1v-1zm38 3v1h1v-1zm0 1v1h1v-1zM1 39v1h1v-1zm46 16v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,145)"
            d="M41 2v1h1V2zM1 11v1h1v-1zm0 1v1h1v-1zm30 0v1h1v-1zM1 13v1h1v-1zm30 0v1h1v-1zM1 14v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm10 11v1h1v-1zm0 1v1h1v-1zm0 27v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,133)"
            d="M49 2v1h1V2zM19 4v1h1V4zm0 1v1h1V5zm30 20v1h1v-1zm0 6v1h1v-1zM19 55v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,21)"
            d="M7 3v1h1V3zm20 8v1h1v-1zM9 26v1h1v-1zM7 54v1h1v-1zm30 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,29)"
            d="M8 3v1h1V3zm11 0v1h1V3zm32 21v1h1v-1zM38 54v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,151)"
            d="M9 3v1h1V3zM5 6v1h1V6zm52 4v1h1v-1zm-4 24v1h1v-1zm2 2v1h1v-1zM27 47v1h1v-1zm12 7v1h1v-1z"
          />
          <path fill="#1f0104" d="M11 3v1h1V3z" />
          <path fill="#490213" d="M12 3v1h1V3z" />
          <path fill="#3e020e" d="M13 3v1h1V3z" />
          <path fill="#480211" d="M14 3v1h1V3z" />
          <path fill="#290107" d="M15 3v1h1V3zm18 11v1h1v-1z" />
          <path fill="rgba(0,0,0,178)" d="M17 3v1h1V3zm30 51v1h1v-1z" />
          <path fill="rgba(0,0,0,35)" d="M18 3v1h1V3z" />
          <path
            fill="rgba(0,0,0,26)"
            d="M39 3v1h1V3zM7 24v1h1v-1zm16 28v1h1v-1z"
          />
          <path fill="rgba(0,0,0,32)" d="M40 3v1h1V3z" />
          <path
            fill="rgba(0,0,0,169)"
            d="M41 3v1h1V3zm12 18v1h1v-1zM11 54v1h1v-1z"
          />
          <path fill="#060000" d="M43 3v1h1V3zm-20 8v1h1v-1zM9 18v1h1v-1z" />
          <path fill="#42020f" d="M44 3v1h1V3z" />
          <path fill="#3f020e" d="M45 3v1h1V3z" />
          <path fill="#490211" d="M46 3v1h1V3z" />
          <path fill="#230105" d="M47 3v1h1V3z" />
          <path fill="rgba(0,0,0,30)" d="M50 3v1h1V3zM20 54v1h1v-1z" />
          <path
            fill="rgba(0,0,0,24)"
            d="M51 3v1h1V3zm8 36v1h1v-1zM21 54v1h1v-1zm30 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,98)"
            d="M7 4v1h1V4zm0 1v1h1V5zm30 2v1h1V7zM7 22v1h1v-1zm0 1v1h1v-1zm0 10v1h1v-1zm0 20v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="#aa0d37" d="M11 4v1h1V4z" />
          <path fill="#ff2779" d="M12 4v1h1V4z" />
          <path
            fill="#ff2067"
            d="M13 4v1h1V4zm-6 9v1h1v-1zm39 6v1h1v-1zm-31 1v1h1v-1zm13 16v1h1v-1zm2 0v1h1v-1zm3 2v1h1v-1zm1 2v1h1v-1zm-23 6v1h1v-1zm36 0v1h1v-1z"
          />
          <path
            fill="#ff2676"
            d="M14 4v1h1V4zm-8 7v1h1v-1zm32 0v1h1v-1zM16 23v1h1v-1zm36 20v1h1v-1z"
          />
          <path fill="#d11347" d="M15 4v1h1V4z" />
          <path fill="#3c020f" d="M43 4v1h1V4z" />
          <path
            fill="#ff226d"
            d="M44 4v1h1V4zm8 8v1h1v-1zM42 22v1h1v-1zm-2 2v1h1v-1zm4 6v1h1v-1z"
          />
          <path
            fill="#ff2169"
            d="M45 4v1h1V4zm-1 1v1h1V5zM33 17v1h1v-1zm-4 2v1h1v-1zm7 23v1h1v-1z"
          />
          <path
            fill="#ff2778"
            d="M46 4v1h1V4zm-26 7v1h1v-1zm32 2v1h1v-1zM18 46v1h1v-1zm22 0v1h1v-1z"
          />
          <path fill="#b8103d" d="M47 4v1h1V4z" />
          <path
            fill="rgba(0,0,0,110)"
            d="M51 4v1h1V4zm0 1v1h1V5zM21 7v1h1V7zm30 15v1h1v-1zm0 1v1h1v-1zm0 10v1h1v-1zM21 53v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="#aa0c35" d="M11 5v1h1V5z" />
          <path
            fill="#ff2674"
            d="M12 5v1h1V5zm34 0v1h1V5zm6 6v1h1v-1zM16 29v1h1v-1zm4 16v1h1v-1zm30 0v1h1v-1z"
          />
          <path
            fill="#ff1f63"
            d="M13 5v1h1V5zm-3 3v1h1V8zm6 0v1h1V8zm2 0v1h1V8zm22 0v1h1V8zm2 0v1h1V8zm6 0v1h1V8zm-11 4v1h1v-1zm-16 1v1h1v-1zm16 0v1h1v-1zM9 15v1h1v-1zm40 0v1h1v-1zm-38 1v1h1v-1zm13 0v1h1v-1zm23 0v1h1v-1zm-34 2v1h1v-1zm19 0v1h1v-1zm13 0v1h1v-1zm-2 2v1h1v-1zm-27 1v1h1v-1zm26 0v1h1v-1zM27 36v1h1v-1zm4 0v1h1v-1zm-6 2v1h1v-1zm10 2v1h1v-1zM9 44v1h1v-1zm30 0v1h1v-1zm-26 2v1h1v-1zm4 0v1h1v-1zm28 0v1h1v-1z"
          />
          <path
            fill="#ff2470"
            d="M14 5v1h1V5zm8 7v1h1v-1zm-12 5v1h1v-1zm38 0v1h1v-1zm-8 10v1h1v-1zm2 21v1h1v-1z"
          />
          <path fill="#d11243" d="M15 5v1h1V5z" />
          <path fill="#3c020e" d="M43 5v1h1V5z" />
          <path
            fill="#ff2065"
            d="M45 5v1h1V5zm2 2v1h1V7zM9 9v1h1V9zm32 20v1h1v-1zm3 3v1h1v-1zm-32 2v1h1v-1zm-5 5v1h1v-1zm19 0v1h1v-1zm25 0v1h1v-1zM5 41v1h1v-1z"
          />
          <path fill="#b80e3b" d="M47 5v1h1V5z" />
          <path fill="rgba(0,0,0,220)" d="M6 6v1h1V6z" />
          <path fill="rgba(0,0,0,223)" d="M7 6v1h1V6z" />
          <path fill="#71051f" d="M9 6v1h1V6zm42 2v1h1V8z" />
          <path
            fill="#ff1a57"
            d="M10 6v1h1V6zm6 0v1h1V6zm32 0v1h1V6zM29 18v1h1v-1zm18 16v1h1v-1z"
          />
          <path
            fill="#ff1a58"
            d="M11 6v1h1V6zm31 0v1h1V6zM26 16v1h1v-1zM9 36v1h1v-1z"
          />
          <path
            fill="#ff1f64"
            d="M12 6v1h1V6zm2 0v1h1V6zm32 0v1h1V6zM15 7v1h1V7zm2 2v1h1V9zm24 0v1h1V9zm-22 2v1h1v-1zm20 0v1h1v-1zm12 0v1h1v-1zm-29 3v1h1v-1zm14 0v1h1v-1zm-11 3v1h1v-1zm2 2v1h1v-1zm4 0v1h1v-1zM10 36v1h1v-1zm38 0v1h1v-1zM6 38v1h1v-1zm47 3v1h1v-1zm-12 5v1h1v-1z"
          />
          <path
            fill="#ff1e61"
            d="M13 6v1h1V6zm32 0v1h1V6zM13 7v1h1V7zm32 0v1h1V7zM8 8v1h1V8zm3 0v1h5V8zm32 0v1h5V8zM11 9v1h5V9zm32 0v1h5V9zM9 10v1h9v-1zm32 0v1h9v-1zM9 11v1h9v-1zm32 0v1h9v-1zM8 12v1h13v-1zm30 0v1h13v-1zM9 13v1h12v-1zm29 0v1h12v-1zm-28 1v1h12v-1zm27 0v1h12v-1zm-26 1v1h11v-1zm26 0v1h11v-1zm-24 1v1h11v-1zm22 0v1h11v-1zm-24 1v1h13v-1zm24 0v1h13v-1zm-20 1v1h11v-1zm18 0v1h11v-1zm-18 1v1h11v-1zm18 0v1h11v-1zm-16 1v1h25v-1zm0 1v1h25v-1zm1 1v1h23v-1zm1 1v1h21v-1zm0 1v1h21v-1zm0 1v1h21v-1zm0 1v1h21v-1zm0 1v1h21v-1zm-3 1v1h1v-1zm3 0v1h21v-1zm0 1v1h21v-1zm-3 1v1h28v-1zm1 1v1h25v-1zm-2 1v1h29v-1zm0 1v1h29v-1zm-2 1v1h33v-1zm0 1v1h33v-1zm-2 1v1h15v-1zm22 0v1h15v-1zm-22 1v1h16v-1zm22 0v1h15v-1zM9 38v1h15v-1zm25 0v1h16v-1zM9 39v1h15v-1zm26 0v1h15v-1zM5 40v1h19v-1zm31 0v1h18v-1zM7 41v1h15v-1zm30 0v1h15v-1zM8 42v1h13v-1zm30 0v1h13v-1zM9 43v1h11v-1zm30 0v1h11v-1zm-28 1v1h7v-1zm30 0v1h7v-1zm-31 1v1h9v-1zm30 0v1h9v-1zm-25 1v1h1v-1zm28 0v1h1v-1zm-28 1v1h1v-1zm28 0v1h1v-1zm-28 1v1h1v-1zm28 0v1h1v-1z"
          />
          <path fill="#ff1b5a" d="M15 6v1h1V6zM9 8v1h1V8z" />
          <path fill="#92092c" d="M17 6v1h1V6z" />
          <path fill="rgba(0,0,0,230)" d="M19 6v1h1V6zM7 21v1h1v-1z" />
          <path
            fill="rgba(0,0,0,228)"
            d="M20 6v1h1V6zm19 0v1h1V6zm-12 8v1h1v-1z"
          />
          <path fill="rgba(0,0,0,88)" d="M21 6v1h1V6z" />
          <path fill="rgba(0,0,0,78)" d="M37 6v1h1V6z" />
          <path fill="rgba(0,0,0,224)" d="M38 6v1h1V6zm-7 8v1h1v-1z" />
          <path fill="#870727" d="M41 6v1h1V6z" />
          <path fill="#f81750" d="M43 6v1h1V6z" />
          <path
            fill="#ff1e62"
            d="M44 6v1h1V6zm6 2v1h1V8zM8 10v1h1v-1zm10 0v1h1v-1zm22 0v1h1v-1zm10 0v1h1v-1zM7 12v1h1v-1zm44 0v1h1v-1zm-2 2v1h1v-1zm-15 2v1h1v-1zm-8 2v1h1v-1zm-12 1v1h1v-1zm30 0v1h1v-1zm-27 3v1h1v-1zm24 0v1h1v-1zm-23 6v1h1v-1zm22 0v1h1v-1zm2 0v1h1v-1zm1 3v1h1v-1zm-11 6v1h1v-1zM8 38v1h1v-1zm42 0v1h1v-1zm-26 1v1h1v-1zm10 0v1h1v-1zM7 42v1h1v-1zm14 0v1h1v-1zm16 0v1h1v-1zm14 0v1h1v-1zm-32 2v1h1v-1zm30 0v1h1v-1zm-30 1v1h1v-1zm30 0v1h1v-1zm-35 2v1h1v-1zm2 0v1h1v-1zm26 0v1h1v-1zm2 0v1h1v-1z"
          />
          <path fill="#ff1a59" d="M47 6v1h1V6zM32 16v1h1v-1zm17 20v1h1v-1z" />
          <path fill="#7b0624" d="M49 6v1h1V6z" />
          <path fill="rgba(0,0,0,225)" d="M51 6v1h1V6z" />
          <path fill="rgba(0,0,0,217)" d="M52 6v1h1V6z" />
          <path
            fill="rgba(0,0,0,160)"
            d="M53 6v1h1V6zM5 21v1h1v-1zm8 36v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,190)"
            d="M5 7v1h1V7zm20 4v1h1v-1zM5 35v1h1v-1zm0 16v1h1v-1z"
          />
          <path fill="#8f0b31" d="M9 7v1h1V7zm0 28v1h1v-1z" />
          <path fill="#ff2a81" d="M10 7v1h1V7zm38 0v1h1V7zM14 49v1h1v-1z" />
          <path
            fill="#ff2066"
            d="M11 7v1h1V7zm40 6v1h1v-1zM17 23v1h1v-1zm24 0v1h1v-1zm-24 6v1h1v-1zm-3 3v1h1v-1zm-1 1v1h1v-1zm-2 2v1h1v-1zm36 0v1h1v-1zm-18 1v1h1v-1zM9 37v1h1v-1zm23 2v1h1v-1z"
          />
          <path
            fill="#ff1c5e"
            d="M12 7v1h1V7zm2 0v1h1V7zm32 0v1h1V7zM7 10v1h1v-1zm32 0v1h1v-1zm12 0v1h1v-1zm-29 5v1h1v-1zm-9 4v1h1v-1zm32 0v1h1v-1zM14 33v1h1v-1zm30 0v1h1v-1zm-32 2v1h1v-1zm34 0v1h1v-1zm-36 2v1h1v-1zm38 0v1h1v-1zM6 41v1h1v-1zm46 0v1h1v-1z"
          />
          <path fill="#ff2a7f" d="M16 7v1h1V7zm16 10v1h1v-1z" />
          <path fill="#b81140" d="M17 7v1h1V7z" />
          <path fill="#aa0e3b" d="M41 7v1h1V7z" />
          <path fill="#ff2a80" d="M42 7v1h1V7zm-18 8v1h1v-1zm20 34v1h1v-1z" />
          <path
            fill="#ff216a"
            d="M43 7v1h1V7zm-20 8v1h1v-1zm5 4v1h1v-1zm2 0v1h1v-1zM6 42v1h1v-1zm46 0v1h1v-1z"
          />
          <path
            fill="#ff1e5f"
            d="M44 7v1h1V7zM16 9v1h1V9zm-8 2v1h1v-1zm10 0v1h1v-1zm22 0v1h1v-1zm10 0v1h1v-1zM8 13v1h1v-1zm42 0v1h1v-1zm-40 2v1h1v-1zm38 0v1h1v-1zm-36 1v1h1v-1zm34 0v1h1v-1zm-12 1v1h1v-1zm-20 1v1h1v-1zm30 0v1h1v-1zm-18 1v1h1v-1zm-10 1v1h1v-1zm26 0v1h1v-1zm-24 3v1h1v-1zm22 0v1h1v-1zm-22 6v1h1v-1zm22 0v1h1v-1zm-24 2v1h1v-1zm26 0v1h1v-1zm-16 5v1h1v-1zm6 0v1h1v-1zm-5 1v1h1v-1zm4 0v1h1v-1zm-7 1v1h1v-1zM8 39v1h1v-1zm42 0v1h1v-1zm-14 2v1h1v-1zM8 43v1h1v-1zm12 0v1h1v-1zm18 0v1h1v-1zm12 0v1h1v-1zm-40 1v1h1v-1zm8 0v1h1v-1zm22 0v1h1v-1zm8 0v1h1v-1zm-34 2v1h1v-1zm2 0v1h1v-1zm26 0v1h1v-1zm2 0v1h1v-1zm-31 1v1h1v-1zm32 0v1h1v-1z"
          />
          <path fill="#9c0c35" d="M49 7v1h1V7z" />
          <path
            fill="rgba(0,0,0,201)"
            d="M53 7v1h1V7zm0 28v1h1v-1zm0 16v1h1v-1z"
          />
          <path fill="#65041b" d="M7 8v1h1V8z" />
          <path
            fill="#ff1b5c"
            d="M17 8v1h1V8zm33 28v1h1v-1zM7 38v1h1v-1zm44 0v1h1v-1z"
          />
          <path
            fill="#890729"
            d="M19 8v1h1V8zm12 8v1h1v-1zM9 47v1h1v-1zm30 0v1h1v-1zm3 3v1h1v-1z"
          />
          <path fill="rgba(0,0,0,239)" d="M21 8v1h1V8z" />
          <path
            fill="rgba(0,0,0,250)"
            d="M22 8v1h1V8zM5 19v1h1v-1zm50 19v1h1v-1z"
          />
          <path fill="rgba(0,0,0,77)" d="M23 8v1h1V8z" />
          <path fill="rgba(0,0,0,67)" d="M35 8v1h1V8zm-2 40v1h1v-1z" />
          <path
            fill="rgba(0,0,0,245)"
            d="M36 8v1h1V8zM5 36v1h1v-1zM2 47v1h1v-1zm54 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,238)" d="M37 8v1h1V8z" />
          <path fill="#7f0624" d="M39 8v1h1V8z" />
          <path
            fill="#ff1b5b"
            d="M41 8v1h1V8zm8 0v1h1V8zm-24 8v1h1v-1zm-11 5v1h1v-1zm30 0v1h1v-1zm-27 7v1h1v-1zm24 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,249)"
            d="M53 8v1h1V8zm-30 2v1h1v-1zM3 38v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,9)"
            d="M1 9v1h1V9zm56 0v1h1V9zM27 48v1h1v-1zm4 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,174)"
            d="M3 9v1h1V9zm44 17v1h1v-1zM3 48v1h1v-1z"
          />
          <path fill="#050000" d="M5 9v1h1V9zm30 2v1h1v-1zm9 18v1h2v-1z" />
          <path fill="#7d0727" d="M7 9v1h1V9z" />
          <path fill="#ff287a" d="M8 9v1h1V9zm4 9v1h1v-1zm14 20v1h1v-1z" />
          <path
            fill="#ff1c5f"
            d="M10 9v1h1V9zm32 0v1h1V9zm6 0v1h1V9zm-12 6v1h1v-1zm-12 2v1h1v-1zm8 2v1h1v-1zM15 30v1h1v-1zm7 11v1h1v-1z"
          />
          <path fill="#ff297c" d="M18 9v1h1V9zm22 0v1h1V9z" />
          <path fill="#a40d37" d="M19 9v1h1V9z" />
          <path
            fill="#010000"
            d="M21 9v1h1V9zm16 0v1h1V9zm-1 2v1h1v-1zM5 37v1h1v-1zm48 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,97)" d="M23 9v1h1V9z" />
          <path
            fill="rgba(0,0,0,11)"
            d="M25 9v1h1V9zM9 29v1h1v-1zm40 0v1h1v-1z"
          />
          <path
            fill="rgba(0,0,0,3)"
            d="M33 9v1h1V9zm24 28v1h1v-1zm-29 9v1h1v-1z"
          />
          <path fill="rgba(0,0,0,87)" d="M35 9v1h1V9zM23 51v1h1v-1z" />
          <path fill="#990b32" d="M39 9v1h1V9z" />
          <path
            fill="#ff1f65"
            d="M49 9v1h1V9zM7 11v1h1v-1zm8 20v1h1v-1zm30 2v1h1v-1zm1 1v1h1v-1zm3 3v1h1v-1zM7 43v1h1v-1zm14 0v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="#ff287b" d="M50 9v1h1V9zM14 20v1h1v-1zm18 18v1h1v-1z" />
          <path fill="#8a0a2d" d="M51 9v1h1V9z" />
          <path fill="#060001" d="M53 9v1h1V9z" />
          <path
            fill="rgba(0,0,0,184)"
            d="M55 9v1h1V9zm-26 5v1h1v-1zm-4 34v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,140)" d="M1 10v1h1v-1zm30 37v1h1v-1z" />
          <path
            fill="rgba(0,0,0,252)"
            d="M3 10v1h1v-1zm52 0v1h1v-1zM3 47v1h1v-1zm22 0v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="#d41243" d="M5 10v1h1v-1z" />
          <path fill="#ff2168" d="M6 10v1h1v-1zm17 31v1h1v-1z" />
          <path fill="#ff1e5e" d="M19 10v1h1v-1zm-2 37v1h1v-1zm24 0v1h1v-1z" />
          <path fill="#ff226b" d="M20 10v1h1v-1zm-2 14v1h1v-1zm17 17v1h1v-1z" />
          <path fill="#7b0623" d="M21 10v1h1v-1z" />
          <path fill="rgba(0,0,0,173)" d="M25 10v1h1v-1zm3 4v1h1v-1z" />
          <path
            fill="rgba(0,0,0,253)"
            d="M35 10v1h1v-1zM11 30v1h1v-1zm36 0v1h1v-1z"
          />
          <path fill="#6e051e" d="M37 10v1h1v-1z" />
          <path fill="#ff226a" d="M38 10v1h1v-1z" />
          <path fill="#ff2167" d="M52 10v1h1v-1z" />
          <path fill="#e01448" d="M53 10v1h1v-1z" />
          <path fill="#de164b" d="M5 11v1h1v-1z" />
          <path fill="#990b31" d="M21 11v1h1v-1z" />
          <path fill="rgba(0,0,0,20)" d="M31 11v1h1v-1zm17 15v1h1v-1z" />
          <path fill="rgba(0,0,0,83)" d="M33 11v1h1v-1z" />
          <path fill="#8d092c" d="M37 11v1h1v-1z" />
          <path fill="#ea174f" d="M53 11v1h1v-1z" />
          <path fill="#de1347" d="M5 12v1h1v-1z" />
          <path fill="#ff226e" d="M6 12v1h1v-1zm8 18v1h1v-1z" />
          <path
            fill="#ff1f62"
            d="M21 12v1h1v-1zM9 14v1h1v-1zm0 31v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="#65041c" d="M23 12v1h1v-1zm0 1v1h1v-1z" />
          <path fill="#580317" d="M35 12v1h1v-1zm0 1v1h1v-1z" />
          <path
            fill="#ff236d"
            d="M36 12v1h1v-1zM10 47v1h1v-1zm38 0v1h1v-1zm-4 1v1h1v-1z"
          />
          <path fill="#ea164c" d="M53 12v1h1v-1zM43 22v1h1v-1z" />
          <path fill="#de164d" d="M5 13v1h1v-1z" />
          <path fill="#ff277a" d="M6 13v1h1v-1zm38 7v1h1v-1z" />
          <path
            fill="#ff2471"
            d="M22 13v1h1v-1zm18 12v1h1v-1zm0 1v1h1v-1zM20 44v1h1v-1zm30 0v1h1v-1z"
          />
          <path
            fill="#ff236f"
            d="M36 13v1h1v-1zm14 1v1h1v-1zM18 25v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zM4 40v1h1v-1zm12 8v1h1v-1z"
          />
          <path fill="#ea1853" d="M53 13v1h1v-1z" />
          <path fill="#3a010b" d="M5 14v1h1v-1zM3 42v1h1v-1z" />
          <path fill="#36010a" d="M6 14v1h1v-1z" />
          <path fill="#a50c33" d="M7 14v1h1v-1z" />
          <path
            fill="#ff236e"
            d="M8 14v1h1v-1zm16 26v1h1v-1zm30 0v1h1v-1zm-40 8v1h1v-1z"
          />
          <path fill="#f1164e" d="M23 14v1h1v-1zm12 0v1h1v-1z" />
          <path fill="#e7144b" d="M24 14v1h1v-1z" />
          <path fill="#970a2e" d="M25 14v1h1v-1z" />
          <path fill="rgba(0,0,0,172)" d="M30 14v1h1v-1z" />
          <path fill="#d71246" d="M34 14v1h1v-1z" />
          <path fill="#b00d37" d="M51 14v1h1v-1zM41 48v1h1v-1z" />
          <path fill="#340109" d="M52 14v1h1v-1z" />
          <path fill="#3e020c" d="M53 14v1h1v-1z" />
          <path fill="#730622" d="M7 15v1h1v-1z" />
          <path fill="#ff2776" d="M8 15v1h1v-1zM6 39v1h1v-1z" />
          <path fill="#d1164c" d="M25 15v1h1v-1z" />
          <path fill="#3c0210" d="M33 15v1h1v-1zm0 26v1h1v-1z" />
          <path
            fill="#ff2777"
            d="M34 15v1h1v-1zm16 0v1h1v-1zm-8 8v1h1v-1zm-28 8v1h1v-1zm-4 15v1h1v-1zm38 0v1h1v-1z"
          />
          <path fill="#ff226c" d="M35 15v1h1v-1zm-19 7v1h1v-1z" />
          <path fill="#810727" d="M51 15v1h1v-1z" />
          <path
            fill="#0d0001"
            d="M7 16v1h1v-1zm22 22v1h1v-1zM10 48v1h1v-1zm38 0v1h1v-1z"
          />
          <path fill="#0f0001" d="M8 16v1h1v-1z" />
          <path fill="#ac0d37" d="M9 16v1h1v-1z" />
          <path
            fill="#ff2675"
            d="M10 16v1h1v-1zm32 13v1h1v-1zm2 2v1h1v-1zm8 8v1h1v-1zm-18 2v1h1v-1z"
          />
          <path fill="#94092c" d="M27 16v1h1v-1z" />
          <path fill="#fa1752" d="M33 16v1h1v-1zm15 18v1h1v-1z" />
          <path fill="#ff2775" d="M48 16v1h1v-1z" />
          <path fill="#b7103b" d="M49 16v1h1v-1z" />
          <path fill="#100001" d="M50 16v1h1v-1zm-35 8v1h1v-1zm8 20v1h1v-1z" />
          <path fill="#110002" d="M51 16v1h1v-1z" />
          <path fill="rgba(0,0,0,144)" d="M1 17v1h1v-1z" />
          <path
            fill="rgba(0,0,0,254)"
            d="M3 17v1h1v-1zm52 0v1h1v-1zm2 23v1h1v-1z"
          />
          <path fill="#8d092a" d="M9 17v1h1v-1z" />
          <path fill="#ff2a7e" d="M26 17v1h1v-1z" />
          <path fill="#b91140" d="M27 17v1h1v-1z" />
          <path fill="#ab0e3b" d="M31 17v1h1v-1z" />
          <path fill="#9a0a2e" d="M49 17v1h1v-1z" />
          <path fill="rgba(0,0,0,156)" d="M57 17v1h1v-1zM3 19v1h1v-1z" />
          <path fill="rgba(0,0,0,14)" d="M1 18v1h1v-1zm56 0v1h1v-1z" />
          <path fill="rgba(0,0,0,177)" d="M3 18v1h1v-1z" />
          <path fill="#b7103d" d="M11 18v1h1v-1z" />
          <path
            fill="#ff1c5d"
            d="M27 18v1h1v-1zm16 3v1h1v-1zM28 37v1h3v-1zm-3 2v1h1v-1z"
          />
          <path fill="#ff1a56" d="M28 18v1h1v-1zm2 0v1h1v-1z" />
          <path fill="#ff1c5c" d="M31 18v1h1v-1zM11 47v1h1v-1zm35 0v1h2v-1z" />
          <path fill="#ff2879" d="M46 18v1h1v-1z" />
          <path fill="#c21241" d="M47 18v1h1v-1z" />
          <path fill="#070001" d="M49 18v1h1v-1zm6 21v1h1v-1z" />
          <path fill="rgba(0,0,0,187)" d="M55 18v1h1v-1z" />
          <path fill="#9d0a2f" d="M11 19v1h1v-1zm24 23v1h1v-1z" />
          <path fill="#ff2068" d="M12 19v1h1v-1zm0 27v1h1v-1zm34 0v1h1v-1z" />
          <path fill="#a90c34" d="M47 19v1h1v-1z" />
          <path fill="rgba(0,0,0,251)" d="M53 19v1h1v-1z" />
          <path fill="rgba(0,0,0,166)" d="M55 19v1h1v-1zm2 20v1h1v-1z" />
          <path fill="rgba(0,0,0,191)" d="M5 20v1h1v-1z" />
          <path fill="#c81246" d="M13 20v1h1v-1z" />
          <path fill="#d5144a" d="M45 20v1h1v-1z" />
          <path fill="rgba(0,0,0,202)" d="M53 20v1h1v-1z" />
          <path fill="rgba(0,0,0,236)" d="M6 21v1h1v-1z" />
          <path fill="#a50b33" d="M13 21v1h1v-1z" />
          <path fill="#ff1955" d="M15 21v1h1v-1zm-2 11v1h1v-1z" />
          <path fill="#af0c36" d="M45 21v1h1v-1z" />
          <path fill="rgba(0,0,0,232)" d="M51 21v1h1v-1z" />
          <path fill="rgba(0,0,0,233)" d="M52 21v1h1v-1z" />
          <path fill="#580316" d="M15 22v1h1v-1z" />
          <path fill="#58031a" d="M15 23v1h1v-1z" />
          <path fill="#ea1852" d="M43 23v1h1v-1z" />
          <path fill="rgba(0,0,0,44)" d="M8 24v1h1v-1z" />
          <path fill="#300108" d="M16 24v1h1v-1zM5 44v1h1v-1z" />
          <path fill="#a30b32" d="M17 24v1h1v-1z" />
          <path fill="#ac0c35" d="M41 24v1h1v-1z" />
          <path fill="#2e0108" d="M42 24v1h1v-1z" />
          <path fill="#3b010c" d="M43 24v1h1v-1z" />
          <path fill="rgba(0,0,0,165)" d="M49 24v1h1v-1zm-2 5v1h1v-1z" />
          <path fill="rgba(0,0,0,46)" d="M50 24v1h1v-1z" />
          <path fill="#710521" d="M17 25v1h1v-1zm0 1v1h1v-1z" />
          <path fill="#800625" d="M41 25v1h1v-1zm0 1v1h1v-1z" />
          <path fill="rgba(0,0,0,164)" d="M11 26v1h1v-1z" />
          <path fill="rgba(0,0,0,23)" d="M49 26v1h1v-1zM35 52v1h1v-1z" />
          <path fill="#750621" d="M17 27v1h1v-1z" />
          <path fill="#820726" d="M41 27v1h1v-1z" />
          <path fill="#4e0214" d="M15 28v1h1v-1z" />
          <path fill="#d51243" d="M43 28v1h1v-1z" />
          <path fill="rgba(0,0,0,155)" d="M11 29v1h1v-1z" />
          <path fill="#090001" d="M13 29v1h1v-1zm41 10v1h1v-1zm-43 9v1h1v-1z" />
          <path fill="#6a051f" d="M15 29v1h1v-1z" />
          <path fill="#ef1953" d="M43 29v1h1v-1z" />
          <path fill="rgba(0,0,0,120)" d="M9 30v1h1v-1z" />
          <path fill="#c00e3d" d="M13 30v1h1v-1z" />
          <path fill="#cd1141" d="M45 30v1h1v-1z" />
          <path fill="rgba(0,0,0,131)" d="M49 30v1h1v-1z" />
          <path fill="#c51141" d="M13 31v1h1v-1z" />
          <path fill="#d21346" d="M45 31v1h1v-1z" />
          <path fill="rgba(0,0,0,65)" d="M7 32v1h1v-1zM3 50v1h1v-1z" />
          <path
            fill="rgba(0,0,0,179)"
            d="M8 32v1h1v-1zm17 17v1h1v-1zm30 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,210)" d="M9 32v1h1v-1z" />
          <path fill="#70051f" d="M11 32v1h1v-1z" />
          <path fill="#d81246" d="M12 32v1h1v-1z" />
          <path fill="#ff1957" d="M45 32v1h1v-1z" />
          <path fill="#d91246" d="M46 32v1h1v-1z" />
          <path fill="#790623" d="M47 32v1h1v-1z" />
          <path fill="rgba(0,0,0,214)" d="M49 32v1h1v-1z" />
          <path fill="rgba(0,0,0,182)" d="M50 32v1h1v-1zm5 5v1h1v-1z" />
          <path fill="rgba(0,0,0,73)" d="M51 32v1h1v-1z" />
          <path fill="#aa103d" d="M11 33v1h1v-1z" />
          <path fill="#ff2b84" d="M12 33v1h1v-1zm30 16v1h1v-1z" />
          <path fill="#ff2b83" d="M46 33v1h1v-1z" />
          <path fill="#b81242" d="M47 33v1h1v-1z" />
          <path fill="rgba(0,0,0,143)" d="M5 34v1h1v-1z" />
          <path fill="rgba(0,0,0,206)" d="M6 34v1h1v-1z" />
          <path fill="rgba(0,0,0,216)" d="M7 34v1h1v-1z" />
          <path fill="#6a041d" d="M9 34v1h1v-1z" />
          <path fill="#f91752" d="M10 34v1h1v-1z" />
          <path fill="#ff1956" d="M11 34v1h1v-1z" />
          <path fill="#750622" d="M49 34v1h1v-1zM15 50v1h1v-1zm28 0v1h1v-1z" />
          <path fill="rgba(0,0,0,219)" d="M51 34v1h1v-1z" />
          <path fill="rgba(0,0,0,203)" d="M52 34v1h1v-1z" />
          <path fill="#ff2a82" d="M10 35v1h1v-1zm38 0v1h1v-1z" />
          <path fill="#9c0c36" d="M49 35v1h1v-1z" />
          <path fill="rgba(0,0,0,142)" d="M3 36v1h1v-1z" />
          <path fill="rgba(0,0,0,244)" d="M4 36v1h1v-1z" />
          <path fill="#5f031a" d="M7 36v1h1v-1z" />
          <path fill="#ff1a5a" d="M8 36v1h1v-1z" />
          <path fill="#6b051d" d="M51 36v1h1v-1z" />
          <path fill="rgba(0,0,0,246)" d="M53 36v1h1v-1zm4 11v1h1v-1z" />
          <path
            fill="rgba(0,0,0,242)"
            d="M54 36v1h1v-1zM0 41v1h1v-1zm59 0v1h1v-1zM0 42v1h1v-1zm59 0v1h1v-1zM0 43v1h1v-1zm59 0v1h1v-1zM0 44v1h1v-1zm59 0v1h1v-1zM0 45v1h1v-1zm59 0v1h1v-1zM0 46v1h1v-1zm59 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,4)" d="M1 37v1h1v-1z" />
          <path fill="#770626" d="M7 37v1h1v-1z" />
          <path fill="#ff287c" d="M8 37v1h1v-1z" />
          <path fill="#ff297d" d="M50 37v1h1v-1zm-26 4v1h1v-1z" />
          <path fill="#86092c" d="M51 37v1h1v-1z" />
          <path fill="rgba(0,0,0,135)" d="M1 38v1h1v-1z" />
          <path fill="#cd1140" d="M5 38v1h1v-1z" />
          <path fill="#c01241" d="M27 38v1h1v-1z" />
          <path fill="#b3103d" d="M31 38v1h1v-1z" />
          <path fill="#ff1e63" d="M52 38v1h1v-1z" />
          <path fill="#d81244" d="M53 38v1h1v-1z" />
          <path
            fill="rgba(0,0,0,146)"
            d="M57 38v1h1v-1zM7 52v1h1v-1zm30 0v1h1v-1z"
          />
          <path
            fill="#080001"
            d="M3 39v1h1v-1zm4 7v1h1v-1zm30 0v1h1v-1zm10 2v1h1v-1z"
          />
          <path fill="#040000" d="M4 39v1h1v-1z" />
          <path fill="#e5174e" d="M5 39v1h1v-1z" />
          <path fill="#a40c33" d="M27 39v1h1v-1z" />
          <path fill="#990a2e" d="M31 39v1h1v-1z" />
          <path fill="#ff1b59" d="M33 39v1h1v-1z" />
          <path fill="#f01953" d="M53 39v1h1v-1z" />
          <path fill="rgba(0,0,0,240)" d="M0 40v1h1v-1zm59 0v1h1v-1z" />
          <path fill="#c2103e" d="M3 40v1h1v-1z" />
          <path fill="#d11242" d="M25 40v1h1v-1z" />
          <path fill="#3f010e" d="M33 40v1h1v-1z" />
          <path fill="#cf1242" d="M55 40v1h1v-1z" />
          <path fill="#c51449" d="M3 41v1h1v-1z" />
          <path fill="#ff2c84" d="M4 41v1h1v-1z" />
          <path fill="#d1144b" d="M25 41v1h1v-1z" />
          <path fill="#ff2b82" d="M54 41v1h1v-1z" />
          <path fill="#d2174e" d="M55 41v1h1v-1z" />
          <path fill="#5c0317" d="M4 42v1h1v-1z" />
          <path fill="#f5174f" d="M5 42v1h1v-1z" />
          <path fill="#ff216b" d="M22 42v1h1v-1z" />
          <path fill="#a40b32" d="M23 42v1h1v-1z" />
          <path fill="#4b0211" d="M24 42v1h1v-1z" />
          <path fill="#40020e" d="M25 42v1h1v-1z" />
          <path fill="#0c0001" d="M33 42v1h1v-1zm2 2v1h1v-1z" />
          <path fill="#470210" d="M34 42v1h1v-1z" />
          <path fill="#fe1853" d="M53 42v1h1v-1z" />
          <path fill="#5f0318" d="M54 42v1h1v-1z" />
          <path fill="#3c010c" d="M55 42v1h1v-1z" />
          <path fill="#de164c" d="M5 43v1h1v-1z" />
          <path fill="#ff2677" d="M6 43v1h1v-1zm16 0v1h1v-1z" />
          <path fill="#65051e" d="M23 43v1h1v-1z" />
          <path fill="#580318" d="M35 43v1h1v-1z" />
          <path fill="#ff2475" d="M36 43v1h1v-1z" />
          <path fill="#ff1f66" d="M37 43v1h1v-1z" />
          <path fill="#ea1750" d="M53 43v1h1v-1z" />
          <path fill="#240105" d="M6 44v1h1v-1z" />
          <path fill="#9d0b31" d="M7 44v1h1v-1z" />
          <path
            fill="#ff2370"
            d="M8 44v1h1v-1zm30 0v1h1v-1zm-23 5v1h1v-1zm28 0v1h1v-1z"
          />
          <path fill="#a90c35" d="M21 44v1h1v-1z" />
          <path fill="#230004" d="M22 44v1h1v-1zm14 0v1h1v-1z" />
          <path fill="#9e0b31" d="M37 44v1h1v-1z" />
          <path fill="#a80c35" d="M51 44v1h1v-1z" />
          <path fill="#210004" d="M52 44v1h1v-1z" />
          <path fill="#320109" d="M53 44v1h1v-1z" />
          <path fill="#730621" d="M7 45v1h1v-1zm30 0v1h1v-1z" />
          <path fill="#ff2673" d="M8 45v1h1v-1zm30 0v1h1v-1z" />
          <path fill="#810726" d="M21 45v1h1v-1zm30 0v1h1v-1z" />
          <path fill="#a50c35" d="M9 46v1h1v-1zm30 0v1h1v-1z" />
          <path fill="#b00e39" d="M19 46v1h1v-1zm30 0v1h1v-1z" />
          <path fill="#0a0001" d="M21 46v1h1v-1zm30 0v1h1v-1z" />
          <path fill="rgba(0,0,0,36)" d="M29 46v1h1v-1z" />
          <path fill="rgba(0,0,0,161)" d="M31 46v1h1v-1z" />
          <path fill="rgba(0,0,0,234)" d="M0 47v1h1v-1zm59 0v1h1v-1z" />
          <path fill="#ff1c5b" d="M12 47v1h1v-1z" />
          <path fill="#ff236c" d="M18 47v1h1v-1zm22 0v1h1v-1z" />
          <path fill="#950a2c" d="M19 47v1h1v-1zm30 0v1h1v-1z" />
          <path
            fill="#020000"
            d="M9 48v1h1v-1zm10 0v1h1v-1zm20 0v1h1v-1zm10 0v1h1v-1z"
          />
          <path fill="#c91140" d="M13 48v1h1v-1z" />
          <path fill="#bd0e3c" d="M17 48v1h1v-1z" />
          <path fill="#d61244" d="M45 48v1h1v-1z" />
          <path fill="rgba(0,0,0,168)" d="M3 49v1h1v-1z" />
          <path fill="#c51349" d="M13 49v1h1v-1z" />
          <path fill="#ff2a83" d="M16 49v1h1v-1z" />
          <path fill="#b81243" d="M17 49v1h1v-1z" />
          <path fill="rgba(0,0,0,54)" d="M33 49v1h1v-1z" />
          <path fill="#aa103e" d="M41 49v1h1v-1z" />
          <path fill="#d1164d" d="M45 49v1h1v-1z" />
          <path fill="rgba(0,0,0,104)" d="M4 50v1h1v-1z" />
          <path fill="rgba(0,0,0,215)" d="M5 50v1h1v-1z" />
          <path fill="#4b0213" d="M13 50v1h1v-1z" />
          <path fill="#870729" d="M14 50v1h1v-1z" />
          <path fill="#880729" d="M16 50v1h1v-1z" />
          <path fill="#460210" d="M17 50v1h1v-1z" />
          <path fill="rgba(0,0,0,153)" d="M23 50v1h1v-1z" />
          <path fill="rgba(0,0,0,92)" d="M24 50v1h1v-1z" />
          <path fill="rgba(0,0,0,71)" d="M25 50v1h1v-1z" />
          <path fill="rgba(0,0,0,22)" d="M33 50v1h1v-1zm-23 4v1h1v-1z" />
          <path fill="rgba(0,0,0,86)" d="M34 50v1h1v-1z" />
          <path fill="rgba(0,0,0,148)" d="M35 50v1h1v-1z" />
          <path fill="#40020f" d="M41 50v1h1v-1z" />
          <path fill="#860727" d="M44 50v1h1v-1z" />
          <path fill="#500315" d="M45 50v1h1v-1z" />
          <path fill="rgba(0,0,0,222)" d="M53 50v1h1v-1z" />
          <path fill="rgba(0,0,0,106)" d="M54 50v1h1v-1z" />
          <path fill="rgba(0,0,0,68)" d="M55 50v1h1v-1z" />
          <path fill="rgba(0,0,0,76)" d="M35 51v1h1v-1z" />
          <path
            fill="rgba(0,0,0,58)"
            d="M5 52v1h1v-1zm17 0v1h1v-1zm14 0v1h1v-1z"
          />
          <path fill="rgba(0,0,0,59)" d="M6 52v1h1v-1z" />
          <path fill="rgba(0,0,0,154)" d="M21 52v1h1v-1zm30 0v1h1v-1z" />
          <path fill="rgba(0,0,0,57)" d="M52 52v1h1v-1z" />
          <path fill="rgba(0,0,0,61)" d="M53 52v1h1v-1z" />
          <path fill="rgba(0,0,0,63)" d="M8 54v1h1v-1z" />
          <path fill="rgba(0,0,0,55)" d="M9 54v1h1v-1zm40 0v1h1v-1z" />
          <path fill="rgba(0,0,0,25)" d="M48 54v1h1v-1z" />
          <path fill="rgba(0,0,0,64)" d="M50 54v1h1v-1z" />
          <path fill="rgba(0,0,0,10)" d="M12 56v1h1v-1z" />
          <path fill="rgba(0,0,0,180)" d="M13 56v1h1v-1z" />
        </svg>
      </button>
    </div>
  )
}
