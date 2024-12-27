import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event: any) => {
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
      </Card>
    </div>
  );
};

export default SignUp;