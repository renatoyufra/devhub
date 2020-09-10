import { useEffect, useState } from "react";
import Head from "next/head";

import AppLayout from "components/AppLayout";
import Avatar from "components/Avatar";
import Button from "components/Button";
import GitHub from "components/Icons/GitHub";

import { colors } from "styles/theme";

import { loginWithGithub, onAuthStateChanged } from "firebase/client";

export default function Home() {
  // manejaremos 3 estados undefined // null // object
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user)); // the same onAuthStateChanged(setUser)
  }, []);
  // user => {setUser(user)}
  const handleClick = () => {
    loginWithGithub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>DebHub 🐹</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/devhub-logo.png" alt="Logo" />

          <h1>DevHub</h1>
          <h2>
            Talk about development <br /> with developers 🐱‍👤
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill="#fff" />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  text={user.username}
                />
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        div {
          margin-top: 16px;
        }
        img {
          width: 120px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: 32px;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
