import React from "react";
import { useParams } from "react-router-dom";
import UserFeed from "../Feed/Feed";
import Head from "../../Helpers/Head";

export default function UserProfile() {
  const { user } = useParams();

  return (
    <>
      <Head title={user} />
      <section className="container mainSection">
        <h1 className="title">{user}</h1>
        <UserFeed user={user} />
      </section>
    </>
  );
}
