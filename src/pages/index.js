import React from "react"
import { Link } from 'gatsby';

import Layout from '../component/layout';
import Head from "../component/head";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hi, I am DJ</h1>
        </Layout>
    )
}
 
export default IndexPage;