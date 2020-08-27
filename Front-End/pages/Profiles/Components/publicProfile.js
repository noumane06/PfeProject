import Profile from './ProfileBody';
import Head from '../../../components/head';
const PublicProfile = ({profile ,userid})=>{
    const name = profile.companyname ;
    return(
        <div>
            <Head title={name+" | 6Solutions"}/>
            <Profile profile={profile} userid={userid} />
        </div>
    )
}

export default PublicProfile