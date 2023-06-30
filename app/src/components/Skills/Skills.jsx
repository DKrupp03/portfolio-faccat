'use client';
import '../../styles/Skills.css';
import React from 'react';

import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills () {
  const skills = [
    { name: 'Database', rating: 85 },
    { name: 'Front-end', rating: 90 },
    { name: 'Back-end', rating: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <div className="col-12 skill-container">
        <h2>Skills</h2>
        <div className='skill-rating'>
          {
            skills.map((skill, index) => (
              <div className='skill-rating-item'>
                <CircularProgressbar
                  value={skill.rating}
                  text={`${skill.rating}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: '#3e98c7',
                    textColor: '#fff',
                    pathColor: '#fff',
                    trailColor: 'transparent',
                  })}
                />
                <h3>{ skill.name }</h3>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}