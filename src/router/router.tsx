import { Outlet, useRoutes } from "react-router"
import Login from '../login/login'
import Dashboard from '../Dashboard/dashboard'
import { Suspense, useEffect } from "react"
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";



export default function Router(){
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/login")
    },[]);

    return useRoutes([
        {
            path: '/',
            element:( 
                <Suspense fallback={<Charging/>}>
                    <Outlet/>
                </Suspense>
                ),
            children: [
                {
                    path: "login",
                    element: <Login/>,

                },
            ]
            
        }, {
            path: "/dashboard",
            element: (
                <Suspense fallback={<Charging/>}>
                    <Dashboard/>
                    </Suspense>
            ),
        }
    ]);
}

function Charging(){
    return(
        <Typography typography='h4'> Cargando... </Typography>
    )
}