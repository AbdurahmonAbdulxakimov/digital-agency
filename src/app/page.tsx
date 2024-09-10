"use client";

import {Button} from "@/components/ui/button";
import {aboutContents, faqs, IAboutContent, IFAQ, IService, ITestimonial, niches, services, testimonials} from "@/data";
import {companies} from "../../public/Companies";
import React from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Banner from "@/components/Banner";
import ServiceCard from "@/components/ServiceCard";
import AboutCard from "@/components/AboutCard";
import TestimonialCard from "@/components/TestimonialCard";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ContactForm from "@/components/ContactForm";


export default function Home() {
    const router = useRouter();

    const renderNiches = (niches: string[]) => {
        return niches.map((niche, i): React.JSX.Element => {
            return (
                <React.Fragment key={i}>
                    <span className="md:py-2 md:px-3 md:bg-secondary md:rounded-lg">{niche}</span>
                    {i === niches.length - 2 ? " and " : i === niches.length - 1 ? "." : ", "}
                </React.Fragment>)
        })
    }

    const renderCompanies = (companies: string[] | StaticImport[]) => {
        return companies.map(
            (img, i) => <Image key={i} src={img} alt="adobe" width={0} height={0} className="w-full h-full"/>
        )
    }

    const renderServices = (services: IService[]) => {
        return services.map(
            (service, i) => <ServiceCard icon={service.icon} slug={service.slug} title={service.title}
                                         content={service.content} key={i}/>
        )
    }

    const renderAboutCards = (aboutContents: IAboutContent[]) => {
        return aboutContents.map(
            (about, i) => <AboutCard icon={about.icon} title={about.title} content={about.content} key={i}/>
        )
    }

    const renderFAQs = (faqs: IFAQ[]) => {
        return faqs.map(
            (faq, i) => {
                return (<AccordionItem value={`${i + 1}`} key={i} className={`border p-6`}>
                    <AccordionTrigger
                        className={`flex gap-5 text-base lg:text-lg xl:text-xl [&[data-state=open]]:text-[hsl(var(--green-70))] [&[data-state=open]]:no-underline hover:no-underline`}>
                        <span className={`flex w-full gap-5 items-center`}>
                            <span
                                className={`rounded-md !bg-[linear-gradient(var(--linear-grey-14))] flex justify-center items-center p-3.5 text-5 text-start font-semibold`}>
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <span className={`text-start`}>
                                {faq.title}
                            </span>
                        </span>
                    </AccordionTrigger>
                    <AccordionContent
                        className={`text-secondary-foreground text-sm lg:text-base xl:text-lg pl-16`}>{faq.content}</AccordionContent>
                </AccordionItem>)
            }
        )
    }

    const renderTestimonials = (testimonials: ITestimonial[]) => {
        return testimonials.map(
            (testimonial, i) => <TestimonialCard
                title={testimonial.title}
                content={testimonial.content}
                img={testimonial.img}
                full_name={testimonial.full_name}
                role={testimonial.role}
                website_url={testimonial.website_url}
                key={i}/>
        )
    }


    return (
        <>
            <header className={`flex flex-col justify-center items-center w-full h-[100dvh] px-4`}>
                <h1 className={`text-4xl md:text-6xl font-semibold text-center leading-[130%] mb-10`}>A Digital Product
                    Studio <br></br> that will Work</h1>

                <div
                    className="border border-dimmed-foreground rounded-lg text-center text-dimmed-foreground bg-[hsla(var(--dimmed), 0.2)]  py-4 px-5 mb-10">
                    <p> For &nbsp;
                        {renderNiches(niches)}
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button className="btn-outline" variant="outline"><Link href={'/works'}>Our Works</Link></Button>
                    <Button className="btn-green"><Link href={`/contacts`}>Contact Us</Link></Button>
                </div>
            </header>

            <section
                className="relative w-full flex justify-center items-center  border border-y border-x-0 px-4 gap-4 py-10">
                <h4 className="py-3 px-6 xl:py-5 xl:px-8 absolute top-0 left-[40%] md:left-[50%] translate-x-[-25%] md:translate-x-[-50%] translate-y-[-50%] rounded-full border border-[hsl(var(--grey-15)) bg-primary z-10 text-sm xl:text-lg text-center]">Trusted
                    By 250+ Companies</h4>
                <div className="grid lg:grid-flow-col grid-cols-2 lg:grid-cols-5 items-center w-full max-w-7xl">
                    {renderCompanies(companies)}
                </div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 gap-4">
                <Banner title="Our Services"
                        content="Transform your brand with our innovative digital solutions that captivate and engage your audience."/>
                <div className="grid grid-cols-1 lg:grid-cols-3">{renderServices(services)}</div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 gap-4">
                <Banner title="Why Choose SquareUp?"
                        content="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."/>
                <div className="grid grid-cols-1 lg:grid-cols-2">{renderAboutCards(aboutContents)}</div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 gap-4 ">
                <Banner title="What our Clients say About us"
                        content="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"/>
                <div className="grid grid-cols-1 lg:grid-cols-2">{renderTestimonials(testimonials)}</div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 gap-4 ">
                <Banner title="Frequently Asked Questions"
                        content="Still you have any questions? Contact our Team via hello@squareup.com"/>
                <Accordion type="single" collapsible
                           className="w-full grid grid-cols-1 lg:grid-cols-2 lg:py-14">
                    {renderFAQs(faqs)}
                </Accordion>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 gap-4">
                <Banner title="Thank you for your Interest in SquareUp."
                        content="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                        hasLogo={true}
                        btn={<Button className="btn-green"><Link href={`/contacts`}>Start Project</Link></Button>}/>
                <div className="w-full border-x flex justify-center">
                    <ContactForm></ContactForm>
                </div>
            </section>
        </>
    );
}
