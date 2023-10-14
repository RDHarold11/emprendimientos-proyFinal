import "./Registro.css";
import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            if (!name || !lastName || !email || !password) {
                toast.error("Debe completar los campos");
            } else {
                const res = await register({
                    email,
                    name,
                    lastName,
                    password,
                }).unwrap();
                dispatch(setCredentials({...res }));
                toast.success("Bienvenido");
            }
        } catch (error) {
            toast.error(error ? .data ? .message || error ? .error);
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);
    return ( <
        div className = "container" >
        <
        section className = "section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4" >
        <
        div className = "container" >
        <
        div className = "row justify-content-center" >
        <
        div className = "col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center" >
        <
        div className = "d-flex justify-content-center py-4" >
        <
        a href = "/home"
        className = "logo d-flex align-items-center w-auto" >
        <
        img src = { img1 }
        alt = "" / >
        <
        span className = "d-none d-lg-block" > Catalyst < /span> <
        /a> <
        /div> <
        div className = "card mb-3" >
        <
        div className = "card-body" >
        <
        div className = "pt-4 pb-2" >
        <
        h5 className = "card-title text-center pb-0 fs-4" >
        <
        strong > Crea tu propia Cuenta < /strong> <
        /h5> <
        p className = "text-center small" >
        Introduzca los Datos Requeridos para la creación de la Nueva Cuenta <
        /p> <
        /div> <
        form className = "row g-3 needs-validation"
        onSubmit = { handleRegister } >
        <
        div className = "col-12" >
        <
        label className = "form-label" > Nombre < /label> <
        input className = "form-control"
        type = "text"
        placeholder = "Introduzca su Nombre Completo"
        onChange = {
            (e) => setName(e.target.value) }
        value = { name }
        /> <
        /div> <
        div className = "col-12" >
        <
        label className = "form-label" > Apellido < /label> <
        input className = "form-control"
        type = "text"
        placeholder = "Introduzca su apellido Completo"
        onChange = {
            (e) => setLastName(e.target.value) }
        value = { lastName }
        /> <
        /div> <
        div className = "col-12" >
        <
        label className = "form-label" > Correo Electroníco < /label> <
        input type = "email"
        className = "form-control"
        placeholder = "Introduzca su Correo Electroníco"
        onChange = {
            (e) => setEmail(e.target.value) }
        value = { email }
        /> <
        /div> <
        div className = "col-12" >
        <
        label className = "form-label" > Contraseña < /label> <
        input type = "password"
        className = "form-control"
        placeholder = "Introduzca una Nueva Contraseña"
        onChange = {
            (e) => setPassword(e.target.value) }
        value = { password }
        /> <
        /div> <
        div className = "col-12" >
        <
        button type = "submit"
        className = "btn btn-primary w-100" >
        Registrarse <
        /button> <
        /div> <
        /form> <
        div className = "vaina" >
        <
        p className = "small mb-0" >
        Si ya estas Registrado < a href = "/login" > Inicia Sesión < /a> <
        /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        /div>
    );
};

export default Registro;