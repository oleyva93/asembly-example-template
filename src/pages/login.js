import { useLogin } from "@/shared/hooks/useSession";
import LoadingButton from "@mui/lab/LoadingButton";
import { Checkbox, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

function Login() {
  const { mutateAsync: loginPost, isLoading } = useLogin();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "connect.cent+accounting@gmail.com",
      password: "Devtest_123",
    },
  });

  const onSubmit = async (data) => {
    try {
      await loginPost(data);
      router.push("/");
    } catch (error) {
      setError("email", {
        type: "custom",
        message: error?.response?.data?.error.body.error_description,
      });
    }
  };

  return (
    <div className="bg-[#1c4b59] dark:bg-zinc-700 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: 500 }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Fusus Assembly</h1>
              <div className="w-full mt-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form-horizontal w-3/4 mx-auto"
                >
                  <div className="flex flex-col mt-4">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="email"
                          placeholder="Email"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="password"
                          placeholder="Password"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                  {errors?.email ? (
                    <div className="mt-[10px] text-[12px] text-red-700">
                      {errors?.email?.message}
                    </div>
                  ) : null}
                  <div className="flex items-center mt-4">
                    <Checkbox name="remember" id="remember" className="mr-2" />
                    <label
                      htmlFor="remember"
                      className="text-sm text-grey-dark"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      loading={isLoading}
                      disabled={isLoading}
                      color="primary"
                      className="bg-[#67bd4d]"
                    >
                      Login
                    </LoadingButton>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a className="no-underline hover:underline text-blue-dark text-xs">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:grid items-center justify-around border-l md:w-1/2 rounded-r-lg bg-cover bg-center">
            <Image
              src="/FususLogo_Vertical_Primary.png"
              width={220}
              height={220}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
