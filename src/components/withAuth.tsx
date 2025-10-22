import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { toast } = useToast();

    useEffect(() => {
      const loggedIn = localStorage.getItem("isAuthenticated");
      if (loggedIn === "true") {
        setIsAuthenticated(true);
      }
    }, []);

    const handleLogin = () => {
      const correctLogin = process.env.VITE_DASHBOARD_LOGIN;
      const correctPassword = process.env.VITE_DASHBOARD_PASSWORD;

      if (login === correctLogin && password === correctPassword) {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials",
          variant: "destructive",
        });
      }
    };

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return AuthenticatedComponent;
};

export default withAuth;
