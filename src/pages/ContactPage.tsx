import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPopover,
  IonIcon,
} from "@ionic/react";
import { callOutline, callSharp, chevronDownOutline, locationOutline, locationSharp, mailOpenSharp, mailOutline, timeSharp } from "ionicons/icons"; // Import necessary icons
import "./AboutPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AboutPage: React.FC = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showGovDropdown, setShowGovDropdown] = useState(false);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
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
                      <IonButton
                        fill="clear"
                        routerLink="/services/research-assistance"
                      >
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
                      <IonButton fill="clear" routerLink="http://dfa.gov.ph/">
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

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>CONTACT US</h1>
        </div>
      </div>

      {/* Main Content */}
      <IonContent className="ion-padding about-content">
        <div className="about-layout">
          {/* Main Section */}
          <div className="main-section">
            <h2 className="section-title">You can find us here</h2>
              <p>
              <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway, Bacoor City, Philippines 4102
              </p>
              <br />

              <p>
              <IonIcon icon={callOutline} /> (+63) 998 551 8021
              </p>
              <br />

              <p>
              <IonIcon icon={mailOpenSharp} /> dlrchelpdesk@sdca.edu.ph
              </p>
              <br />

          </div>

          <div className="main-section">
            <h2 className="section-title">Working Hours</h2>
            <p>
                <IonIcon icon={timeSharp} /> Monday-Friday: 8 AM - 7 PM
              </p>
              <br />
              <p>
                <IonIcon icon={timeSharp} /> Saturday: 8 AM - 4 PM
              </p>
              <br />
              <p>
                <IonIcon icon={timeSharp} /> Sunday: Closed
              </p>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;
