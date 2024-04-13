import React from "react";

export default function Study({data}) {
  return (
    <section className="study">
        <h2 className="skills__title study__title">Хочу изучить</h2>
        <div className="study__cards">

         {
            data.map((item, i)=>{ 
                 return (

                    <article className="study__element" key={i}>
                        <span className="study__text">{item.text}</span>
                    </article>
                    
                )
            })
         }

            </div>
    </section>
  )
}