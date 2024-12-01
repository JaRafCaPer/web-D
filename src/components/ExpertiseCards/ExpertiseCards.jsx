import React from "react";
import { Briefcase, ShieldCheck, BarChart } from "react-bootstrap-icons"; // Sample icons
import "./ExpertiseCards.css";

function ExpertiseCards() {
  const expertise = [
    {
      title: "Derecho de Seguros",
      description:
        "Asesoría completa en la evaluación, contratación y gestión de seguros de vida, salud, patrimonio y educación.",
      icon: <ShieldCheck size={50} />,
    },
    {
      title: "Derecho Administrativo",
      description:
        "Especialización en aspectos legales que rigen la contratación y gestión de seguros, asegurando que siempre estén dentro del marco legal adecuado.",
      icon: <Briefcase size={50} />,
    },
    {
      title: "Consultoría Actuarial",
      description:
        "Evaluación de riesgos y desarrollo de estrategias para reducir su impacto, garantizando estabilidad financiera a largo plazo.",
      icon: <BarChart size={50} />,
    },
  ];

  return (
    <div className="expertise-cards-container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto py-12">
      {expertise.map((item, index) => (
        <div
          key={index}
          className="expertise-card  text-white p-6 rounded-lg shadow-lg text-center"
        >
          <div className="icon mb-4">{item.icon}</div>
          <h4 className="font-bold mb-2">{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpertiseCards;
