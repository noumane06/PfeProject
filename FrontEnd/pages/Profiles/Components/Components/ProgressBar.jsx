import { Progress} from 'antd' ;

const ProgressBar = ({percentage})=>{
    return(
        <div style={{marginBottom : '10%', marginTop : '10%',textAlign : 'center'}}>
                            
                            <Progress
                            type="circle"
                            strokeColor={{
                                '0%': '#00308F',
                                '100%': '#7CB9E8',
                            }}
                            percent={percentage}
                            />
                        <h1>Veuillez patienter ... </h1>
                        <p>Nous mettons à jour votre profil</p>
    </div>
    )
}
export default ProgressBar ;