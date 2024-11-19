import React, { useEffect, useState } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  setupIonicReact,
  isPlatform,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import Government from "./pages/Government";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [isMenuDisabled, setIsMenuDisabled] = useState(isPlatform("mobile"));

  // Function to determine if the platform is mobile or desktop
  const updateMenuState = () => {
    const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
    setIsMenuDisabled(isMobile);
  };

  // Handle menu toggle for mobile
  const toggleMenu = async () => {
    const menuElement = document.querySelector("ion-menu");
    if (menuElement) {
      const isOpen = await menuElement.isOpen();
      if (isOpen) {
        await menuElement.close();
      } else {
        await menuElement.open();
      }
    }
  };

  // Update menu state on mount and resize
  useEffect(() => {
    updateMenuState();
    window.addEventListener("resize", updateMenuState);

    return () => {
      window.removeEventListener("resize", updateMenuState);
    };
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" disabled={isMenuDisabled}>
          <IonMenu contentId="main" type="overlay" side="start">
            <Menu onToggleMenu={toggleMenu} />
          </IonMenu>

          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/folder/Welcome!" exact>
              <HomePage />
            </Route>
            <Route path="/folder/LoginPage" exact>
              <LoginPage />
            </Route>
            <Route path="/folder/About" exact>
              <AboutPage />
            </Route>
            <Route path="/folder/Resources" exact>
              <ResourcesPage />
            </Route>
            <Route path="/folder/Contact Us" exact>
              <ContactPage />
            </Route>
            <Route path="/folder/Services" exact>
              <ServicesPage />
            </Route>
            <Route path="/folder/Government" exact>
              <Government />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
