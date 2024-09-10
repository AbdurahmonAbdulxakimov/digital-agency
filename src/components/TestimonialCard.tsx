import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";


interface ITestimonialCardProps {
    title: string,
    content: string,

    img: string | StaticImport,
    full_name: string,
    role: string,
    website_url?: string,
}


const ServiceCard = ({title, content, img, full_name, role, website_url}: ITestimonialCardProps) => {
    return (
        <Card
            className={'bg-primary text-primary-foreground rounded-none flex flex-col justify-between py-10 lg:py-14 xl:py-20'}>
            <CardHeader className={`mb-0 flex flex-row gap-3.5 lg:gap-7 xl:gap-10 items-center`}>
                <CardTitle className={`text-[hsl(var(--green-80))] leading-normal`}>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={'text-secondary-foreground  lg:mt-3.5 xl:mt-5'}>{content}</p>
            </CardContent>
            <CardFooter>
                <Card
                    className="w-full flex justify-between items-center bg-primary text-primary-foreground p-5 gap-2.5 lg:gap-3 xl:gap-4">
                    <Image src={img} alt={title} width={40} height={40} className={`w-[40px] lg:w-[50px] xl:w-[60px]`}/>
                    <div className={`flex-grow`}>
                        <CardTitle className={'text-base xl:text-xl'}>{full_name}</CardTitle>
                        <CardDescription
                            className={`text-secondary-foreground text-sm xl:text-lg`}>{role}</CardDescription>
                    </div>
                    {
                        website_url !== undefined &&
                        <Button
                            className={`hidden lg:flex lg:justify-center lg:items-center lg:py-3.5 lg:px-4 xl:py-4 xl:px-5 bg-secondary hover:border hover:border-secondary`}><Link
                            href={website_url}>Open
                            Website</Link></Button>
                    }
                </Card>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard;