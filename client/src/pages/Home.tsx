import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { type InsertInquiry } from "@shared/routes";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const { mutate, isPending } = useCreateInquiry();
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 z-10" />
          <img 
            src="https://static.wixstatic.com/media/f5c4b3_9d7951d7ae24486d97ec56ac83e5a10d~mv2.jpg/v1/crop/x_0,y_11,w_3000,h_1675/fill/w_717,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Front%20Image_edited.jpg"
            alt="Boxing Ring"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
            style={{ animation: 'pulse 20s infinite alternate' }}
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase italic leading-none tracking-tighter text-white drop-shadow-2xl mb-6"
          >
            Providing the East end of Toronto with the <span className="text-primary">highest level</span> of boxing
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-32 bg-primary mx-auto mb-8"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl font-light text-gray-200 uppercase tracking-widest mb-10"
          >
            Competitive • Fitness • Personal Training
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ScrollLink to="programs" smooth={true} duration={500}>
              <Button size="lg" className="bg-primary text-black hover:bg-white text-lg px-10 py-6 font-bold uppercase tracking-widest rounded-none skew-x-[-10deg] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                <span className="skew-x-[10deg]">Start Training</span>
              </Button>
            </ScrollLink>
          </motion.div>
        </div>
        
        {/* Diagonal Cut Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-background clip-diagonal-reverse z-20 translate-y-1"></div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 relative bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-8 leading-tight">
                More Than Just <span className="text-primary">Boxing</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light border-l-4 border-primary pl-6 py-2">
                "Gideon Boxing's focus on health lifestyle both in and out of the ring means we all have the ability to learn valuable life lessons that go far beyond just boxing."
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 z-0" />
                <img 
                  src="https://static.wixstatic.com/media/f5c4b3_4d834d50b2824d8d902edd013bea6bf6~mv2.jpg/v1/fit/w_827,h_640,q_90,enc_avif,quality_auto/f5c4b3_4d834d50b2824d8d902edd013bea6bf6~mv2.jpg"
                  alt="Training"
                  className="relative z-10 w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mt-12"
              >
                <div className="absolute inset-0 border-2 border-white translate-x-2 translate-y-2 z-0" />
                <img 
                  src="https://static.wixstatic.com/media/f5c4b3_66010c93da114287b102aba8b27562e7~mv2.jpg/v1/fit/w_964,h_640,q_90,enc_avif,quality_auto/f5c4b3_66010c93da114287b102aba8b27562e7~mv2.jpg"
                  alt="Coach Hunter"
                  className="relative z-10 w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-background relative">
        {/* Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/50 skew-x-[-12deg] z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Boxing Programs" 
            subtitle="Gideon Boxing Academy offers boxing for all levels of fitness. From beginners to amateurs to professional level athletes we have programs and instructors dedicated to delivering the highest quality training. Come in for a free trial."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "COMPETITIVE",
                desc: "Complete training schedule for competition.",
                img: "https://static.wixstatic.com/media/f5c4b3_8db18d5075024f72a45093fbc5bd5c39~mv2.jpg/v1/crop/x_1334,y_0,w_3331,h_4000/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0052_JPG.jpg"
              },
              {
                title: "TECHNICAL",
                desc: "Learn the basics of boxing techniques and fundamentals.",
                img: "https://static.wixstatic.com/media/f5c4b3_e462ebf0088248d7ba55192b53cd5302~mv2.jpg/v1/crop/x_764,y_0,w_3328,h_4000/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0881_JPG.jpg"
              },
              {
                title: "PERSONAL TRAINING",
                desc: "Individualized and private training sessions focused on your goals.",
                img: "https://static.wixstatic.com/media/f5c4b3_a694921f0b8146efa1759297d82c6e36~mv2.jpg/v1/crop/x_1828,y_0,w_3328,h_4000/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0828_JPG.jpg"
              },
              {
                title: "KIDS BOXING",
                desc: "Teaches kids self-defense and delivers an excellent workout!",
                img: "https://static.wixstatic.com/media/f5c4b3_7f0c5a8409694de7839752b082ccbf0d~mv2.png/v1/crop/x_0,y_200,w_3024,h_3631/fill/w_269,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5399_HEIC.png"
              },
              {
                title: "WOMENS BOXING",
                desc: "Womens Only class Led by female instructors",
                img: "https://static.wixstatic.com/media/f5c4b3_3421f149c0a84bc285a66261b1e308b5f002.jpg/v1/fill/w_298,h_529,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f5c4b3_3421f149c0a84bc285a66261b1e308b5f002.jpg"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer"
              >
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 border-l-4 border-transparent group-hover:border-primary transition-all duration-300">
                  <h3 className="text-3xl font-display font-bold text-white mb-2 italic group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-snug transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {program.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section id="membership" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Membership" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "1 Month",
                price: "$120",
                features: ["Unlimited Classes", "No Contract", "Full Gym Access"]
              },
              {
                title: "3 Months",
                price: "$330",
                features: ["Unlimited Classes", "Discounted Rate", "Full Gym Access", "Performance Tracking"]
              },
              {
                title: "6 Months",
                price: "$600",
                features: ["Unlimited Classes", "Best Value", "Full Gym Access", "1-on-1 Strategy Session"]
              },
              {
                title: "12 Months",
                price: "$1100",
                features: ["Unlimited Classes", "Annual Commitment", "Full Gym Access", "Free Academy Tee"]
              },
              {
                title: "Personal Training",
                price: "Custom",
                features: ["1-on-1 Coaching", "Custom Workout Plan", "Nutrition Guidance", "Flexible Scheduling"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-white/10 p-8 flex flex-col items-center text-center group hover:border-primary transition-all duration-300 shadow-2xl skew-x-[-2deg]"
              >
                <h3 className="text-2xl font-display font-bold text-white uppercase italic mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="text-4xl font-display font-bold text-primary mb-6">
                  {item.price}
                </div>
                <ul className="space-y-3 mb-8 text-gray-400 text-sm flex-1">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="uppercase tracking-widest">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-black font-bold uppercase tracking-widest hover:bg-white rounded-none skew-x-[-10deg]">
                  <span className="skew-x-[10deg]">Select Plan</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section id="team" className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Team Mighty" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'HORACE "The Mighty" HUNTER',
                role: "HEAD COACH",
                desc: "Pro debut 2010. Level 3 Technical coach. Established Gideon Boxing Academy 2014 and risen to be the strongest competitive boxing gym in Scarborough.",
                img: "https://static.wixstatic.com/media/f5c4b3_b67bad6e03c041fba319d27598d200e3~mv2.jpg/v1/crop/x_381,y_0,w_1112,h_1335/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0795_edited.jpg"
              },
              {
                name: 'BONNIE "WARRIOR QUEEN" HUNTER',
                role: "Assistant Coach | Professional Fighter",
                desc: "Pro debut 2021. Level 1 N.C.C.P certified coach. Over 60 fights, Silver Gloves, Bronze Gloves. Provincial Team female coach.",
                img: "https://static.wixstatic.com/media/f5c4b3_b3070b0945bc4728af41cf2314ed899c~mv2.jpg/v1/crop/x_0,y_72,w_1352,h_1623/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bonnie%20Pro_edited.jpg"
              },
              {
                name: 'MATHUSAN "Tiger" MAHINDAS',
                role: "Boxing Instructor | Professional Fighter",
                desc: "Pro debut 2022. Golden Gloves, Brampton Cup, Silver Gloves, State Games of America.",
                img: "https://static.wixstatic.com/media/f5c4b3_a33743f6353a4625bc66a97eeb7d3b49~mv2.jpg/v1/crop/x_178,y_4,w_3271,h_3931/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mathu1.jpg"
              },
              {
                name: 'CALVIN HO',
                role: "Boxing Instructor",
                desc: "Head Boxing Instructor 2015. Over 10 years teaching, mentoring, and coaching. Competed Amateur Level.",
                img: "https://static.wixstatic.com/media/f5c4b3_ad26568849954982bd53a7f7594c8cce~mv2.jpg/v1/crop/x_336,y_0,w_1280,h_1537/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0019_edited.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-white/5 hover:border-primary/50 transition-colors p-6 text-center group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-primary transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{member.role}</h4>
                <h3 className="text-xl font-display font-bold text-white mb-4 leading-tight">{member.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE SECTION */}
      <section id="schedule" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Program Schedule" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { day: "Monday", classes: ["4:00 PM - 5:30 PM: Competitive", "5:30 PM - 7:00 PM: Technical", "7:00 PM - 8:30 PM: Boxercise"] },
              { day: "Tuesday", classes: ["4:00 PM - 5:30 PM: Competitive", "5:30 PM - 7:00 PM: Technical", "7:00 PM - 8:30 PM: Kids Boxing"] },
              { day: "Wednesday", classes: ["4:00 PM - 5:30 PM: Competitive", "5:30 PM - 7:00 PM: Technical", "7:00 PM - 8:30 PM: Boxercise"] },
              { day: "Thursday", classes: ["4:00 PM - 5:30 PM: Competitive", "5:30 PM - 7:00 PM: Technical", "7:00 PM - 8:30 PM: Womens Only"] },
              { day: "Friday", classes: ["4:00 PM - 5:30 PM: Competitive", "5:30 PM - 7:00 PM: Open Gym"] },
              { day: "Saturday", classes: ["9:00 AM - 11:00 AM: All Levels"] }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-zinc-900 border-l-4 border-primary p-6 shadow-xl"
              >
                <h4 className="text-xl font-display font-bold text-white uppercase italic mb-4">{item.day}</h4>
                <ul className="space-y-2">
                  {item.classes.map((cls, cIndex) => (
                    <li key={cIndex} className="text-gray-400 text-sm font-medium border-b border-white/5 pb-2 last:border-0">{cls}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contact Us" centered />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Address</h4>
                  <p className="text-gray-400">21 Progress Ave Unit #6<br/>Scarborough, ON M1P 4S8</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Phone</h4>
                  <p className="text-gray-400">416-832-2477</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Email</h4>
                  <a href="mailto:gideonboxingacademy@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                    gideonboxingacademy@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-white font-bold uppercase mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=100054560195070" className="p-3 bg-zinc-800 hover:bg-blue-600 hover:text-white text-gray-400 transition-all rounded-full">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/gideonboxingacademy/" className="p-3 bg-zinc-800 hover:bg-pink-600 hover:text-white text-gray-400 transition-all rounded-full">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/gideonboxing" className="p-3 bg-zinc-800 hover:bg-sky-500 hover:text-white text-gray-400 transition-all rounded-full">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black p-8 border border-white/10 shadow-2xl">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">First Name</label>
                    <Input 
                      {...form.register("firstName")}
                      className="bg-zinc-900 border-zinc-800 focus:border-primary rounded-none h-12"
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Last Name</label>
                    <Input 
                      {...form.register("lastName")}
                      className="bg-zinc-900 border-zinc-800 focus:border-primary rounded-none h-12"
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email</label>
                  <Input 
                    type="email"
                    {...form.register("email")}
                    className="bg-zinc-900 border-zinc-800 focus:border-primary rounded-none h-12"
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Message</label>
                  <Textarea 
                    {...form.register("message")}
                    className="bg-zinc-900 border-zinc-800 focus:border-primary rounded-none min-h-[150px] resize-none"
                    placeholder="I'm interested in joining..." 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-none"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gideon Boxing Academy. All Rights Reserved.
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}
