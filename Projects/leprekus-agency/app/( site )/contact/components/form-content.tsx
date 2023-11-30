'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import _, { initial } from 'lodash'
import toast from 'react-hot-toast'

const FormSchema = z.object({
  name: z.string().min(1, { message: 'Please type in your name' }),
  email: z.string().email(),
  description: z.string().optional(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please choose at least one item.",
  }),
})

type FormProps = z.infer<typeof FormSchema>
export default function FormContent() {

  const [isLoading, setIsLoading] = useState(false)
  const initialState = {
    name: '',
    email: '',
    description: '',
    services: [ ],
  }

  const form = useForm<FormProps>({
    resolver: zodResolver(FormSchema),
    defaultValues: initialState,
  })

  const services = [
    {
      id: "api-development",
      label: "Api Development",
    },
    {
      id: "web-design",
      label: "Web Design",
    },
    {
      id: "third-party-integration",
      label: "Third Party Integrations",
    },
    {
      id: "web-app",
      label: "Web Application",
    },
    {
      id: "custom",
      label: "Custom",
    },
    {
      id: "consulting",
      label: "Strategy & consultinb",
    },
  ] as const

  const onSubmit = (values: FormProps) => {
    console.log(values)
    toast.success('Sent! We\'ll get in touch soon')
  }
  return (
    <Form { ...form }>
      <form onSubmit={form.handleSubmit(onSubmit)}>


        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem
              className='space-y-4 py-4'
              
            >
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='John Doe'
                  { ...field }
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem
              className='space-y-4 py-4'>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='sample@email.com'
                  { ...field }
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem
              className='space-y-4 py-4'>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder='notes'
                  { ...field }
                />
              </FormControl>
              <FormDescription>
                Tell us a little about the project...
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />


        {services.map(service =>(
          <FormField
            key={service.id}
            control={form.control}
            name='services'
            render={({ field }) => (
              <FormItem
                key={service.id}
                className='flex flex-row items-start space-x-3 space-y-0'
              >
                <FormControl>
                  <Checkbox
                    checked={field.value.includes(service.id)}
                    onCheckedChange={(checked) => (
                      checked ?
                      field.onChange([ ...field.value, service.id]) :
                      field.onChange(
                        field.value.filter(
                          value => value !== service.id
                        )
                      )
                    )}
                  />
                
                </FormControl>
                <FormLabel>{ service.label }</FormLabel>
              </FormItem>
            )}
          />
        ))}


        

      <Button 
      type='submit' 
      disabled={
        _.isEqual(form.getValues(), initialState) ||
        isLoading
      }
      className='my-4 w-full '
      >
        Send
      </Button>
      </form>
    </Form>
  )
}