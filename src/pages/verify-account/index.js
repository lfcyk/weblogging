import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { verification } from "../../store/slices/auth/slices"

function VerifyAccountPage () {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isVerified, email } = useSelector(state => {
        return {
            email : state.auth.email,
            isVerified : state.auth.isVerified
        }
    })

    const onButtonVerify = () => {
      dispatch(verification(token))
    }

    const token = window.location.pathname.toString().replace('/verification/',"").replace('/verification-change-email/',"")

    if ( isVerified ) {
      return <Navigate to="/profile" replace/>
    }
   
    return (
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <div className="w-max h-max flex flex-col bg-white p-12 justify-center items-center">
          <h1>Account Verification</h1>
          <br/>
          <button
            type="button"
            className="btn btn-neutral"
            onClick={()=>{
              onButtonVerify()
            }}
            >
            Click Here To Verify
          </button>
        </div>
      </div>
    )
}

export default VerifyAccountPage