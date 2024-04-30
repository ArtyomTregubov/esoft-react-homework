import React from "react";
import Form from "./Form";

export default function Study({firstData}) {

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

const onCardFilter = (more) => {
    if(more){
        onCardMore();
    } else {
        onCardLess();
    }
}

function handleShowStudyClick() {
    onShow(!isShow);
  }
 
const [data, onSetStudy] = React.useState([...firstData])
const [isShow, onShow] = React.useState(false);
const [newCompetence, setNewCompetence] = React.useState('');
const [newLevel, setNewLevel] = React.useState('');

  return (
    <section className="study">
        <h2 className="skills__title study__title">Хочу изучить</h2>

        <button className="study__show-button" 
                type="button" 
                onClick={handleShowStudyClick}>{ isShow ? `Скрыть` : `Показать`}</button>

            <div className={ isShow ? `study__container_opened` : `study__container`}>

            <div className="study__buttons-and-form">
                <div className="study__buttons-container">
                    <button 
                        className="study__show-more"
                        onClick={() => onCardFilter(true)}
                    >Изученно более 50%</button>
                     <button 
                        className="study__show-less"
                        onClick={() => onCardFilter(false)}
                     >Изученно менее 50%</button>
                </div>
                <div className="stady__competence-image" role="button" onClick={resetStudy}></div>
                <div className="stady__add-form">
                    <Form
                    newCompetence={newCompetence}
                    changeCompetence={changeCompetence}
                    newLevel={newLevel}
                    changeLevel={changeLevel}
                    addCard={addCard}
                    />
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