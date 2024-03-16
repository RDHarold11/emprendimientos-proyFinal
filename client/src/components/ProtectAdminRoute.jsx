import {useSelector} from "react-redux"
import {Outlet, Navigate} from "react-router-dom"

const ProtectAdminRoute = () => {
    const {userInfo: user} = useSelector((state) => state.auth)
  return (
    user && user?.isAdmin ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectAdminRoute