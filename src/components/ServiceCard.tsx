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


interface IServiceCardProps {
    icon: string | StaticImport,
    slug: string,
    title: string,
    content: string
}


const ServiceCard = ({icon, slug, title, content} : IServiceCardProps) => {
    return (
        <Card className={'bg-primary text-primary-foreground rounded-none'}>
            <CardHeader className={`mb-0 flex flex-row lg:flex-col gap-3.5 lg:gap-7 xl:gap-10 items-center lg:items-start py-8 lg:py-10 xl:py-12`}>
                <Image src={icon} alt={title} width={60} height={60} className={`w-[58px] lg:w-[70px] xl:w-[88px]`} />
                <CardTitle>{ title }</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={'text-secondary-foreground  lg:mt-3.5 xl:mt-5'}>{content}</p>
            </CardContent>
            <CardFooter className={`lg:mt-20`}>
                <Button className={`border w-full py-3.5`}>
                    <Link href={`/services/${slug}/`}>Learn more</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard;