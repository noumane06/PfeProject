import Profile from './ProfileBody';
import Head from '../../../components/head';
const PublicProfile = ({profile})=>{
    const name = profile.companyname ;
    return(
        <div>
            <Head title={name+" | 6Solutions"}/>
            <Profile profile={profile}/>
        </div>
    )
}

export default PublicProfile