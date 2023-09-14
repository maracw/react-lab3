import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

//three copies of ProfileCard component in main div
//pass data to child element using props
//import statements to access images

function App () {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexabotbot" image={AlexaImage} alt="Alexa Logo"/>
            <ProfileCard title="Cortana" handle="@cortana22" image={CortanaImage} alt="Cortana Logo"/>
            <ProfileCard title="Siri" handle="@lionofcintra" image= {SiriImage} alt="Siri Logo"/>
        </div>
    );
}

export default App;