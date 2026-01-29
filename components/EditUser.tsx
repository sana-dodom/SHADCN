"use client"

import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"

const formSchema = z.object({
    username: z.string()
        .min(2, { message: "Username must be at least 2 characters!" })
        .max(50),
    email: z.email({ message: "Invalid email adress!" }),
    phone: z.string()
        .min(10)
        .max(15),
    location: z.string()
        .min(2),
    role: z.enum(["admin", "user"]),
})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "Mohsine EL Mernissi",
            email: "elmernissi@gmx.de",
            phone: "+212 661 56 78 90",
            location: "Casablanca",
            role: "admin",
        },
    })
    return (
        <div className=''>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="mb-4">Edit User</SheetTitle>
                    <SheetDescription asChild>
                        <Form {...form}>
                            <form className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={
                                        ({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public username
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }

                                >

                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={
                                        ({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Only the admin can see your email.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }

                                >
                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={
                                        ({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Only the admin can see your number.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }

                                >

                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={
                                        ({ field }) => (
                                            <FormItem>
                                                <FormLabel>Location</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is the public location.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }

                                >

                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={
                                        ({ field }) => (
                                            <FormItem>
                                                <FormLabel>Role</FormLabel>
                                                <FormControl>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Role" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="admin">Admin</SelectItem>
                                                            <SelectItem value="user">User</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormDescription>
                                                    Only verified users can be admin.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }

                                >

                                </FormField>

                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </div>
    )
}

export default EditUser


