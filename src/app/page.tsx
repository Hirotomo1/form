"use client";

import { useBasicFormTop } from "./hooks/useBasicFormTop";

const Page: React.FC = () => {
  const { register, onSubmit, errors } = useBasicFormTop();
  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <div className="Form-Item">
          <p className="Form-Item-Label">
            氏名<span className="Form-Item-Label-Required">必須</span>
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

        <div className="Form-Item">
          <p className="Form-Item-Label">
            電話番号<span className="Form-Item-Label-Required">必須</span>
          </p>
          <input
            className="Form-Item-Input"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && (
            <p className="Form-Item-Error-Message">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="Form-Item">
          <p className="Form-Item-Label">性別</p>
          <select
            className="Form-Item-Select"
            id="sex"
            {...register("sex", { required: false })}
          >
            <option value="none">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
          {errors.sex && (
            <p className="Form-Item-Error-Message">{errors.sex.message}</p>
          )}
        </div>

        <div className="Form-Item">
          <p className="Form-Item-Label">年齢</p>
          <select className="Form-Item-Select" id="age" {...register("age")}>
            <option value="">選択してください</option>
            <option value="20歳未満">20歳未満</option>
            <option value="20-29歳">20-29歳</option>
            <option value="30-39歳">30-39歳</option>
            <option value="40-49歳">40-49歳</option>
            <option value="50-59歳">50-59歳</option>
            <option value="60-69歳">60-69歳</option>
            <option value="70-79歳">70-79歳</option>
            <option value="80歳以上">80歳以上</option>
          </select>
          {errors.age && (
            <p className="Form-Item-Error-Message">{errors.age.message}</p>
          )}
        </div>

        <input className="Form-Btn" type="submit" value="送信する" />
      </form>
    </div>
  );
};

export default Page;
