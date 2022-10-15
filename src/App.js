import "./sass/App.scss";

function App() {
  return (
    <>
      <header className="prj-header">
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <h1 className="prj-header-title prj-header-title--gray">
              Здравствуйте,
            </h1>
          </div>
          <div className="prj-wrap__right">
            <h1 className="prj-header-title">Человек №3596941</h1>
            <span className="prj-header-link">
              <a className="prj-header-link__link" href="">
                Сменить статус
              </a>
            </span>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left"></div>
          <div className="prj-wrap__right">
            <div className="prj-header-stat">
              <p className="prj-header-stat__status">
                Прежде чем действовать, надо понять
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="prj-main">
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Ваш город</p>
          </div>
          <div className="prj-wrap__right">
            <input className="prj-input prj-input--select" type="select" />
            <p className="prj-input-desc"></p>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Пароль</p>
          </div>
          <div className="prj-wrap__right">
            <input className="prj-input" type="select" />
            <p className="prj-input-desc">
              Ваш новый пароль должен содержать не менее 5 символов.
            </p>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Пароль еще раз</p>
          </div>
          <div className="prj-wrap__right">
            <input className="prj-input" type="select" />
            <p className="prj-input-desc">
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </p>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Электронная почта</p>
          </div>
          <div className="prj-wrap__right">
            <input className="prj-input" type="select" />
            <p className="prj-input-desc">
              Можно изменить адрес, указанный при регистрации.
            </p>
          </div>
        </div>

        <div className="prj-wrap">
          <div className="prj-wrap__left">Я согласен</div>
          <div className="prj-wrap__right">
            <input className="prj-input-checkbox" type="checkbox" />
            <p className="prj-input-desc prj-input-desc--black">
              принимать актуальную информацию на емейл
            </p>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left"></div>
          <div className="prj-wrap__right">
          <button className="prj-btn">Изменить</button>
            <p className="prj-input-desc">последние изменения 15 мая 2012 в 14:55:17</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
