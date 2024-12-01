import React from "react";
import "./ServicesCards.css";

const servicesData = [
  {
    section: "Asesoría Legal en Seguros",
    services: [
      {
        title: "Cobertura Básica",
        description: `Indemnización por fallecimiento que incluye el valor asegurado y fondos de primas básicas y excedentes. Esta cobertura garantiza una red de apoyo para los seres queridos del asegurado, asegurando su estabilidad financiera en momentos difíciles.`,
        icon: "bi-shield-fill",
      },
      {
        title: "Coberturas Adicionales",
        description: `Protección específica para accidentes y enfermedades graves, garantizando indemnizaciones adecuadas. Esta cobertura adicional permite al asegurado contar con un respaldo financiero para enfrentar gastos médicos o pérdida de ingresos.`,
        icon: "bi-umbrella-fill",
      },
      {
        title: "Orientación Legal",
        description: `Evaluación de disputas, representación y defensa en casos de reclamaciones rechazadas. Nuestro equipo legal se especializa en asegurarse de que recibas lo que te corresponde según tu póliza.`,
        icon: "bi-journal-text",
      },
      {
        title: "Resolución de Conflictos",
        description: `Mediación y solución alternativa en conflictos entre el asegurado y la compañía aseguradora. Facilitamos el diálogo entre las partes para lograr acuerdos justos y rápidos.`,
        icon: "bi-people-fill",
      },
    ],
  },
  {
    section: "Planeación Patrimonial",
    services: [
      {
        title: "Fondo Garantizado",
        description: `Primas básicas con una tasa de interés garantizada para seguridad y estabilidad financiera. Esta opción asegura que tu dinero trabaje para ti con seguridad y consistencia.`,
        icon: "bi-safe-fill",
      },
      {
        title: "Fondo Participativo",
        description: `Incluye el 50% de los rendimientos por encima de la tasa mínima para mayor crecimiento del capital. Maximiza tus ahorros y accede a mayores beneficios con una rentabilidad a largo plazo.`,
        icon: "bi-graph-up-arrow",
      },
      {
        title: "Fondo No Garantizado",
        description: `Subfondos invertidos en activos de renta fija y variable, ofreciendo oportunidades de mayor rendimiento. Diversifica tus inversiones para obtener un crecimiento más dinámico.`,
        icon: "bi-currency-exchange",
      },
      {
        title: "Educación y Pensión",
        description: `Asegura la educación de los hijos y una jubilación estable sin preocupaciones. Planifica con confianza para el futuro, asegurando que cada etapa de la vida esté bien protegida.`,
        icon: "bi-mortarboard",
      },
    ],
  },
  {
    section: "Consultoría Personalizada",
    services: [
      {
        title: "Importancia de la Protección",
        description: `Soluciones para proteger a las familias ante eventos inesperados como enfermedades o accidentes. Un seguro es más que una póliza; es una tranquilidad en tiempos de incertidumbre.`,
        icon: "bi-shield-lock-fill",
      },
      {
        title: "Seguridad y Tranquilidad",
        description: `Red de seguridad financiera que ayuda a enfrentar desafíos con mayor calma. Protege lo que más valoras con una estrategia diseñada específicamente para ti.`,
        icon: "bi-heart-fill",
      },
      {
        title: "Respaldo Económico",
        description: `Indemnización asegurada que ofrece apoyo financiero en momentos difíciles. Evita que las dificultades económicas agraven situaciones ya complicadas.`,
        icon: "bi-cash-stack",
      },
      {
        title: "Continuidad de Proyectos",
        description: `Garantiza que los planes y metas no se vean interrumpidos por imprevistos. Asegura el futuro de tus proyectos y sueños, sin importar los obstáculos.`,
        icon: "bi-calendar-check",
      },
    ],
  },
];

function ServicesCards() {
  return (
    <div className="services-grid">
      {servicesData.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <div className="section-name">
            <h2>{section.section}</h2>
          </div>
          {section.services.map((service, index) => (
            <div className="service-card" key={index}>
              <i className={`bi ${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ServicesCards;
