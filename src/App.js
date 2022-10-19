import "./sass/App.scss";
import { Field, Formik, Form } from "formik";
import PrjFormInputSelect from "./modules/input-select/input.js";
import PrjFormInput from "./modules/input/input";
import PrjFormInputCheck from "./modules/input-checkbox/input.js";
import Status from "./modules/status/status.js";
import SubmitFunc from "./modules/submit/submit.js";
import initValues from "./formik/start-form/initValues.js";
import validate from "./formik/start-form/validate.js";
import onSubmiting from "./formik/start-form/submit.js";
import { useSelector, useDispatch } from "react-redux";
import { setIsChange, setStatus } from "./reducers/main-reducer.js";
import HeaderLink from "./modules/header-link/headerLink.js";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.main.status);
  const isChange = useSelector((state) => state.main.isChange);

  return (
    <Formik
      initialValues={{ ...initValues, prjStatus: status }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form id="prjForm" className="prj-form">
          <header className="prj-header">
            <div className="prj-wrap prj-wrap--first">
              <div className="prj-wrap__left">
                <h1 className="prj-header-title prj-header-title--gray">
                  Здравствуйте,
                </h1>
              </div>
              <div className="prj-wrap__right prj-wrap__right--first">
                <h1 className="prj-header-title">Человек №3596941</h1>{" "}
                <HeaderLink dispatch={dispatch} setIsChange={setIsChange} />
              </div>
            </div>
            <Status
              status={status}
              dispatch={dispatch}
              setStatus={setStatus}
              isChange={isChange}
              setIsChange={setIsChange}
            >
              {
                <PrjFormInput
                  name="prjStatus"
                  id="prjStatus"
                  placeholder=""
                  type="text"
                  inputvalue={values}
                />
              }
            </Status>
          </header>
          <main className="prj-main ">
            <div className="prj-wrap ">
              <div className="prj-wrap__left">
                <p className="prj-input-name">Ваш город</p>
              </div>
              <div className="prj-wrap__right">
                {
                  <PrjFormInputSelect
                    name="prjCity"
                    placeholder="Ваш город"
                    type="select"
                    inputclass="prj-input--select"
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
                  <PrjFormInput
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
                  <PrjFormInput
                    id="prjPassRepeat"
                    name="prjPassRepeat"
                    placeholder="Пароль еще раз"
                    type="text"
                  />
                }
                <p className="prj-input-desc">
                  Повторите пароль, пожалуйста, это обезопасит вас с нами на
                  случай ошибки.
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
                  <PrjFormInput
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
                <PrjFormInputCheck
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
                <SubmitFunc />
              </div>
            </div>
          </main>
        </Form>
      )}
    </Formik>
  );
}

export default App;
