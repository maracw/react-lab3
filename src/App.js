import ProfileCard from './ProfileCard'

//nested div is for header
//three copies of ProfileCard component in main div
function App () {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexabotbot" />
            <ProfileCard title="Cortana" handle="@cortana22"/>
            <ProfileCard title="Siri" handle="@lionofcintra"/>
        </div>
    );
}

export default App;