import * as React from "react";

const TimeLine = ({ initialItem = 0, fill = "#3E76A4" }) => {
  // Aseguramos que sea número aunque llegue como string
  const state = Number(initialItem); // 0, 1 o 2
  const interLineHead = state === 0 ? 1 : 0; // frame de inicio visible solo en 0
  const initLine      = state === 0 ? 0 : 1; // línea continua visible solo cuando NO es 0
  const tailLine      = state === 2 ? 0 : 1; // cola visible excepto cuando es 2


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="283"
      fill="none"
      viewBox="0 0 17 283"
    >
      <g clipPath="url(#clip0_317_624)">
        {/* FRAME DE INICIO */}
        <rect
          width="1.815"
          height="16.782"
          fill="#1D243E" // frame de inicio de LineTime
          opacity={interLineHead}
          rx="0.908"
          transform="matrix(1 0 0 -1 7 33.563)"
        />
        <path
          fill="#1D243E"
          opacity={interLineHead}
          d="M7 13.077a.908.908 0 0 0 1.815 0v-.982a.908.908 0 1 0-1.815 0z"
        />
        <path
          fill="#1D243E"
          opacity={interLineHead}
          d="M7 13.285c0 .387.406.7.908.7.5 0 .907-.313.907-.7v-1.398c0-.386-.406-.7-.907-.7-.502 0-.908.314-.908.7zM7 8.882a.908.908 0 0 0 1.815 0V7.9A.908.908 0 0 0 7 7.9z"
        />
        <path
          fill="#1D243E"
          opacity={interLineHead}
          d="M7 9.09c0 .386.406.7.908.7.5 0 .907-.314.907-.7V7.69c0-.386-.406-.699-.907-.699-.502 0-.908.313-.908.7zM7 4.686a.908.908 0 0 0 1.815 0v-.982a.908.908 0 1 0-1.815 0z"
        />
        <path
          fill="#1D243E"
          opacity={interLineHead}
          d="M7 4.895c0 .386.406.699.908.699.5 0 .907-.313.907-.7V3.497c0-.386-.406-.7-.907-.7-.502 0-.908.314-.908.7zM7 .7a.7.7 0 0 0 .7.698h.416a.7.7 0 0 0 0-1.398h-.417A.7.7 0 0 0 7 .7"
        />
        <path
          fill="#1D243E"
          opacity={interLineHead}
          d="M7 .7c0 .385.406.698.908.698.5 0 .907-.313.907-.699S8.41 0 7.908 0C7.406 0 7 .313 7 .7"
        />

        {/* COLA DEL ICON (segmento de abajo) */}
        <path
          fill="#1D243E"
          d="M7 41h2v258H7z"
          opacity={tailLine}// cola del icon LineTime
        />

        {/* LÍNEA CONTINUA (cuando es item inicial, por ejemplo) */}
        <path
          fill="#1D243E"
          opacity={initLine} // linea continua de cabeza (quita la linea que sobre pone al inicio)
          d="M7 41h2V0H7z"
        />

        {/* Círculo */}
        <path
          fill={fill}
          stroke="#1D243E"
          strokeWidth="1.815"
          d="M8.168 25.907c4.008 0 7.26 3.256 7.26 7.275 0 4.018-3.252 7.274-7.26 7.274S.908 37.2.908 33.182c0-4.02 3.252-7.275 7.26-7.275Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_317_624">
          <path fill="#fff" d="M0 0h17v283H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimeLine;
