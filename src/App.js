import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriIamge from "./images/siri.png";

function App() {
  return (
    <div>
      <secton className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </secton>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alex99"
                image={AlexaImage}
                description="Alexa is made by Amazon to buy some things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is made by Microsoft to know waths it's do."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriIamge}
                description="Siri is made by Apple and it's gooing out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
