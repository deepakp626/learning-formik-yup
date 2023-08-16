import "./App.css";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";


const App = () => {
  return (
    <>
      <div>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            phone: "",
            password: "",
            gander: "",
            date: "",
            income: "",
            about: "",
            social: {facebook: "",twitter: "",},
            hobbies:[],
          }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {( values) => (
              <Form>
              <label>Name :</label>
              <Field name="name" type="text" />
              <br /> <br />
              <label>Phone :</label>
              <Field name="phone" type="number" />
              <br /> <br />
              <label>Password :</label>
              <Field name="password" type="password" />
              <br /> <br />
              <label>Gander :</label>
              <br /> <br />
              <label>Male :</label>
              <Field name="gander" value="Male" type="radio" />
              <label>Female :</label>
              <Field name="gander" value="Female" type="radio" />
              <br /> <br />
              <label>Date :</label>
              <Field name="date" type="date" />
              <br /> <br />
              <label>Select :</label>
              <Field as="select" name="income" type="number">
                <option value="100">100</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
              </Field>
              <br /> <br />
              <label>About :</label>
              <Field as="textarea" name="about" type="text" />
              <br /> <br />
              <label>Social :</label>
              <br /> <br />
              <label>facebook :</label>
              <Field name="social.facebook" type="url" />
              <br />
              <label>twitter :</label>
              <Field name="social.twitter" type="url" />
              <br /> <br />
              <FieldArray
                name="hobbies"
                render={(arrayHelpers) => (
                  <div>
                    {values.hobbies && values.hobbies.length > 0 ? (
                      values.hobbies.map((hobby, index) => (
                        <div key={index}>
                          <Field name={`hobbies.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        {/* show this when user has removed all hobbies from the list */}
                        Add a Hobby
                      </button>
                    )}
                  </div>
                )}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        
        </Formik>
      </div>
    </>
  );
};

export default App;
