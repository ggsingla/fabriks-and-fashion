'use client'
import { ArrowRightIcon } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current) {
      const nextInput = formRef.current.querySelector('input[name="_next"]') as HTMLInputElement
      if (nextInput) {
        nextInput.value = `${window.location.origin}/thank-you`
      }
    }
  }, [])

  return (
    <>
      <div className='relative bg-background flex items-center overflow-hidden h-full'>
        <div className='absolute top-0 right-0 bottom-0 w-full lg:w-1/2' />
        <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0'>
            <div className='lg:px-14 space-y-6'>
              <div className='w-full'>
                <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4 '>
                  Schedule a Consultation
                </h2>
                <h3 className='font-sans text-lg md:leading-relaxed text-muted-foreground font-light'>
                  Experience the art of bespoke fashion. Share your vision with us, and let&apos;s create something extraordinary together.
                </h3>
              </div>
            </div>

            <div className='flex items-center lg:px-14 xl:px-20'>
              <form ref={formRef} className='space-y-6 w-full' action="https://formsubmit.co/ggsingla777@gmail.com" method="POST">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_replyto" value="email" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Fabriks & Fashion! We have received your message and will get back to you shortly. Here's a copy of your submission for your records." />
                <input type="hidden" name="_subject" value="New Consultation Request - Fabriks & Fashion" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="" />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-1'>
                    <label htmlFor='firstname'>
                      First Name
                    </label>
                    <input
                      className='block placeholder-muted-foreground px-5 py-3 leading-6 w-full ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                      type='text'
                      id='firstname'
                      name='firstname'
                      placeholder='John'
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="[A-Za-z\s]+"
                      title="Please enter a valid first name (letters only)"
                    />
                  </div>
                  <div className='space-y-1'>
                    <label htmlFor='lastname'>
                      Last Name
                    </label>
                    <input
                      className='block placeholder-muted-foreground px-5 py-3 leading-6 w-full ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                      type='text'
                      id='lastname'
                      name='lastname'
                      placeholder='Doe'
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="[A-Za-z\s]+"
                      title="Please enter a valid last name (letters only)"
                    />
                  </div>
                </div>
                <div className='space-y-1'>
                  <label htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='block placeholder-muted-foreground px-5 py-3 leading-6 w-full ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='mail@company.com'
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='phone'>
                    Mobile
                  </label>
                  <input
                    className='block placeholder-muted-foreground px-5 py-3 leading-6 w-full ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='+91 9000000000'
                    required
                    pattern="^(\+91[\s-]?)?[0-9]{10}$"
                    title="Please enter a valid 10-digit Indian phone number"
                  />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='message'>
                    Your Vision
                  </label>
                  <textarea
                    className='block ring-1 ring-stone-400 border-none placeholder-muted-foreground px-5 py-3 w-full focus:ring focus:ring-amber-500 focus:ring-opacity-50 resize-none'
                    id='message'
                    name='message'
                    rows={6}
                    defaultValue={''}
                    placeholder='Tell us about your style aspirations and preferences...'
                    maxLength={500}
                  />
                </div>
                <button
                  type='submit'
                  className='font-serif inline-flex justify-center items-center space-x-2 font-semibold rounded-none px-6 py-3 leading-6 ring-1 ring-black ring-opacity-40 hover:ring-opacity-100 border-none text-foreground text-lg transition-all'>
                  <span>Begin Your Journey</span>
                  <ArrowRightIcon size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm