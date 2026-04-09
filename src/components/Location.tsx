import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Location: React.FC = () => {
  const { t } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle submission
  }

  // Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d77.7144!3d8.6631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04135e02b0b1ad%3A0x6c07a1ea1a8d3f5e!2sKenbridge%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t('nav.location')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Visit Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left: Get In Touch (Green Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary text-primary-foreground p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl font-bold mb-4 text-white">Get In Touch!</h2>
              <p className="text-white/80 mb-8">
                {t('contact.subtitle') || "Fill out the form below and we will get back to you as soon as possible."}
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-offset-0 focus-visible:ring-white/30"
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-offset-0 focus-visible:ring-white/30"
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message..."
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px] rounded-xl focus-visible:ring-offset-0 focus-visible:ring-white/30 resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-lg">
                    Submit Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Right: Location Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex-1 bg-card rounded-[2.5rem] shadow-lg border border-border/50 overflow-hidden min-h-[400px] relative group">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
                <p className="font-semibold text-foreground">Our Location</p>
                <p className="text-sm text-muted-foreground">{t('location.address')}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-[2rem] p-8 border border-border/50 shadow-sm flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold">Social Media</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/16pM28PUJe/?mibextid=wwXIfr" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/daya_infraa?igsh=MWh4NHRvcDZiN2xncg==" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-110">
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-2 hover:border-primary hover:text-primary transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
