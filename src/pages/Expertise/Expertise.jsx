import React from 'react';

const Expertise = () => {
  return (
    <div className="expertise bg-white p-8">
      <h1 className="text-2xl font-bold text-metlifeBlue mb-4">Áreas de Expertise</h1>
      <ul className="list-disc list-inside text-black">
        <li className="mb-2">
          <strong>Derecho de Seguros:</strong> Asesoría en seguros de vida, salud, patrimonio y educación.
        </li>
        <li className="mb-2">
          <strong>Derecho Administrativo:</strong> Manejo de aspectos legales en el ámbito de seguros.
        </li>
        <li>
          <strong>Consultoría Actuarial:</strong> Evaluación y mitigación de riesgos.
        </li>
      </ul>
    </div>
  );
};

export default Expertise;
