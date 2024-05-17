import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function NoPage() {
  return (
    <>
      <PageHeader heading='404 - not found'>
        <Link className='text-center' to='/'>
          go back to home page
        </Link>
      </PageHeader>
    </>
  );
}

export default NoPage;
