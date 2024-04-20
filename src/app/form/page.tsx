"use client";

import { useBasicFormTop } from "../hooks/use-basic-form-top";

export const Page = () => {
  const { register, onSubmit, errors } = useBasicFormTop();
  return (
    <div className="Form">
      <header>基本的なフォーム</header>
      <form onSubmit={onSubmit}>
        <div className="Form-Item">
          <p className="Form-Item-Label">
            <span className="Form-Item-Label-Required">必須</span>氏名
          </p>
          <input
            className="Form-Item-Input"
            id="userName"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <p className="Form-Item-Error-Message">{errors.userName.message}</p>
          )}
        </div>
        <input className="Form-Btn" type="submit" value="送信する" />
      </form>
    </div>
  );
};
