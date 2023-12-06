import { createContext, useState, useEffect, useContext } from "react";
import { Usuario } from "../../interfaces/Usuario";

const AuthContext = createContext([[], () => {}]);

interface AuthContextProps {
    usuario: Usuario | null;
    register: (nome: string, sobrenome: string, email: string, senha: string) => void;
    login: (email: string, senha: string) => void;
    logout: () => void;
}

export function AuthProvider(props: any)  {
    const [user, setUser] = useState(null as any);
    
    useEffect(() => {
        const authData = localStorage.getItem("auth");
        const savedUser = authData ? JSON.parse(authData) : null;
        setUser(savedUser);
    }, []);

    const register = (nome: string, sobrenome:string, email: string, senha: string) => {
        const newUser: Usuario = { 
            id: generateId(),
            nome, 
            sobrenome,
            email, 
            senha 
        };

        setUser(newUser);
        localStorage.setItem("auth", JSON.stringify(newUser));
    };

    const login = (email: string, senha: string) => {
        const authData = localStorage.getItem("auth");
        const savedUser = authData ? JSON.parse(authData) : null;

        if (savedUser?.email === email && savedUser?.senha === senha) {
            setUser(savedUser);
            localStorage.setItem("auth", JSON.stringify(savedUser));
        } else {
            alert("E-mail ou senha incorretos");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth");
    };

    const contextValue: AuthContextProps = {
        usuario: user,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue} {...props}/>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
}

export function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}