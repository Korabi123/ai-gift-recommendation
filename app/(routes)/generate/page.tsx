"use client";

import * as z  from "zod";
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "./components/navbar";
import { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  gender: z.string({
    required_error: "Select a gender."
  }),
  proffession: z.string().min(4, {
    message: "Proffession must be at least 4 characters"
  }),
})

const GeneratePage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "",
      proffession: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: `Give me a very creative gift for a ${values.gender} who works as a ${values.proffession} and without ANY other text than the gift itself`,
      };

      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/generate', {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();

    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh()
    }
  }

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <Navbar />
      <div className="py-40 px-8 md:flex md:h-full w-full md:justify-center md:py-16">
        <Tabs defaultValue="generate" className="w-full md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate Gift</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Generate</CardTitle>
                <CardDescription>
                  Generate you gift here. Click generate when you are
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Choose Gender..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="nonbinary">Non-Binary</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="proffession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What does your person work as?</FormLabel>
                          <FormControl>
                            <Input placeholder="Engineer" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your selected persons job.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Generate</Button>
                  </form>
                </Form>
                <br />
                <div>
                  <h1 className="text-2xl tracking-tight font-semibold">Generated Gift</h1>
                  <hr className="my-2" />
                  <div>
                    {isLoading && (
                      <div className="space-y-2 p-8 w-full">
                        <Skeleton className="h-2 w-[270px]" />
                        <Skeleton className="h-2 w-[220px]" />
                        <Skeleton className="h-2 w-[250px]" />
                        <Skeleton className="h-2 w-[50px]" />
                        <Skeleton className="h-2 w-[260px]" />
                        <Skeleton className="h-2 w-[200px]" />
                      </div>
                    )}
                    {messages.length === 0 && !isLoading && (
                      <p className="text-sm text-muted-foreground">No gift generated.</p>
                    )}
                    {messages.map((message) => (
                      <div
                        key={message.content}
                        className={cn(
                          "p-8 w-full flex items-start gap-x-8 rounded-lg",
                          message.role === 'user' ? 'hidden' : 'bg-muted'
                        )}
                      >
                        <p className="text-sm">
                          {message.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Change your settings here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="theme">Dark Mode</Label>
                  <div id="theme">
                    {resolvedTheme === 'dark' ? (
                      <Switch
                        defaultValue={"dark"}
                        defaultChecked
                        onClick={() =>
                          setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                      />
                    ): (
                      <Switch
                        defaultValue={"dark"}
                        onClick={() =>
                          setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                      />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default GeneratePage;
