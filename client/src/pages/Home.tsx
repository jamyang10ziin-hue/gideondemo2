import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type InsertInquiry, insertInquirySchema } from "@shared/schema";
import { motion } from "framer-motion";
import personalTrainingImg from "@assets/personal_training_1769995159191.jpeg";
import kidsBoxingImg from "@assets/kids_boxing_1769995170133.jpeg";
import womensBoxingImg from "@assets/IMG_1455_1769995179716.AVIF";
import competitiveImg from "@assets/competitive_1769995133368.jpeg";
import technicalImg from "@assets/technical_1769995147942.jpeg";
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
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
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

      {/* 2. TEAM SECTION */}
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

      {/* 3. PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-background relative">
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
                img: competitiveImg
              },
              {
                title: "TECHNICAL",
                desc: "Learn the basics of boxing techniques and fundamentals.",
                img: technicalImg
              },
              {
                title: "PERSONAL TRAINING",
                desc: "Individualized and private training sessions focused on your goals.",
                img: personalTrainingImg
              },
              {
                title: "KIDS BOXING",
                desc: "Teaches kids self-defense and delivers an excellent workout!",
                img: kidsBoxingImg
              },
              {
                title: "WOMENS BOXING",
                desc: "Womens Only class Led by female instructors",
                img: womensBoxingImg
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer"
              >
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
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

      {/* 4. MEMBERSHIP SECTION */}
      <section id="membership" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Membership" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "MONTHLY",
                details: [
                  { label: "ADULT", value: "$120" },
                  { label: "YOUTH/STUDENT", value: "$90" },
                  { label: "CHILDREN 7-12YRS", value: "$70" }
                ]
              },
              {
                title: "3 MONTHS",
                details: [
                  { label: "ADULT", value: "$320" },
                  { label: "YOUTH/STUDENT", value: "$240" }
                ]
              },
              {
                title: "6 MONTHS",
                details: [
                  { label: "ADULT", value: "$600" },
                  { label: "YOUTH/STUDENT", value: "$450" }
                ]
              },
              {
                title: "12 MONTHS",
                details: [
                  { label: "ADULT", value: "$1150" },
                  { label: "YOUTH/STUDENT", value: "$850" }
                ]
              },
              {
                title: "PERSONAL TRAINING",
                subtitle: "BY APPOINTMENT ONLY",
                details: [
                  { label: "1HR SESSION", value: "$75" },
                  { label: "WEEKLY SESSION", value: "$65" },
                  { label: "BI-WEEKLY SESSION", value: "$50" }
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-white/10 p-8 flex flex-col group hover:border-primary transition-all duration-300 shadow-2xl skew-x-[-2deg]"
              >
                <h3 className="text-3xl font-display font-bold text-white uppercase italic mb-2 group-hover:text-primary transition-colors text-center">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-primary text-xs font-bold tracking-widest text-center mb-6 uppercase">{item.subtitle}</p>
                )}
                <div className="flex-1 mt-4 space-y-4">
                  {item.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-gray-400 font-bold text-sm tracking-wider uppercase">{detail.label}</span>
                      <span className="text-primary font-display font-bold text-xl">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-8 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white rounded-none skew-x-[-10deg]">
                  <span className="skew-x-[10deg]">Join Now</span>
                </Button>
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
              { day: "MONDAY", classes: ["COMPETITIVE: 4:00PM - 6:00PM", "BOOT CAMP: 6:00PM - 6:45PM", "TECHNICAL: 7:00PM - 8:00PM"] },
              { day: "TUESDAY", classes: ["TECHNICAL: 12:00PM - 1:00PM", "COMPETITIVE: 4:00PM - 6:00PM", "KIDS CLASS: 6:00PM - 7:00PM", "TECHNICAL: 7:00PM - 8:00PM", "OPEN GYM: 8:00PM - 9:00PM"] },
              { day: "WEDNESDAY", classes: ["COMPETITIVE: 4:00PM - 6:00PM", "BOOT CAMP: 6:00PM - 6:45PM", "TECHNICAL: 7:00PM - 8:00PM"] },
              { day: "THURSDAY", classes: ["TECHNICAL: 12:00PM - 1:00PM", "COMPETITIVE: 4:00PM - 6:00PM", "KIDS CLASS: 6:00PM - 7:00PM", "TECHNICAL: 7:00PM - 8:00PM", "OPEN GYM: 8:00PM - 9:00PM"] },
              { day: "FRIDAY", classes: ["COMPETITIVE: 4:00PM - 6:00PM", "TECHNICAL: 6:00PM - 6:45PM"] },
              { day: "SATURDAY", classes: ["KIDS CLASS: 10:00AM - 11:00AM", "OPEN GYM: 11:00AM - 12:00PM"] }
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

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" centered />
          
          <div className="space-y-4">
            {[
              { q: "CAN I COME IN FOR A FREE TRIAL?", a: "YES, ALL PROSPECTIVE MEMBERS ARE WELCOME TO COME IN FOR ONE FREE TRIAL CLASS TO SEE IF OUR PROGRAMS ARE THE RIGHT FIT FOR YOU." },
              { q: "WHAT DO I NEED TO BRING?", a: "FOR YOUR FIRST CLASS, ALL YOU NEED IS COMFORTABLE GYM WEAR, CLEAN INDOOR SHOES (OR BOXING SHOES), AND A WATER BOTTLE. WE HAVE GLOVES AVAILABLE TO BORROW FOR YOUR FIRST FEW SESSIONS." },
              { q: "DO I NEED TO BE IN SHAPE TO START?", a: "NOT AT ALL. OUR PROGRAMS ARE DESIGNED TO HELP YOU GET IN SHAPE. WE HAVE MEMBERS OF ALL FITNESS LEVELS STARTING THEIR JOURNEY WITH US." },
              { q: "IS THERE AN AGE LIMIT?", a: "WE HAVE CLASSES FOR CHILDREN AS YOUNG AS 7 YEARS OLD. THERE IS NO UPPER AGE LIMIT—AS LONG AS YOU ARE MEDICALLY CLEARED FOR EXERCISE, YOU ARE WELCOME TO TRAIN." },
              { q: "DO YOU OFFER PRIVATE SESSIONS?", a: "YES, WE OFFER PERSONAL TRAINING SESSIONS FOR MORE INDIVIDUALIZED INSTRUCTION. THESE ARE BY APPOINTMENT ONLY." }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-white/10 p-6 group hover:border-primary transition-colors"
              >
                <h4 className="text-primary font-bold text-lg mb-2 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{faq.a}</p>
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
