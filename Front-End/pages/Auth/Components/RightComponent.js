import HeaderAuth from './header';
import SigninFormComponent from './SigninForm';
import SignupFormComponent from './SignupForm';
const RightComponent = (props) => {
    return (
        <div className="Split RightSide">
            <div className="ContentContainer">
                <HeaderAuth/>
                {props.title ==="signin" &&(
                    <SigninFormComponent query={props.query}/>
                )}
                {props.title === "signup" && (
                    <SignupFormComponent query={props.query}/>
                )}
            </div>
            
        </div>
    )
}
export default RightComponent;