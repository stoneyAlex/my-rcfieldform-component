/*
 * @Author: shimingxia
 * @Date: 2022-05-26 11:28:19
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 19:19:16
 * @Description: 
 */
import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form({onFinish, onFinishFailed, form, children}, ref) {
  const [formInstance] = useForm(form);
  console.log("formInstance", formInstance);

  React.useImperativeHandle(ref, () => formInstance);
  formInstance.setCallback({
    onFinish,
    onFinishFailed
  });
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        formInstance.submit();
      }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}