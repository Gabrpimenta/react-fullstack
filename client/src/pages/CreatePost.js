import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      navigate("/");
    });
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    postText: Yup.string().required("Required"),
    username: Yup.string()
      .min(3)
      .max(10)
      .required("Required"),
  });

  let navigate = useNavigate();

  return (
    <div className='createPostPage'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Title: </label>
          <ErrorMessage name='title' component='span' />
          <Field id='inputCreatePost' name='title' placeholder='Title' />
          <label>Post: </label>
          <ErrorMessage name='postText' component='span' />
          <Field
            id='inputCreatePost'
            name='postText'
            placeholder='Write your post here'
          />
          <label>Username: </label>
          <ErrorMessage name='username' component='span' />
          <Field id='inputCreatePost' name='username' placeholder='Username' />
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
