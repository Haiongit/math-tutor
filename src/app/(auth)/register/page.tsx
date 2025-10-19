"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { bannerSignIn, logoGoogle, logoMini } from "@/contants/images";
import { useRegister } from "@/hooks/queries/auth/useRegister";
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
import { useAuthStore } from "@/store/slices/auth.slice";
import { useGoogleLogin } from "@react-oauth/google";
import { useLoginGoogleMain } from "@/hooks/queries/auth/useLogin";
import { useTranslation } from "react-i18next";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

function RegisterPage() {
  const { t } = useTranslation();
  const { mutate: register, isPending, error } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const setUserDraft = useAuthStore((state) => state.setUserDraft);
  const {
    mutate: loginGoogle,
    isPending: isPendingGoogle,
    error: errorGoogle,
  } = useLoginGoogleMain();

  // Dynamic schema based on current language
  const registerSchema = z.object({
    name: z.string().min(1, t("auth.register.nameRequired") || "Name is required"),
    email: z
      .string()
      .min(1, t("auth.register.emailRequired") || "Email is required")
      .email(t("auth.register.emailInvalid") || "Invalid email"),
    password: z
      .string()
      .min(1, t("auth.register.passwordRequired") || "Password is required")
      .min(6, t("auth.register.passwordMinLength") || "Password must be at least 6 characters"),
  });

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const dataToRegister = {
      fullName: data.name.trim(),
      email: data.email.trim(),
      password: data.password,
      passwordConfirmation: data.password,
    };
    setUserDraft(
      {
        id: "",
        name: data.name.trim(),
        email: data.email.trim(),
      } as any,
      "",
    );
    register(dataToRegister);
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
          className="w-full h-screen hidden object-cover md:block p-6"
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
              {t("auth.register.title")}
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#212B36]">
              <span className="text-sm">
                {t("auth.register.haveAccount")}{" "}
                <span
                  role="presentation"
                  className="text-[#0F46C4] cursor-pointer hover:underline font-medium"
                  onClick={() => router.push("/login")}
                >
                  {t("auth.register.signIn")}
                </span>
              </span>
            </div>
          </div>

          {/* Register Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[320px] space-y-4"
            >
              {/* Display API Error */}
              {(error || errorGoogle) && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {error?.message ||
                    errorGoogle?.message ||
                    "Đã xảy ra lỗi khi đăng kí. Vui lòng thử lại."}
                </div>
              )}

              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder={t("auth.register.fullName")}
                        className="w-full border border-gray-200 rounded-[10px] px-4 py-2 h-11 sm:h-12 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                        disabled={isPending || isPendingGoogle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("auth.register.email")}
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
                          placeholder={t("auth.register.password")}
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

              {/* Terms and Conditions */}
              <div className="text-center text-[#637381] text-xs sm:text-sm mt-4 space-y-1">
                <div>{t("auth.register.agreeTermsText")}</div>
                <div className="flex justify-center items-center gap-1 flex-wrap">
                  <span className="underline cursor-pointer hover:text-blue-600 transition-colors">
                    {t("auth.register.termsLink")}
                  </span>
                  <span className="text-[#637381]">{t("common.and")}</span>
                  <span className="underline cursor-pointer hover:text-blue-600 transition-colors">
                    {t("auth.register.privacyLink")}
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                disabled={isPending || isPendingGoogle}
                className="font-semibold text-white bg-[#0F46C4] hover:bg-[#0F46C4] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-xl w-full h-11 sm:h-12 text-sm sm:text-base transition-colors mt-6"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t("common.loading")}
                  </>
                ) : (
                  t("auth.register.registerButton")
                )}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="text-center text-[#637381] text-sm my-5 sm:my-6">
            {t("common.or")}
          </div>

          {/* Google Register Button */}
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
            {t("auth.register.registerWithGoogle")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
