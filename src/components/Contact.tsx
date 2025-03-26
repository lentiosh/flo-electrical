
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="highlight-chip mb-4">Contact Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Discuss Your <span className="text-electric-600">Electrical Needs</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're planning a new installation or need emergency repairs, 
                our team is ready to provide expert electrical services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full p-3 bg-electric-100 text-electric-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a href="tel:01483732423" className="text-electric-600 hover:underline">01483 732423</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full p-3 bg-electric-100 text-electric-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a href="mailto:info@floelectrical.co.uk" className="text-electric-600 hover:underline">info@floelectrical.co.uk</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full p-3 bg-electric-100 text-electric-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Service Area</h3>
                  <p>London and Surrey Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
