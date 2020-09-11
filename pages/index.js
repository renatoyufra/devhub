import { useEffect } from "react";
import Head from "next/head";

import AppLayout from "components/AppLayout";
import Button from "components/Button";
import GitHub from "components/Icons/GitHub";

import { colors } from "styles/theme";

import { loginWithGithub } from "firebase/client";

import useUser, { USER_STATES } from "hooks/useUser";
import { useRouter } from "next/router";

export default function Home() {
  // manejaremos 3 estados undefined // null // object
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGithub().catch((err) => {
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
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill="#fff" />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOWN && <img src="./spinner.gif" />}
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
