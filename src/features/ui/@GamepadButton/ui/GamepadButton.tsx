import cl from './GamepadButton.module.scss'

export const GamepadButton = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <svg
          width={50}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
          viewBox="0 0 55 33"
        >
          <path
            fill="rgba(212,0,0,12)"
            d="M9 0v1h1V0zM8 5v1h1V5zm15 0v1h1V5zm20 11v1h1v-1zM13 32v1h1v-1z"
          />
          <path
            fill="rgba(217,5,10,199)"
            d="M10 0v1h1V0zm42 14v1h1v-1zM17 25v1h1v-1z"
          />
          <path
            fill="#d8050a"
            d="M11 0v1h1V0zm25 0v1h1V0zm8 0v1h1V0zM11 1v1h9V1zm25 0v1h9V1zM11 2v1h9V2zm25 0v1h9V2zM6 3v1h44V3zm0 1v1h1V4zm10 0v1h6V4zm17 0v1h9V4zm13 0v1h4V4zM6 5v1h1V5zm10 0v1h6V5zm18 0v1h8V5zm12 0v1h4V5zM3 6v1h4V6zm13 0v1h6V6zm18 0v1h8V6zm12 0v1h6V6zM4 7v1h1V7zm15 0v1h3V7zm15 0v1h8V7zm12 0v1h6V7zM3 8v1h2V8zm5 0v1h7V8zm11 0v1h23V8zm27 0v1h6V8zM3 9v1h2V9zm5 0v1h7V9zm11 0v1h19V9zm22 0v1h1V9zm5 0v1h1V9zm5 0v1h1V9zM3 10v1h2v-1zm5 0v1h7v-1zm11 0v1h18v-1zm32 0v1h1v-1zM3 11v1h2v-1zm5 0v1h7v-1zm11 0v1h18v-1zm25 0v1h1v-1zm7 0v1h1v-1zM3 12v1h2v-1zm5 0v1h7v-1zm11 0v1h18v-1zm32 0v1h1v-1zM4 13v1h1v-1zm4 0v1h7v-1zm11 0v1h23v-1zm27 0v1h6v-1zM4 14v1h1v-1zm15 0v1h3v-1zm7 0v1h4v-1zm8 0v1h8v-1zm12 0v1h6v-1zM1 15v1h1v-1zm2 0v1h2v-1zm3 0v1h1v-1zm10 0v1h1v-1zm2 0v1h4v-1zm8 0v1h4v-1zm8 0v1h8v-1zm12 0v1h6v-1zM1 16v1h6v-1zm15 0v1h6v-1zm10 0v1h4v-1zm8 0v1h8v-1zm12 0v1h8v-1zM1 17v1h1v-1zm5 0v1h1v-1zm10 0v1h6v-1zm10 0v1h4v-1zm8 0v1h8v-1zm12 0v1h1v-1zm5 0v1h3v-1zM1 18v1h1v-1zm5 0v1h41v-1zm45 0v1h3v-1zM1 19v1h1v-1zm5 0v1h41v-1zm45 0v1h3v-1zM1 20v1h2v-1zm5 0v1h42v-1zm45 0v1h3v-1zM1 21v1h53v-1zm0 1v1h19v-1zm35 0v1h18v-1zM1 23v1h19v-1zm35 0v1h18v-1zM1 24v1h1v-1zm5 0v1h11v-1zm32 0v1h9v-1zm13 0v1h3v-1zM1 25v1h1v-1zm5 0v1h11v-1zm33 0v1h8v-1zm12 0v1h3v-1zM1 26v1h1v-1zm5 0v1h11v-1zm33 0v1h8v-1zm12 0v1h3v-1zM6 27v1h11v-1zm33 0v1h8v-1zm12 0v1h1v-1zM3 28v1h14v-1zm35 0v1h14v-1zM6 29v1h6v-1zm38 0v1h6v-1zM6 30v1h6v-1zm38 0v1h6v-1zM6 31v1h6v-1zm38 0v1h6v-1z"
          />
          <path
            fill="rgba(216,5,10,239)"
            d="M12 0v1h6V0zm26 0v1h5V0zm12 5v1h1V5zm-36 9v1h1v-1zm4 0v1h1v-1zM5 29v1h1v-1z"
          />
          <path fill="rgba(216,5,10,244)" d="M18 0v1h1V0z" />
          <path
            fill="rgba(216,5,10,253)"
            d="M19 0v1h1V0zm23 4v1h1V4zM3 7v1h1V7zm47 2v1h1V9zM3 14v1h1v-1zm35 13v1h1v-1z"
          />
          <path fill="rgba(215,5,11,95)" d="M20 0v1h1V0z" />
          <path fill="rgba(216,5,9,165)" d="M35 0v1h1V0zM25 15v1h1v-1z" />
          <path
            fill="rgba(216,5,10,240)"
            d="M37 0v1h1V0zm-4 5v1h1V5zm-15 8v1h1v-1zm15 2v1h1v-1zm3 9v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,241)"
            d="M43 0v1h1V0zM2 15v1h1v-1zm15 0v1h1v-1zM3 20v1h1v-1z"
          />
          <path fill="rgba(216,6,9,137)" d="M45 0v1h1V0zM24 7v1h1V7z" />
          <path
            fill="rgba(216,5,9,191)"
            d="M10 1v1h1V1zm25 1v1h1V2zm17 3v1h1V5z"
          />
          <path fill="rgba(218,3,10,75)" d="M20 1v1h1V1zm17 24v1h1v-1z" />
          <path fill="rgba(215,5,10,148)" d="M35 1v1h1V1zM6 32v1h1v-1z" />
          <path fill="rgba(215,4,11,121)" d="M45 1v1h1V1zM7 7v1h1V7z" />
          <path fill="rgba(216,6,9,84)" d="M5 2v1h1V2zM0 27v1h1v-1z" />
          <path
            fill="rgba(216,6,10,130)"
            d="M6 2v1h1V2zm25 5v1h1V7zm14 8v1h1v-1zM1 27v1h1v-1z"
          />
          <path
            fill="rgba(216,4,11,117)"
            d="M7 2v1h1V2zm41 0v1h1V2zm2 2v1h1V4z"
          />
          <path fill="rgba(216,5,9,110)" d="M8 2v1h1V2z" />
          <path
            fill="rgba(216,5,9,111)"
            d="M9 2v1h1V2zm29 10v1h1v-1zm-7 5v1h1v-1zm19 13v1h1v-1z"
          />
          <path fill="rgba(215,5,10,213)" d="M10 2v1h1V2zm2 29v1h1v-1z" />
          <path fill="rgba(217,5,10,153)" d="M20 2v1h1V2zM5 26v1h1v-1z" />
          <path
            fill="rgba(217,5,10,100)"
            d="M21 2v1h1V2zm25 0v1h1V2zm3 10v1h1v-1zm0 5v1h1v-1z"
          />
          <path
            fill="rgba(215,4,11,115)"
            d="M22 2v1h1V2zm25 10v1h1v-1zM12 32v1h1v-1z"
          />
          <path
            fill="rgba(215,4,11,116)"
            d="M23 2v1h10V2zm17 10v1h1v-1zm2 0v1h1v-1zm-27 2v1h1v-1z"
          />
          <path
            fill="rgba(216,5,9,112)"
            d="M33 2v1h1V2zm8 10v1h1v-1zm5 0v1h1v-1zm-1 4v1h1v-1z"
          />
          <path
            fill="rgba(215,5,10,103)"
            d="M34 2v1h1V2zm-19 8v1h1v-1zm0 1v1h1v-1z"
          />
          <path fill="rgba(216,4,10,175)" d="M45 2v1h1V2z" />
          <path
            fill="rgba(217,4,9,114)"
            d="M47 2v1h1V2zm1 10v1h1v-1zm-4 5v1h1v-1zm10 10v1h1v-1z"
          />
          <path
            fill="rgba(215,6,10,129)"
            d="M49 2v1h1V2zm-4 6v1h1V8zM9 17v1h1v-1zm12 5v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,52)"
            d="M50 2v1h1V2zM32 5v1h1V5zm0 10v1h1v-1z"
          />
          <path
            fill="rgba(216,6,10,183)"
            d="M5 3v1h1V3zM0 20v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm47 2v1h1v-1z"
          />
          <path fill="rgba(217,5,10,107)" d="M50 3v1h1V3zm0 28v1h1v-1z" />
          <path fill="rgba(212,0,0,6)" d="M2 4v1h1V4z" />
          <path fill="rgba(212,0,11,24)" d="M3 4v1h1V4z" />
          <path
            fill="rgba(210,0,15,17)"
            d="M4 4v1h1V4zm4 11v1h1v-1zm27 10v1h1v-1zm-17 3v1h1v-1zm35 1v1h1v-1z"
          />
          <path
            fill="rgba(216,6,10,181)"
            d="M5 4v1h1V4zm25 13v1h1v-1zm17 1v1h1v-1zM5 31v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,252)"
            d="M7 4v1h1V4zm45 11v1h1v-1zM5 20v1h1v-1z"
          />
          <path
            fill="rgba(216,6,10,230)"
            d="M8 4v1h2V4zm15 0v1h2V4zm19 10v1h1v-1zm1 16v1h1v-1z"
          />
          <path
            fill="rgba(216,4,10,228)"
            d="M10 4v1h1V4zm32 3v1h1V7zm0 8v1h1v-1zm12 0v1h1v-1zm-36 9v1h1v-1zm-2 5v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,225)"
            d="M11 4v1h1V4zm2 0v1h1V4zm29 5v1h1V9z"
          />
          <path
            fill="rgba(216,5,10,226)"
            d="M12 4v1h1V4zm31 0v1h1V4zM9 14v1h1v-1zm39 10v1h1v-1z"
          />
          <path fill="rgba(216,5,10,223)" d="M14 4v1h1V4zM3 24v1h1v-1z" />
          <path
            fill="rgba(216,5,10,245)"
            d="M15 4v1h1V4zm30 0v1h1V4zM18 9v1h1V9zm0 1v1h1v-1zm0 1v1h1v-1zm4 3v1h1v-1zm3 0v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,251)"
            d="M22 4v1h1V4zm25 5v1h1V9zm6 6v1h1v-1zm-3 5v1h1v-1zM2 24v1h1v-1zm45 0v1h1v-1zm-9 1v1h1v-1zm5 4v1h1v-1z"
          />
          <path
            fill="rgba(216,6,10,231)"
            d="M25 4v1h5V4zm22 13v1h1v-1zm-28 7v1h1v-1zm18 0v1h1v-1z"
          />
          <path fill="rgba(217,5,10,232)" d="M30 4v1h1V4zm13 27v1h1v-1z" />
          <path fill="rgba(216,4,10,227)" d="M31 4v1h1V4zm19 25v1h1v-1z" />
          <path
            fill="rgba(216,5,10,235)"
            d="M32 4v1h1V4zM3 5v1h1V5zm40 6v1h1v-1zm-13 3v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,220)"
            d="M44 4v1h1V4zM8 14v1h1v-1zm-1 3v1h1v-1zm44 12v1h1v-1z"
          />
          <path fill="rgba(219,0,0,7)" d="M51 4v1h1V4zM4 30v1h1v-1z" />
          <path
            fill="rgba(219,0,12,21)"
            d="M52 4v1h1V4zM11 5v1h2V5zm14 0v1h5V5zm17 6v1h1v-1zm1 2v1h1v-1zm0 1v1h1v-1z"
          />
          <path
            fill="rgba(218,4,11,68)"
            d="M2 5v1h1V5zm3 8v1h1v-1zm2 0v1h1v-1zm10 1v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,238)"
            d="M4 5v1h1V5zm40 5v1h1v-1zm10 7v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1zm0 1v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,249)"
            d="M5 5v1h1V5zm33 4v1h1V9zm-5 8v1h1v-1zm5 9v1h1v-1z"
          />
          <path
            fill="rgba(215,5,10,187)"
            d="M7 5v1h1V5zm15 0v1h1V5zm0 10v1h1v-1zM5 19v1h1v-1z"
          />
          <path
            fill="rgba(209,0,0,11)"
            d="M9 5v1h1V5zm44 2v1h1V7zM13 31v1h1v-1z"
          />
          <path
            fill="rgba(220,0,12,22)"
            d="M10 5v1h1V5zm20 0v1h1V5zm19 5v1h1v-1zM1 14v1h1v-1zm12 16v1h1v-1zm26 0v1h1v-1z"
          />
          <path
            fill="rgba(215,0,13,19)"
            d="M13 5v1h1V5zm40 1v1h1V6zM38 30v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,155)"
            d="M15 5v1h1V5zm17 2v1h1V7zm18 18v1h1v-1z"
          />
          <path
            fill="rgba(219,0,18,14)"
            d="M24 5v1h1V5zm29 7v1h1v-1zM18 29v1h1v-1zM3 30v1h1v-1zm14 0v1h1v-1zm35 0v1h1v-1z"
          />
          <path fill="rgba(255,0,0,1)" d="M31 5v1h1V5z" />
          <path
            fill="rgba(216,4,10,229)"
            d="M42 5v1h1V5zm-9 1v1h1V6zm0 10v1h1v-1z"
          />
          <path fill="rgba(218,8,8,34)" d="M43 5v1h1V5z" />
          <path
            fill="rgba(217,6,10,134)"
            d="M45 5v1h1V5zm0 2v1h1V7zm0 4v1h1v-1zm5 0v1h1v-1zm-40 6v1h3v-1zM3 27v1h1v-1zm45 5v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,247)"
            d="M51 5v1h1V5zM18 7v1h1V7zm21 2v1h1V9zm10 0v1h1V9z"
          />
          <path
            fill="rgba(223,0,16,16)"
            d="M53 5v1h1V5zM43 6v1h1V6zm-30 9v1h1v-1zm29 17v1h1v-1z"
          />
          <path fill="rgba(215,7,10,77)" d="M2 6v1h1V6z" />
          <path fill="rgba(215,6,10,180)" d="M7 6v1h1V6zm0 9v1h1v-1z" />
          <path
            fill="rgba(215,5,11,141)"
            d="M15 6v1h1V6zM9 7v1h4V7zm16 0v1h5V7z"
          />
          <path fill="rgba(215,5,11,167)" d="M22 6v1h1V6z" />
          <path
            fill="rgba(217,0,13,20)"
            d="M32 6v1h1V6zm11 1v1h1V7zm0 1v1h1V8zm0 7v1h1v-1zm-11 1v1h1v-1zM15 30v1h1v-1zm25 0v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,222)"
            d="M42 6v1h1V6zM2 17v1h1v-1zm20 0v1h1v-1z"
          />
          <path fill="rgba(216,4,11,119)" d="M45 6v1h1V6zm4 21v1h1v-1z" />
          <path
            fill="rgba(216,5,10,214)"
            d="M52 6v1h1V6zm-29 8v1h1v-1zm2 3v1h1v-1zM4 29v1h1v-1z"
          />
          <path fill="rgba(216,4,12,65)" d="M2 7v1h1V7z" />
          <path fill="rgba(216,5,10,152)" d="M5 7v1h1V7zm27 10v1h1v-1z" />
          <path fill="rgba(216,5,11,97)" d="M6 7v1h1V7zm24 8v1h1v-1z" />
          <path
            fill="rgba(215,5,11,142)"
            d="M8 7v1h1V7zm22 0v1h1V7zm-8 15v1h1v-1zm26 5v1h1v-1z"
          />
          <path
            fill="rgba(217,5,9,140)"
            d="M13 7v1h1V7zm12 9v1h1v-1zm18 1v1h1v-1zm-10 5v1h1v-1z"
          />
          <path
            fill="rgba(216,5,11,145)"
            d="M14 7v1h1V7zm30 5v1h1v-1zm-9 11v1h1v-1z"
          />
          <path
            fill="rgba(215,6,10,128)"
            d="M15 7v1h1V7zm30 2v1h1V9zm0 1v1h1v-1zm-2 22v1h1v-1z"
          />
          <path fill="rgba(216,5,10,98)" d="M16 7v1h1V7zM5 32v1h1v-1z" />
          <path fill="rgba(216,6,9,138)" d="M17 7v1h1V7zm-2 9v1h1v-1z" />
          <path fill="rgba(216,5,10,224)" d="M22 7v1h1V7z" />
          <path fill="rgba(215,6,9,135)" d="M23 7v1h1V7zm27 19v1h1v-1z" />
          <path fill="rgba(216,5,10,250)" d="M33 7v1h1V7zM17 24v1h1v-1z" />
          <path
            fill="rgba(216,5,10,198)"
            d="M52 7v1h1V7zm-2 10v1h1v-1zM17 27v1h1v-1z"
          />
          <path
            fill="rgba(217,4,11,67)"
            d="M2 8v1h1V8zm5 0v1h1V8zM2 9v1h1V9zm0 1v1h1v-1zm0 1v1h1v-1z"
          />
          <path fill="rgba(217,4,8,60)" d="M5 8v1h1V8zm45 24v1h1v-1z" />
          <path fill="rgba(215,5,9,109)" d="M15 8v1h1V8z" />
          <path fill="rgba(219,7,7,35)" d="M17 8v1h1V8z" />
          <path
            fill="rgba(216,5,10,237)"
            d="M18 8v1h1V8zm24 5v1h1v-1zM4 20v1h1v-1zm45 0v1h1v-1z"
          />
          <path fill="rgba(216,5,10,233)" d="M42 8v1h1V8z" />
          <path fill="rgba(215,5,10,200)" d="M52 8v1h1V8zm0 1v1h1V9z" />
          <path
            fill="rgba(216,0,20,13)"
            d="M53 8v1h1V8zm0 1v1h1V9zm0 1v1h1v-1zm0 1v1h1v-1zM3 25v1h1v-1z"
          />
          <path fill="rgba(215,6,9,82)" d="M5 9v1h1V9zm0 3v1h1v-1z" />
          <path fill="rgba(215,4,11,71)" d="M7 9v1h1V9z" />
          <path fill="rgba(215,5,10,102)" d="M15 9v1h1V9zm0 3v1h1v-1z" />
          <path fill="rgba(218,5,9,55)" d="M17 9v1h1V9z" />
          <path fill="rgba(216,5,10,248)" d="M40 9v1h1V9zm8 0v1h1V9z" />
          <path fill="rgba(217,9,9,27)" d="M43 9v1h1V9zM4 19v1h1v-1z" />
          <path
            fill="rgba(217,6,10,80)"
            d="M5 10v1h1v-1zm0 1v1h1v-1zm2 3v1h1v-1z"
          />
          <path
            fill="rgba(216,4,11,72)"
            d="M7 10v1h1v-1zm0 1v1h1v-1zm13 12v1h1v-1z"
          />
          <path fill="rgba(217,5,9,54)" d="M17 10v1h1v-1zm0 1v1h1v-1z" />
          <path
            fill="rgba(216,5,10,196)"
            d="M37 10v1h1v-1zm13 2v1h1v-1zm-5 5v1h1v-1z"
          />
          <path fill="rgba(213,7,7,36)" d="M38 10v1h1v-1z" />
          <path fill="rgba(216,8,8,33)" d="M39 10v1h1v-1z" />
          <path fill="rgba(219,6,12,42)" d="M40 10v1h1v-1z" />
          <path fill="rgba(214,8,8,31)" d="M41 10v1h1v-1z" />
          <path fill="rgba(216,4,9,59)" d="M42 10v1h1v-1z" />
          <path fill="rgba(216,5,10,197)" d="M43 10v1h1v-1zM0 16v1h1v-1z" />
          <path fill="rgba(219,9,9,28)" d="M46 10v1h1v-1z" />
          <path fill="rgba(216,7,13,39)" d="M47 10v1h1v-1zM3 19v1h1v-1z" />
          <path
            fill="rgba(218,6,12,41)"
            d="M48 10v1h1v-1zm-31 3v1h1v-1zm36 1v1h1v-1z"
          />
          <path fill="rgba(216,5,9,163)" d="M50 10v1h1v-1z" />
          <path fill="rgba(216,5,10,201)" d="M52 10v1h1v-1zm0 1v1h1v-1z" />
          <path fill="rgba(216,5,9,162)" d="M37 11v1h1v-1z" />
          <path fill="rgba(214,4,11,69)" d="M2 12v1h1v-1z" />
          <path fill="rgba(217,3,10,73)" d="M7 12v1h1v-1zM2 28v1h1v-1z" />
          <path fill="rgba(215,4,9,57)" d="M17 12v1h1v-1z" />
          <path
            fill="rgba(216,5,10,246)"
            d="M18 12v1h1v-1zM5 24v1h1v-1zm7 5v1h1v-1z"
          />
          <path fill="rgba(216,5,9,216)" d="M37 12v1h1v-1z" />
          <path fill="rgba(215,5,9,108)" d="M39 12v1h1v-1z" />
          <path fill="rgba(216,6,9,139)" d="M43 12v1h1v-1z" />
          <path
            fill="rgba(217,4,10,126)"
            d="M45 12v1h1v-1zm-22 5v1h1v-1zm25 0v1h1v-1zM2 27v1h1v-1z"
          />
          <path fill="rgba(216,5,10,202)" d="M52 12v1h1v-1zM35 22v1h1v-1z" />
          <path fill="rgba(217,5,10,53)" d="M2 13v1h1v-1z" />
          <path fill="rgba(216,5,10,254)" d="M3 13v1h1v-1zm30 1v1h1v-1z" />
          <path fill="rgba(217,5,10,106)" d="M15 13v1h1v-1z" />
          <path fill="rgba(216,4,10,124)" d="M45 13v1h1v-1zm-21 4v1h1v-1z" />
          <path fill="rgba(216,5,9,190)" d="M52 13v1h1v-1z" />
          <path
            fill="rgba(191,0,0,4)"
            d="M53 13v1h1v-1zm-30 2v1h1v-1zm13 10v1h1v-1z"
          />
          <path fill="rgba(214,0,10,25)" d="M0 14v1h1v-1zm42 17v1h1v-1z" />
          <path fill="rgba(217,6,9,81)" d="M2 14v1h1v-1zm18 10v1h1v-1z" />
          <path fill="rgba(216,6,11,92)" d="M5 14v1h1v-1z" />
          <path
            fill="rgba(216,5,11,218)"
            d="M10 14v1h3v-1zm32 2v1h1v-1zM4 24v1h1v-1zm35 5v1h1v-1z"
          />
          <path
            fill="rgba(217,5,10,219)"
            d="M13 14v1h1v-1zM5 27v1h1v-1zm47 0v1h1v-1z"
          />
          <path
            fill="rgba(216,5,9,215)"
            d="M24 14v1h1v-1zm-7 14v1h1v-1zM3 29v1h1v-1z"
          />
          <path
            fill="rgba(216,5,10,209)"
            d="M31 14v1h1v-1zm19 13v1h1v-1zm-35 2v1h1v-1zm25 0v1h1v-1z"
          />
          <path fill="rgba(216,5,10,221)" d="M32 14v1h1v-1z" />
          <path
            fill="rgba(216,6,10,132)"
            d="M45 14v1h1v-1zm-32 3v1h1v-1zm-3 15v1h1v-1z"
          />
          <path fill="rgba(215,8,8,32)" d="M54 14v1h1v-1z" />
          <path fill="rgba(216,4,10,177)" d="M0 15v1h1v-1z" />
          <path
            fill="rgba(216,5,9,242)"
            d="M5 15v1h1v-1zm49 1v1h1v-1zm-12 1v1h1v-1zm6 3v1h1v-1zm6 6v1h1v-1z"
          />
          <path
            fill="rgba(227,0,0,9)"
            d="M9 15v1h1v-1zm9 12v1h1v-1zm-4 3v1h1v-1z"
          />
          <path fill="rgba(213,0,14,18)" d="M10 15v1h3v-1zm39 4v1h1v-1z" />
          <path
            fill="rgba(216,5,11,143)"
            d="M15 15v1h1v-1zm8 7v1h10v-1zm21 10v1h1v-1z"
          />
          <path fill="rgba(216,4,10,176)" d="M7 16v1h1v-1zm10 13v1h1v-1z" />
          <path fill="rgba(217,5,11,166)" d="M22 16v1h1v-1zm28 3v1h1v-1z" />
          <path fill="rgba(215,4,11,70)" d="M30 16v1h1v-1z" />
          <path fill="rgba(216,6,10,182)" d="M0 17v1h1v-1zm2 9v1h1v-1z" />
          <path fill="rgba(216,4,11,118)" d="M3 17v1h1v-1z" />
          <path fill="rgba(216,5,10,104)" d="M4 17v1h1v-1z" />
          <path fill="rgba(217,5,10,212)" d="M5 17v1h1v-1z" />
          <path
            fill="rgba(216,6,10,131)"
            d="M8 17v1h1v-1zm26 5v1h1v-1zM4 27v1h1v-1z"
          />
          <path fill="rgba(215,4,10,122)" d="M14 17v1h1v-1z" />
          <path fill="rgba(216,5,10,204)" d="M15 17v1h1v-1zm26 12v1h1v-1z" />
          <path fill="rgba(216,6,10,184)" d="M0 18v1h1v-1zm0 1v1h1v-1z" />
          <path fill="rgba(215,5,10,161)" d="M2 18v1h1v-1z" />
          <path fill="rgba(216,5,10,149)" d="M5 18v1h1v-1z" />
          <path
            fill="rgba(217,6,10,133)"
            d="M50 18v1h1v-1zM7 32v1h3v-1zm38 0v1h3v-1z"
          />
          <path fill="rgba(216,5,11,194)" d="M2 19v1h1v-1z" />
          <path fill="rgba(216,5,10,207)" d="M47 19v1h1v-1z" />
          <path fill="rgba(219,5,10,49)" d="M48 19v1h1v-1z" />
          <path fill="rgba(216,4,10,171)" d="M20 22v1h1v-1z" />
          <path fill="rgba(216,5,11,144)" d="M35 24v1h1v-1zm-24 8v1h1v-1z" />
          <path fill="rgba(216,5,11,217)" d="M49 24v1h1v-1zm-11 5v1h1v-1z" />
          <path fill="rgba(216,5,10,243)" d="M50 24v1h1v-1z" />
          <path fill="rgba(217,5,10,186)" d="M0 25v1h1v-1z" />
          <path fill="rgba(216,5,9,189)" d="M2 25v1h1v-1zm15 1v1h1v-1z" />
          <path fill="rgba(217,6,10,179)" d="M5 25v1h1v-1zm47 4v1h1v-1z" />
          <path fill="rgba(216,10,10,26)" d="M18 25v1h1v-1zm30 0v1h1v-1z" />
          <path fill="rgba(221,0,17,15)" d="M19 25v1h1v-1z" />
          <path fill="rgba(204,0,0,10)" d="M20 25v1h1v-1z" />
          <path
            fill="rgba(216,5,10,203)"
            d="M47 25v1h1v-1zM0 26v1h1v-1zm12 4v1h1v-1z"
          />
          <path fill="rgba(214,5,10,50)" d="M37 26v1h1v-1z" />
          <path fill="rgba(215,4,12,64)" d="M37 27v1h1v-1z" />
          <path fill="rgba(216,5,10,234)" d="M47 27v1h1v-1z" />
          <path fill="rgba(216,4,10,125)" d="M53 27v1h1v-1z" />
          <path fill="rgba(216,7,10,78)" d="M37 28v1h1v-1z" />
          <path fill="rgba(216,5,10,205)" d="M52 28v1h1v-1z" />
          <path fill="rgba(223,0,0,8)" d="M53 28v1h1v-1z" />
          <path fill="rgba(216,4,12,66)" d="M2 29v1h1v-1z" />
          <path fill="rgba(216,5,10,210)" d="M13 29v1h1v-1zm29 0v1h1v-1z" />
          <path fill="rgba(215,5,10,206)" d="M14 29v1h1v-1z" />
          <path fill="rgba(215,4,8,63)" d="M37 29v1h1v-1z" />
          <path fill="rgba(255,0,0,3)" d="M2 30v1h1v-1z" />
          <path fill="rgba(216,4,10,178)" d="M5 30v1h1v-1z" />
          <path fill="rgba(211,0,11,23)" d="M16 30v1h1v-1z" />
          <path fill="rgba(255,0,0,2)" d="M37 30v1h1v-1zm4 0v1h1v-1z" />
          <path fill="rgba(214,7,7,37)" d="M42 30v1h1v-1z" />
          <path fill="rgba(217,5,10,147)" d="M49 32v1h1v-1z" />
        </svg>
      </button>
    </div>
  )
}
