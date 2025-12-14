

import "../cv-main/cv.css";
import IconWhatsApp from "../../assets/icons/IconWhatsApp";
import IconEMail from "../../assets/icons/IconEMail";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconLocation from "../../assets/icons/IconLocation";

function About() {
    const linkLinkedin = "https://www.linkedin.com/in/daniel-viasus-00062b388";
    const linkWhatsAppNumber = "573187765735"; // 57 + 3187765735 (todo pegado)
    const linkEmail = "dannyelviasus@hotmail.com";
    const linkLocation = "https://www.google.com/maps/search/?api=1&query=Bogotá%20111156";

    const whatsappMessage = encodeURIComponent(
        "Hola Daniel, vi tu CV y me gustaría hablar contigo."
    );

    const whatsappHref = `https://wa.me/${linkWhatsAppNumber}?text=${whatsappMessage}`;

    const mailtoHref = `mailto:${linkEmail}?subject=${encodeURIComponent(
        "Contacto desde tu CV"
    )}&body=${encodeURIComponent("Hola Daniel,\n\nTe escribo porque ...\n\nSaludos,")}`;

    return (
        <div className="about-me">
            <p className="about-me-text">
                Soy desarrollador orientado a crear soluciones que conectan software, hardware y personas. Tengo experiencia en sistemas embebidos, entornos interactivos y realidad aumentada, así como en el diseño de herramientas internas para control, simulación y visualización de datos.
                He trabajado implementando sistemas de control inalámbrico, catálogos en AR y comunicaciones bidireccionales entre PLC/TIA Portal y motores gráficos como Unreal Engine, lo que me ha dado una visión práctica de cómo llevar una idea desde el prototipo hasta un entorno funcional.
                Me caracterizo por explicar conceptos complejos de forma simple, acompañar a otros en su proceso de aprendizaje (fui instructor en bootcamps de programación con React y Python) y traducir necesidades técnicas u operativas en soluciones claras y medibles.
                Soy una persona curiosa, adaptable y colaborativa, con gusto por el trabajo en equipo, la documentación ordenada y la mejora continua. Busco aportar en proyectos donde pueda combinar desarrollo, creatividad e interacción para construir experiencias útiles e innovadoras.

            </p>

            <div className="about-me-contact">
                {/* EMAIL */}
                <a className="contact-item" href={mailtoHref}>
                    <IconEMail />
                    <p className="contact-item-content-image">
                        {linkEmail}
                    </p>
                </a>

                {/* WHATSAPP */}
                <a
                    className="contact-item"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconWhatsApp />
                    <p className="contact-item-content-image">+57 318 776 5735</p>
                </a>

                {/* LINKEDIN */}
                <a
                    className="contact-item"
                    href={linkLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLinkedin />
                    <p className="contact-item-content-image">
                        DanielViasus
                    </p>
                </a>
                {/* LOCATION → abre Google Maps */}
                <a
                    className="contact-item"
                    href={linkLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLocation />
                    <p className="contact-item-content-image">Bogotá Colombia, 111156</p>
                </a>
            </div>
        </div>

    );
}

export default About;
