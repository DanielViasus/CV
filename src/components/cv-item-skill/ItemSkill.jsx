import * as React from "react";
import SelectorSkill from "../../assets/icons/SelectorSkills";

const SvgIcon = ({ skill,porcentaje = 0, extraRadius = 6 ,color1, color2 , color3 ="#e6e8ec" , ...props }) => {
  // Margen interno deseado
  const margin = 5;

  // Tamaño lógico original del SVG
  const baseWidth = 96;
  const baseHeight = 96;

  // Centro y radios de la elipse principal (sin cambiar)
  const cx = 46.733;
  const cy = 46.732;
  const rx = 41.125;
  const ry = 42.994;

  const colors = {
    bg: color3,
    primary: color1,
    secondary: color2,
    border: "#1D243E",
  };

  // Radios del sector (un poco más grandes para tapar el borde)
  const progressRx = rx + extraRadius;
  const progressRy = ry + extraRadius;

  const valuePorcentaje = 100 - porcentaje;

  // Aseguramos que el porcentaje esté entre 0 y 100
  const pct = Math.max(0, Math.min(100, valuePorcentaje));

  // Ángulo usado tanto para el sector como para la esfera modular 2
  const angle = (pct / 100) * 2 * Math.PI;

  let progressElement = null;

  if (pct > 0 && pct < 100) {
    // De 0 a porcentaje% de la circunferencia (sentido horario "óptico")
    const startAngle = 0; // 0 rad (punto de la derecha)
    const endAngle = angle;

    // Punto inicial (borde, lado derecho)
    const startX = cx + progressRx * Math.cos(startAngle);
    const startY = cy + progressRy * Math.sin(startAngle);

    // Punto final según porcentaje
    const endX = cx + progressRx * Math.cos(endAngle);
    const endY = cy + progressRy * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    const sweepFlag = 1; // sentido horario

    const d = [
      `M ${cx} ${cy}`, // centro
      `L ${startX} ${startY}`,
      `A ${progressRx} ${progressRy} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`,
      "Z",
    ].join(" ");

    progressElement = <path fill={colors.bg} d={d} />;
  } else if (pct >= 100) {
    // 100%: llenamos toda la elipse con el radio extendido
    progressElement = (
      <ellipse
        cx={cx}
        cy={cy}
        rx={progressRx}
        ry={progressRy}
        fill={colors.bg}
      />
    );
  }
  // pct === 0 => no dibuja nada de sector

  // =========================
  // Elemento modular 2 (esfera que rota)
  // =========================

  // Radio de la esfera
  const ballRadius = 6.543;

  // Posición de la esfera sobre la circunferencia con borde intermitente
  const ballX = cx + rx * Math.cos(angle);
  const ballY = cy + ry * Math.sin(angle);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={baseWidth}
      height={baseHeight}
      fill="none"
      // Ampliamos el viewBox para dar margen interno de 5 unidades en cada lado
      viewBox={`${-margin} ${-margin} ${baseWidth + margin * 2} ${
        baseHeight + margin * 2
      }`}
      {...props}
    >
      {/* Fondo que ocupa todo el área visible (incluyendo margen) */}


      <SelectorSkill
                            skill={skill}
                            
                        />
      <rect
        x={-margin}
        y={-margin}
        width={baseWidth + margin * 2}
        height={baseHeight + margin * 2}
        fill={colors.bg}
      />

      {/* Elipse de fondo con borde grueso */}
      <ellipse
        cx={cx}
        cy={cy}
        fill={colors.bg}
        rx={rx}
        ry={ry}
        stroke={colors.border}
        strokeWidth="9.5"
      />

      {/* Sector dinámico extendido (modular 1) */}
      {progressElement}

      {/* Borde intermitente: tamaño ORIGINAL */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        stroke="#0a0a0aff"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
        fill="none"
      />

      {/* punto de Cero Absoluto , este circulo no se va a mover */}
      <circle
        cx="86.923"
        cy="47.667"
        r="3.739"
        fill={colors.secondary}
        stroke={colors.border}
        strokeWidth="1.869"
      />

      {/* elemento modular 2: esfera que rota siguiendo el final del sector */}
      <circle
        cx={ballX}
        cy={ballY}
        r={ballRadius}
        fill={colors.primary}
        stroke={colors.border}
        strokeWidth="1.869"
      />
    </svg>
  );
};

export default SvgIcon;
