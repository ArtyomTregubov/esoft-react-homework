import React from "react";

export default function Header() {
  return (

    <header className="header">
        <div className="header__profile">
            <div className="header__profile-container">
                <img src="./images/profile_image.jpg" alt="фото профиля" className="header__profile-image" />
                <div className="header__profile-texts">
                    <span className="header__profile-post">Студент</span>
                    <span className="header__profile-name">Трегубов Артём</span>
                </div>
            </div>
            <a className="header__link" href="https://t.me/Semper_Idem1989">
                <img className="header__link-logo" src="./images/telegramm_logo.png" alt="Логотип Телеграмм"/>
            </a>
        </div>
    </header>
    
  );
}