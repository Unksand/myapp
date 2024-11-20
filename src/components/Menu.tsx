import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import {
  homeOutline,
  personCircleOutline,
  libraryOutline,
  phonePortraitOutline,
  desktopOutline,
  businessOutline,
  menuOutline,
} from "ionicons/icons";

interface MenuProps {
  onToggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ onToggleMenu }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Menu</IonTitle>
          <IonButton slot="end" fill="clear" onClick={onToggleMenu}>
            <IonIcon icon={menuOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {/* <IonItem button routerLink="/folder/LoginPage">
            <IonIcon slot="start" icon={personCircleOutline} />
            <IonLabel>Login</IonLabel>
          </IonItem> */}
          <IonItem button routerLink="/folder/Welcome!">
            <IonIcon slot="start" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button routerLink="/folder/About">
            <IonIcon slot="start" icon={libraryOutline} />
            <IonLabel>About</IonLabel>
          </IonItem>
          <IonItem button routerLink="/folder/Contact Us">
            <IonIcon slot="start" icon={phonePortraitOutline} />
            <IonLabel>Contact Us</IonLabel>
          </IonItem>
          <IonItem button routerLink="/folder/Services">
            <IonIcon slot="start" icon={desktopOutline} />
            <IonLabel>Services</IonLabel>
          </IonItem>
          <IonItem button routerLink="/folder/Government">
            <IonIcon slot="start" icon={businessOutline} />
            <IonLabel>Government Offices</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Menu;
