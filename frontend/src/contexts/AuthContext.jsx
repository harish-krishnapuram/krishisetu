import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("ks_user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          id: "user-1001",
          name: "Rameshwar Patel",
          email: "ramesh.patel@krishisetu.com",
          phone: "+91 98765 43210",
          role: "farmer", // 'buyer' | 'farmer' | 'admin'
          avatar: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
          farmName: "Green Harvest Organic Estate",
          address: "Plot 42, Organic Valley, Nashik, Maharashtra - 422003"
        };
  });

  const [token, setToken] = useState(() => localStorage.getItem("ks_token") || "mock-jwt-token-krishisetu-2026");

  useEffect(() => {
    if (user) {
      localStorage.setItem("ks_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("ks_user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("ks_token", token);
    } else {
      localStorage.removeItem("ks_token");
    }
  }, [token]);

  const login = (email, password, role = "buyer") => {
    const mockUser = {
      id: `user-${Date.now()}`,
      name: email.split("@")[0].toUpperCase(),
      email,
      phone: "+91 98765 00000",
      role,
      avatar: role === "farmer"
        ? "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80"
        : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
      address: "123 Farm View Colony, India",
      farmName: role === "farmer" ? "Green Harvest Organic Estate" : null
    };
    setUser(mockUser);
    setToken(`jwt-token-${role}-${Date.now()}`);
    return mockUser;
  };

  const register = (userData) => {
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
    };
    setUser(newUser);
    setToken(`jwt-token-${newUser.role}-${Date.now()}`);
    return newUser;
  };

  const switchRole = (newRole) => {
    let presetUser;
    if (newRole === "farmer") {
      presetUser = {
        id: "user-farmer",
        name: "Rameshwar Patel",
        email: "ramesh.patel@krishisetu.com",
        phone: "+91 98765 43210",
        role: "farmer",
        avatar: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
        farmName: "Green Harvest Organic Estate",
        address: "Nashik, Maharashtra"
      };
    } else if (newRole === "admin") {
      presetUser = {
        id: "user-admin",
        name: "Platform Governance Officer",
        email: "admin@krishisetu.com",
        phone: "+91 1800 555 9900",
        role: "admin",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        address: "KrishiSetu HQ, Mumbai"
      };
    } else {
      presetUser = {
        id: "user-buyer",
        name: "Ankit Verma",
        email: "ankit.verma@gmail.com",
        phone: "+91 98765 00000",
        role: "buyer",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        address: "Flat 402, Green Acres Apt, Mumbai"
      };
    }
    setUser(presetUser);
    setToken(`jwt-token-${newRole}-${Date.now()}`);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("ks_user");
    localStorage.removeItem("ks_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        role: user?.role || "guest",
        login,
        register,
        logout,
        switchRole,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
