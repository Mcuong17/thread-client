import { FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axiosInstance from "@/api/axios.config";

const RegisterPage = () => {
  // Khởi tạo form
  const form = useForm({
    defaultValues: {
      username:"",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = (values) => {
        axiosInstance.post('auth/register')
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Register your account</h2>

      {/* Form wrapper */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Username field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-12" placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

             {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input  className="h-12" placeholder="Enter your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input  className="h-12" placeholder="Enter your password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

           {/* Password confirm field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input  className="h-12" placeholder="Confirm your password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-12 bg-black text-white dark:bg-white dark:text-black">
            Register
          </Button>
          <Link to="/login" className="text-black dark:text-white inline-block w-full text-center">
            Already have accout? Login here?
          </Link>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterPage;
