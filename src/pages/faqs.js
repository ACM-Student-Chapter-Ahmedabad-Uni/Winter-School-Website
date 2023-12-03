import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inject } from '@vercel/analytics';
import { faqs } from '../../static/data/faqs_data.js';

const Card = ({ title, content }) => (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-8">
        <h2 className="mb-2 text-2xl font-semibold text-center">{title}</h2>
        <hr className="my-2" />
        <p className="text-base">{content}</p>
    </div>
);

const FAQsPage = () => {
    inject();
    return <Layout>
        <Navbar />
        {Object.keys(faqs.faqs).map((category) => (
            <Card title={category} content={
                faqs.faqs[category].map((faq, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg">{faq.question}</h3>
                        <p className="text-sm">{faq.answer}</p>
                    </div>
                ))
            } />
        ))}
        <Footer />
    </Layout>
}

export const Head = () => <Seo title="FAQs" />

export default FAQsPage