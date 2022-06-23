import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getUserByValidSessionToken, User } from '../util/database';

type Props = {
  user: User;
};

export default function UserDetails(props: Props) {
  // if (!props.user) {
  //   return (
  //     <div>
  //       <Head>
  //         <title>User not found</title>
  //         <meta name="description" content="About the app" />
  //       </Head>
  //       <main>
  //         <h1>User not found</h1>
  //       </main>
  //     </div>
  //   );
  // }
  return (
    <div>
      <Head>
        <title>{props.user.username}</title>
        <meta name="description" content="About the app" />
      </Head>
      <main>
        <h1>
          #{props.user.id} (username: {props.user.username})
        </h1>
        <div> id: {props.user.id}</div>
        <div> username: {props.user.username}</div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );

  if (user) {
    return { props: {} };
  }
  return {
    redirect: {
      destination: '/login?returnTo=/users/private-profile',
    },
  };
}
