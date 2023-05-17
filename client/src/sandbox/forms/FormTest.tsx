import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import { Container } from "@mui/material";
import ROUTES from "../../routes/routesModel";

type Data = {
  first: string;
  last: string;
};

const FormTest = () => {
  const handleSubmit = (data: Data) => {
    console.log(data);
    handleReset();
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };

  const INITIAL_FORM = { first: "", last: "" };

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="form test"
        onSubmit={onSubmit}
        onReset={handleReset}
        onFormChange={validateForm}
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="first NaMe"
          name="first"
          type="text"
          onInputChange={handleInputChange}
          error={errors.first}
          data={data}
          breakPoints={{ md: 6, xs: 12 }}
        />
        <Input
          label="last"
          name="last"
          type="text"
          onInputChange={handleInputChange}
          error={errors.last}
          data={data}
          breakPoints={{ md: 6, xs: 12 }}
        />
      </Form>
    </Container>
  );
};

export default React.memo(FormTest);
