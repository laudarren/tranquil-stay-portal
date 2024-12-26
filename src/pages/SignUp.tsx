import { useNavigate, Link } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { AuthChangeEvent } from "@supabase/supabase-js";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
      if (event === "SIGNED_UP") {
        toast.success("Account created successfully! Please sign in.");
        navigate("/signin");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col items-center bg-gray-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#404040',
                    brandAccent: '#262626',
                  },
                },
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/signin`}
            onlyThirdPartyProviders={false}
            view="sign_up"
          />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
          <Link to="/" className="text-sm text-muted-foreground hover:underline text-center">
            Back to home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;