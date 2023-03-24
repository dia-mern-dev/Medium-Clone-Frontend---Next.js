import React, { useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../_ui/Button";
import Checkbox from "../../../_ui/Checkbox";
import Input from "../../../_ui/Input";
import styles from "./styles.module.scss";
import { LoginSchema } from "../../../../utils/schema/loginSchema";
import { authSelector, login, RemoveError } from "../../../../store/Auth";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isPending, error } = useAppSelector(authSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const { pathname } = useRouter();

  const onSubmit = async (data: any) => {
    console.log("data: ", data);
    // dispatch(login(data));
  };

  useEffect(() => {
    dispatch(RemoveError());
  }, [pathname]);

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="text"
          label="Email address"
          autoComplete="email"
          register={register("email")}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          autoComplete="password"
          register={register("password")}
          error={errors.password}
        />
        <div className={styles.refWrapper}>
          <div className={styles.checkboxWrapper}>
            <Checkbox label="Remember me" register={register("remember")} />
          </div>
          <Link href="/auth/reset-password" className={styles.link}>
            Forgot your password?
          </Link>
        </div>
        <div className={styles.linkWrapper}>
          {!!error && <p className={styles.error}>{error}</p>}
          <Button type="submit" isPending={isPending} disabled={isPending} fullWidth>
            Sign in
          </Button>
          <Link href="/auth/register" className={styles.link}>
            <p>{`Don't have a user account yet?`}</p>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
