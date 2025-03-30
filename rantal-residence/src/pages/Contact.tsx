
import { useState } from 'react';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Instagram, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Wiadomość została wysłana", {
        description: "Dziękujemy za wiadomość. Skontaktujemy się z Tobą wkrótce.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
          <p className="text-muted-foreground mb-10">
            Masz pytania? Skontaktuj się z nami bezpośrednio lub skorzystaj z formularza kontaktowego.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-beige-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-beige-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Numer telefonu
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-beige-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Wiadomość *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="resize-none bg-beige-light"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Wysyłanie..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" /> Wyślij wiadomość
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-beige p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Informacje kontaktowe</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@apartament.pl" className="text-muted-foreground hover:text-primary transition-colors">
                        info@apartament.pl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-colors">
                        +48 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Adres</p>
                      <p className="text-muted-foreground">ul. Przykładowa 123, 00-001 Warszawa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-beige p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Social media i rezerwacje</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @luksusowy_apartament
                    </a>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://www.booking.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Rezerwuj przez Booking.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-beige-dark/20">
                <h2 className="text-xl font-semibold mb-4">Godziny odpowiedzi</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Poniedziałek - Piątek:</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota:</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela:</span>
                    <span>10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
