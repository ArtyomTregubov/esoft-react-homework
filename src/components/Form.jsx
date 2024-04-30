import React from "react";

export default function Form({newCompetence, changeCompetence, newLevel, changeLevel, addCard}) {
  return (

    <form action="#" name="add-form" className="stady__main" noValidate>

                        <fieldset className="stady__name-competence">
                            <input 
                            type="text" 
                            name="form-question" 
                            className="study__form-input"
                            placeholder="Название компетенции" 
                            required value={newCompetence} 
                            minLength="2" 
                            maxLength="500" 
                            id="name"
                            onChange={(e)=>changeCompetence(e)}
                            />
                            <span className="study__input-error" id="name-error"></span>
                        </fieldset>

                        <fieldset className="stady__level-competence">
                            <input 
                            type="text" 
                            name="form-question" 
                            className="study__form-input"
                            placeholder="Уровень освоения" 
                            required value={newLevel} 
                            minLength="2" 
                            maxLength="500" 
                            id="competence"
                            onChange={(e)=>changeLevel(e)}
                            />
                            <span className="study__input-error" id="name-error"></span>
                        </fieldset>

                        <button 
                        className="study__add-button" 
                        type="submit" 
                        onClick={(e)=>addCard(e)}
                        >
                            Добавить компетенцию
                        </button>
                    </form>
    
  );
}