import AppLayout from "components/AppLayout";
import { useEffect, useState } from "react";
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import { fetchLatestDevits } from "firebase/client";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  const user = useUser();

  useEffect(() => {
    user &&
      fetchLatestDevits().then((timeline) => {
        setTimeline(timeline);
      });
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ id, avatar, userName, content, userId, createdAt }) => (
              <Devit
                key={id}
                avatar={avatar}
                createdAt={createdAt}
                id={id}
                content={content}
                userName={userName}
                userId={userId}
              />
            )
          )}
        </section>
        <nav></nav>
      </AppLayout>

      <style jsx>{`
        header {
            display: flex;
            align-items: center;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            border-bottom: 1px solid #eee;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
        }

        h2{
            font-size: 21px;
            font-weight: 800;
            padding-left: 15px;
        }
       
        nav {
            background: #fff;
            bottom: 0;
            border-top: 1px solid #eee;
            height: 49px;
            width: 100%;
            position fixed;
        }
      `}</style>
    </>
  );
}
