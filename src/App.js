import "./App.css";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "./Components/KErrorMessage";

const validationSchema = yup.object({
  name: yup.string().required("name is req.."),
  phone: yup
    .number()
    .min(1000000000, "Not ax valid phone number")
    .max(9999999999, "Not valid phone number")
    .required("num is req ..."),
  password: yup
    .string()
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("password is req ..."),
  gander: yup.string().required("gander is req.."),
  date: yup.date().required("date is Birth is required "),
  income: yup.string().required("income is required "),
  about: yup
    .string()
    .min(5, "too small")
    .max(500, "too long string")
    .required("aboutis  is required "),
  social: yup
    .array()
    .of(
      yup
        .string("String is required")
        .min(4, "too short")
        .max(20, "too long")
        .required("required")
    )
    .min(1, "Atleat one social media is required")
    .required(" array req.."),
    hobbies: yup
    .array()
    .of(
      yup
        .string("String is required")
        .min(4, "too short")
        .max(20, "too long")
        .required("required")
    )
    .min(1, "Atleat one hobby  is required")
    .required(" array req.."),
});

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
            // social: { facebook: "", twitter: "" },
            social: [],
            hobbies: [],
          }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {(values) => (
            <Form>
              <label>Name :</label>
              <Field name="name" type="text" />
              <KErrorMessage name="name" />
              <br /> <br />
              <label>Phone :</label>
              <Field name="phone" type="number" />
              <KErrorMessage name="phone" />
              <br /> <br />
              <label>Password :</label>
              <Field name="password" type="password" />
              <KErrorMessage name="password" />
              <br /> <br />
              <label>Gander :</label>
              <br /> <br />
              <label>Male :</label>
              <Field name="gander" value="Male" type="radio" />
              <label>Female :</label>
              <Field name="gander" value="Female" type="radio" />
              <KErrorMessage name="gander" />
              <br /> <br />
              <label>Date :</label>
              <Field name="date" type="date" />
              <KErrorMessage name="date" />
              <br /> <br />
              <label>Select :</label>
              <Field as="select" name="income" type="number">
                <option value="100">100</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
              </Field>
              <KErrorMessage name="income" />
              <br /> <br />
              <label>About :</label>
              <Field as="textarea" name="about" type="text" />
              <KErrorMessage name="about" />
              <br /> <br />
              <label>Social :</label>
              <KErrorMessage name="social" />
              <br /> <br />
              <label>facebook :</label>
              <Field name="social[0]" type="text" />
              <KErrorMessage name="social.0" />
              <br />
              <label>twitter :</label>
              <Field name="social.twitter" type="text" />
              <KErrorMessage name="social.1" />
              <br /> <br />
              <FieldArray
                name="hobbies"
                render={(arrayHelpers) => (
                  <div>
                    {values.hobbies && values.hobbies.length > 0 ? (
                      values.hobbies.map((hobby, index) => (
                        <div key={index}>
                          <Field name={`hobbies.${index}`} />
                          <KErrorMessage name={`hobbies.${index}`} />
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
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all hobbies from the list */}
                        Add a Hobby
                      </button>
                    )}
                  </div>
                )}
              />
              <KErrorMessage name={`hobbies`} />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default App;
