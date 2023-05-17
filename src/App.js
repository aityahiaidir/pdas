import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div>Personal dialogs assistants</div>
      <ProfileCard title="Alexa" handle="@alex99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
