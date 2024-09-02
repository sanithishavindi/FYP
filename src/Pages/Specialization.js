import React from 'react'

import { Link } from 'react-router-dom';
import "./specialization.css";

const Specialization = () => {

  const specializations = [
    { title: 'Dengue Fever', description: 'Dengue is a viral infection spread by mosquitoes, common in tropical climates.', link: "/DengueFever" },
    { title: 'Cardiac Arrest', description: 'Cardiac arrest is a sudden loss of heart function, leading to a stop in blood flow to the body.', link: "/CardiacArrest" },
    { title: 'Chest Pain', description: 'Chest pain can be a symptom of various conditions, including heart problems.', link: "/ChestPain" },
    { title: 'Allergic Reaction', description: 'An allergic reaction occurs when the immune system responds to a foreign substance.', link: "/AllergicReaction" },
    { title: 'Earache/Toothache', description: 'Pain in the ear or tooth may indicate an infection or other health issues.', link: "/Earace" },
    { title: 'Shortness of Breath', description: 'Shortness of breath can be a symptom of underlying heart or lung conditions.', link: "/Sob" },
    { title: 'Poisoning', description: 'Poisoning occurs when harmful substances are ingested, inhaled, or come into contact with the skin.', link: "/Poisoning" },
    { title: 'Traumatic Injury', description: 'Traumatic injuries are sudden physical injuries that require immediate medical attention.', link: "/Traumatic" },
    { title: 'Dislocation', description: 'A dislocation is an injury where a bone is forced out of its joint.', link: "/Dislocation" },
    { title: 'Fracture', description: 'A fracture is a break in the bone, often caused by trauma or injury.', link: "/Fracture" },
    { title: 'Snake Bite', description: 'A snake bite can cause serious injury or illness, depending on the type of snake.', link: "/SnakeBite" },
    { title: 'Burns', description: 'Burns are tissue damage caused by heat, chemicals, electricity, or radiation.', link: "/Burns" },
  ];
  

  return (
    <div className='mx-64'>
    <div className="specialization-container mt-32 ">
      <h1 className="text-5xl font-bold text-center mb-16"><b>Specialization</b></h1>
      <div className="specialization-grid mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specializations.map((spec, index) => (
          <div key={index} className="specialization-card">
            <h3>{spec.title}</h3>
            <p>{spec.description}</p>
            <Link to={spec.link} className="specialization-button">View Resources</Link>
          </div>
        ))}
      </div>
    </div>
    </div>
          
    
    
  )
}

export default Specialization;
