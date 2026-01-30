import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: string[];
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi! How can I help you today?",
      options: ["Class Schedule", "Pricing", "Location", "Book a Trial"],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Thanks for your message. A team member will be with you shortly.",
      };

      if (text.toLowerCase().includes("schedule")) {
        botResponse.text = "Our schedule runs Monday through Saturday. Check out the 'Program Schedule' section on our homepage for detailed times!";
      } else if (text.toLowerCase().includes("pricing")) {
        botResponse.text = "We offer competitive rates for memberships and personal training. Please contact us directly or visit the gym for current pricing specials.";
      } else if (text.toLowerCase().includes("location")) {
        botResponse.text = "We are located at 21 Progress Ave Unit #6, Scarborough, ON M1P 4S8.";
      } else if (text.toLowerCase().includes("trial")) {
        botResponse.text = "We'd love to have you! You can come in for a free trial during any of our scheduled class times.";
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase leading-none">Gideon Support</h3>
                  <span className="text-xs opacity-90">Online</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-black/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto bg-zinc-900 p-4" ref={scrollRef}>
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-zinc-800 text-zinc-100 rounded-bl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                {messages[messages.length - 1]?.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {messages[messages.length - 1].options!.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSend(opt)}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-border bg-card p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputText);
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="rounded-full bg-zinc-800 border-zinc-700 text-white focus-visible:ring-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all duration-200"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </Button>
    </div>
  );
}
