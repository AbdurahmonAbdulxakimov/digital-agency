"use client";

import React from 'react';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Textarea} from "@/components/ui/textarea";
import {Slider} from "@mui/material";


const topics = [
    {id: "web_design", label: "Web Design"},
    {id: "collaboration", label: "Collaboration"},
    {id: "mobile_app_design", label: "Mobile App Design"},
    {id: "others", label: "Others"},
]

const formSchema = z.object({
    full_name: z.string().min(2).max(50),
    email: z.string(),
    topics: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
    budget: z.array(z.number().min(100).max(10000)),
    msg: z.string()
})

const ContactForm = () => {
    const [budget, setBudget] = React.useState([1000, 5000])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            topics: ["web_design"],
            budget: [1000, 5000],
            msg: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full max-w-4xl mx-auto p-6 lg:p-14 xl:p-20 flex flex-col gap-7 border-x">
                <div className={`w-full flex flex-col lg:flex-row gap-7`}>
                    <FormField
                        control={form.control}
                        name="full_name"
                        render={({field}) => (
                            <FormItem className={`w-full py-5 px-6 rounded-md border flex flex-col gap-3`}>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className={`focus-visible:ring-0 rounded-none border-0 border-b border-border p-0 pb-1.5 h-fit text-base leading-normal`}
                                        placeholder="Type here" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem className={`w-full py-5 px-6 rounded-md border flex flex-col gap-3`}>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className={`focus-visible:ring-0 rounded-none border-0 border-b border-border p-0 pb-1.5 h-fit text-base leading-normal`}
                                        placeholder="Type here" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="topics"
                    render={() => (
                        <FormItem className={`w-full py-5 px-6 rounded-md border flex flex-col gap-7`}>
                            <div>
                                <FormLabel className="text-base">Why are you contacting us?</FormLabel>
                            </div>
                            <div className={`w-full flex flex-col gap-y-5`}>
                                {topics.map((topic) => (
                                    <FormField
                                        key={topic.id}
                                        control={form.control}
                                        name="topics"
                                        render={({field}) => {
                                            return (
                                                <FormItem
                                                    key={topic.id}
                                                    className="flex flex-row items-center w-full gap-x-2.5 m-0"
                                                >
                                                    <FormControl
                                                        className={`w-7 h-7 border border-border rounded-md flex justify-center items-center
                                                        !text-[hsl(var(--green-50))]`}
                                                    >
                                                        <Checkbox
                                                            className={`!p-2`}
                                                            checked={field.value?.includes(topic.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, topic.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== topic.id
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel
                                                        className="font-normal leading-normal flex items-center !m-0">
                                                        {topic.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="budget"
                    render={({field}) => (
                        <FormItem className={`w-full py-5 px-6 rounded-md border flex flex-col gap-3 pb-12`}>
                            <div className={`flex flex-col gap-y-1.5 lg:gap-y-3.5`}>
                                <FormLabel>Your Budget</FormLabel>
                                <FormDescription>Slide to indicate your budget range</FormDescription>
                            </div>
                            <FormControl>
                                <Slider
                                    getAriaLabel={() => 'Budget'}
                                    valueLabelDisplay="auto"
                                    valueLabelFormat={value => "$" + value}
                                    min={100}
                                    max={10_000}
                                    step={50}
                                    className={`
                                        text-secondary [&>.MuiSlider-rail]:text-border [&>.MuiSlider-track]:text-[hsl(var(--green-50))] 
                                        [&>.MuiSlider-thumb]:text-[hsl(var(--green-50))] [&>.MuiSlider-thumb]:w-5 [&>.MuiSlider-thumb]:h-5 [&>.MuiSlider-thumb]:border-4 
                                        [&>.MuiSlider-thumb]:hover:!shadow-normal
                                        [&>.MuiSlider-thumb>.MuiSlider-valueLabel]:!w-fit [&>.MuiSlider-thumb>.MuiSlider-valueLabel]:!p-0 [&>.MuiSlider-thumb>.MuiSlider-valueLabel]:!bg-primary [&>.MuiSlider-thumb>.MuiSlider-valueLabel]:!font-semibold [&>.MuiSlider-thumb>.MuiSlider-valueLabel]:!text-lg [&>.MuiSlider-thumb>.MuiSlider-valueLabelOpen]:!translate-y-full
                                    `}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="msg"
                    render={({field}) => (
                        <FormItem className={`w-full py-5 px-6 rounded-md border flex flex-col gap-3`}>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    className={`min-h-fit focus-visible:ring-0 rounded-none border-0 border-b border-border p-0 pb-1.5 h-fit text-base leading-normal`}
                                    placeholder="Type here" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit"
                        className={`btn-green w-full lg:w-fit lg:py-3.5 lg:px-9 xl:py-5 xl:px-11 xl:text-lg lg:text-sm font-medium mx-auto`}>Submit</Button>
            </form>
        </Form>
    );
};

export default ContactForm;