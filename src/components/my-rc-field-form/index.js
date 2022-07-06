/*
 * @Author: shimingxia
 * @Date: 2022-05-26 11:29:35
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 19:20:36
 * @Description: 
 */
   
import React from "react";
import _Form from "./Form";
import Field from "./Field";
import useForm from "./useForm";

const Form = React.forwardRef(_Form);
Form.useForm = useForm;
Form.Field = Field;

export {Field, useForm};
export default Form;