"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { bannerSignIn, logoGoogle, logoMini } from "@/contants/images";
import { useLogin, useLoginGoogleMain } from "@/hooks/queries/auth/useLogin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

// Schema validation for Login
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không hợp lệ"),
  password: z
    .string()
    .min(1, "Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function LoginPage() {
  const { mutate: login, isPending, error } = useLogin();
  const {
    mutate: loginGoogle,
    isPending: isPendingGoogle,
    error: errorGoogle,
  } = useLoginGoogleMain();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Google login success - call our API with access token
        loginGoogle({
          accessToken: response.access_token,
          idToken: "",
        });
      } catch (error) {
        console.error("Error processing Google login:", error);
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
    scope: "openid profile email",
    flow: "implicit",
  });

  const handleGoogleLogin = () => {
    googleLogin();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-col md:flex-row-reverse flex-shrink-0">
      <div className="flex-1">
        <Image
          src={bannerSignIn}
          alt="banner"
          className="w-full h-screen object-cover hidden md:block p-6"
        />
      </div>
      <div className=" flex flex-col justify-center items-center w-full md:w-[40%] px-6 lg:px-8 flex-shrink-0">
        <div className="w-full xl:w-[50%] flex flex-col items-center">
          <Image
            onClick={() => router.push("/")}
            src={logoMini}
            alt="logmini"
            className="block m-4 md:mt-10 mt-[144px] cursor-pointer h-[56px] w-max"
          />

          {/* Welcome Text */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-[#212B36] font-semibold text-3xl mb-3 sm:mb-4">
              Đăng nhập 123
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#212B36]">
              <span className="text-sm">
                Bạn chưa phải là thành viên?{" "}
                <span
                  className="text-[#0F46C4] cursor-pointer hover:underline font-medium"
                  onClick={() => router.push("/register")}
                >
                  Đăng ký
                </span>
              </span>
            </div>
          </div>

          {/* Login Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[320px] space-y-4 sm:space-y-5"
            >
              {/* Display API Error */}
              {(error || errorGoogle) && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {error?.message ||
                    errorGoogle?.message ||
                    "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại."}
                </div>
              )}

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-200 rounded-[10px] px-4 py-2 h-11 sm:h-12 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                        disabled={isPending || isPendingGoogle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="w-full border border-gray-200 rounded-[10px] px-4 py-2 h-11 sm:h-12 pr-12 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                          disabled={isPending || isPendingGoogle}
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          disabled={isPending || isPendingGoogle}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <div
                  onClick={() => router.push("/forgot-password")}
                  className="underline text-xs sm:text-sm cursor-pointer hover:text-blue-600 transition-colors"
                >
                  Quên mật khẩu?
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isPending || isPendingGoogle}
                className="font-semibold text-white bg-[#0F46C4] hover:bg-[#0F46C4] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-xl w-full h-11 sm:h-12 text-sm sm:text-base transition-colors"
              >
                {isPending || isPendingGoogle ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Đang đăng nhập...
                  </>
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="text-center text-[#637381] text-sm my-5 sm:my-6">
            Hoặc
          </div>

          {/* Google Login Button */}
          <Button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isPending || isPendingGoogle}
            variant="outline"
            className="font-normal max-w-[320px] text-primary bg-[#919EAB14] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl w-full h-11 sm:h-12 flex justify-center items-center gap-2 border-none text-sm sm:text-base transition-colors"
          >
            <Image
              src={logoGoogle}
              alt="Google logo"
              className="h-5 w-5 sm:h-6 sm:w-6 object-cover"
            />
            Đăng nhập với Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
