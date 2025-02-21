import React from 'react'

const Timeline = () => {
    const exp = [
        {
            title: 'Senior Frontend Developer',
            company: "MtestHub",
            period:"2025-present",
            description: "None"
        }
    ];
  return (
    <div>
      {exp.map((item, index)=>(
        <div key={index}>
            <div>
            <div>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
                <p>{item.period}</p>
                <p>{item.description}</p>
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
