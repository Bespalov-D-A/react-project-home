import "./sass/App.scss";
import { useFormik } from "formik";
import InputSelect from "./modules/input-select/input.js";
import Input from "./modules/input/input";
import initValues from "./formik/start-form/initValues.js";
import validate from "./formik/start-form/validate.js";
import onSubmiting from "./formik/start-form/submit.js";

function App() {
  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      id="prjForm"
      className="prj-form"
    >
      <header className="prj-header">
        <div className="prj-wrap prj-wrap--first">
          <div className="prj-wrap__left">
            <h1 className="prj-header-title prj-header-title--gray">
              Здравствуйте,
            </h1>
          </div>
          <div className="prj-wrap__right prj-wrap__right--first">
            <h1 className="prj-header-title">Человек №3596941</h1>{" "}
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
      <main className="prj-main ">
        <div className="prj-wrap ">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Ваш город</p>
          </div>
          <div className="prj-wrap__right">
            {
              <InputSelect
                id="prjCity"
                name="prjCity"
                placeholder="Ваш город"
                type="select"
                onChange={formik.handleChange}
                value={formik.values.prjCity}
                className="prj-input--select"
              />
            }
            <p className="prj-input-desc"></p>
          </div>
        </div>

        <hr />

        <div className="prj-wrap prj-wrap--pass">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Пароль</p>
          </div>
          <div className="prj-wrap__right">
            {
              <Input
                onChange={formik.handleChange}
                value={formik.values.prjPass}
                name="prjPass"
                id="prjPass"
                placeholder="Пароль"
                type="text"
              />
            }
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
            {
              <Input
                onChange={formik.handleChange}
                value={formik.values.prjPassRepeat}
                id="prjPassRepeat"
                name="prjPassRepeat"
                placeholder="Пароль еще раз"
                type="text"
              />
            }
            <p className="prj-input-desc">
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </p>
          </div>
        </div>
        <hr />
        <div className="prj-wrap">
          <div className="prj-wrap__left">
            <p className="prj-input-name">Электронная почта</p>
          </div>
          <div className="prj-wrap__right">
            {
              <Input
                onChange={formik.handleChange}
                value={formik.values.prjMail}
                id="prjMail"
                name="prjMail"
                placeholder="Электронная почта"
                type="text"
              />
            }
            <p className="prj-input-desc">
              Можно изменить адрес, указанный при регистрации.
            </p>
          </div>
        </div>

        <div className="prj-wrap prj-wrap--checkbox">
          <div className="prj-wrap__left">Я согласен</div>
          <div className="prj-wrap__right prj-wrap__right--check">
            <input
              onChange={formik.handleChange}
              value={formik.values.prjCheckbox}
              id="prjCheckbox"
              name="prjCheckbox"
              className="prj-input-checkbox"
              type="checkbox"
            />
            <p className="prj-input-desc prj-input-desc--check">
              принимать актуальную информацию на емейл
            </p>
          </div>
        </div>
        <div className="prj-wrap">
          <div className="prj-wrap__left"></div>
          <div className="prj-wrap__right">
            <button type="submit" className="prj-btn">
              Изменить
            </button>
            <p className="prj-input-desc prj-input-desc--btn">
              последние изменения 15 мая 2012 в 14:55:17
            </p>
          </div>
        </div>
      </main>
    </form>
  );
}

export default App;
