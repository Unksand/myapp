import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonMenu,
  IonList,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { personCircleOutline } from "ionicons/icons";
import "./Page.css";

const LoginPage: React.FC = () => {
  const history = useHistory();

  const handleRegisterNavigation = () => {
    history.push("/register");
  };

  return (
    <IonPage>
      {/* Side Menu */}
      <IonMenu side="start" menuId="main-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem lines="none" button>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem lines="none" button>
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem lines="none" button>
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent id="main-content" className="ion-padding">
        <div className="login-container">
          <img src={"https://www.stdominiccollege.edu.ph/images/logo-header.png"} alt="" className="logo" />
          <h2>Welcome to the Login Page of St Dominic College of Asia !</h2>
          <p>Please enter your credentials below to access your registered account.</p>

          {/* Username Input */}
          <IonItem>
            <IonLabel position="floating" style={{ color: 'red' }}>Username</IonLabel>
            <IonInput type="text" placeholder="Enter your username" style={{ color: 'black' }}></IonInput>
          </IonItem>

          {/* Student Number Input */}
          <IonItem>
            <IonLabel position="floating" style={{ color: 'red' }}>Student Number</IonLabel>
            <IonInput type="text" placeholder="Enter your student number" style={{ color: 'black' }}></IonInput>
          </IonItem>

          {/* Student Email Input */}
          <IonItem>
            <IonLabel position="floating" style={{ color: 'red' }}>Student Email</IonLabel>
            <IonInput type="email" placeholder="Enter your student email" style={{ color: 'black' }}></IonInput>
          </IonItem>

          {/* Password Input */}
          <IonItem>
            <IonLabel position="floating" style={{ color: 'red' }}>Password</IonLabel>
            <IonInput type="password" placeholder="Enter your password" style={{ color: 'black' }}></IonInput>
          </IonItem>

          {/* Login Button */}
          <IonButton expand="block" className="ion-margin-top">
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;