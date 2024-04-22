import React from "react";

export default function Skills({data}) {
  return (

    <section className="skills">
            <h2 className="skills__title">Компетенции</h2>
            <div className="skills__cards">

            {
                data.map((item, i)=>{ 
                    return (

                        <article className="skills__element" key={i}>
                            <span className="skills__text">{item.text}</span>
                        </article>
                        
                     )
                })
            }

            </div>
        </section>

  )
}