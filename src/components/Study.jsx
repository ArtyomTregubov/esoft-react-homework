import React from "react";

export default function Study({data, firstData, isShow, onShowStudy, onSetStudy}) {

const addCard = (e) => {
    e.preventDefault();
    const test = {text: newCompetence, level: newLevel};
    onSetStudy([...data, test]);
    setNewCompetence("");
    setNewLevel("");
}

function deleteCard(id) {
    onSetStudy(data.filter(item => item.id !== id));
}

const changeCompetence = (e) => {
    setNewCompetence(e.target.value);
}
const changeLevel = (e) => {
    setNewLevel(e.target.value);
}

const onCardMore = () => {
    const moreCard = [];
    for(let i = 0; i < firstData.length; ++i){
        let card = firstData[i];
        if(card.level >= 50){
            moreCard.push(card);
        }
    }
    onSetStudy([...moreCard])
}
const resetStudy = () => {
    onSetStudy([...firstData]);
}
const onCardLess = () => {
    const moreCard = [];

    for(let i = 0; i < firstData.length; ++i){
        let card = firstData[i];
        if(card.level < 50){
            moreCard.push(card);
        }
    }
    onSetStudy([...moreCard])
}
 
const [newCompetence, setNewCompetence] = React.useState('');
const [newLevel, setNewLevel] = React.useState('');

  return (
    <section className="study">
        <h2 className="skills__title study__title">Хочу изучить</h2>

        <button className="study__show-button" 
                type="button" 
                onClick={onShowStudy}>{ isShow ? `Скрыть` : `Показать`}</button>

            <div className={ isShow ? `study__container_opened` : `study__container`}>

            <div className="study__buttons-and-form">
                <div className="study__buttons-container">
                    <button 
                        className="study__show-more"
                        onClick={onCardMore}
                    >Изученно более 50%</button>
                     <button 
                        className="study__show-less"
                        onClick={onCardLess}
                     >Изученно менее 50%</button>
                </div>
                <div className="stady__competence-image" role="button" onClick={resetStudy}></div>
                <div className="stady__add-form">
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
                </div>
            </div>

            <div className="study__cards">

                {
                    data.map((item, i)=>{ 
                        return (

                            <article className="study__element" key={item.id}>
                                <button className="study__close-button" onClick={() => deleteCard(item.id)}></button>
                                <span className="study__text">{item.text}</span>
                                <span className="study__text-description">Изученно</span>
                                <span className="study__text-level">{item.level}%</span>
                            </article>
                            
                        )
                    })
                }

                </div>
            </div>
    </section>
  )
}