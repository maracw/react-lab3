import ProfileCard from './ProfileCard'

//nested div is for header
//three copies of ProfileCard component in main div
function App () {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>
    );
}

export default App;