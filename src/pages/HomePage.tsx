import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonPopover,
} from "@ionic/react";
import {
  libraryOutline,
  phonePortraitOutline,
  desktopOutline,
  peopleCircleOutline,
  chevronDownOutline,
  locationOutline,
  callOutline,
  mailOutline,
  timeOutline,
  logoFacebook,
  logoPinterest,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  timeSharp,
  locationSharp,
  callSharp,
  mailSharp,
} from "ionicons/icons";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);
  const [showGovDropdown, setShowGovDropdown] = React.useState(false);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">SDCA Higher Education Library</IonTitle>
        </IonToolbar>

        {/* Navigation Bar */}
        <IonToolbar className="navbar" color="danger">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton fill="clear" routerLink="/folder/Welcome!">
                  Home
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton fill="clear" routerLink="/folder/About">
                  About Us
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton fill="clear" routerLink="/folder/Contact Us">
                  Contact Us
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  fill="clear"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  Services <IonIcon icon={chevronDownOutline} />
                </IonButton>
                {showServicesDropdown && (
                  <IonPopover isOpen={showServicesDropdown}>
                    <div className="dropdown-menu">
                    <IonButton fill="clear" routerLink="/folder/Services">
                        Our Services
                      </IonButton>
                      <IonButton fill="clear" routerLink="/services/borrow">
                        Borrow & Return Books
                      </IonButton>
                      <IonButton fill="clear" routerLink="/services/e-journals">
                        E-Journals
                      </IonButton>
                      <IonButton fill="clear" routerLink="/services/research-assistance">
                        Research Assistance
                      </IonButton>
                    </div>
                  </IonPopover>
                )}
              </IonCol>
              <IonCol>
                <IonButton
                  fill="clear"
                  onClick={() => setShowGovDropdown(!showGovDropdown)}
                >
                  Government Officers <IonIcon icon={chevronDownOutline} />
                </IonButton>
                {showGovDropdown && (
                  <IonPopover isOpen={showGovDropdown}>
                    <div className="dropdown-menu">
                      <IonButton fill="clear" routerLink="/gov-officers/department1">
                        Department 1
                      </IonButton>
                      <IonButton fill="clear" routerLink="/gov-officers/department2">
                        Department 2
                      </IonButton>
                      <IonButton fill="clear" routerLink="/gov-officers/department3">
                        Department 3
                      </IonButton>
                    </div>
                  </IonPopover>
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding">
        <div className="hero-section">
          <img
            src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/330769174_756905462227745_8325955663905732567_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=D65PBQ8wWNUQ7kNvgE7_Sbk&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AssFtMbefWjG9shzXe3EjiT&oh=00_AYBWfqTj5EfGU0Pw7y2zQd62RvP8OilDmEToxqPVs8XljA&oe=6741F9A2"
            alt="Hero Banner"
            className="hero-img"
          />
          <h2>Welcome to the SDCA Library</h2>
          <p>
            Access a wealth of knowledge and resources to shape your future. Explore our services and programs today!
          </p>
          <IonButton routerLink="/about-us" color="danger">
            Learn More
          </IonButton>
        </div>

        <div className="center-content">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton fill="outline" routerLink="/services">
                  <IonIcon icon={libraryOutline} slot="start" />
                  Explore Services
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton fill="outline" routerLink="/contact-us">
                  <IonIcon icon={phonePortraitOutline} slot="start" />
                  Contact Us
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>

      <IonFooter className="footer">
      <div className="footer-content">
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <p>
                <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway, Bacoor City, Philippines 4102
              </p>
              <p>
                <IonIcon icon={callSharp} /> (+63) 998 551 8021
              </p>
              <p>
                <IonIcon icon={mailSharp} /> dlrchelpdesk@sdca.edu.ph
              </p>
            </IonCol>
            <IonCol size="4">
              <p>
                <IonIcon icon={timeSharp} /> Monday-Friday: 8 AM - 7 PM
              </p>
              <p>
                <IonIcon icon={timeSharp} /> Saturday: 8 AM - 4 PM
              </p>
              <p>
                <IonIcon icon={timeSharp} /> Sunday: Closed
              </p>
            </IonCol>
            <IonCol size="4" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <IonButton fill="clear" color="primary" size="small">
                <IonIcon icon={logoFacebook} />
              </IonButton>
              <IonButton fill="clear" color="warning" size="small">
                <IonIcon icon={logoInstagram} />
              </IonButton>
              <IonButton fill="clear" color="primary" size="small">
                <IonIcon icon={logoTwitter} />
              </IonButton>
              <IonButton fill="clear" color="danger" size="small">
                <IonIcon icon={logoYoutube} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonFooter>
    </IonPage>
  );
};

export default HomePage;
