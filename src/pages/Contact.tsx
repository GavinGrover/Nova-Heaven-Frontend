import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/images/exterior-main.jpg';

const Contact: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground animate-in fade-in duration-500">
            <Header />

            <main className="pt-24 pb-16">

                {/* 1. Hero Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                                Contact <span className="text-primary italic">Us</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
                                We'd love to hear from you. Reach out to us for bookings, inquiries, or just to say hello.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-[3rem] rounded-tr-[8rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                <img src={heroImage} alt="Contact Hero" className="w-full h-full object-cover" />
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full -z-10 blur-xl opacity-60"></div>
                        </div>
                    </div>
                </section>

                {/* 2. Contact Information Grid */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold mb-4">Contact Information</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="flex flex-col items-center text-center p-6 bg-card rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                            <p className="text-muted-foreground">+91 93635 90700</p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center p-6 bg-card rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                            <p className="text-muted-foreground">hello@novaheavenstay.com</p>
                        </div>

                        {/* Locations */}
                        <div className="flex flex-col items-center text-center p-6 bg-card rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Location</h3>
                            <p className="text-muted-foreground">Alipur, Outskirts of North Delhi</p>
                        </div>
                    </div>
                </section>

                {/* 3. Location & Social Media */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="bg-card rounded-[2.5rem] p-4 md:p-8 shadow-lg border border-border/50">
                        <div className="text-center mb-8">
                            <h2 className="font-display text-3xl font-bold mb-2">Our Location</h2>
                            <p className="text-muted-foreground">Visit us at our modern stay on the outskirts of Delhi.</p>
                        </div>

                        <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative shadow-inner border border-border/30 mb-8">
                            <iframe
                                src="https://www.google.com/maps?q=Alipur+Delhi+110036&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-6">
                            <h3 className="font-display text-2xl font-bold">Connect With Us</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/16pM28PUJe/?mibextid=wwXIfr" },
                                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/daya_infraa?igsh=MWh4NHRvcDZiN2xncg==" }
                                ].map((item, idx) => (
                                    <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-110">
                                        <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-2 hover:border-primary hover:text-primary transition-colors">
                                            <item.icon className="w-6 h-6" />
                                            <span className="sr-only">{item.label}</span>
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div >
    );
};

export default Contact;
