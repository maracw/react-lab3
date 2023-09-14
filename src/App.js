import 'bulma/css/bulma.css';
//import from node module
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
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        HEY ___! Personal Digital Assistants
                    </p>
                </div>

            </section>
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-4">
                                <ProfileCard 
                                    title="Amazon's Alexa" 
                                    handle="@alexabotbot" 
                                    image={AlexaImage} 
                                    alt="Alexa Logo"
                                    description="Alexa is created by Amazon and likes shopping."/>
                            </div>
                            <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana22" 
                                image={CortanaImage} 
                                alt="Cortana Logo"
                                description="Cortana is made by Microsoft and is inescapable, but not really helpful"/>
                            </div>
                            <div className="column is-4">
                                <ProfileCard 
                                    title="Siri" 
                                    handle="@lionofcintra" 
                                    image= {SiriImage} 
                                    alt="Siri Logo"
                                    description="Siri is made by Apple. I use it as a laundry timer."
                                /> 
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
}

export default App;