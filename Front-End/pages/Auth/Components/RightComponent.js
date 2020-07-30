import HeaderAuth from './header';
import FormComponent from './Form';
const RightComponent = () => {
    return (
        <div className="Split RightSide">
            <div className="ContentContainer">
                <HeaderAuth/>
                <FormComponent/>
            </div>
            
        </div>
    )
}
export default RightComponent;