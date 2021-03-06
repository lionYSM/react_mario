import React from "react";
import styles from "./styles.scss"; 

const Auth = (props, context) => (
  <main className={styles.auth}>
  
    <div className={styles.column}>
      <div className={styles.whiteBox}>
        {(() => {
          switch (props.action) {
            case "login":
              return (
                <p>
                  Don't have an account?{" "}
                  <span
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >
                    Sign up
                  </span>
                </p>
              );
            case "signup":
              return (
                <p>
                  Have an account?{" "}
                  <span
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >
                    Log in
                  </span>
                </p>
              );
            default:
              return null;
          }
        })()}
      </div>
      
    </div>
  </main>
);

export default Auth;