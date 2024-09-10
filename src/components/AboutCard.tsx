import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";


interface IAboutCardProps {
    icon: string | StaticImport,
    title: string,
    content: string
}


const ServiceCard = ({icon, title, content} : IAboutCardProps) => {
    return (
        <Card className={'bg-primary text-primary-foreground rounded-none py-10 lg:py-14 xl:py-20'}>
            <CardHeader className={`mb-0 flex flex-row gap-3.5 lg:gap-7 xl:gap-10 items-center`}>
                <Image src={icon} alt={title} width={60} height={60} className={`w-[58px] lg:w-[70px] xl:w-[88px]`} />
                <CardTitle>{ title }</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={'text-secondary-foreground  lg:mt-3.5 xl:mt-5'}>{content}</p>
            </CardContent>
        </Card>
    )
}

export default ServiceCard;