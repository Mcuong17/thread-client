import { FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axiosInstance from "@/api/axios.config";
import { toast } from "sonner";


const LoginPage = () => {
  // Khởi tạo form
  const form = useForm({
    defaultValues: {
        username: "",
        password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
        await axiosInstance.post('api/auth/login', values)
        console.log(values)
         toast.success("Login success!");
    } catch (error) {
      
        toast.error(error.errorDesc);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Log in with your account</h2>

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
                  <Input className="h-12" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
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

          <Link to="/register" className="text-black dark:text-white text-right inline-block w-full">
            Dont have account? Register now?
          </Link>

          <Button type="submit" className="w-full h-12 bg-black text-white dark:bg-white dark:text-black">
            Login
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
